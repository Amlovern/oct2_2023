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


*/