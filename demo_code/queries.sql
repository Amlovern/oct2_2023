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