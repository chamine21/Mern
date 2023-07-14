const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/product/new', ProductController.create);
    app.get('/api/products', ProductController.getAll);
    app.get('/api/product/:id', ProductController.getOne);
    app.put('/api/product/update/:id', ProductController.update);
    app.delete('/api/product/delete/:id', ProductController.delete);

}

