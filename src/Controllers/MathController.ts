import express, { Request, Response, NextFunction } from 'express';
import calculator from '../Services/MathService';
import validator from '../Middelwares/Validate';
import OperationResult from '../Models/OperationResult';
const app = express();
app.use(express.json());

export const server = app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000.');
});
export const sendResult = (req: Request, res: Response) => {
  const operationResult = res.locals.operationResult as OperationResult;
  res.json(operationResult);
};
export const math = app.get('/operation', validator, calculator, sendResult);
