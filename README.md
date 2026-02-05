# AyicoHome - React + TypeScript + Vite

## docker-compose.yml

```yml
services:
  app:
    # build: .
    image: ayico/ayico-home-app:latest
    container_name: ayico-home-app
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /node-modules
    environment:
      - NODE_ENV=development
```

## Run the project

In the terminal (linux) :

```sh
docker compose build --no-cache
docker compose up
```