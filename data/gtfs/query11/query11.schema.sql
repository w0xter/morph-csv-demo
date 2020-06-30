DROP TABLE IF EXISTS "calendar" CASCADE;
CREATE TABLE calendar(service_id VARCHAR,start_date DATE,end_date DATE,PRIMARY KEY (service_id));
DROP TABLE IF EXISTS "calendar_dates" CASCADE;
CREATE TABLE calendar_dates(service_id VARCHAR,PRIMARY KEY (service_id));
DROP TABLE IF EXISTS "trips" CASCADE;
CREATE TABLE trips(service_id VARCHAR,trip_id VARCHAR,PRIMARY KEY (trip_id));
