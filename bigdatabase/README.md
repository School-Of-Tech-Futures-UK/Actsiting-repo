# docker-database

1. Create a database folder in your project then navigate to this folder in the terminal.

2. git clone git@github.com:School-Of-Tech-Futures-UK/docker-database.git

3. Make changes to your sql.

4. Once changes have been done, push the changes to this repo using the following:
git add .
git commit -m "some text"
git push

5. Now if you want to get the latest docker database do the following:
docker pull khaashifriaz/gigstr:gigtag
docker rm --force gigstr-db-container
docker run -d --name gigstr-db-container -p 5432:5432 khaashifriaz/gigstr:gigtag

6. A container is now running in your machine containing the DB.

7. Instead of manually pulling it in, you can incorporate it in your docker compose file, here is an example of compose file snippet:

  server:
    build: ./backend
    container_name: "api_server"   
    ports:
      - 4000:3000
    depends_on:
      - database
    environment:
      - DB_HOSTNAME=gigstr-db-container
      - DB_PASSWORD=gigstr
  database:
    image: khaashifriaz/gigstr:gigtag   
    container_name: "gigstr-db-container"
    environment:
      - POSTGRES_PASSWORD=gigstr
    ports:
      - 5432:5432

