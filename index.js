require('dotenv')
    .config();
const express = require('express');
// const routes = require('./routes');

// require('./services/passport');

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});
