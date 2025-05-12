import { Router } from 'express';
import { getAllPortfolioProjects } from '../controllers/PortfolioController';

export const PortfolioRouter = Router();

PortfolioRouter.get("/" , getAllPortfolioProjects)