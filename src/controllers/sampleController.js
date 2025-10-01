const SampleModel = require('../models/sampleModel');

exports.getSamples = async (req, res) => {
  try {
    const samples = await SampleModel.find();
    res.json(samples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
