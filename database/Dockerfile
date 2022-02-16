# - create docker file
# - start from postgres db and copy/run a scrpit that places data inide
# - set docker to default start command to postgress db

FROM alpine:latest

RUN apk add --update postgresql-client

# Set WORKDIR as default target folder
RUN mkdir -p /scripts
WORKDIR /scripts

# Then use relative paths inside WORKDIR
COPY ./*.sql ./
COPY ./*.sh ./
RUN chmod a+x *.sh

CMD ["./run-all-sql.sh", "my-postgres"]
