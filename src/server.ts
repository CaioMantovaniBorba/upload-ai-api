import { fastify } from 'fastify';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify();

app.register(getAllPromptsRoute);
app.register(getAllPromptsRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running');
  });

