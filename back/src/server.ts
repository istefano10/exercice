import App from '@/app';
import { JokesController } from '@controllers/jokes.controller';

const app = new App([JokesController]);

app.listen();
