-- Table foods {
--   id INTEGER
--   name VARCHAR
--   temp VARCHAR(10)
--   kcal INTEGER
--   price DECIMAL(4,2)
--   course VARCHAR(20)
--   foodnicity VARCHAR(100)
--   food_group VARCHAR(100)
--   healthy BOOLEAN
-- }

CREATE TABLE foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR UNIQUE NOT NULL,
    temp VARCHAR(10),
    kcal INTEGER,
    price DECIMAL(4,2) NOT NULL,
    course VARCHAR(20) NOT NULL,
    foodnicity VARCHAR(100) NOT NULL,
    food_group VARCHAR(100),
    healthy BOOLEAN
);