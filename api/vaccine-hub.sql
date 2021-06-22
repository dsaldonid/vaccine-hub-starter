-- write a script that prompts the user for confirmation to delete and recreate the vaccine_hub database. Then write SQL to drop the vaccine_hub database, create a fresh one, connect to it, and run the vaccine-hub-schema.sql script.
\echo 'Delete and recreate vaccine db'
\prompt 'Return for yes or control-C to cancel > ' answer

-- drop our db and recreate it
drop database vaccine_hub;
create database vaccine_hub;

-- connect to our db
\connect vaccine_hub;

-- execute vaccine-hub schema script
\i vaccine-hub-schema.sql