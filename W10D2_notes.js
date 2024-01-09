/*

Middleware!

next() must be invoked to move on to the next piece of middleware

All middleware must take in at least 3 params
    request (req), response (res), next

Both next and res.<method> are non-terminating

app.use is explicitely used for middleware
    The path string is not required, but can be useful
    The path does not have to match. The beginning of the path must match the prefix added to the app.use
    ! Important to note that the prefix is ignored in the path that is passed to the middleware

Another method of control is passing something into next()
When anything is passed into next, Express behavior changes a lot
    Express will skip all other middleware until it finds one that takes in a 4th param (error)
    To handle the error being passed, we have to create a way to catch the error
    Express assumes that a route handler (endpoint) isn't meant to take in an error
        This means that even if the route handler has 4 params and matches the path, Express will not enter that endpoint


Error Handling Middleware
    Takes in the 4th arg (err)
    Generally at the end of the pipeline so that nothing is skipped and it can catch all errors
    Anytime we generate a new error, we need to add a statusCode property to that new Error
    We also have to set the res status code in our error handling middleware
        ! Note that we use res.status(<status code>) instead of res.status = <status code>

    We setup an error handling middleware to DRY up our code and it makes our code more readable.


Routers
    An extension of our app object
    Start by creating a routes folder to hold all of our routers

    Router object behaves like the app obj in many ways, but not all
        For example, the router object cannot listen to a port, but it still has all of our methods

    We need to connect the router to the app
        First we need to export the router
            module.exports = router;
        Then we need to import that router into our app.js file
            const routerName = require('./routes/router');
        Finally, we have to tell Express to use that router
            app.use(routerName);
        Optionally, we can add a prefix string to the app.use to ensure that only related requests hit the router


Environment Variables
    There are a few common environments that we will work in
        Production
        Development (dev)
        Testing - underutilized
            A way to mimic the production environment locally so that we can test changes without interferring with user experience.
    What's the point?
        To handle the differences between the different environments
        They are used to obscure sensitive data
    To access an environment variable:
        process.env.VARIABLENAME
    A few ways to setup our environment variables
        Through the CLI
            This can be really annoying to type out every time
        Adding them to our script in package.json
            This defeats the purpose since we are pushing our package.json to Github
        Creating a .env file
            !! We must add .env to our .gitignore
            We need to make sure that our .env file is on the same level as our package.json file in the file structure
            To access variables in our .env from our app, we have to install a couple npm packages
                npm install dotenv
                npm install dotenv-cli //This allows us to access our .env from CLI
            Next, we have to add some boilerplate code to our app.js
                It is important that this is at the top of the file so that every aspect of our application has access to our env variables
                require('dotenv').config()
            Env variables that have a value that is longer than a single word need "" if they are in the CLI, but not if they are in the .env file





*/