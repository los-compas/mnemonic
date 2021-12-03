const express = require('express');
const cors = require('cors')
const path = require('path');
const indexRouter = require('./main/routes');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
