DROP TABLE IF EXISTS "stop_times" CASCADE;
CREATE TABLE stop_times(trip_id VARCHAR,arrival_time VARCHAR,departure_time VARCHAR,stop_id VARCHAR,PRIMARY KEY (arrival_time,stop_id,trip_id));
DROP TABLE IF EXISTS "trips" CASCADE;
CREATE TABLE trips(trip_id VARCHAR,PRIMARY KEY (trip_id));
