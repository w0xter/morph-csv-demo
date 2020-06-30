DROP TABLE IF EXISTS "calendar" CASCADE;
CREATE TABLE calendar(service_id VARCHAR,PRIMARY KEY (service_id));
DROP TABLE IF EXISTS "calendar_dates" CASCADE;
CREATE TABLE calendar_dates(service_id VARCHAR,date DATE,exception_type BOOLEAN,PRIMARY KEY (service_id,date));
