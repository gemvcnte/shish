import React, { useState } from "react";
import AdminNav from "@/components/AdminNavbar";
import axios from "axios";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IconNews, IconPlus, IconMinus } from "@tabler/icons-react";
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

import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { IconDots, IconUserEdit, IconHttpDelete } from "@tabler/icons-react";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const createAdmin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createAdmin",
        {
          fullName,
          emailAddress,
          password,
        },
      );

      console.log(response.data.admins);
    } catch (err) {
      console.error(err);
    }
  };

  axios
    .get("http://localhost:5000/api/getAllAdmins")
    .then((response) => {
      if (Array.isArray(response.data.admins)) {
        setAdmins(response.data.admins);
      } else {
        console.error("error fetching data");
      }
    })
    .catch((error) => {
      console.error("error", error);
    });

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
      <div className="w-screen flex justify-end px-5 pt-10 pb-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Admin</Button>
          </DialogTrigger>
          <DialogContent className="min-h-[500px] sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Creat an admin</DialogTitle>
              <DialogDescription>
                Click <span className="font-bold">Continue</span> to create.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullName" className="italic text-right">
                  Full Name:
                </Label>
                <Input
                  placeholder="Ex. Pola Marzan"
                  id="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="emailAddress" className="text-right italic">
                  Email Address:
                </Label>
                <Input
                  type="email"
                  placeholder="Ex. polamarzan@gmail.com"
                  id="emailAddress"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  value={emailAddress}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right italic">
                  Password:
                </Label>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={createAdmin} type="submit">
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="py-10 px-5">
        {admins.length === 0 ? (
          <p className="text-center text-gray-500">No Admins Yet</p>
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

export default Admins;
