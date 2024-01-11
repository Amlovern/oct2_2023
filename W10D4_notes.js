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




*/