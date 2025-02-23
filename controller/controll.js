import {nanoid} from nanoid       //to generate random id
const {URL} = require('../models/models')

async function genShortID(req , res) {
    const body=req.body
    if (!body.url) {
        return res.status(400).json({ msg: "URL not found" }); // Return to prevent further execution
    }
const nanoID = nanoid(8) ;
await URL.create({
    shortID : nanoID ,
     ID:body.url ,
     visit : []
})

return res.status(200).json({id:nanoID})
}
module.exports = {genShortID}