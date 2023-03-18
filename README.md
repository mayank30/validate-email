# Validate Email

Validate email is not only check if email has @ of proper tld. many users create fake account using proxy or disposable email id's and if you want to restrict those user to sign up using fake account or invalid proxy email then you are at right place.

Use the below package and configure in your code for close to accurate validity check of your user email.

## Install using npm

```bash
npm i advance-validate-email
```

## Methods & Options

```javascript
const validate = require("advance-validate-email");

validate("john-doe@gmail.com"); // true
validate("john-doe@mailsac.com"); // false
validate("john-doe@mailinator.com"); // false
```

## If you like it

You can buy me coffee 
https://www.buymeacoffee.com/mayankjhawar

Support me at Patreon
https://patreon.com/mayank120

## License

MIT
