export PGPASSWORD='poker_password'
echo "configuring database"
echo "dropping database"
dropdb -U cards_dealer cardstackdb
echo "creating database"
createdb -U cards_dealer cardstackdb
echo "log in to database"
psql -U cards_dealer cardstackdb < ./bin/sql/generation.sql
psql -U cards_dealer cardstackdb < ./bin/sql/card.sql

echo "database configured"