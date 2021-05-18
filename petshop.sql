CREATE TABLE pets (
    id serial,
    name TEXT NOT NULL,
    kind TEXT NOT NULL,
    age INTEGER NOT NULL   
);

INSERT into pets (name, kind, age)
VALUES ('fido','rainbow', 7);

INSERT INTO pets(name,kind,age)
VALUES('Buttons', 'snake', 5);