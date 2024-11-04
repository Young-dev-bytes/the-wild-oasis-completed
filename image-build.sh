
# # docker build -t younghub/the-wild-oasis-completed:0.0.1-SNAPSHOP .

# docker run -d -p 5173:80 younghub/the-wild-oasis-completed:0.0.1-SNAPSHOP

VERSION=0.0.1-SNAPSHOP
docker build -f Dockerfile -t the-wild-oasis-completed:$VERSION .
docker tag the-wild-oasis-completed:$VERSION younghub/the-wild-oasis-completed:$VERSION
docker push younghub/the-wild-oasis-completed:$VERSION