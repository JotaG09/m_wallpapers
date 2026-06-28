import {type Request,type Response} from "express";
import wallpapersService from '../services/wallpapers_service.js';

const getAllWallpapers = async (req: Request, res: Response) => {
    try {
        const result = await wallpapersService.getAllWallpapers();
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar wallpapers' });
    }
};

const getWallpaperById = async (req : Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await wallpapersService.getWallpaperById(id);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar wallpaper' });
    }
};

const createWallpaper = async (req: Request, res: Response) => {
    const {title, category, resolution, fileName} = req.body;
    if (!fileName) return res.status(400).json({message: "Nome do arquivo é obrigatório"});
    const result = await wallpapersService.createWallpaper({title, category, resolution, fileName});
    res.status(result.status).json(result.data);
};

const deleteWallpaper = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await wallpapersService.deleteWallpaper(id);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar wallpaper' });
    }
};

const updateWallpaper = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const {title, category, resolution, fileName} = req.body;
        const result = await wallpapersService.updateWallpaper(id, {title, category, resolution, fileName});
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar wallpaper' });
    }
};

export default {
    getAllWallpapers,
    getWallpaperById,
    createWallpaper,
    deleteWallpaper,
    updateWallpaper
};