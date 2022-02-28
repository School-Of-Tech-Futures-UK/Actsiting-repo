# docker-database

Pull this repo into existing project:
git pull https://github.com/School-Of-Tech-Futures-UK/docker-database.git

Make changes to your sql file.

Then when you're done, push the changes to github:

To pull latest docker image, do the following:

docker pull khaashifriaz/gigstr:gigtag
docker run -d --name gigstr-db-container -p 5432:5432 khaashifriaz/gigstr:gigtag

Docker DB is now running on your machine

