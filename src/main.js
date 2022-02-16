const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
require('dotenv').config()

const roomsRouts = require('./routes/rooms.routes');
const bookingRouts = require('./routes/booking-records.routes');

app.use(cors());
app.use(express.json());

app.use('/rooms', roomsRouts);
app.use('/booking-records', bookingRouts);

http.listen(process.env.SERVER_PORT, () => {
  console.log(`[server] listening on port :${ process.env.SERVER_PORT }`);
});