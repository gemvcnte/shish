const { Admin } = require("../models/adminSchema");
const { Announcement } = require("../models/announcementSchema");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const createAdmin = expressAsyncHandler(async (req, res) => {
  try {
    const { fullName, emailAddress, password } = req.body;

    const existingAdmin = await Admin.findOne({ emailAddress });

    if (existingAdmin) {
      res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      fullName,
      emailAddress,
      password: hashedPassword,
    });
    await admin.save();

    // res.status(201).json({ message: "Admin has been created.", admin });
    res.status(201).json({ admin });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

const getAllAdmins = expressAsyncHandler(async (req, res) => {
  try {
    const admins = await Admin.find();

    if (!admins) {
      res.status(404).json({ message: "No admins" });
    }

    res.status(200).json({ admins });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

const deleteAdmin = expressAsyncHandler(async (req, res) => {
  try {
    const { adminId } = req.params;

    const deletedAdmin = await Admin.findOneAndDelete(adminId);

    if (!deletedAdmin) {
      res.status(404).json({ message: "Admin has already been deleted" });
    }

    res.status(200).json({ message: "Admin deleted." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

// const updateAdmin = expressAsyncHandler(async (req, res) => {
//   try {
//   } catch (err) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error. Please try again later." });
//   }
// });
//
// const deleteAdmin = expressAsyncHandler(async (req, res) => {
//   try {
//   } catch (err) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error. Please try again later." });
//   }
// });
//
const createAnnouncement = expressAsyncHandler(async (req, res) => {
  try {
    const { title, description, postedBy } = req.body;

    const existingAnnouncement = await Announcement.find({ title });

    if (existingAnnouncement) {
      res
        .status(400)
        .json({ message: "Announcement has already been posted." });
    }

    const announcement = new Announcement({
      title,
      description,
      postedBy: "admin",
    });

    await announcement.save();

    // res.status(201).json({ message: "Announcement has been saved" });
    res.status(201).json({ announcement });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

const getAllAnnouncements = expressAsyncHandler(async (req, res) => {
  try {
    const announcements = await Announcement.find();

    if (!announcements) {
      return res.status(404).json({ message: "No announcements yet." });
    }

    return res.status(200).json({ announcements });
  } catch (err) {
    console.error(err);

    res
      .status(500)
      .json({ message: "Internal server error. Please try againa later." });
  }
});
//
// const updateAnnouncement = expressAsyncHandler(async (req, res) => {
//   try {
//   } catch (err) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error. Please try again later." });
//   }
// });
//
const deleteAnnouncement = expressAsyncHandler(async (req, res) => {
  try {
    const { announcementId, title } = req.params;

    const deleteAnnouncement =
      await Announcement.findOneAndDelete(announcementId);

    if (!deleteAnnouncement) {
      res.status(404).json({
        message: "The announcment has been deleted or not been posted.",
      });
    }
    res.status(200).json({ message: "Announcement has been deleted." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

const totalAdminAnalytics = expressAsyncHandler(async (req, res) => {
  try {
    const totalAdminsData = await Admin.countDocuments({});
    res.json({ totalAdminsData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error. " });
  }
});

const totalPostsOfAdminAnalytics = expressAsyncHandler(async (req, res) => {
  try {
    const totalAnnouncement = await Announcement.countDocuments({});
    res.json({ totalAnnouncement });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createAdmin,
  getAllAdmins,
  deleteAdmin,
  createAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
  totalAdminAnalytics,
  totalPostsOfAdminAnalytics,
};
