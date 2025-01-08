how to use ollama restful API with nodejs

To use the Ollama RESTful API with Node.js, you can follow these steps:

## Setting Up

First, ensure you have Ollama installed and running on your local machine. Then, install the necessary Node.js packages:

```bash
npm install ollama express
```

## Basic Integration

Here's a basic example of how to integrate Ollama's API into a Node.js application:

```javascript
const express = require('express');
const ollama = require('ollama');

const app = express();
app.use(express.json());

const PORT = 3000;

app.post('/generate', async (req, res) => {
  const { prompt, model } = req.body;
  
  try {
    const response = await ollama.generate({
      model: model || 'llama2',
      prompt: prompt
    });
    
    res.json({ response: response.response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This code sets up a simple Express server with a `/generate` endpoint that accepts POST requests[1][5].

## Making API Calls

To make API calls to your Ollama server, you can use the `ollama` package. Here's an example of how to use it for chat-based interactions:

```javascript
app.post('/chat', async (req, res) => {
  const { messages, model } = req.body;

  try {
    const response = await ollama.chat({
      model: model || 'llama2',
      messages: messages
    });

    res.json({ reply: response.message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

This endpoint allows you to send a series of messages for a chat-like interaction[2][7].

## Advanced Features

### Streaming Responses

For streaming responses, you can use the `stream` option:

```javascript
app.post('/stream', async (req, res) => {
  const { prompt, model } = req.body;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const stream = await ollama.generate({
      model: model || 'llama2',
      prompt: prompt,
      stream: true
    });

    for await (const chunk of stream) {
      res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    }
    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

This endpoint streams the response back to the client as it's generated[7].

### Custom Models

You can also create and use custom models:

```javascript
app.post('/create-model', async (req, res) => {
  const { modelName, modelfile } = req.body;

  try {
    await ollama.create({
      name: modelName,
      modelfile: modelfile
    });
    res.json({ message: 'Model created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

This endpoint allows you to create a custom model based on a provided modelfile[8].

Remember to handle errors appropriately and implement proper security measures when deploying your application. Also, ensure that your Ollama server is running and accessible from your Node.js application[1][5][7].

Citations:
[1] Ollama Api Examples | Restackio https://www.restack.io/p/ollama-answer-api-examples-cat-ai
[2] Build Your Own Local LLM API with Ollama-js: A Step-by-Step Guide https://blog.stackademic.com/build-your-own-local-llm-api-with-ollama-js-a-step-by-step-guide-fe9a576820b9?gi=7afa72090548
[3] How to Develop AI Apps Locally with Ollama and YugabyteDB https://docs.yugabyte.com/preview/tutorials/ai/ai-ollama/
[4] ollama/docs/api.md at main - GitHub https://github.com/ollama/ollama/blob/main/docs/api.md?plain=1
[5] Using the Ollama API to run LLMs and generate responses locally https://dev.to/jayantaadhikary/using-the-ollama-api-to-run-llms-and-generate-responses-locally-18b7
[6] Ollama - Portkey Docs https://portkey.ai/docs/integrations/llms/ollama
[7] ollama-js/README.md at main - GitHub https://github.com/ollama/ollama-js/blob/main/README.md
[8] Python & JavaScript Libraries · Ollama Blog https://ollama.com/blog/python-javascript-libraries
