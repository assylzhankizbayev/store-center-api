const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());

// routes
const usersRoute = require('./routes/users.route');
const alarmRoute = require('./routes/alarm.route');
const shopRoute = require('./routes/shop.route');

app.use('/users', usersRoute);
app.use('/alarm', alarmRoute);
app.use('/shop', shopRoute);

app.listen(PORT, () => console.log(`app is started on PORT: ${PORT}`));
