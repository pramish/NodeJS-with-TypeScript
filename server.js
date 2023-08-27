const  { createServer } =  require("http");
const  {Config} =  require("./config/config");
const  {app} =  require("./index");

const startExpressServer = (port) => {
    const expressServer = createServer(app);

    expressServer.listen(port, () => {
        console.log(`
        ################################################
        🛡️  Server listening on port: ${port} in ${Config.ENVIRONMENT} environment🛡️
        ################################################
      `);
    });
};

startExpressServer(Config.PORT);