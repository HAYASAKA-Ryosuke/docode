import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { createContext } from '~/server/context';
import { userRouter } from '~/server/users';
import { markdownRouter } from '~/server/markdowns';
import { codeRouter } from '~/server/codes';
import { authRouter } from '~/server/auth/controllers/authController';

const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const appRouter = t.router({
  user: userRouter,
  markdown: markdownRouter,
  code: codeRouter,
  auth: authRouter,
});

export { createContext };

