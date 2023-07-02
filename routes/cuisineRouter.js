const express = require('express');
const MovieModel = require('../model/cusine.schema');
const { getCuisines, addCusine, updateMovie, deleteMovie, deleteCuisine, updateCusine } = require('../controller/cuisine.controller');
const router = express.Router();


router.get('/:type', getCuisines);
router.post('/', addCusine);
router.put('/:name',updateCusine);
router.delete('/:name',deleteCuisine);

//exporting
module.exports = router;
