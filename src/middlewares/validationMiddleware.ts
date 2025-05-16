import { error } from 'console';
import { NextFunction, Request, Response } from 'express';
import * as Z from 'zod';

export default function validationMiddleware <B, Q, P> (
    bodySchema: Z.ZodSchema<B>,
    querySchema: Z.ZodSchema<Q>,
    paramsSchema: Z.ZodSchema<P> 
) {
    return function (req: Request<P, {}, B, Q>, res: Response, next: NextFunction) {
        const {error: bodyError, data: bodyData} = bodySchema.safeParse(req.body);
        if (bodyError) {
            // errorHandling
            throw bodyError;
        }
        req.body = bodyData;

        const {error: queryError, data: queryData} = querySchema.safeParse(req.query);
        if (queryError) {
            // errorHandling
            throw queryError
        }
        // Make the req.query writable
        Object.defineProperty(req, "query", {
            value: queryData,
            writable: true,
            enumerable: true,
            configurable: true
        })

        const {error: paramsError, data: paramsData} = paramsSchema.safeParse(req.params);
        if (paramsError) {
            // errorHandling
            throw paramsError
        }
        
        req.params = paramsData;

        next();
    }
}