/*

Databases

What is a Database?
    Collection of data
        Stored in Tables in Row/Column format
        We can apply individual rules to each column
        An instance in a Row is called a record
        Tables have a plural name since they are meant to hold multiple things

What is the tool called that we use to manage and interact with DBs? RDBMS - Relational DataBase Management System
What is SQL? Structured Querying Language

Running "sqlite3" in the CLI will allow us to connect to a sqlite db

To create a database that will persist, we can run the command "sqlite3 <database name>.db"

We can use ".tables" to see all of the tables in our db

With SQL, we MUST end our lines with a ";"
    This is because SQL is going to take our multi-line commands and put it all together in a single line, so SQL needs to know when we are terminating the command versus continuing to the next line

We can create SQL files for us to write SQL commands in
    In sqlite CLI, we run the ".read <file name>" command to run the commands in that file

All of our SQL commands will be in all caps


Notes for creating tables:
    table and column names are lowercase and snake_case
    tables are plural
    The UNIQUE constraint enforces that we don't add duplicates in the column
    The NOT NULL constraint enforces that the column isn't empty (null)
    SQL does not like trailing commas
    We must add the semi-colon after we are done

CREATE TABLE <table name> (
    <column name> <data type> <attributes>
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    <continue filling in table>
);

Drop a table using DROP TABLE <table name>;





*/