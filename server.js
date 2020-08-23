var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoURI =
  "mongodb+srv://msway1997:popopop@cluster0.5ldjj.mongodb.net/<main>?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGODB_URI || mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var Users = require("./routes/Users");

app.use("/users", Users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
