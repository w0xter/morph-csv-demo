DROP TABLE IF EXISTS "gene2go" CASCADE;CREATE TABLE gene2go(GeneID VARCHAR,GO_ID VARCHAR,Evidence VARCHAR,Category VARCHAR);ALTER TABLE "gene2go" ADD COLUMN go_term VARCHAR;UPDATE "gene2go" SET go_term=concat('http://purl.obolibrary.org/obo/',replace(go_id,':','_'));