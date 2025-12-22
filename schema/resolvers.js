const { UserList } = require("../schema/fakedata")

const resolvers = {
    Query: {
        users() {
            return UserList
        }
    }
}

module.exports = resolvers