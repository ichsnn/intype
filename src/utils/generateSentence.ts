import { openai } from '@/service/openapi';

export const generateSentence = async () => {
  return await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: 'Create random sentence for grammar test',
  });
};
