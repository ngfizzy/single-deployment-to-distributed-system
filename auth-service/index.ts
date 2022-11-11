import express from "express";

const app = express();

app.get("/", (_, res) => res.json("Auth Ok"));

app.get("/liveliness", (req, res) => {
  return res.json({ message: "i'm alive" });
});

app.post("/login", (req, res) => {
  return res.json({
    message: "success",
    token: Date.now().toString(16),
  });
});

app.post("/logout", (req, res) => {
  return res.json({ message: "success" });
});

app.listen(4000, () => console.log("server started on port 4000"));
