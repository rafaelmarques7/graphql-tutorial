import { dataSources } from "../../datasources"

export default {
    Query: {
        author: (parent, args) => {
            return dataSources.bookService.getAuthor(args.id)
        },
        authors: () => {
            return dataSources.bookService.getAuthors()
        }
    },
    Author: {
        id: (parent) => {
            return parent.id
        },
        name: (parent) => {
            return parent.name
        },
        books: (parent) => {
            return dataSources.bookService.getAuthorBooks(parent.id)
        },
    }
}