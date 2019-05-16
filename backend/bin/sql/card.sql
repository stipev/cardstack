CREATE TABLE card_(
    id             SERIAL PRIMARY KEY,
    receivedDate   TIMESTAMP NOT NULL,
    "generationId" INTEGER,
    FOREIGN KEY ("generationId") REFERENCES generation(id)
    );