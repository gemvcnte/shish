import React, { useState } from "react";
import AdminNav from "@/components/AdminNavbar";
import axios from "axios";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableHeader,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  axios
    .get("http://localhost:5000/api/getAllAnnouncements")
    .then((response) => {
      if (Array.isArray(response.data.announcements)) {
        setAnnouncements(response.data.announcements);
      } else {
        console.error("Error fetching announcements: ", response.data);
      }
    })
    .catch((error) => {
      console.error("Error fetching announcements", error);
    });

  const createAnnouncement = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createAnnouncement",
        { title, description },
      );

      console.log(response.data.announcement);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="w-screen flex justify-end px-5 pt-10 pb-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Announcement</Button>
          </DialogTrigger>
          <DialogContent className="min-h-[500px] sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Announcement</DialogTitle>
              <DialogDescription>
                Click post when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="italic text-right">
                  Title:
                </Label>
                <Input
                  placeholder="Title of the Post"
                  id="title"
                  maxLength={50}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right italic">
                  Description:
                </Label>
                <Input
                  placeholder="Description of the post"
                  maxLength={50}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={createAnnouncement} type="submit">
                Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {/* <Separator /> */}
      <div className="py-36 px-5">
        {announcements.length === 0 ? (
          <p className="text-center italic text-gray-500">
            No further announcements
          </p>
        ) : (
          <div>
            <Table>
              <TableCaption>List of Announcements</TableCaption>
              <TableHeader>
                <TableRow>
                  {" "}
                  <TableHead className="font-bold text-gray-700">
                    Announcement ID
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Title
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Description
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Posted By
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Actions
                  </TableHead>
                  ;
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcements.map((announcement) => (
                  <TableRow key={announcement._id}>
                    <TableCell className="italic text-gray-500">
                      {announcement._id}
                    </TableCell>
                    <TableCell className="italic text-gray-500">
                      {announcement.title}
                    </TableCell>
                    <TableCell className="italic text-gray-500">
                      {announcement.description}
                    </TableCell>
                    <TableCell className="italic text-gray-500">
                      {announcement.postedBy}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      <Separator />
      <div></div>
    </div>
  );
};

export default Announcements;
