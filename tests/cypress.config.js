const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: [
    "www.google-analytics.com",
    "*.googleapis.com",
    "connect.facebook.net",
    "www.youtube.com",
  ],
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://demo.govcms.test",
  },
  viewportHeight: 1024,
  viewportWidth: 1280,
});
