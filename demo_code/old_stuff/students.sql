DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
);

CREATE UNIQUE INDEX idx_unique_students_fn_ln ON students (first_name, last_name);

INSERT INTO students (first_name, last_name)
VALUES
('Aaron', 'Pollock'),
('Andres', 'Garcia'),
('Andrew', 'Ly'),
('Austin', 'Hall'),
('Austin', 'Park'),
('Kiante', 'Moore'),
('Brian', 'Carmichael'),
('Cindy', 'Li'),
('Hao', 'Xu'),
('Harold', 'Mejia-Torres'),
('Nur', 'Unlu'),
('Jasmine', 'Truong'),
('Joel', 'Abitzen'),
('Johnny', 'Ha'),
('Jordan', 'Cardinez'),
('Ryou', 'Nishiyama'),
('Joshua', 'Hardin'),
('Justin', 'Kim'),
('Khobe', 'Arzadon'),
('Samuel', 'Friedman'),
('Taylor', 'Rossmann'),
('Elaine', 'Fan'),
('Veronica', 'Flatto');