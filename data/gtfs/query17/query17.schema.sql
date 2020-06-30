DROP TABLE IF EXISTS "frequencies" CASCADE;
CREATE TABLE frequencies(trip_id VARCHAR,start_time VARCHAR,end_time VARCHAR,PRIMARY KEY (trip_id,start_time));
DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(route_id VARCHAR,route_short_name VARCHAR,route_type INT,PRIMARY KEY (route_id));
DROP TABLE IF EXISTS "trips" CASCADE;
CREATE TABLE trips(route_id VARCHAR,trip_id VARCHAR,PRIMARY KEY (trip_id));
