#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Check endpoint at /app/ that returns 200 OK
app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});


// /app/rps/ returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})


// returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})


// http://localhost:5000/app/rps/play?shot=rock
//accepts request bodies of forms URLEncoded or JSON
//return {"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot))).end();
})


// http://localhost:5000/app/rps/play?shot=spock
// not a post request bc url-encoded data goes inside the url
//so no need to post in a different place
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot))).end();
})


//need a post request for JSON because post requests are sent along the wire in JSON
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

/*
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot))).end();
})


app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot))).end();
})
*/

//if an endpoint does not exist, we catch the error
app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
})

app.listen(port);