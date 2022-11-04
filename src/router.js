const express = require("express");
const router = express.Router();

const indexCotroller = require("./controllers/indexController.js");
const userController = require("./controllers/userController.js");
const deckController = require("./controllers/deckController.js");

// ** Index
router.get("/", indexCotroller.index);

// ** User
router.post("/login", userController.loginValidate);
router.post("/login/test", userController.loginTest);

// ** Deck
router.get("/deck/get", deckController.get);
router.post("/deck/getDeck", deckController.getDeck);
router.post("/deck/create", deckController.create);
router.post("/deck/edit", deckController.edit);
router.get("/deck/delete/:id", deckController.delete);

router.post("/deck/card/create", deckController.createCard);
router.post("/deck/card/edit", deckController.editCard);
router.post("/deck/card/state", deckController.setStateCard);
router.get("/deck/card/delete/:idDeck/:idCard", deckController.deleteCard);

module.exports = router;
