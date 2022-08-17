const express = require("express");
const config = require("./config/app");

const app = express();

// Routes
require("./app/routes/home")(app);

// Start server
app.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}`);
});
