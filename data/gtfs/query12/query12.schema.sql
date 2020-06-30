DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(route_id VARCHAR,route_long_name VARCHAR,PRIMARY KEY (route_id));
DROP TABLE IF EXISTS "stop_times" CASCADE;
CREATE TABLE stop_times(trip_id VARCHAR,arrival_time VARCHAR,stop_id VARCHAR,PRIMARY KEY (arrival_time,trip_id,stop_id));
DROP TABLE IF EXISTS "stops" CASCADE;
CREATE TABLE stops(stop_id VARCHAR,stop_name VARCHAR,wheelchair_boarding INT,PRIMARY KEY (stop_id));
DROP TABLE IF EXISTS "trips" CASCADE;
CREATE TABLE trips(route_id VARCHAR,trip_id VARCHAR,PRIMARY KEY (trip_id));
