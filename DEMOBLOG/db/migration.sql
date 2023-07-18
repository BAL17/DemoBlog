DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author varchar(50),
    blogs_title varchar(255),
    blogs_desc text,
    blogs_body text
);
