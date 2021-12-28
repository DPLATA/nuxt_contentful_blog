const contentful = require("contentful");

module.exports = contentful.createClient({
  space: process.env.CONTENTFULSPACE,
  accessToken: process.env.CONTENTFULACCESSTOKEN
});
