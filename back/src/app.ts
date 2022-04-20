import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
}

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(Controllers: Function[]) {
    this.app = express();
    this.app.options('*', cors())
    this.app.use(cors(corsOptions));
    this.env = 'development';
    this.port = 3000;

    this.initializeRoutes(Controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeRoutes(controllers: Function[]) {
    useExpressServer(this.app, {
      cors: {
        origin: '*',
        credentials: true,
      },
      controllers: controllers,
      defaultErrorHandler: false,
    });
  }
}

export default App;
