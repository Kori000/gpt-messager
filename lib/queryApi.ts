import openai from './chatgpt'

const query = async (prompt: string, chatId: string, model: string) => {
  let openaiConfig = {
    model,
    prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  }
  console.log('openaiConfig', openaiConfig)
  const res = await openai
    .createCompletion(openaiConfig)
    .then(res => {
      console.log('gpt res', res)
      return res.data.choices[0].text
    })
    .catch(err => {
      console.log('gpt err', err)
      return `ChatGPT was unable to find an answer for that! Error: ${err.message}`
    })

  return res
}

export default query
