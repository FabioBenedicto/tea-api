import { NextFunction, Request, Response } from 'express';

export function handleErrorsMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof Error) {
    return res.status(400).send({
      erro: err.message,
    });
  }

  return res.status(500).send({
    status: 'error',
    message: 'Internal Server Error',
  });
}
