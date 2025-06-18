#!/bin/bash

# === CONFIG ===
CONTAINER_NAME=cloudweave-mongo-api-db-1
DB_NAME=cloudweave

echo "[INFO] Resetting MongoDB in container: $CONTAINER_NAME (DB: $DB_NAME)"

docker exec -i $CONTAINER_NAME mongosh $DB_NAME --eval "
  db.events.deleteMany({});
  db.countries.deleteMany({});
  db.countryresources.deleteMany({});
"

echo "[INFO] MongoDB reset complete."
