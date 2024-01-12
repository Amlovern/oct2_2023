/*

Aggregate Functions
    AVG - Find the avg value of the values in a col
    COUNT - Counts the number of entries in table
    MIN/MAX - Find the min/max value of a col
    SUM - Add up all the values in a col
        If all the values are null, returns null
    TOTAL - Add up all the values in a col
        Always returns a floating point value
        If all the values are null, returns 0.0

Where are the aggregate functions placed?
    Inside of the SELECT statement
These aggregate functions are treated like normal functions, so we invoke them with ()
    SELECT <function>(<col>) FROM <table>;

COUNT is different. We can pass "*" in the () since it doesn't matter what column is used.
    The only exception is if you want to exclude NULL values

!! When we run an aggregate function, we do not get all of the info from the table, only the aggregate data !!

We can add a WHERE clause to filter which data is applied to the aggregate.

We can add GROUP BY to have that aggregate happen on specific groups of data
    GROUP BY <column name>
    This is the only way to return multiple things from an aggregate
        It will still return a single instance per group

We can add HAVING to a function that we have a GROUP BY on
    This acts like a WHERE clause, but for the groups that were created

At this point, we have talked about all of the SQL keywords:
    Keywords in the order that should/could be applied in a query:
    SELECT
    FROM
    JOIN ON
    WHERE
    GROUP BY
    HAVING
    ORDER BY
    LIMIT
    OFFSET


*/