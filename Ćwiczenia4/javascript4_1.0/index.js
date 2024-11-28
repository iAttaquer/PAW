'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  //TODO1
  const radius = parseFloat(req.params.r);
  const area = radius * radius * Math.PI;
  const circumference = 2 * radius * Math.PI;
  const result = {
    "area": area,
    "circumference": circumference,
  }
  res.json(result);
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  const area = width * height;
  const perimeter = 2 * (width + height);
  const result = {
    "area": area,
    "perimeter": perimeter,
  }
  res.json(result);
});

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ "error": "Invalid input!" });
  }
  const power = Math.pow(base, exponent);
  const result = {
    "power": power,
  }
  const { root } = req.query;
  if (root === "true") {
    result.root = Math.sqrt(power);
  }
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});