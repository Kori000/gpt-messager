import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  organization: 'org-ntJd8bSLmpR22o3BLsMLxkLQ',
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default openai
