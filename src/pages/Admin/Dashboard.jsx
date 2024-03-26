import React, { useEffect, useState } from "react";
import AdminNav from "@/components/AdminNavbar";
import axios from "axios";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { IconDots, IconUserEdit, IconHttpDelete } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAllAdmins")
      .then((response) => {
        if (Array.isArray(response.data.admins)) {
          setAdmins(response.data.admins);
        } else {
          console.error("Admins data not in expected format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching admins:", error);
      });
  }, []);

  const deleteUser = async (adminId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/${adminId}`);
      // Update admins state or refresh data as needed
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="pt-5 pb-28 px-5">
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
      <div className="py-10 px-5">
        {admins.length === 0 ? (
          <p className="text-center italic text-gray-500">No Admins Yet</p>
        ) : (
          <div className="">
            <Table>
              <TableCaption>List of Admins</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-gray-700">
                    Admin ID
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Full Name
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Email Address
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin._id}>
                    <TableCell className="text-gray-500 italic">
                      {admin._id}
                    </TableCell>
                    <TableCell className="text-gray-500 italic">
                      {admin.fullName}
                    </TableCell>
                    <TableCell className="text-gray-500 italic">
                      {admin.emailAddress}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            className="bg-transparent"
                            variant="secondary"
                          >
                            <IconDots />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[w-32]">
                          <DropdownMenuLabel>
                            {admin.fullName}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem className="gap-5">
                              <IconUserEdit />
                              <span>Edit User</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="gap-5"
                              closeOnClick={false}
                            >
                              <IconHttpDelete />
                              <AlertDialog
                                open={isOpen}
                                onOpenChange={setIsOpen}
                              >
                                <AlertDialogTrigger
                                  onClick={() => {
                                    setIsOpen(!isOpen);
                                  }}
                                >
                                  Delete User
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete this user?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogAction
                                      onPress={() => deleteUser(admin._id)}
                                    >
                                      Delete
                                    </AlertDialogAction>
                                    <AlertDialogAction as="button">
                                      Cancel
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
