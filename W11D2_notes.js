/*

What makes SQL inefficient?
    Connections to the DB
    Large data sets
        SQL is going to check every single line

What can we do to improve efficiency?
    Use Join and Subqueries
        This reduces the number of DB connections
    Indexes
    Benchmarking
    SELECT only the data we need


What is the time complexity of a query without an index? And with an index?
    Without: O(n) where n is the num of records on the table
    With: O(log n) where n is the num of records on the table

What is the syntax for creating an index?
    CREATE INDEX <index name> ON <table name> (<list of cols>)

What is the naming convention for indexes? i.e. table users, cols: first_name, last_name
    idx_users_first_name_last_name
    CREATE INDEX idx_users_first_name_last_name ON users (first_name, last_name)

Every time we add an index, all of our other operations (CUD) become more expensive

We want to make this more efficient, but before we start throwing indexes in there, we need to have a base of how long the query takes

How do we start a benchmark?
    .timer on

The first time we run a query is the most expensive
    This is due to how sqlite does caching under the hood

How do we check if a query is already using an index?
    EXPLAIN QUERY PLAN
    <the query code>

What is the difference between SCAN and SEARCH responses from EXPLAIN QUERY PLAN?
    SCAN - checking all records
    SEARCH - binary searching using an index

What steps do we take to benchmark a query?
    Turn .timer on
    Run query to get initial time
    EXPLAIN QUERY PLAN to see if an index is being used
    If no index, add an index
    EXPLAIN QUERY PLAN again to confirm that the index is being used
    Run query again to get new time

Every time we add a UNIQUE constraint to a column, we are adding an index
    This allows SQL to quickly identify if the UNIQUE constraint passes or fails

What is an N+1 Query?
    When we run an initial query, then iterate over those results and for each result, we run an additional query

    groups = SELECT * FROM food_groups;
    groups.forEach(group => {
        SELECT * FROM foods
        WHERE food_group_id = group.id
    })

During your time here at a/A, don't worry about efficiency. Focus on getting your code to work, THEN go back and refactor.
!! LAZY LOAD YOUR AGGREGATE DATA !!

SQL Injection Attacks

When a malicious users directly inputs SQL into the backend of an API

Biggest takeaways so far:
    How to benchmark queries and how to recognize N+1 queries



Sequelize

To start off, we need to install a couple packages
    npm install sequelize
    npm install sequelize-cli
Then we need to initialize Sequelize
    npx sequelize init

This command creates a bunch of folders and files for 
    We are replacing the entirety of the database.js file

The migrations file's job is to make changes to our DB
Seeder files are filled with our initial DB data
Model files are class representations of our tables

The .sequelizerc file tells Sequelize how to handle the file structure upon initialization

In the config/database.js file:
    storage: Tells Sequelize where our actual DB is
    dialect: Tells Sequelize which RDBMS we are using
    benchmark: Basically turns .timer on by default
    logQueryParameters: Allows us to see the values when we make changes to our DB
    typeValidation: Helps us enforce data types on our tables
    logging: Defaults to true and prints our SQL to the terminal









*/