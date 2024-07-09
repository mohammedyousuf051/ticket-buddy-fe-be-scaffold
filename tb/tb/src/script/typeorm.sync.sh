#!/usr/bin/env sh

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi
yarn typeorm:cli migration:generate -d src/config/data-source src/migrations/${1}
