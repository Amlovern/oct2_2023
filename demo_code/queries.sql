SELECT * FROM foods;

SELECT name, price, course FROM foods;

SELECT * FROM foods
WHERE foodnicity = 'american';

SELECT * FROM foods 
WHERE kcal < 1000 
OR healthy = 1;