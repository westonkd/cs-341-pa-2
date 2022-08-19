const express = require("express");
const appConfig = require("./config/application");
const { initDB } = require("./config/db");

const app = express();

// Routes
const legoSetRoutes = require("./config/routes/legoSets");
app.use("/legoSets", legoSetRoutes(express.Router()));

initDB().then(() => {
  app.listen(appConfig.port, () => {
    console.log(`Application listening on port ${appConfig.port}`);
  });
});
