-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS course_foods;
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS food_groups;
DROP TABLE IF EXISTS foodnicitys;

CREATE TABLE foodnicitys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE food_groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

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
    foodnicity_id VARCHAR(100) REFERENCES foodnicitys(id) ON DELETE CASCADE NOT NULL,
    food_group_id VARCHAR(100) REFERENCES food_groups(id) ON DELETE SET NULL,
    healthy BOOLEAN
    -- FOREIGN KEY (foodnicity_id) REFERENCES foodnicitys(id)
);

CREATE TABLE course_foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    food_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

INSERT INTO foodnicitys (name)
VALUES
('american'),
('mexican'),
('asian'),
('european');

INSERT INTO food_groups (name)
VALUES
('protein'),
('fruit'),
('vegetable'),
('grain'),
('dairy');

INSERT INTO courses (name)
VALUES
('breakfast'),
('lunch'),
('supper'),
('dessert'),
('snack');

INSERT INTO foods (name, temp, kcal, price, foodnicity_id, food_group_id, healthy)
VALUES
('burrito', 'hot', 700, 15.56, 2, 1, true),
('filet mignon', 'hot', 1400, 45.49, 1, 1, true),
('tom yum goong', 'hot', 650, 7.22, 3, 1, false),
('orange', 'cold', 180, 2.30, 1, 2, true),
('donut', 'hot', 500, 3.00, 1, 4, false),
('spinach', 'cold', 5, 4.44, 4, 3, true);

INSERT INTO course_foods (course_id, food_id)
VALUES
(2,2),
(1,4),
(3,2),
(5,1),
(1,1),
(4,3);