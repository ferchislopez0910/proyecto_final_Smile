import express from 'express';
import productRoutes from './routes/routeProducts'

const app = express();

app.use(productRoutes)

export default app