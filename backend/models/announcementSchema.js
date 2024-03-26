const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
    default: "admin",
  },
});

const Announcement = mongoose.model("announcements", announcementSchema);

module.exports = { Announcement };
