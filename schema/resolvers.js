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
    },

    // resolver for Mutation type
    Mutation: {
        createUser: (parent, args) => {
            const newUser = args.input
            newUser.id = UserList.length + 1
            UserList.push(newUser)
            return newUser
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            const userToUpdate = lodash.find(UserList, { id: parseInt(id) })
            userToUpdate.username = newUsername
            return userToUpdate
        },
        deleteUser: (parent, args) => {
            const userId = parseInt(args.id)
            const userToDelete = lodash.find(UserList, { id: userId })
            lodash.remove(UserList, user => user.id === userId)
            return userToDelete
        }
    }
}

// export the resolvers
module.exports = resolvers