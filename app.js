import express from "express";
import { createPix } from "./payments/pix.js";
const app = express();
const port = 5001;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  console.log(req.read());

  res.json({
    x_account_id: "1234",
  });
});

app.get("/pix", (req, res) => {
  createPix();
  res.json({ result: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
