let express = require("express");
let cors = require("cors");
let path = require("path");
let cookieParser = require("cookie-parser");
let createError = require("http-errors");
let logger = require("morgan");
let session = require("express-session");

let app = express();

let router = require("./router");
const config = require("./config");

app.use(session({ secret: "any_any", saveUninitialized: true, resave: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use((req, res, next) => {
  next();
});

// Allow CORS
app.use(cors({ origin: config.front, credentials: true }));

// Router
app.use("/", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Handle errors
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send({ success: false, message: "Error procesing request" });
});

module.exports = app;
