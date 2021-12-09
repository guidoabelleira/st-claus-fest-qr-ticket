const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log('%s listening at 3001, mi rey 💲✨😂'); // eslint-disable-line no-console
  });
});
