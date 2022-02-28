--team 2
CREATE TABLE event (
  event_id SERIAL,
  venue_id INTEGER,
  "date" DATE NOT NULL,
  event_name VARCHAR NOT NULL,
  event_description VARCHAR NOT NULL,
  event_image VARCHAR NOT NULL,
  artist_name VARCHAR NOT NULL,
  artist_email VARCHAR NOT NULL,
  genre VARCHAR, -- is there a type to choose one of x options?
  "status" VARCHAR NOT NULL DEFAULT 'pending', -- pending/confirmed/denied
  PRIMARY KEY(event_id),
  CONSTRAINT fk_venue
    FOREIGN KEY (venue_id)
    REFERENCES Listed_Venues(venue_id)
);


