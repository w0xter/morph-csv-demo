DROP TABLE IF EXISTS "product" CASCADE;CREATE TABLE product(nr INT,label VARCHAR,producer INT,propertyNum1 INT,propertyNum2 INT,propertyTex1 VARCHAR,PRIMARY KEY (nr));DROP TABLE IF EXISTS "producttypeproduct" CASCADE;CREATE TABLE producttypeproduct(product INT,productType INT,PRIMARY KEY (productType,product));DROP TABLE IF EXISTS "productfeatureproduct" CASCADE;CREATE TABLE productfeatureproduct(product INT,productFeature INT,PRIMARY KEY (productFeature,product));