import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/index.js';
import { Middleware } from './middleware.interface.js';

export class PrivateRouteMiddleware implements Middleware {
  public async execute({ tokenPayload }: Request, _res: Response, next: NextFunction): Promise<void> {
    if (!tokenPayload) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Unauthorized',
        'PrivateRouteMiddleware'
      );
    }

    return next();
  }
}
