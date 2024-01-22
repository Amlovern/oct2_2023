/*

Serving Static Files
    We can use middleware built into a method on the express object
        app.use(express.static(<the name of the directory we want to access>))
    This middleware tells Express to look in the specified directory for files to send
    We can make it so that we are only serving files out of the css directory
    We can make it so that we are only serving static files out of the css directory by changing the express.static
    Like all middleware, we can add a prefix so that the request must start with that prefix before entering the middleware





*/