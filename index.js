// imports
const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema/type-defs")
const resolvers = require("./schema/resolvers")

// apollo server setup
const server = new ApolloServer({ typeDefs, resolvers })

// start the server
server.listen()
    .then(({ url }) => {
        console.log(`Apollo Server running at: ${url}`)
    })