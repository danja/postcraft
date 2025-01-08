how to use perplexity restful API with nodejs

To use the Perplexity RESTful API with Node.js, follow these steps:

## Setup

1. Create an account at app.reconify.com to obtain your API_KEY and APP_KEY.

2. Install the necessary dependencies:

```bash
npm install openai axios
```

## Making API Requests

Here's how to make a request to the Perplexity API using Node.js:

```javascript
const OpenAI = require('openai');
const axios = require('axios');

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});

async function askPerplexity(prompt) {
  const start = Date.now();

  try {
    const response = await perplexity.chat.completions.create({
      model: 'pplx-7b-chat',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 200
    });

    const end = Date.now();

    // Log the interaction to Reconify
    await logToReconify(prompt, response, start, end);

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function logToReconify(prompt, response, start, end) {
  const reconifyData = {
    reconify: {
      format: 'perplexity',
      type: 'chat',
      version: '2.4.0',
      appKey: process.env.RECONIFY_APP_KEY,
      apiKey: process.env.RECONIFY_API_KEY
    },
    timestamps: {
      request: start,
      response: end
    },
    request: {
      model: 'pplx-7b-chat',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 200
    },
    response: response
  };

  try {
    await axios.post('https://api.reconify.com/v1/log', reconifyData);
  } catch (error) {
    console.error('Error logging to Reconify:', error);
  }
}

// Example usage
askPerplexity('Tell me a joke about programming')
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## Key Points

1. Use the OpenAI SDK with Perplexity's base URL to make API calls[1][3].

2. Set up environment variables for your PERPLEXITY_API_KEY, RECONIFY_APP_KEY, and RECONIFY_API_KEY[1][3].

3. The Perplexity API is compatible with the OpenAI SDK, allowing for easy integration[5].

4. Log interactions to Reconify for analytics and tracking purposes[1][3].

5. Handle errors appropriately and implement proper error logging[6].

6. You can customize the model, max tokens, and other parameters as needed[1][3].

Remember to keep your API keys secure and never expose them in your code. Always use environment variables or a secure configuration management system to store sensitive information[5].

Citations:
[1] Reconify Perplexity Node Documentation https://www.reconify.com/docs/perplexity/node
[2] AI Personal Assistant + Internet Search Powers Quick Guide with ... https://www.youtube.com/watch?v=kNv5v7l7s3s
[3] Rest API Documentation for Perplexity - Reconify https://www.reconify.com/docs/perplexity/restapi
[4] Build a Perplexity Clone with CopilotKit, Tavily & LangGraph https://www.copilotkit.ai/blog/build-a-perplexity-clone-with-copilotkit
[5] Integrating Perplexity - Docs - Appwrite https://appwrite.io/docs/products/ai/integrations/perplexity
[6] An unofficial API for Node.js based off of the Perplexity.AI ... - GitHub https://github.com/Parking-Master/node_perplexityai
[7] rgomezp/perplexity-sdk: The Unofficial Node.js SDK for Perplexity.ai https://github.com/rgomezp/perplexity-sdk
[8] Introducing pplx-api - Perplexity https://www.perplexity.ai/hub/blog/introducing-pplx-api
[9] Initial Setup - Perplexity API https://docs.perplexity.ai/guides/getting-started
