import express from "express";
import mongoose from "mongoose";
import { Data } from "./models/Data.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

await mongoose
  .connect("mongodb://localhost:27017/students")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
// await mongoose
//   .connect("mongodb+srv://ujjwal720946:m4G5tdgkKcEx92wm@cluster0.rtsos.mongodb.net/students")
//   .then(() => {
//     console.log("Connected Successfully");
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   });

//  CREATE
app.post("/", async (req, res) => {
  const { name, age, phone } = req.body;
  try {
    const data = new Data({
      name: name,
      age: age,
      phone: phone,
    });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

// GET
app.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, age, phone } = req.body;
  try {
    const result = await Data.updateOne(
      { _id: id },
      { $set: { name: name, age: age, phone: phone } }
    );
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  let ide = req.params.id;
  try {
    const result = await Data.deleteOne({ _id: ide });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
