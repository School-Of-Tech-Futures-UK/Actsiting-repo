FROM postgres
ENV POSTGRES_USER gigstr
ENV POSTGRES_PASSWORD gigstr
ENV POSTGRES_DB gigstr

COPY init.sql group1.sql group2.sql group3.sql /docker-entrypoint-initdb.d/