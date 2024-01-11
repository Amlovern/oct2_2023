/*

Database Relationships

What are the 3 types of relationships?
    One-to-One
    One-to-Many
    Many-to-Many
        Note that a Join table can have more than just the 2 FK

When setting up a Foreign Key (FK) column, the FK goes on the many side of the one-to-many relationship

There are a couple ways to establish a FK in a CREATE TABLE command
    1) At the bottom of the CREATE, we can add:
        FOREIGN KEY (<column name>) REFERENCES <other table>(id)
    2) We can combine that on the column info:
        <column name> INTEGER REFERENCES <other table>(id)

What about deleting?
    On Delete Cascade allows us to resolve this
    If we don't want those sub-records to be deleted, we have a fix for that too
        On Delete Set Null
        Note that we cannot do this if the column has NOT NULL

New Query Keywords
    BETWEEN - inclusive
        WHERE <column> BETWEEN <value 1> AND <value 2>
    IN - something is true from a group of possibilities
        WHERE <column> IN (<comma separated values>)
    LIKE - search for partial strings
        WHERE <column> LIKE %<partial string>%
        % = wildcard character
        Case insensitive in SQLite
        Contains anywhere: '%<string>%'
        Starts With: '<string>%'
        Ends With: '%<string>'
    ORDER BY - Allows us to go against the default ordering behavior
        ORDER BY <column>
        Default order is ASC, but we can add DESC to our command to reverse that
        Can order by multiple factors by adding more columns separated by commas
    LIMIT - only returns a certain number of records
        LIMIT <value>
    OFFSET - skip a certain number of records
        OFFSET <value>
        Can only be used in conjuction with LIMIT
        Usually used in Pagination
    DISTINCT - returns only distinct (different) values
        SELECT DISTINCT <column> FROM <table>;
    We can also perform mathematical operations to our columns in a SELECT
        SELECT <column> + <value> FROM <table>;
        This doesn't actually change the data in the DB
    We can also alias our columns in a SELECT
        SELECT <column> AS <alias> FROM <table>;




*/