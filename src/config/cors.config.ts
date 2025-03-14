import 'dotenv/config';

export const corsConfig = {
  cors: {
    methods: process.env.METHODS,
    allowedHeaders: process.env.ALLOW_HEADERS,
    exposedHeaders: process.env.EXPOSED_HEADERS,
    origin: process.env.ORIGIN,
    maxAge: Infinity,
    credentials: true,
    optionsSuccessStatus: undefined,
    preflightContinue: undefined,
  },
};
