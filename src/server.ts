import express from 'express';
import cors from 'cors';
import wallpapersRoutes from './routes/wallpapers_routes.js';

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // Inicia o servidor na porta 3000
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/wallpapers", wallpapersRoutes);

export default app;