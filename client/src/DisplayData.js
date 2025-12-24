// import necessary libraries and hooks
import React, { useState } from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client/react'
import { gql } from '@apollo/client'

// GraphQL queries
// Query to get all users
const QUERY_ALL_USERS = gql`
    query {
        users {
            id
            name
            username
            age     
        }
    }
`
// Query to get all movies
const QUERY_ALL_MOVIES = gql`
    query {
        movies {
            name
            yearOfPublication
            isInTheaters
        }
    }
`
// Query to get a movie by name
const QUERY_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
            isInTheaters
        }
    }
`
// Mutation to create a new user
const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
            username
            age
            nationality
        }
    }
`

// DisplayData component
function DisplayData() {

    // state to hold the movie name input
    const [movieName, setMovieName] = useState("")

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [username, setUsername] = useState("")
    const [nationality, setNationality] = useState("")

    // execute the queries
    const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS)
    const { loading: moviesLoading, error: moviesError, data: moviesData } = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie, { data: movieData, loading: movieLoading, error: movieError }] = useLazyQuery(QUERY_MOVIE_BY_NAME)
    const [createUser] = useMutation(CREATE_USER_MUTATION)

    // handle loading and error states
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>

    if (moviesLoading) return <h1>Loading Movies...</h1>
    if (moviesError) return <h1>Error: {moviesError.message}</h1>

    // render the data
    return (
        <div>
            <div>
                {/* input fields to create a new user */}
                <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='number' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
                <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='text' placeholder='Enter Nationality' value={nationality} onChange={(e) => setNationality(e.target.value.toUpperCase())} />
                <button onClick={() => {
                    createUser({ variables: { input: { name, age: Number(age), username, nationality } } })
                    refetch()
                }}>Add User</button>
            </div>

            <h1>List of Users</h1>

            {/* display users */}
            {data && data.users.map((user) => {
                return (
                    <div key={user.id} style={{ marginBottom: '20px' }}>
                        <h2>Name: {user.name}</h2>
                        <h3>Username: {user.username}</h3>
                        <h3>Age: {user.age}</h3>
                    </div>
                )
            })}

            <h1>List of Movies</h1>

            {/* display movies */}
            {moviesData && moviesData.movies.map((movie) => {
                return (
                    <div key={movie.id} style={{ marginBottom: '20px' }}>
                        <h2>{movie.name}</h2>
                        <h3>Year Of Publication: {movie.yearOfPublication}</h3>
                        <h3>Is In Theaters: {movie.isInTheaters ? "Yes" : "No"}</h3>
                    </div>
                )
            })}

            <div>
                <input type="text" placeholder="Movie Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                <button onClick={() => fetchMovie({ variables: { name: movieName } })}>Fetch Movie</button>
                <div>
                    {/* display movie by name */}
                    {movieLoading && <h1>Loading Movie...</h1>}
                    {movieError && <h1>Error: {movieError.message}</h1>}
                    {movieData &&
                        <div style={{ marginTop: '20px' }}>
                            <h2>{movieData.movie.name}</h2>
                            <h3>Year Of Publication: {movieData.movie.yearOfPublication}</h3>
                            <h3>Is In Theaters: {movieData.movie.isInTheaters ? "Yes" : "No"}</h3>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

// export the DisplayData component
export default DisplayData
