-- 1
SELECT COUNT(*) FROM cats;

-- 2
SELECT name, MIN(birth_year) FROM cats;
SELECT MAX(birth_year), name FROM cats;

SELECT name, MIN(birth_year), MAX(birth_year)
FROM cats;