# ticket-buddy-fe-be-scaffold
This is scaffold repository for both FE and BE developmet. Only authentication part is handled in this initial stage so far. Keycloak has been used and this repo does not handled any data presistance for now
- this scoffold is created to get started by developing features on top of it and separate it later
- this has handling only authentication and not any data presistance

# Keycloak is used for SSO
Used keycloak docker image direclty for local setup, for now data presistance havent handled, 
Keycloak needs to be run when running the BE and FE, run this sh
`docker run -p 8090:8080 -e KEYCLOAK_ADMIN=a
dmin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:25.0.
0 start-dev` 

# Backend Setup
NodeJS express has been used as a server
run this cmd to install deps
`npm run i`

nodemon has been used to watch changes. To start server, run this cmd
`nodemon index.js`

# Frontend Setup
Vite+React has been used for FE setup, right now FE is just loading the keycloak login screen and authenticating the user 
run this cmd to to install deps
`npm install i`

run this to start local 
`npm run dev`


