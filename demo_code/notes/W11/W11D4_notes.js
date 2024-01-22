/*

Relationships in Sequelize

To tell Sequelize that a column is a FK, we need to add a couple properties to that column obj in our migration
    references: {
        model: <table name>,
        key: 'id' (not needed unless PK is something besides id)
    },
    onDelete: 'CASCADE || SET NULL' (if desired)

Next we have to connect our models, this is done by using Associations

Associations
    One-to-One
        hasOne - not used much
    One-to-Many
        belongsTo
        hasMany

        We have to determine which is which and the order does matter
        The model with the FK is the belongsTo
        <model we are in>.<relationship>(models.<the name of the model we are connecting to>, {
            foreignKey: <name of the FK being used to connect>
        })
        In order to CASCADE Delete, we need to add stuff to the hasMany
        The hooks: true enforces that the deletions occur in the right order. If this is left off, we can still run into Foreign Key Constraint Failed errors
    Many-to-Many
        <model we are in>.belongsToMany(models.<name of the model on other side of the join table>, {
            through: models.<name of model for join table>,
            foreignKey: <FK to join to join table>,
            otherKey: <FK to join from join table to other table>
        })

Implementing these Relationships into Express
In our query object, we need to add an include property that points to the model we want to join

Since we are referencing another model, we need to make sure and add that model to our imports
     include: <model name>
We can add multiple models to the join by pointing the include property to an array
    include: [<model 1>, <model 2>]
We can also point include to an object or an array of objects
    include: {
        model: <model name>
    }

If we don't wany any of the info from our join table, we can add a through property to the includes object.
    include: {
        model: <model name>,
        through: {
            attributes: []
        }
    }


Association Methods
    Getter Method
        After querying a table, we automatically get a method to get a related table's information
        Basically exists to enable lazy loading
        Getter method will be either plural or singular based on the relationship
    Create Method
        After querying a table, we can create a record for a related table
        We don't need to add the value for the related FK
    Add Method
        After querying a table, in a Many to Many relationship, allows us to add a record to the join table


Aggregate Functions
    Our recommendation is to stick to basic, class-level aggregate functions and JS
    We want to LAZY LOAD OUR AGGREGATE DATA

    Min/Max
        await <model>.<func>(<col>)
    Count
        await <model>.count()
        Can also be achieved by finding the length of the return from <model>.findAll()
    Sum
        await <model>.sum(<col>)
    Avg can be calculated by writing simple JS combining these methods
    We can also take in an obj to specify a WHERE clause
        await <model>.<func>(<col>, { where: <filter> })

We can use the <instance>.toJSON() method to turn the result from a query into a JSON object instead of a promise
    This allows us to lazy load our aggregate data and then add it to the return from a data query
    This is useful for the project!!!!

*/