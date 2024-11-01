#!/bin/bash
set -e
cp .env.sample .env

docker run -it --rm -v "$PWD":/app -w /app node:20.18.0 bash -c "npm install -g npm@10.9.0 && npm install"


mkdir -p ./volumes/grafana
mkdir -p ./volumes/loki/config
mkdir -p ./volumes/promtail
mkdir -p ./volumes/prometheus/config
mkdir -p ./volumes/postgres

# move config file
cp ./sample/local-config.yaml volumes/loki/config/local-config.yaml
cp ./sample/prometheus.yml volumes/prometheus/config/prometheus.yml
cp ./sample/promtail.yml volumes/promtail/promtail.yml


docker compose up -d

docker compose logs -f nestjs_app