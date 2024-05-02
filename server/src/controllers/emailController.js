const emailModels = require('../models/emailModels');

const getAll = async (_req,res) =>{
  const email = await emailModels.getAll();
  return res.status(200).json(email);
};

const createEmail = async (req, res) =>{
  const createdEmail = await emailModels.createEmail(req.body);
  return res.status(201).json(createdEmail)
}

const deleteEmail = async (req, res) =>{
  const { id } = req.params;
  await emailModels.deleteEmail(id);
  return res.status(204).json();
};

const updateEmail = async (req, res) =>{
  const {id} = req.params;
  await emailModels.updateEmail(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createEmail,
  deleteEmail,
  updateEmail

};