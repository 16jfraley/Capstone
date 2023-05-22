const {Router} = require("express");
const Email = require("../models/Email");
const router = Router();


// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newEmail = new Email(request.body);
  newEmail.save((error, record) => {
    // if (error && error.name && error.name === "ValidationError")
    if (error?.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {

  Email.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });

});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Email.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Email.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Email.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        email: body.email,
        message: body.message,
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
    if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
    }
  );
});


module.exports = router;
