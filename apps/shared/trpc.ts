import { createTRPCNuxtClient, httpBatchLink } from '@trpc/nuxt';
import type { AppRouter } from '~/server/trpc';

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  });

  return {
    provide: {
      trpc,
    },
  };
});

