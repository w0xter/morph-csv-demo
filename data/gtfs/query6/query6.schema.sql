DROP TABLE IF EXISTS "agency" CASCADE;
CREATE TABLE agency(agency_id VARCHAR,PRIMARY KEY (agency_id));
DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(route_id VARCHAR,agency_id VARCHAR,PRIMARY KEY (route_id));
