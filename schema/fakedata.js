// Fake data for users and movies

// User data
const UserList = [
    {
        id: 1, name: "Vivek Sawant", username: "vic-sec", age: 36, nationality: "INDIA", friends: [
            { id: 2, name: "Sophia Johnson", username: "sophiaj", age: 29, nationality: "AMERICA" },
            { id: 6, name: "Isabella Rossi", username: "isab_rossi", age: 26, nationality: "ITALY" }
        ]
    },
    { id: 2, name: "Sophia Johnson", username: "sophiaj", age: 29, nationality: "AMERICA" },
    { id: 3, name: "Liam O'Connor", username: "liamoc", age: 34, nationality: "IRISH" },
    { id: 4, name: "Emma Müller", username: "emma_mu", age: 27, nationality: "GERMANY" },
    { id: 5, name: "Noah Tan", username: "noahtan", age: 31, nationality: "SINGAPORE" },
    { id: 6, name: "Isabella Rossi", username: "isab_rossi", age: 26, nationality: "ITALY" },
    { id: 7, name: "Lucas Silva", username: "lucas_s", age: 35, nationality: "BRAZIL" },
    { id: 8, name: "Yuki Nakamura", username: "yuki_n", age: 28, nationality: "JAPAN" },
    { id: 9, name: "Amelia Brown", username: "amelia_b", age: 22, nationality: "BRITAIN" },
    { id: 10, name: "Daniel García", username: "dan_garcia", age: 40, nationality: "SPAIN" }
]

// Movie data
const MovieList = [
    {
        id: 1,
        name: "Inception",
        yearOfPublication: 2010,
        isInTheaters: false
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2014,
        isInTheaters: false
    },
    {
        id: 3,
        name: "Dune: Part Two",
        yearOfPublication: 2024,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Oppenheimer",
        yearOfPublication: 2023,
        isInTheaters: false
    },
    {
        id: 5,
        name: "Avatar: The Way of Water",
        yearOfPublication: 2022,
        isInTheaters: false
    }
];

// export the fake data
module.exports = { UserList, MovieList }