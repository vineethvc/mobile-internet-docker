const axios = require('axios');

const config = require('../config');

module.exports.create = async (req, res) => {
  const response = await axios.post(config.USERS, req.body);

  res.json(response.data);
};

module.exports.list = async (req, res) => {
  const response = await axios.get(config.USERS);

  res.json(response.data);
};

module.exports.remove = async (req, res) => {
  const { id } = req.params;

  const response = await axios.delete(`${config.USERS}/${id}`);

  res.json(response.data);
};

module.exports.update = async (req, res) => {
  const { id } = req.params;

  const response = await axios.put(`${config.USERS}/${id}`, req.body);

  res.json(response.data);
};

module.exports.view = async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(`${config.USERS}/${id}`);

  res.json(response.data);
};
