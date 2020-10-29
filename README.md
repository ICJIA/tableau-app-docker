# ICJIA Tableau Dashboards Containerized

Each subdirectory contains a minimal Node.js app serving a Tableau dashboard inside iframe and a Dockerfile to containerize the app.

## Build, then push to Docker hub.

In app directory with `Dockerfile`:

```
docker build --tag icjia/[filename] .
```

```
docker push icjia/[filename]
```
