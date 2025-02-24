const { URL } = require("../models/model");
async function genShortID(req, res) {
  const { nanoid } = await import('nanoid'); // Dynamic import works due to nonoid now 
  const body = req.body;                     //being an esm which uses import

  if (!body.id) {
    return res.status(400).json({ msg: "URL not found" });
  }

  try {
    const shortID = nanoid(6);

    await URL.create({
      shortID: shortID,
      ID: body.id,
      visit: [{ timestamp: Date.now() }],
    });

    return res.status(200).json({ id: shortID });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports = { genShortID };
