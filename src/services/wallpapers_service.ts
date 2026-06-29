import prismaDatabase from "../lib/prisma.js";

const getAllWallpapers = async () => {
    try {
        const wallpapers = await prismaDatabase.wallpaper.findMany({
            orderBy: {
                title: 'asc',
            },
        });
        return { status: 200, data: wallpapers };
    } catch {
        return { status: 500, data: { message: 'Erro ao buscar wallpapers' } };
    }
};

const getWallpaperById = async (id: number) => {
    try{
        const wallpaper = await prismaDatabase.wallpaper.findUnique({
            where: { id }
        });
        return { status: 200, data: wallpaper };
    } catch {
        return { status: 500, data: { message: 'Erro ao buscar wallpaper' } };
    }
};

const createWallpaper = async (wallpaperData: { title: string, category:string, resolution:string, fileName: string}) => {
    try {


        const GITHUB_USER = process.env.GITHUB_USER;
        const REPO_NAME = process.env.REPO_NAME;
        const BRANCH = process.env.BRANCH;
        const imageUrl = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/${BRANCH}/wallpapers/${wallpaperData.fileName}`;
        const newWallpaper = await prismaDatabase.wallpaper.create({
            data: {
                title: wallpaperData.title,
                category: wallpaperData.category,
                resolution: wallpaperData.resolution,
                imageUrl: imageUrl,
            }
        });
        return { status: 201, data: newWallpaper };
    } catch {
        return { status: 500, data: { message: 'Erro ao criar wallpaper' } };
    }
};

const deleteWallpaper  = async (id : number) => {
    try {
        await prismaDatabase.wallpaper.delete({
            where: { id }
        });
        return { status: 200, data: { message: 'Wallpaper deletado com sucesso' } };
    } catch {
        return { status: 500, data: { message: 'Erro ao deletar wallpaper' } };
    }
};

const updateWallpaper = async (id: number, wallpaperData: { title: string, category:string, resolution:string, fileName: string}) => {
    try {
        const GITHUB_USER = process.env.GITHUB_USER;
        const REPO_NAME = process.env.REPO_NAME;
        const BRANCH = process.env.BRANCH;
        const imageUrl = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/${BRANCH}/wallpapers/${wallpaperData.fileName}`;
        const updatedWallpaper = await prismaDatabase.wallpaper.update({
            where: { id },
            data: {
                title: wallpaperData.title,
                category: wallpaperData.category,
                resolution: wallpaperData.resolution,
                imageUrl: imageUrl,
            }
        });
        return { status: 200, data: updatedWallpaper };
    } catch {
        return { status: 500, data: { message: 'Erro ao atualizar wallpaper' } };
    }
};

export default {
    getAllWallpapers,
    getWallpaperById,
    createWallpaper,
    deleteWallpaper,
    updateWallpaper
};