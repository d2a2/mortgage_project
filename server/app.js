const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs/promises");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get("/img/:category/:image", (req, res) => {
	const imagePath = path.join(__dirname, req.path);
	sendFile(res, imagePath);
});

app.get("/icons/:image", (req, res) => {
	const imagePath = path.join(__dirname, req.path);
	sendFile(res, imagePath);
});

app.get("/:data", async (req, res) => {
	const dataType = req.params.data;
	const filePath = path.join(__dirname, "data", `${dataType}.json`);

	try {
		const fileData = await fs.readFile(filePath, "utf8");
		res.json(JSON.parse(fileData));
	} catch (error) {
		console.error(`Error reading ${dataType} data:`, error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

const sendFile = (res, filePath) => {
	try {
		res.sendFile(filePath);
	} catch (error) {
		console.error("Error sending file:", error);
		res.status(404).json({ error: "File not found" });
	}
};
