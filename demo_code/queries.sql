SELECT * FROM foods;

SELECT name, price, course FROM foods;

SELECT * FROM foods
WHERE foodnicity = 'american';

SELECT * FROM foods 
WHERE kcal < 1000 
OR healthy = 1;

DELETE FROM foods
WHERE healthy = false;

INSERT INTO foods (name, temp, kcal, price, course, foodnicity, food_group, healthy)
VALUES
('donut', 'hot', 500, 3.00, 'breakfast', 'american', 'grain', false);

UPDATE foods SET price = 5
WHERE course = 'breakfast';

DELETE FROM courses WHERE name="snack";

SELECT * FROM foods
WHERE price BETWEEN 3 AND 10;

SELECT * FROM foods
WHERE foodnicity_id IN (1, 2);

SELECT * FROM foods
WHERE name LIKE '%O';

SELECT * FROM foods
ORDER BY healthy DESC, price ASC;

SELECT * FROM foods
ORDER BY price DESC
LIMIT 1
OFFSET 1;

SELECT DISTINCT temp FROM foods;

SELECT name, price * .7 AS '30% off' FROM foods;