const router = require("express").Router();
const book_controller = require("../controller/book_controller");


router.route("/api/books")
    .get(book_controller.findAll)
    .post(book_controller.save)


router.route("/api/books/:id")
    .get(book_controller.findOne)
    .delete(book_controller.remove)


module.exports = router;