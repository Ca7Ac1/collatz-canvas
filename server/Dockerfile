FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        g++         \
        build-essential \
        cmake       \
        libssl-dev  \
    && \
    apt-get clean

WORKDIR /collatz

RUN mkdir -p ./server/src

COPY ./CMakeLists.txt ./
COPY ./server/src ./server/src

# RUN cmake