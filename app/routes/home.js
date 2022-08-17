module.exports = function (app) {
  app.get("/", (_req, res) => {
    // Eventually we will store "action"
    // logic in controllers. For now we will
    // Embed this response logic directly in
    // the routes file
    res.send("Hello, World!");
  });
};
