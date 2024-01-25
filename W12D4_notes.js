/*

Scopes

DRY up our code
Ensure we are retrieving data from our DB that we intend to receive

Couple ways to add scopes:
    Default scope to model
        In last object in init:
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
    Scopes property
        Point to an object
        That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
        When applying a non-default scope, we have to adjust our query
            We have to add .scope() to the query
            <model>.scope(<scopes>).<query method>()
        If we add a named scope, then the defaultScope will not be applied automatically
            We need to specify it in the .scopes()

        We can also add a function scope
        Function scopes return a filter to be applied to the query
        Function scopes get passed in as another object with the key of "method" and a value of an array:
            [<func scope name>, <args>]







*/