DROP TABLE IF EXISTS "calendar" CASCADE;
CREATE TABLE calendar(service_id VARCHAR,PRIMARY KEY (service_id));
DROP TABLE IF EXISTS "calendar_dates" CASCADE;
CREATE TABLE calendar_dates(service_id VARCHAR,date DATE,exception_type BOOLEAN,PRIMARY KEY (service_id,date));
DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(route_id VARCHAR,PRIMARY KEY (route_id));
DROP TABLE IF EXISTS "trips" CASCADE;
CREATE TABLE trips(route_id VARCHAR,service_id VARCHAR,trip_id VARCHAR,PRIMARY KEY (trip_id));
