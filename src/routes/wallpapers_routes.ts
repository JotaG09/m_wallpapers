import express from 'express'; // Importa o Express
const router = express.Router();    // Cria um roteador do Express
import wallpapersController from "../controllers/wallpapers_controllers.js";
import {adminOnly} from "../middlewares/auth_middleware.js"
 // Importa o controlador de produtos

router.get("/",wallpapersController.getAllWallpapers); // Rota inicial para todos os wallpapers
router.get("/:id",wallpapersController.getWallpaperById);
router.post("/",adminOnly, wallpapersController.createWallpaper);
router.delete("/:id",adminOnly,wallpapersController.deleteWallpaper);
router.put("/:id",adminOnly,wallpapersController.updateWallpaper);

export default router; // Exporta o roteador'