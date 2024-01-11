PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS courses;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR UNIQUE NOT NULL,
    temp VARCHAR(10),
    kcal INTEGER,
    price DECIMAL(4,2) NOT NULL,
    course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
    foodnicity VARCHAR(100) NOT NULL,
    food_group VARCHAR(100),
    healthy BOOLEAN
    -- FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL
);

INSERT INTO courses (name)
VALUES
('breakfast'),
('lunch'),
('supper'),
('dessert'),
('snack');

INSERT INTO foods (name, temp, kcal, price, course_id, foodnicity, food_group, healthy)
VALUES
('burrito', 'hot', 700, 15.56, 2, 'mexican', 'protein', true),
('filet mignon', 'hot', 1400, 45.49, 3, 'american', 'protein', true),
('tom yum goong', 'hot', 650, 7.22, 2, 'asian', 'protein', false),
('orange', 'cold', 180, 2.30, 5, 'american', 'fruit', true),
('donut', 'hot', 500, 3.00, 1, 'american', 'grain', false),
('spinach', 'cold', 5, 4.44, 1, 'european', 'vegetable', true);