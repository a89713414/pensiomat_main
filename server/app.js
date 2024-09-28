const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");  // Import path for serving the build folder

const HttpError = require("./models/http-error");
const routes = require("./routes/routes");
const navs = require("./routes/_nav");
const texts = require("./routes/texts");
const contact = require("./routes/contact");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

// CORS headers and logging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// API routes
app.use("/api/routes", routes);
app.use("/api/navs", navs);
app.use("/api/texts", texts);
app.use("/api/contact", contact);

// Serve frontend build folder
const _dirname = path.dirname("");  // Resolve the directory name
const buildPath = path.join(_dirname, "../client/build");  // Assuming your build folder is in the ../client/build directory
app.use(express.static(buildPath));

// Catch-all route to serve index.html for any non-API routes (for React client-side routing)
app.get("/*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Handle non-existing API routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error); // Use next() instead of throw
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// Start the server
server.listen(5001, () => console.log("Listening to port 5001"));
