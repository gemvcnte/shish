import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    emailAddress: "",
    password: "",
  });

  const { emailAddress, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );

      const { success, message, token } = data;

      if (success) {
        // Store the token in localStorage
        localStorage.setItem(
          "8KsJstd5kWSjIHp8K7IFCv39vxyBb9Jx3EnuUy3ACj8=",
          token,
        );
        handleSuccess(message);
        navigate("/admin/dashboard");
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Login failed");
    }

    setInputValue({
      emailAddress: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center min-h-screen px-4 sm:px-6 bg-gray-100 ">
      <div className="w-full max-w-md mx-auto space-y-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email and password to continue
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email Address"
                required
                type="email"
                name="emailAddress"
                value={emailAddress}
                onChange={handleOnChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                required
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="cursor-default text-center text-sm space-x-1">
          <p className="text-gray-500 dark:text-gray-400">
            Don't have an account?
          </p>
          <p className="pt-2 underline">Contact a nearby admin</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
