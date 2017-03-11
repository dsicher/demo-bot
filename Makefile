NAME:=prototon
SHELL:=/bin/bash

.PHONY: all build down stop clean clean-docker-procs docker-compose-up up run tail

all: down clean up

down stop:
	docker-compose down

clean: clean-docker-procs clean-docker-images

clean-docker-procs:
	if [[ $$(docker ps -qf status=exited) ]]; then docker rm $$(docker ps -qf status=exited); fi

clean-docker-images:
	if [[ $$(docker images -qf 'dangling=true') ]]; then docker rmi -f $$(docker images -qf 'dangling=true'); fi

build:
	docker-compose build

docker-compose-up:
	docker-compose -f docker-compose.yml up --remove-orphans

up run: down build docker-compose-up
