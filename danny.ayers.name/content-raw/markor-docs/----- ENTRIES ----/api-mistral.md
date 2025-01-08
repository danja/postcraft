how to use mistral API with nodejs

To use the Mistral AI API with Node.js, follow these steps:

## Installation

First, install the official Mistral AI client library using npm:

```bash
npm install @mistralai/mistralai
```

## Setup

Import the Mistral client and initialize it with your API key:

```javascript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY
});
```

Make sure to set your Mistral API key as an environment variable or replace `process.env.MISTRAL_API_KEY` with your actual API key[1][3].

## Using the API

### Chat Completions

To generate chat completions:

```javascript
async function generateChatResponse() {
  const result = await mistral.chat.complete({
    model: "mistral-small-latest",
    messages: [
      { content: "Who is the best French painter? Answer in one short sentence.", role: "user" }
    ]
  });
  console.log(result);
}

generateChatResponse();
```

### Embeddings

To generate embeddings:

```javascript
async function generateEmbeddings() {
  const input = ["What is the best French cheese?"];
  const embeddingsBatchResponse = await mistral.embeddings({
    model: "mistral-embed",
    input: input
  });
  console.log('Embeddings Batch:', embeddingsBatchResponse.data);
}

generateEmbeddings();
```

### File Operations

To upload a file:

```javascript
import { openAsBlob } from "node:fs";

async function uploadFile() {
  const result = await mistral.files.upload({
    file: await openAsBlob("example.file")
  });
  console.log(result);
}

uploadFile();
```

## Error Handling

Implement proper error handling to catch and manage potential issues:

```javascript
import { HTTPValidationError, SDKValidationError } from "@mistralai/mistralai/models/errors";

async function handleErrors() {
  try {
    const result = await mistral.models.list();
    console.log(result);
  } catch (err) {
    if (err instanceof SDKValidationError) {
      console.error(err.pretty());
    } else if (err instanceof HTTPValidationError) {
      console.error(err);
    } else {
      throw err;
    }
  }
}

handleErrors();
```

## Additional Configuration

You can override the server URL globally when initializing the client:

```javascript
const mistral = new Mistral({
  serverURL: "https://api.mistral.ai",
  apiKey: process.env.MISTRAL_API_KEY
});
```

By following these steps, you can effectively integrate the Mistral AI API into your Node.js applications for various natural language processing tasks[1][3][4].

Citations:
[1] @mistralai/mistralai - npm https://www.npmjs.com/package/@mistralai/mistralai
[2] Transitioning from GPT-3.5 to Mistral AI API in Node.js - Tutorial https://www.lemonfox.ai/tutorials/transitioning-to-mistral-api
[3] mistralai/client-js: JS Client library for Mistral AI platform - GitHub https://github.com/mistralai/client-js
[4] Reconify Mistral Node Documentation https://www.reconify.com/docs/mistral/node
[5] How to Create a Summary Generator App with Mistral AI: A Step-by ... https://ameliadutta.hashnode.dev/how-to-create-a-summary-generator-app-with-mistral-ai-a-step-by-step-guide
[6] Building a Chatbot with Mistral AI Step by Step Guide - Oodles AI https://artificialintelligence.oodles.io/dev-blogs/Building-a-Chatbot-with-Mistral-AI--Step-by-Step-Guide
[7] Quickstart | Mistral AI Large Language Models https://docs.mistral.ai/getting-started/quickstart/
[8] Tutorial: Generate Code from User Stories using Mistral AI - LinkedIn https://www.linkedin.com/pulse/tutorial-generate-code-from-user-stories-using-mistral-juliano-souza-9nypf
