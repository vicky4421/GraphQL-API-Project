const { } = require("apollo-server")

// type definitions
const typeDefs = `

    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    enum Nationality {
        INDIA,
        AMERICA,
        IRISH,
        GERMANY,
        SINGAPORE,
        BRAZIL,
        ITALY,
        JAPAN,
        BRITAIN,
        SPAIN
    }

`

// export the type definitions
module.exports = typeDefs