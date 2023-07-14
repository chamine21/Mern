const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/author/new', AuthorController.create);
    app.get('/api/authors', AuthorController.getAll);
    app.get('/api/author/:id', AuthorController.getOne);
    app.put('/api/author/update/:id', AuthorController.update);
    app.delete('/api/author/delete/:id', AuthorController.delete);

}

