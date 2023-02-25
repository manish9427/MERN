// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

// //importing mongoose
const mongoose = require("mongoose");
// //now connecting mongoose with our database

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-demo");
    console.log("connected to database");
  } catch (err) {
    console.log("could not connect to Database");
  }
}

//now we are gonna use mongoose to create a schema
const User = mongoose.model("User", {
  name: String,
  gender: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  verifiedEmail: Boolean,
  followersCount: Number,
});

//create
async function create() {
  //   const users = await User.create([
  //     {
  //       name: "Manish Verma",
  //       gender: "male",
  //       email: "manish.verma@example.com",
  //       password: "some-pass",
  //       dateOfBirth: new Date("1992-03-09"),
  //       verifiedEmail: true,
  //       followersCount: 34,
  //     },

  //     {
  //       name: "Varun Kumar",
  //       gender: "male",
  //       email: "arun.kumar@example.com",
  //       password: "some-pass",
  //       dateOfBirth: new Date("1992-03-09"),
  //       verifiedEmail: true,
  //       followersCount: 34,
  //     },
  //     {
  //       name: "Tarun Kumar",
  //       gender: "male",
  //       email: "arun.kumar@example.com",
  //       password: "some-pass",
  //       dateOfBirth: new Date("1992-03-09"),
  //       verifiedEmail: true,
  //       followersCount: 34,
  //     },
  //   ]);
  //   console.log(users);
  const user = new User({
    name: "Tarun Kumar",
    gender: "male",
    email: "arun.kumar@example.com",
    password: "some-pass",
    dateOfBirth: new Date("1992-03-09"),
    verifiedEmail: true,
    followersCount: 34,
  });
  console.log(user);
  await user.save();
}

async function read() {
  const users = await User.find({
    name: {
      $lte: "M",
    },
  });

  // console.log(users);

  // let user = await User.findById('63f7804d7cc2a')

  // console.log(user);

  let user = await User.findOne({
    $or: [
      {
        name: "Varun Kumar",
      },
      {
        gender: "male",
      },
    ],
  });

  console.log(user);
}

connectDatabase().then(create);
