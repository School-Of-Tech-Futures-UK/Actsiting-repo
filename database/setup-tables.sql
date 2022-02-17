CREATE TABLE Listed_Venues (
   venue_id INTEGER GENERATED ALWAYS AS IDENTITY,
   venue_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(venue_id)
);

CREATE TABLE Listed_Venues (
   venue_id INTEGER GENERATED ALWAYS AS IDENTITY,
   venue_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(venue_id)
);

SELECT * FROM Listed_Venues

INSERT INTO Listed_Venues(venue_name) VALUES ('London')
