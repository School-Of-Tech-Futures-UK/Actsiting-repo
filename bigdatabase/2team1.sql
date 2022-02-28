--team 1
CREATE TABLE venues (
    venue_id SERIAL PRIMARY KEY,
    venue_name VARCHAR(100) NOT NULL,
    capacity INTEGER NOT NULL
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_description VARCHAR(255),
    artist_name VARCHAR(100) NOT NULL,
    artist_email VARCHAR(100) NOT NULL,
    venue_id INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    type_of_event VARCHAR(100) NOT NULL,
    CONSTRAINT fk_venue FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

CREATE TABLE registrations (
    registration_id SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    event_id INTEGER NOT NULL,
    CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    registration_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    rating INTEGER,
    review_text VARCHAR(255),
    CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(event_id),
    CONSTRAINT fk_registration FOREIGN KEY (registration_id) REFERENCES registrations(registration_id)
);

-- --team 3
-- CREATE TABLE Listed_Venues (
-- venue_id INTEGER GENERATED ALWAYS AS IDENTITY,
-- venue_name VARCHAR(255) NOT NULL,
-- venue_capacity INTEGER NOT NULL,
-- venue_address VARCHAR(500) NOT NULL,
-- venue_geolocation VARCHAR(255) NOT NULL,
-- venue_owner_email VARCHAR(255) NOT NULL,
-- venue_start_date DATE NOT NULL,
-- venue_end_date DATE NOT NULL,
-- PRIMARY KEY(venue_id)
-- );

INSERT INTO
    Listed_Venues (venue_name, venue_capacity, venue_address, venue_geolocation, venue_owner_email, venue_start_date, venue_end_date)
VALUES
    ('Birmingham Utilita Arena', 2000, 'King Edwards Rd, Birmingham, B1 2AA','XXX', 'birmingham@utilita.com','2022-02-12','2022-04-12'),
    ('Wembley', 80000, 'Bridge Road, London, HA9 9AA', 'XXX', 'wembleyevents@wembley.com', '2022-03-17', '2022-05-17'),
    ('O2', 100000, 'Peninsula Square, London SE10 0DX', 'XXX', 'brokenroof@o2.com', '2022-04-01', '2023-01-11'),
    ('AON', 20000, 'Carrington, Manchester M31 4BH','XXX', 'aonstadium@aon.com', '2022-01-02', '2023-03-31');

-- --team 2
-- CREATE TABLE event (
--   event_id SERIAL,
--   venue_id INTEGER,
--   "date" DATE NOT NULL,
--   event_name VARCHAR NOT NULL,
--   event_description VARCHAR,
--   event_image VARCHAR,
--   artist_name VARCHAR NOT NULL,
--   artist_email VARCHAR NOT NULL,
--   genre VARCHAR, -- is there a type to choose one of x options?
--   "status" VARCHAR DEFAULT 'pending', -- pending/confirmed/denied
--   PRIMARY KEY(event_id),
--   CONSTRAINT fk_venue
--     FOREIGN KEY (venue_id)
--     REFERENCES Listed_Venues(venue_id)
-- );

INSERT INTO
    event(venue_id, "date", event_name, event_description, event_image, artist_name, artist_email, genre, "status")
VALUES
    (1, '2022-03-05', 'Andre Ice Cold', 'Outkast Show', 'https://numero.twic.pics/images/article/homepage/full/push-cover-andre3000-numero-magazine.jpg?twic=v1/cover=16:10/resize=1900', 'Outkast', 'outkast@gigstr.com', 'Hip Hop','confirmed' ),
    (4, '2022-02-02', 'The Madness RETURNS', 'Madness Show', 'https://m.media-amazon.com/images/M/MV5BYzIwZTk3ZmMtYzkyOS00ZjMyLTgxZGUtMjU2YmQ0YzIxNjRkXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg', 'Madness', 'madness@gigstr.com','Two-tone','denied'),
    (2, '2022-03-21', 'Find Your Nearest Song Machine', 'Gorillaz', 'https://www.rollingstone.com/wp-content/uploads/2020/01/Gorillaz.jpg?resize=1800,1200&w=1200', 'Gorillaz', 'gorillaz@gigstr.com', 'Hip-Hop', 'confirmed'),
    (1,'2022-03-12','Come Around Sundown', 'Kings of Leon', 'https://m.media-amazon.com/images/I/81qABwLq4zL._AC_SL1500_.jpg', 'Kings of Leon', 'kingsofleon@gigstr.com', 'Rock and Roll', 'pending'),
    (3, '2022-05-08', 'My Broken Roof', 'Coldplay Final Tour', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/ColdplayBBC071221_%2853_of_53%29_%2851740659597%29.jpg/1600px-ColdplayBBC071221_%2853_of_53%29_%2851740659597%29.jpg', 'Coldplay', 'coldplay@gigstr.com', 'Indie', 'confirmed'),
    (4, '2022-06-19', '90s Rock N Roll', 'Live Music', 'https://townsquare.media/site/295/files/2020/09/90s1.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89', 'The Monkeys', 'monkeys@gigstr.com', 'Rock and Roll', 'confirmed');

-- INSERT INTO
--     venues (venue_name, capacity)
-- VALUES
--     ('Birmingham Utilita Arena', 2000),
--     ('Wembley', 3000),
--     ('O2', 100000),
--     ('AON', 20000);

-- INSERT INTO
--     events (
--         event_name,
--         event_description,
--         artist_name,
--         artist_email,
--         venue_id,
--         "date",
--         "location",
--         type_of_event
--     )
-- VALUES
--     (
--         'Andre Ice Cold',
--         'OutKast show',
--         'OutKast',
--         'outkast@gigstr.com',
--         1,
--         '2022-02-28',
--         'Birmingham',
--         'Hip Hop'
--     ),
--     (
--         'The Madness RETURNS',
--         'Madness SHOW',
--         'Madness',
--         'madness@gigstr.com',
--         2,
--         '2022-04-23',
--         'London',
--         'Hip Hop'
--     );

-- INSERT INTO
--     registrations ("name", "user_email", event_id)
-- VALUES
--     ('Y C', 'y@gigstr.com', 1),
--     ('H S', 'h@gigstr.com', 1),
--     ('O P', 'o@gigstr', 2),
--     ('H P', 'h@gigstr.com', 2),
--     ('T S', 't@gigstr.com', 1);

-- INSERT INTO
--     reviews (registration_id, event_id, rating, review_text)
-- VALUES
--     (
--         2,
--         1,
--         5,
--         'Outkast are possibly the greatest men to ever walk this planet'
--     ),
--     (4, 2, 4, 'This show LITERALLY drove me mad');