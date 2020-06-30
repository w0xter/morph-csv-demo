DROP TABLE IF EXISTS "stops" CASCADE;
CREATE TABLE stops(stop_id VARCHAR,stop_code VARCHAR,stop_name VARCHAR,stop_desc VARCHAR,stop_lat DECIMAL(40,15),stop_lon DECIMAL(40,15),zone_id VARCHAR,stop_url VARCHAR,location_type INT,parent_station VARCHAR,stop_timezone VARCHAR,wheelchair_boarding INT,PRIMARY KEY (stop_id));
