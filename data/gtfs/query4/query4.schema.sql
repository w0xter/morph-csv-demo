DROP TABLE IF EXISTS "agency" CASCADE;
CREATE TABLE agency(agency_id VARCHAR,agency_name VARCHAR,agency_url VARCHAR,agency_phone VARCHAR,PRIMARY KEY (agency_id));
DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(route_id VARCHAR,agency_id VARCHAR,route_short_name VARCHAR,route_long_name VARCHAR,route_desc VARCHAR,PRIMARY KEY (route_id));
