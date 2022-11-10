/* mySeedScript.js */

// require the necessary libraries
const MongoClient = require("mongodb").MongoClient;


const seedDB = async function () {
    // Connection URL
    const uri = "mongodb://localhost:27017/";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");
        // let datab = client.db(dbName);
        // datab.createCollection("moderatorqueue", { "capped": false});

        const collection = client.db("FirstName_LastName_lab6").collection("movies");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        // make a bunch of time series data
        let moviesData = [
            {
                "_id": "6362c8f9ce39087fe6863da9",
                "title": "Chernobyl",
                "plot": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
                "genres": [
                    "Drama",
                    "History",
                    "Thriller"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "Johan Renck",
                "castMembers": [
                    "Jessie Buckley",
                    "Jared Harris",
                    "Stellan Skarsgård"
                ],
                "dateReleased": "06/03/2019",
                "runTime": "5h 30min",
                "reviews": [
                    {
                        "id": "63634fd6de09babbf3ecc675",
                        "reviewTitle": "Really Goodyy",
                        "reviewerName": "Philo",
                        "review": "This movie was so interesting.",
                        "rating": 4.7
                    }
                ],
                "overallrating": 0
            },
            {
                "_id": "6362c8f9ce39087fe6863daa",
                "title": "The Wire",
                "plot": "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
                "genres": [
                    "Drama",
                    "Crime",
                    "Thriller"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "David Simon",
                "castMembers": [
                    "Dominic West",
                    "Lance Reddick",
                    "Sonja Sohn"
                ],
                "dateReleased": "06/02/2002",
                "runTime": "03h 59min",
                "reviews": [
                    {
                        "id": "63634fd6de09babbf3ecc675",
                        "reviewTitle": "Really Goodyy",
                        "reviewerName": "Philo",
                        "review": "This movie was so interesting.",
                        "rating": 4.7
                    }
                ],
                "overallrating": 0
            },
            {
                "_id": "6362c8f9ce39087fe6863dab",
                "title": "Band of Brothers",
                "plot": "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
                "genres": [
                    "Drama",
                    "History",
                    "War"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "Phil Alden Robinson",
                "castMembers": [
                    "Scott Grimes",
                    "Damian Lewis",
                    "Ron Livingstone"
                ],
                "dateReleased": "09/09/2001",
                "runTime": "9h 54min",
                "reviews": [
                    {
                        "id": "63634fd6de09babbf3ecc675",
                        "reviewTitle": "Really Goodyy",
                        "reviewerName": "Philo",
                        "review": "This movie was so interesting.",
                        "rating": 4.7
                    },
                    {
                        "id": "63636fc954c4dae8aaddcafe",
                        "reviewTitle": "yeeey",
                        "reviewerName": "Philomena",
                        "review": "This movie was so very interesting.",
                        "rating": 4.9
                    }
                ],
                "overallrating": 0
            },
            {
                "_id": "63638dc91900e2448f006d61",
                "title": "Chernobylll",
                "plot": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the worlds worst man-made catastrophes.",
                "genres": [
                    "Drama",
                    "History",
                    "Thriller"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "Johan Renck",
                "castMembers": [
                    "Jessie Buckley",
                    "Jared Harris",
                    "Stellan Skarsgård"
                ],
                "dateReleased": "06/03/2019",
                "runtime": null,
                "reviews": [
                    {
                        "id": "63638e561900e2448f006d63",
                        "reviewTitle": "yeap",
                        "reviewerName": "Philomena",
                        "review": "This movie was so very interesting.",
                        "rating": 4.5
                    }
                ]
            },
            {
                "_id": "6363910bfe3ec61680a47537",
                "title": "Chernobyll3",
                "plot": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the worlds worst man-made catastrophes.",
                "genres": [
                    "Drama",
                    "History",
                    "Thriller"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "Johan Renck",
                "castMembers": [
                    "Jessie Buckley",
                    "Jared Harris",
                    "Stellan Skarsgård"
                ],
                "dateReleased": "06/03/2019",
                "runtime": null,
                "reviews": [
                    {
                        "id": "6363ceffc225a4b54bb4b1af",
                        "reviewTitle": "yeapeee",
                        "reviewerName": "Philomenaee",
                        "review": "This movie was so very interestingeeeeeee.",
                        "rating": 4.7,
                        "reviewDate": "11/03/2022"
                    },
                    {
                        "id": "6363cfa7d868ad1ca51dda0a",
                        "reviewTitle": "yeapeee",
                        "reviewerName": "Philomenaee",
                        "review": "This movie was so very interestingeeeeeee.",
                        "rating": 4.7,
                        "reviewDate": "11/03/2022"
                    },
                    {
                        "id": "6363d047bfc3ee7c95a393fb",
                        "reviewTitle": "yeapeee",
                        "reviewerName": "Philomenaee",
                        "review": "This movie was so very interestingeeeeeee.",
                        "rating": 4.7,
                        "reviewDate": "11/03/2022"
                    }
                ],
                "overallRating": 0
            },
            {
                "_id": "6363d4c03767bb1bb9bf3592",
                "title": "Chernobyll366",
                "plot": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the worlds worst man-made catastrophes.",
                "genres": [
                    "Drama",
                    "History",
                    "Thriller"
                ],
                "rating": 4.3,
                "studio": "United Artists",
                "director": "Johan Renck",
                "castMembers": [
                    "Jessie Buckley",
                    "Jared Harris",
                    "Stellan Skarsgård"
                ],
                "dateReleased": "06/03/2019",
                "runtime": "5h 30min",
                "reviews": [],
                "overallRating": 0
            }
        ];

        
        collection.insertMany(moviesData);

        console.log("Database seeded! :)");
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();