CREATE TABLE Listed_Venues (
venue_id INTEGER GENERATED ALWAYS AS IDENTITY,
venue_name VARCHAR(255) NOT NULL,
venue_capacity INTEGER NOT NULL,
venue_address VARCHAR(500) NOT NULL,
venue_geolocation VARCHAR(255) NOT NULL,
venue_owner_email VARCHAR(255) NOT NULL,
venue_start_date DATE NOT NULL,
venue_end_date DATE NOT NULL,
PRIMARY KEY(venue_id)
);