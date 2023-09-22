import { Router } from 'express';
import { booksController } from '../controller/BooksController';

class BookRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // ROUTE FOR GET LIST OF ALL BOOKS
        this.router.get('/', booksController.list);

        // ROUTE FOR GET BOOKS BY ID
        this.router.get('/:id', booksController.getOne);

        // ROUTE FOR CREATE BOOK
        this.router.post('/', booksController.create);

        // ROUTE FOR UPDATE BOOK
        this.router.put('/:id', booksController.update);

        // ROUTE FOR DELETE BOOK
        this.router.delete('/:id', booksController.delete);
    }
}

export default new BookRoutes().router;