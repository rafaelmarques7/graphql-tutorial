import { dataSources } from "../../datasources"

export default {
    Query: {
        publisher: (parent, args) => {
            return dataSources.bookService.getPublisher(args.id)
        },
        publishers: () => {
            return dataSources.bookService.getPublishers()
        }
    },
    Publisher: {
        id: (parent) => {
            return parent.id
        },
        name: (parent) => {
            return parent.name
        },
        books: (parent) => {
            return dataSources.bookService.getPublisherBooks(parent.id)
        },
    }
}