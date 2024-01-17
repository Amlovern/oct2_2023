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





*/