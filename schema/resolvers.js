// imports
const { UserList, MovieList } = require("../schema/fakedata")
const lodash = require("lodash")

// resolvers
const resolvers = {

    // resolver for Query type
    Query: {
        users: () => UserList,
        user: (parent, args) => UserList.find(user => user.id === parseInt(args.id)),
        movies: () => MovieList,
        movie: (parent, args) => MovieList.find(movie => movie.name === args.name)
    },

    // resolver for User type
    User: {
        favoriteMovies: () => {
            return lodash.filter(
                MovieList,
                (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            )
        }
    }
}

// export the resolvers
module.exports = resolvers