build:
	docker compose -f docker-compose.dev.yml build $(c)
start:
	docker compose -f docker-compose.dev.yml up -d $(c)
logs:
	docker compose -f docker-compose.dev.yml logs $(c)
stop:
	docker compose -f docker-compose.dev.yml stop $(c)