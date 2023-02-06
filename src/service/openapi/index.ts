import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

export const openai = new OpenAIApi(configuration);
