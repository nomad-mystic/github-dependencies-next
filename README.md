# GitHub Dependencies Next
Next.js app to show, update, commit, and push dependency changes to GitHub.

## Development:

> Requires: Docker, Node.js (>=18)

```shell
$ git clone git@github.com:nomad-mystic/github-dependencies-next.git
$ cd ./github-dependencies-next
$ nvm use
$ npm install
```

* Build Images:
```shell
$ make build-development
```

* Start Containers:
```shell
$ make start-development
```

* Stop Containers:
```shell
$ make stop-development  
```

* Remove Containers:
```shell
$ make remove-development  
```

### MongoDB:
Connect to Docker MongoDB container with Compass.
* Download MongoDB Compass
* Open Compass app
* Connect to `mongodb://localhost:27017/`

### Docker:
Helpful commands
* ```$ docker ps``` 
* ```$ docker exec -it development-mongo-dev-1 bash```
* ```$ docker inspect {CONTAINER_NAME}```

### API Endpoints:
* `/api/v1/key`
* `/api/v1/repos`
* `/api/v1/github-user`
* `/api/v1/user`


### Helpful Links:
* https://docs.docker.com/
* https://docs.docker.com/compose/reference/
* https://nextjs.org/docs
* https://react.dev/
* https://expressjs.com/

* MongoDB:
  * https://www.mongodb.com/try/download/compass
