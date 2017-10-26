import {Request, Response, NextFunction} from 'express';

export default interface IHeroRouter {
    getAll(req: Request, res: Response, next: NextFunction): void
    getOne(req: Request, res: Response, next: NextFunction): void
}