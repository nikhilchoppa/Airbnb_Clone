
const bcypt = require("bcrypt");
const joi = require("joi");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");

// This function handles updating a user's "selected" list. It first checks if the user exists,
// then checks if the specific item is already in the user's "selected" list
const updatelist = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findById(id);

    if (!user)
      return res
        .status(400)
        .json({ status: "Failed", message: "User not exits" });

    // let newL=user.selected.filter((each)=>  each===req.body.selected._id )
    let updateuser = user;
    let result = "updated";
    if (user.selected.indexOf(req.body.selected._id) === -1) {
      updateuser = await User.findByIdAndUpdate(
        { _id: id },
        {
          $push: { selected: req.body.selected._id },
        },
        { new: true }
        );
      } else result = "notupdated";
      const { name, email, contact, isUser, selected, _id, profilePic } = updateuser;
    res
      .status(200)
      .json({ status: "completed", message: result, data: { name, email, contact, isUser, selected, _id, profilePic } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

// This function is very similar to `updatelist`,
// but instead of adding an item to the "selected" list, it removes an item from it.
const dellist = async (req, res) => {
  let { id } = req.params;

  try {
    let user = await User.findById(id);

    if (!user)
      return res
        .status(400)
        .json({ status: "Failed", message: "User not exits" });

    let updateuser = user;
    if (user.selected.indexOf(req.body.selected) !== -1) {
      updateuser = await User.findByIdAndUpdate(
        { _id: id },
        {
          $pull: { selected: req.body.selected },
        },
        { new: true }
      );
    }
    const { name, email, contact, isUser, selected, _id, profilePic } = updateuser;
    res
      .status(200)
      .json({ status: "completed", message: "updated....", data:{ name, email, contact, isUser, selected, _id, profilePic } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

// This function simply returns a single user's data by their ID.
// It fetches the user using their ID and then returns the user's data.
const singleuser = async (req, res) => {
  const { id } = req.params;

  try {
    const prop = await User.findById(id);

    res
      .status(200)
      .json({ status: "completed", message: "single user is..", data: prop });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};
module.exports = { updatelist, singleuser, dellist };