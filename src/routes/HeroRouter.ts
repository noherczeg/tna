import {Router, Request, Response, NextFunction} from 'express';
import IHeroRouter from "./IHeroRouter";
import IHero from "./IHero";
const Heroes = require('../data');

export class HeroRouter implements IHeroRouter {
  private routerDef: Router;

  constructor() {
    this.routerDef = Router();
    this.init();
  }

  public get router(): Router {
    return this.routerDef;
  }

  public getAll(req: Request, res: Response, next: NextFunction): void {
    res.send(Heroes);
  }

  public getOne(req: Request, res: Response, next: NextFunction): void {
    let query: Number = parseInt(req.params.id);
    let hero: IHero = Heroes.find(hero => hero.id === query);
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  public init(): void {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

const heroRoutes = new HeroRouter();

export default heroRoutes.router;
