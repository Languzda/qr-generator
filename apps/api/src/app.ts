import express from 'express';

import qrRoutes from './routes/qrRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/qr', qrRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
