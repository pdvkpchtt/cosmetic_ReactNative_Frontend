CREATE TABLE user {
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    login VARCHAR(100) NOT NULL,
    password VARCHAR(100)
}

CREATE TABLE bird {
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    sound_url VARCHAR(100) NOT NULL
}

CREATE TABLE favorites {
    FOREIGN KEY user_id REFERENCES user(id),
    FOREIGN KEY bird_id REFERENCES user(id),
    PRIMARY KEY id PRIMARY KEY (user_id, bird_id)
    count int NOT NULL,
}

CREATE TABLE question {
    id SERIAL PRIMARY KEY,
    question VARCHAR(100) NOT NULL,
    option1 VARCHAR(100) NOT NULL,
    option2 VARCHAR(100) NOT NULL,
    option3 VARCHAR(100) NOT NULL,
    answer VARCHAR(100) NOT NULL
}

CREATE TABLE quiz {
    id SERIAL PRIMARY KEY,
    FOREIGN KEY user_id REFERENCES user(id),
    FOREIGN KEY question_id REFERENCES question(id),
    count int NOT NULL
}