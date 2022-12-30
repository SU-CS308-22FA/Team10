const { spawn } = require('child_process');
const players = []; // Store readings

const sensor = spawn('python', ['player.py']);
sensor.stdout.on('data', function(data) {

    // convert Buffer object to Float
    players.push(parseFloat(data));
    console.log(players);
});