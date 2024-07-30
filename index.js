const express = require('express');
const userRoutes = require('./src/routes/users');
const os = require('os');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`API está rodando em http://localhost:${port}`);
});

app.get('/system', (req, res) => {
    const systemInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: os.uptime(),
    };
    res.json(systemInfo);
});
