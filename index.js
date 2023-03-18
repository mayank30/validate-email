"use strict";
const validate = require("./src/validate");
module.exports = (mail) => {
  return validate(mail);
};
