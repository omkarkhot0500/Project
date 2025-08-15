# Installation and Setup

- Fork the repo and clone it
  ```bash
  git clone
  ```

## Set up the client side

```bash
cd frontend
npm install
npm run dev
```

## Docker Set up ( Local )

# 1. Clone the project

git clone
cd frontend

# 2. Build the Docker image and run the container

docker-compose up --build

# The app will be available at http://localhost:3000

## Docker Set up ( hub.docker.com )

# Deployment Website (Docker)

This project can be run directly from Docker Hub without building locally.

## Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)
- Make sure Docker is running on your system
- Internet connection (to pull the image)

## Steps to Run

1. **Pull the latest image from Docker Hub**

   ```bash
   docker pull omkarkhot0500/dep-website:latest

   ```

2. **Run the container**

docker run -it -p 3000:3000 omkarkhot0500/dep-website:latest

# The app will be available at http://localhost:3000
