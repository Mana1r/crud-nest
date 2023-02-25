import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';

const calculator = (req: Request, res: Response, next: NextFunction) => {
  const nombre1 = Number(req.query.nombre1);
  const nombre2 = Number(req.query.nombre2);
  const operation = String(req.query.operation);

  let resultat: number;

  switch (operation) {
    case 'add':
      resultat = nombre1 + nombre2;
      break;
    case 'minus':
      resultat = nombre1 - nombre2;
      break;
    case 'div':
      resultat = nombre1 / nombre2;
      break;
    case 'multiply':
      resultat = nombre1 * nombre2;
      break;
    default:
      res.status(400).json({
        error:
          'Opération invalide. Les opérations valides sont add, minus, div et multiply.',
      });
      return;
  }
  next();
};
export default calculator;
