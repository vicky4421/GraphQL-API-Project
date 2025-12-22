const { UserList, MovieList } = require("../schema/fakedata")
const lodash = require("lodash")

const resolvers = {
    Query: {
        users: () => UserList,
        user: (parent, args) => UserList.find(user => user.id === parseInt(args.id)),
        movies: () => MovieList,
        movie: (parent, args) => MovieList.find(movie => movie.name === args.name)
    },
    User: {
        favoriteMovies: () => {
            return lodash.filter(
                MovieList,
                (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            )
        }
    }
}

module.exports = resolvers