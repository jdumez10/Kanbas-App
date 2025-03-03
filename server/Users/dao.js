import model from "./model.js";

export const createUser = (user) => model.create(user);
export const findUserByUsername = (username) => model.findOne({ username });

// Other functions
export const findUserByCredentials = (username, password) => model.findOne({ username, password });
export const findAllUsers = () => model.find();
export const findUsersByRole = (role) => model.find({ role: role });
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};
export const findUserById = (userId) => model.findById(userId);

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
