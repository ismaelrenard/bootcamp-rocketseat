import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  const product = request.body;

  return response.json(product);
});

export default usersRouter;
