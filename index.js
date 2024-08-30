const app  = require('./config/server');
const port = 3001;

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port} com Express`);
});
