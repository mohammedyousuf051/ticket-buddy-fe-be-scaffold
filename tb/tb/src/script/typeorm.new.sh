#!/usr/bin/env sh

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi
yarn typeorm:cli migration:create src/migrations/${1}
