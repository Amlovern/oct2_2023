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

SELECT foods.name AS 'food', foodnicitys.name AS 'foodnicity', price, healthy, food_groups.name AS 'food group', courses.name AS 'course'
FROM foodnicitys
JOIN foods ON (foodnicitys.id = foods.foodnicity_id)
JOIN food_groups ON (food_groups.id = foods.food_group_id)
JOIN course_foods ON (course_foods.food_id = foods.id)
JOIN courses ON (courses.id = course_foods.course_id)
WHERE foodnicitys.name = 'mexican';


-- Select every id and price where food is healthy and the price is descending from course_foods, foodnicity, foods, food_groups. Order by food group, health, and then price.


SELECT foods.id AS 'food', price, foodnicitys.id AS 'foodnicity', food_groups.id AS 'food group', course_foods.id AS 'join table'
FROM foods
JOIN foodnicitys ON (foodnicitys.id = foods.foodnicity_id)
JOIN food_groups ON (food_groups.id = foods.food_group_id)
JOIN course_foods ON (course_foods.food_id = foods.id)
WHERE healthy = 1
ORDER BY food_group_id, healthy, price DESC;

SELECT AVG(price) FROM foods;

SELECT COUNT(*) FROM foods;

SELECT kcal FROM foods
ORDER BY kcal DESC
LIMIT 1;

SELECT MAX(kcal) FROM foods;

SELECT MIN(kcal) FROM foods;

SELECT TOTAL(price) FROM foods;
SELECT SUM(price) FROM foods;

SELECT MAX(healthy), * FROM foods;

SELECT AVG(kcal) FROM foods
WHERE healthy = true;

SELECT food_group_id, AVG(kcal)
FROM foods
GROUP BY food_group_id;

SELECT food_group_id, AVG(kcal)
FROM foods
GROUP BY food_group_id
HAVING AVG(kcal) <= 500;

SELECT * FROM foods
JOIN food_groups ON (food_groups.id = foods.food_group_id)
WHERE food_groups.name = 'protein';

SELECT * FROM foods
WHERE food_group_id IN (
    SELECT id, name FROM food_groups
    WHERE name IN ('protein', 'vegetable')
);

SELECT * FROM food_groups
WHERE id = (
    SELECT food_group_id FROM foods
    WHERE id = (
        SELECT food_id FROM course_foods
        WHERE course_id = (
            SELECT id FROM courses
            WHERE name = 'breakfast'
        )
    )
);