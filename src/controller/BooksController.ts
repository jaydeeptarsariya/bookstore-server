import { Request, Response, NextFunction } from 'express';
import { dbfunction } from '../common/db_functions';
import { response } from '../helper/response';

class BooksController {

    public async list(req: Request, res: Response, next: NextFunction) { 
        const books =  await dbfunction.getAllBooks();
        return response.setResponse(1, 200, "success", res, books);
    }

    public async getOne(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const books =  await dbfunction.getBooksById(id);
        if(books.length > 0) {
            return response.setResponse(1, 200, "success", res, books);
        } 
        return response.setResponse(0, 400, "Book Not Found", res);
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        const result = await dbfunction.InsertBook(req.body);
        if(result) {
            return response.setResponse(1, 200, "Book Created", res);
        } else {
            return response.setResponse(0, 400, "Something went wrong", res);
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const books =  await dbfunction.updateBooks(req.body, id);

        if(books.affectedRows > 0) {
            return response.setResponse(1, 200, "Book Updated successfully", res);
        } else {
            return response.setResponse(0, 404, "Something went wong", res);
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const books =  await dbfunction.deleteBooks(id);

        if(books.affectedRows > 0) {
            return response.setResponse(1, 200, "Book Deleted successfully", res);
        } else {
            return response.setResponse(0, 404, "Something went wong", res);
        }
    }
}

export const booksController = new BooksController;