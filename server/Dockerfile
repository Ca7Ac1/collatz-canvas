FROM ubuntu:22.04

WORKDIR /collatz-server

COPY . .

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        g++         \
        build-essential \
        cmake       \
        libssl-dev  \
    && \
    apt-get clean
