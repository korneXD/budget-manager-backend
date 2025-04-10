import express from "express";
import cors from "cors";
import { removeFromCloud } from "./cloudinaryConfig.js";

const app = express();
app.use(cors());
app.use(express.json());

app.delete("/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    removeFromCloud(id);
    res.json({ msg: "Sikeres törlés" });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => `App listen on port ${PORT}`);
