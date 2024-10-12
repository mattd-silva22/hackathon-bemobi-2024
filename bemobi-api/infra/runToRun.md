docker build -t bemobi-db .

npx prisma db push

docker run -d -p 5432:5432 --name my-bemobi-db bemobi-db-db
