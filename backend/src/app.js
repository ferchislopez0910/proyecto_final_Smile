import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJSDoc(options)

import productRoutes from './routes/routeProducts'
import providersRoutes from './routes/routeProviders'

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(productRoutes)
app.use(providersRoutes)

export default app