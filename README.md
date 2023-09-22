The project is written in TypeScript and aims to provide API endpoints for managing books.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jaydeeptarsariya/bookstore-server.git
    ```

2. Navigate to the project directory:

    ```bash
   cd bookstore-server
    ```

3. Install the project dependencies:

    ```bash
   npm install
    ```

## Usage

1. Start the server:

    ```bash
   npm run start
    ```

2. The server will be accessible at `http://localhost:<PORT>` where `<PORT>` is the specified port (default is 8000).

## API Routes

- **GET `/`**: Homepage, possibly for testing server status.
- **GET `/api/books`**: Retrieve a list of all books.
- **POST `/api/books`**: Create a new book entry.
- **GET `/api/books/:id`**: Retrieve a specific book by ID.
- **PUT `/api/books/:id`**: Update a specific book by ID.
- **DELETE `/api/books/:id`**: Delete a specific book by ID.

## Database Schema

The MySQL database `ng_books` contains a single table named `books` with the following columns:

- `id` (INT): Auto-incremented primary key.
- `title` (VARCHAR): Title of the book.
- `description` (VARCHAR): Description of the book.
- `image` (VARCHAR): URL or path to the book's image.
- `created_at` (TIMESTAMP): Timestamp indicating when the book entry was created.