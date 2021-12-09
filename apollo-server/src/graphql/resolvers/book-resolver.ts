import { dataSources } from "../../datasources"

export default {
    Query: {
        book: (_, args) => {
            return dataSources.bookService.getBook(args.id)
        },
        books: () => {
            return dataSources.bookService.getBooks()
        }

    },
    Book: {
        id: (parent) => {
            return parent.id
        },
        name: (parent) => {
            return parent.name
        },
        authors: (parent) => {
            return dataSources.bookService.getBookAuthors(parent.id)
        },

    }
}