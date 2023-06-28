cmake_minimum_required(VERSION 3.5.1)

set(SOURCES "server.cpp")

FILE(STRINGS "package/collatz.mem" mem)
foreach(source ${mem})
    list(APPEND SOURCES "${source}.cpp")
    list(APPEND SOURCES "${source}.h")
endforeach()

add_executable(collatz_server ${SOURCES})