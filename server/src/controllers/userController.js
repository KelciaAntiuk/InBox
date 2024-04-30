const userModels = require('../models/userModels');

const getAll = async (_req,res) =>{
  const user = await userModels.getAll();
  return res.status(200).json(user);
};

const createUser = async (req, res) =>{
  const createdUser = await userModels.createUser(req.body);
  return res.status(201).json(createdUser)
}

const deleteUser = async (req, res) =>{
  const { id } = req.params;
  await userModels.deleteUser(id);
  return res.status(204).json();
};

const updateUser = async (req, res) =>{
  const {id} = req.params;
  await userModels.updateUser(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  updateUser

};