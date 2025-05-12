import { Request, Response } from 'express';
import prisma from '../db/prisma';


export const getAllPortfolioProjects = async (req: Request, res: Response) => {
    try {
        const DATA = await prisma.portfolioProjects.findMany();

        res.status(200).json(DATA);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something Went Wrong, Please Try Again Later"
        });
    }
}