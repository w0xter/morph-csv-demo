DROP TABLE IF EXISTS "gene2go" CASCADE;CREATE TABLE gene2go(GeneID VARCHAR,GO_ID VARCHAR,PRIMARY KEY (GO_ID,GeneID));DROP TABLE IF EXISTS "gene_info" CASCADE;CREATE TABLE gene_info(tax_id VARCHAR,GeneID VARCHAR,Symbol VARCHAR,description VARCHAR);DROP TABLE IF EXISTS "homologene" CASCADE;CREATE TABLE homologene(hid VARCHAR,PRIMARY KEY (hid));DROP TABLE IF EXISTS "genage_models" CASCADE;CREATE TABLE genage_models(GenAge_ID VARCHAR,name_gene VARCHAR,PRIMARY KEY (GenAge_ID));DROP TABLE IF EXISTS "genage_human" CASCADE;CREATE TABLE genage_human(GenAge_ID VARCHAR,PRIMARY KEY (GenAge_ID));DROP TABLE IF EXISTS "wbgeneids" CASCADE;CREATE TABLE wbgeneids(gene_id VARCHAR,symbol VARCHAR);DROP TABLE IF EXISTS "cutinteractions" CASCADE;CREATE TABLE cutinteractions(WBInteractionID VARCHAR,Interaction_type VARCHAR,Interaction_subtype VARCHAR,Interactor1 VARCHAR,Interactor2 VARCHAR,PRIMARY KEY (WBInteractionID));DROP TABLE IF EXISTS "wbphenotype_association" CASCADE;CREATE TABLE wbphenotype_association(gene_id VARCHAR,phenotype VARCHAR,variant VARCHAR);DROP TABLE IF EXISTS "wbgene_association" CASCADE;CREATE TABLE wbgene_association(gene_id VARCHAR,GO_id VARCHAR,evidence VARCHAR);DROP TABLE IF EXISTS "division" CASCADE;CREATE TABLE division(division_id VARCHAR,division_name VARCHAR,PRIMARY KEY (division_id));DROP TABLE IF EXISTS "gencode" CASCADE;CREATE TABLE gencode(genetic_code_id VARCHAR,name VARCHAR,cde VARCHAR,PRIMARY KEY (genetic_code_id));DROP TABLE IF EXISTS "nodes" CASCADE;CREATE TABLE nodes(tax_id VARCHAR,parent_tax_id VARCHAR,division_id VARCHAR,genetic_code_id VARCHAR,mitochondrial_genetic_code_id VARCHAR,PRIMARY KEY (tax_id));DROP TABLE IF EXISTS "hgnc" CASCADE;CREATE TABLE hgnc(HGNC_ID VARCHAR,Approved_Symbol VARCHAR,PRIMARY KEY (HGNC_ID));