DROP TABLE IF EXISTS "stops" CASCADE;
CREATE TABLE stops(stop_id VARCHAR,stop_desc VARCHAR,stop_lat DECIMAL(40,15),stop_lon DECIMAL(40,15),wheelchair_boarding INT);
