import { connection } from "../config/db";
require('dotenv').config();

class db_functions {

    public async getAllBooks() {
        const allBooks = await connection.select('SELECT * FROM books', []);
        return allBooks;
    }

    public async InsertBook(data: any) {
        const allBooks = await connection.insert('INSERT INTO books set ?', [data]);
        if(allBooks.insertId) {
            return true;
        } else {
            return false;
        }
    }

    public async getBooksById(id: any) {
        const book = await connection.select('SELECT * FROM books WHERE id = ?', [id]);
        return book;
    }

    public async updateBooks(data: any, id: any) {
        const updateBook = await connection.update('UPDATE books set ? WHERE id = ?', [data, id]);
        return updateBook;
    }

    public async deleteBooks(id: any) {
        const deleteBook = await connection.delete('DELETE FROM books WHERE id = ?', [id]);
        return deleteBook;
    }
}

export const dbfunction = new db_functions();