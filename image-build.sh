#!/bin/sh

# Define variables for version, image name, and Docker username
VERSION=0.0.1-SNAPSHOP
IMAGE_NAME=the-wild-oasis-completed
DOCKER_USER=younghub

# Build the Docker image
docker build -f Dockerfile -t $IMAGE_NAME:$VERSION .

# Tag the Docker image
docker tag $IMAGE_NAME:$VERSION $DOCKER_USER/$IMAGE_NAME:$VERSION

# Ask if the user wants to push the Docker image to the repository
read -p "Do you want to push the Docker image to the repository? (y/n): " PUSH_IMAGE

if [ "$PUSH_IMAGE" = "y" ]; then
  # Push the Docker image to the repository
  docker push $DOCKER_USER/$IMAGE_NAME:$VERSION

  # Run the Docker container after pushing the image
  docker run -d -p 5173:80 $DOCKER_USER/$IMAGE_NAME:$VERSION
else
  echo "Docker image push skipped."
fi