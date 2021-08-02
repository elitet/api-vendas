import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = resquest.body;

    const createSession = new CreateSessionsService();

    const user = await createSession.execute({
      email,
      password,
    });

    return response.json(user);
  }
}
