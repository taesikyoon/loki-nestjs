# # 데이터베이스 테이블 생성
mv .env.sample .env

docker run -it --rm -v "$PWD":/app -w /app node:20.18.0 bash -c "npm install"

# npm run migration:run

# # 임의 데이터 삽입
# npm run seed:run

# # NestJS 실행
# npm run start

#!/bin/bash

mkdir -p ./volumes/grafana
mkdir -p ./volumes/loki/config
mkdir -p ./volumes/promtail
mkdir -p ./volumes/prometheus/config
mkdir -p ./volumes/postgres

# move config file
mv ./sample/local-config.ymal volumes/loki/config/local-config.ymal
mv ./sample/prometheus.yml volumes/prometheus/config/prometheus.yml
mv ./sample/promtail.yml volumes/promtail/promtail.yml


docker compose up -d