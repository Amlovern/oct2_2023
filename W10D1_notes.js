/*

Frontend
    UI/UX, dealing with visuals, fetching (requests) data from server
    Develop Requests, Handle Responses

Backend
    Servers sending data to client, data storage (db), routing, efficiency, security
    Handle Requests, Develop Responses

What is an API?
    Tool for delivering data, creating a way for a user to interact with data

What is a Framework?
    Structure around which we build something else

What is Express?
    API Framework

Steps to start with Express
    1. Initialize node
        npm init -y
    2. Install packages
        Express - npm install express
        Nodemon - npm install -D nodemon
            The -D flag tells node to install the package as a dev dependency
    3. Create an app.js file - Main hub of our application
        Import express
        Use Express to instantiate app object
        Listen to a port (start the server)


Route Handlers
    App object methods:
        get, post, put/patch, delete, all, use
    Request path
        string, array of strings, regular expression, array of RegEx, array of strings and RegEx
    Middleware
        Series of callback functions
    Response methods
        send (used for plain text or JSON)
            Will be almost exclusively used for sending plain text
        json (will always send JSON)
            Set the headers and formatting for us
        
        
        render
        redirect

app.<method>(<path>, <middleware>, (request, response) => { reponse })

In order to access the body of a request, we need to add some boilerplate middleware to the top of our app.js file
    app.use(express.json())

!! Express works top => down !!


Important Request Object properties
    req.body
        Where the request body content can be found
        Requires app.use(express.json()) global middleware
    req.params
        Dynamic piece of the path
        Use a ":" in the path to signify a param
    req.query
        Dynamic piece of the URL
        Starts with a "?" in the URL

    The values passed into params and queries are always strings


*/