const {Router} = require("express");
const Email = require("../models/Email");
const router = Router();


//  Route definitions go here
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newEmail = new Email(request.body);
  newEmail.save((error, record) => {
    // if (error.name && error.name === 'ValidationError') return response.status(400).json(error.errors);
    // if (error) return response.status(500).json(error.errors);
    response.json(record);
  });
});

module.exports = router;
