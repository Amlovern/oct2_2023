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
DROP TABLE IF EXISTS foods;

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

INSERT INTO foods (name, temp, kcal, price, course, foodnicity, food_group, healthy)
VALUES
('burrito', 'hot', 700, 15.56, 'lunch', 'mexican', 'protein', true),
('filet mignon', 'hot', 1400, 45.49, 'supper', 'american', 'protein', true),
('tom yum goong', 'hot', 650, 7.22, 'lunch', 'asian', 'protein', false),
('orange', 'cold', 180, 2.30, 'snack', 'american', 'fruit', true),
('donut', 'hot', 500, 3.00, 'breakfast', 'american', 'grain', false),
('spinach', 'cold', 5, 4.44, 'breakfast', 'european', 'vegetable', true);