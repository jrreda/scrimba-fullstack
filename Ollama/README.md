# Ollama Express API 🤖

A simple Express.js REST API that integrates with Ollama to provide local AI chat capabilities using the Mistral language model. This allows you to run AI queries directly on your machine without relying on cloud services.

## Features

- 🚀 **Local AI Processing** - Runs entirely on your machine using Ollama
- 🔒 **Privacy-Focused** - No data sent to external APIs
- 💬 **Simple REST API** - Easy-to-use query parameter interface
- 🤖 **Mistral Model** - Powered by the efficient Mistral LLM
- ⚡ **Fast Response** - Direct integration with Ollama for quick answers
- 🌐 **Express.js Backend** - Lightweight and scalable

## Prerequisites

Before running this project, you need to have **Ollama installed** on your system.

### Installing Ollama

**Option 1: Download from Website (Recommended)**
1. Visit [ollama.ai](https://ollama.ai)
2. Download the macOS installer
3. Install and run Ollama

**Option 2: Using Homebrew**
```bash
brew install ollama
```

### Setting Up Ollama

1. **Start Ollama service** (if not already running):
```bash
ollama serve
```

2. **Download the Mistral model**:
```bash
ollama pull mistral
```

3. **Verify installation**:
```bash
ollama list
```
You should see `mistral` in the list of available models.

## Getting Started

### Installation

1. Install the Node.js dependencies:
```bash
npm install
```

2. Start the Express server:
```bash
npm start
```

3. The server will start on **http://localhost:3000**

### Usage

The API provides a simple GET endpoint that accepts questions via query parameters.

#### Base Endpoint
```
GET http://localhost:3000/
```
**Response:** Instructions on how to use the API

#### Ask a Question
```
GET http://localhost:3000/?question=YOUR_QUESTION
```

**Example Requests:**

1. **Simple Question:**
```
http://localhost:3000/?question=What is the capital of France?
```

2. **Coding Question:**
```
http://localhost:3000/?question=Explain async/await in JavaScript
```

3. **Complex Query:**
```
http://localhost:3000/?question=Write a Python function to calculate fibonacci numbers
```

### Testing with cURL

```bash
# Basic test
curl "http://localhost:3000/"

# Ask a question
curl "http://localhost:3000/?question=What%20is%20machine%20learning?"
```

### Testing in Browser

Simply open your browser and navigate to:
```
http://localhost:3000/?question=Hello, how are you?
```

## How It Works

1. **Client Request**: User sends a GET request with a question parameter
2. **Express Handling**: Express server receives the request
3. **Ollama Processing**: Question is forwarded to the local Ollama instance
4. **Mistral Model**: Ollama uses the Mistral model to generate a response
5. **Response Return**: AI-generated answer is sent back to the client

## Technologies Used

- **Express.js** - Web server framework
- **Ollama** - Local LLM runtime and management
- **Mistral** - Open-source language model
- **Node.js** - JavaScript runtime

## Project Structure

```
Ollama/
├── index.js           # Express server and Ollama integration
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Code Overview

The main `index.js` file creates a simple Express server:

```javascript
import ollama from "ollama";
import express from "express";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const question = req.query.question;
    if (!question) {
        res.status(200).send("Ask something via the `?question=` parameter");  
    } else {
        const response = await ollama.chat({
            model: 'mistral',
            messages: [{ role: 'user', content: question }],
        });
        res.status(200).send(response.message.content);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## Customization

### Change the Model

To use a different Ollama model, modify the `model` parameter in `index.js`:

```javascript
const response = await ollama.chat({
    model: 'llama2',  // or 'codellama', 'phi', etc.
    messages: [{ role: 'user', content: question }],
});
```

Available models can be found at [ollama.ai/library](https://ollama.ai/library)

### Change the Port

Modify the `port` constant in `index.js`:

```javascript
const port = 8080;  // Your desired port
```

### Add POST Support

You can extend the API to accept POST requests with JSON bodies:

```javascript
app.use(express.json());

app.post('/chat', async (req, res) => {
    const { question } = req.body;
    // ... rest of the logic
});
```

## Troubleshooting

### "Connection refused" Error
- **Solution**: Make sure Ollama is running: `ollama serve`

### "Model not found" Error
- **Solution**: Download the Mistral model: `ollama pull mistral`

### Port Already in Use
- **Solution**: Change the port in `index.js` or stop the process using port 3000:
```bash
lsof -ti:3000 | xargs kill -9
```

## Performance Notes

- **First Request**: May take a few seconds as the model loads into memory
- **Subsequent Requests**: Much faster once the model is cached
- **Memory Usage**: Mistral requires ~4GB of RAM
- **Response Time**: Typically 1-5 seconds depending on query complexity

## About Scrimba

This project is part of **The AI Engineer Path** at Scrimba!

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉

- [Our courses](https://scrimba.com/courses)
- [The AI Engineer Path](https://scrimba.com/the-ai-engineer-path-c02v)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding! 🚀