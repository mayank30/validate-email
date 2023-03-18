const disposableList = require("./disposable-emailaddress.json");
const emailRegexCheck = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

module.exports = (email) => {
  if (emailRegexCheck(email)) {
    const domain = email.split("@")[1];
    return !disposableList.includes(domain)
  }
  return false;
};