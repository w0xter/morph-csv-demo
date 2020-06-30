DROP TABLE IF EXISTS "stops" CASCADE;
CREATE TABLE stops(stop_id VARCHAR,stop_name VARCHAR,location_type INT,parent_station VARCHAR,PRIMARY KEY (stop_id));
