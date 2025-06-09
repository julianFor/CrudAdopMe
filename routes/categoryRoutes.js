const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authJwt = require('../middlewares/authJwt');

router.post ('/', [authJwt.verifyToken], categoryController.createCategory);
router.get ('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;