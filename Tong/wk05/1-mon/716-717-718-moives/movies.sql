CREATE TABLE movies (
    id SERIAL4 PRIMARY KEY,
    imdbID VARCHAR(100),
    Title VARCHAR(100),
    Year SERIAL4,
    Poster VARCHAR(400)
);


#<PG::Result:0x00007f9ea80e9b58 status=PGRES_TUPLES_OK ntuples=0 nfields=5 cmd_tuples=0>

#<PG::Result:0x00007f9ea80a7848 status=PGRES_TUPLES_OK ntuples=1 nfields=5 cmd_tuples=1>