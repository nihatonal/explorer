const fs = require("fs");
const path = require("path");

const express = require("express");
const http = require('http')
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io")
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");


const app = express();

app.use(bodyParser.json());

// const corsOptions = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, PATCH, POST, PUT",
//   "Access-Control-Allow-Headers":
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
app.use(cors());
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
console.log(process.env.PORT)


app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wu6wj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server)
  .catch((err) => {
    console.log(err);
  });

// const io = require("socket.io")(server || process.env.PORT, {
//   cors: corsOptions,
// });
const io = new Server(server || 8400, {
  cors: {
    origin: '*',
  }
});
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  //console.log(users.find((user) => user.userId === userId));
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    // console.log(users)
    console.log(user);
    io.to(user && user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});


//   const fs = require("fs");
// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const carsRoutes = require("./routes/cars-routes");
// const usersRoutes = require("./routes/users-routes");
// const HttpError = require("./models/http-error");

// const app = express();

// app.use(bodyParser.json());

// const cors = require("cors");

// const corsOptions = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, PATCH, POST, PUT",
//   "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use("/uploads/images", express.static(path.join("uploads", "images")));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// });

// app.use("/api/cars", carsRoutes);
// app.use("/api/users", usersRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });

// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || "An unknown error occurred!" });
// });

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wu6wj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
