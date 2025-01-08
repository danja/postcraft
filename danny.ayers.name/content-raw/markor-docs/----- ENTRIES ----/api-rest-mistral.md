how to use mistral restful API with nodejs

To use the Mistral RESTful API with Node.js, follow these steps:

## Setting Up Your Project

1. Create a new Node.js project:
```bash
mkdir mistral-project
cd mistral-project
npm init -y
```

2. Install the necessary dependencies:
```bash
npm install @mistralai/mistralai axios
```

## Initializing the Mistral Client

Create a new file, e.g., `app.js`, and add the following code:

```javascript
const MistralClient = require('@mistralai/mistralai');

// Initialize the Mistral client with your API key
const mistral = new MistralClient({
  apiKey: process.env.MISTRAL_API_KEY
});
```

Make sure to set your Mistral API key as an environment variable:

```bash
export MISTRAL_API_KEY=your_api_key_here
```

## Making API Requests

### Chat Completion

To create a chat completion, use the following code:

```javascript
async function createChatCompletion() {
  try {
    const response = await mistral.chat.create({
      model: "mistral-tiny",
      messages: [
        { role: "user", content: "Tell me a cat joke" }
      ],
      max_tokens: 200
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

createChatCompletion();
```

### Streaming Chat Completion

For streaming responses, use the `stream` method:

```javascript
async function streamChatCompletion() {
  try {
    const stream = await mistral.chat.stream({
      model: "mistral-small-latest",
      messages: [
        { role: "user", content: "Who is the best French painter? Answer in JSON." }
      ],
      responseFormat: { type: "json_object" },
      maxTokens: 512
    });

    for await (const chunk of stream) {
      console.log(chunk.choices[0].delta.content);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

streamChatCompletion();
```

### Creating Embeddings

To create embeddings, use the following code:

```javascript
async function createEmbeddings() {
  try {
    const result = await mistral.embeddings.create({
      model: "Wrangler",
      inputs: [
        "Embed this sentence.",
        "As well as this one."
      ]
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

createEmbeddings();
```

## Error Handling

Implement proper error handling to catch and manage potential issues:

```javascript
const { SDKValidationError, HTTPValidationError } = require('@mistralai/mistralai/models/errors');

try {
  // Your Mistral API call here
} catch (err) {
  if (err instanceof SDKValidationError) {
    console.error("SDK Validation Error:", err.pretty());
  } else if (err instanceof HTTPValidationError) {
    console.error("HTTP Validation Error:", err);
  } else {
    console.error("Unexpected Error:", err);
  }
}
```

Remember to handle API responses and errors appropriately in your application. Always refer to the official Mistral AI documentation for the most up-to-date information on API usage and best practices[1][2][4][7].

Citations:
[1] Rest API Documentation for Mistral - Reconify https://www.reconify.com/docs/mistral/restapi
[2] @speakeasy-sdks/mistral - npm https://www.npmjs.com/package/@speakeasy-sdks/mistral?activeTab=readme
[3] Building a Chatbot with Mistral AI Step by Step Guide - Oodles AI https://artificialintelligence.oodles.io/dev-blogs/Building-a-Chatbot-with-Mistral-AI--Step-by-Step-Guide
[4] mistralai/client-js: JS Client library for Mistral AI platform - GitHub https://github.com/mistralai/client-js
[5] Reconify Mistral Node Documentation https://www.reconify.com/docs/mistral/node
[6] How to Create a Summary Generator App with Mistral AI: A Step-by ... https://ameliadutta.hashnode.dev/how-to-create-a-summary-generator-app-with-mistral-ai-a-step-by-step-guide
[7] @mistralai/mistralai - npm https://www.npmjs.com/package/@mistralai/mistralai
