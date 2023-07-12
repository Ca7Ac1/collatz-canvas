FROM ubuntu:22.04

WORKDIR /collatz

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        g++         \
        build-essential \
        cmake       \
        libssl-dev  \
    && \
    apt-get clean

RUN mkdir -p ./server/src

COPY ./CMakeLists.txt ./
COPY ./server/src ./server/src
