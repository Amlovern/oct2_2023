/*

Seeders
    For inserting starter data into tables
    CLI Commands:
        npx sequelize seed:generate --name <name>
            Create a seeder file
        npx dotenv sequelize db:seed:all
            Run all seeders that haven't been ran
        npx dotenv sequelize db:seed:undo
            Rolls back the most recent seed file
        npx dotenv sequelize db:seed:undo:all
            Rolls back all seeder files
    Important Notes:
        The seeder bulkInsert method tests against our table constraints, but not against model level constraints

queryInterface is an object built into Sequelize and has a ton of built-in methods

The seederStorage property in our config/database.js file is what gives us the SequelizeData table in our DB

One thing that will help you out with Sequelize is envisioning the SQL that Sequelize will be creating

To reset the DB:
npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize db:migrate:undo:all
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

Database reset script:
    "dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"

Adding additional validations to our models

If we want our seeders to check against model validations:
    We utilize the model's built-in bulkCreate method
    First we import the model into the seed file
    await <model>.bulkCreate([
        <seed objects>
    ], {validate: true})

    bulkCreate instead of bulkInsert is highly recommended

Using migrations for something other than creating tables
    IF we change an existing migration file, the migration must be rolled back in order for the changes to take effect. This would wipe that table, losing all user data.

We DO NOT want to update migrated migrations, instead we want to create new migrations for the changes we want to make.

We need to start by creating a new migration file
    npx sequelize migration:generate --name <descriptive name>

If we set allowNull: false to a new column, we run into an error
    We can get around this by setting a defaultValue property


There are a variety of query methods built into our models
    findAll
        Useful when we want multiple records
        Always returns an array
    findOne
        Useful when we want to find just a single record
    findByPk
        Also useful when finding just a single record
        Basically a findOne, but shortcuts to searching via Primary Key

To use these methods, we have to follow a couple steps:
    1. Import the model into the router file
    2. Dispath the method on the model, setting the return to a variable
        Make sure that we await this fetch

By default, Sequelize will do SELECT *
If we want to select certain columns, we need to add something to our query
    All of the queries take in an object
    We can use the attribute property to select certain columns
        The attributes property takes in an array of the cols we want

To add a WHERE statement, we add a where property to the query that takes in a nested object that has a key of the column and value of what we want to look for
If we target a column that isn't UNIQUE in a findOne, it will add LIMIT 1 to the SQL

In a .findByPk, the first arg isn't an obj, but instead the PK

If we want to add ORDER BY, that is another option in our query object
    order: [[<col>, 'ASC' || 'DESC']]
    Note that the arg for order is a 2D array
    We can order by multiple columns by adding more inner arrays

If we want to use LIKE in our query, we can do so
    This is done using the Op object built into Sequelize


POST route

Creating records
    Build
        (Validate)
    Save

    Create - Does all of the other 3

We have to destructue our req.body
To use build:
    const <instance> = <model>.build({<data>})
    await <instance>.validate()
    await <instance>.save()

To use create:
    const <instance> = await <model>.create({<data>})


*/