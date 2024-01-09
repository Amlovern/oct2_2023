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

*/