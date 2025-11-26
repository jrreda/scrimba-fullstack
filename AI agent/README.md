# 🤖 AI Agent Chatbot

An intelligent conversational AI agent powered by OpenAI's GPT-4 with function calling capabilities. The chatbot can fetch real-time weather data and location information to provide contextual, helpful responses.

## 📝 Description

This AI agent is a modern chatbot application that leverages OpenAI's GPT-4 model with function calling to interact with external APIs. It can automatically detect when to use tools like weather APIs or location services to provide accurate, real-time information in natural, conversational responses.

## ✨ Features

- **Conversational AI**: Natural language understanding powered by GPT-4
- **Function Calling**: Intelligent tool use - the AI decides when to fetch external data
- **Weather Information**: Get current weather for any city worldwide
- **Location Detection**: Automatic IP-based geolocation
- **Real-time Responses**: Dynamic data fetching from external APIs
- **Clean UI**: Modern, responsive chat interface
- **Message History**: Maintains conversation context throughout the session

## 🛠️ Technologies Used

- **OpenAI API (GPT-4)** - Large language model with function calling
- **Vite** - Fast build tool and development server
- **Vanilla JavaScript** - ES6+ modules
- **HTML5 & CSS3** - Modern web standards
- **OpenWeatherMap API** - Weather data
- **ipapi.co API** - IP-based geolocation

## 📁 Project Structure

```
AI agent/
├── index.html          # Main HTML file with chat interface
├── index.js            # Main application logic and OpenAI integration
├── index.css           # Styling for the chat interface
├── tools.js            # Function definitions for AI tools
├── dom.js              # DOM manipulation utilities
├── images/             # Static assets
│   └── send-btn-icon.png
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "AI agent"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   Or set it in your system environment:
   ```bash
   # Windows
   set OPENAI_API_KEY=your_openai_api_key_here

   # Linux/Mac
   export OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

- `npm start` - Start development server with Vite
- `npm run dev` - Start development server (alias)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 How It Works

### 1. AI Agent Architecture

The chatbot uses OpenAI's function calling feature, which allows the AI to:
1. Understand user queries
2. Determine if external data is needed
3. Automatically call appropriate functions
4. Integrate results into natural responses

### 2. Available Tools

#### `getCurrentWeather(location)`
Fetches current weather data for a specified city.

**Parameters:**
- `location` (string): City name

**Returns:** Weather data including:
- Temperature (Fahrenheit)
- Weather conditions
- Humidity
- Wind speed
- And more

**Example usage:**
```
User: "What's the weather like in London?"
AI: [Calls getCurrentWeather("London") and returns conversational response]
```

#### `getLocation()`
Detects the user's current location based on their IP address.

**Parameters:** None

**Returns:** Location data including:
- City
- Country
- Region
- Timezone
- Coordinates (latitude/longitude)

**Example usage:**
```
User: "Where am I right now?"
AI: [Calls getLocation() and returns conversational response]
```

### 3. System Prompt

The AI is configured with a system prompt that:
- Emphasizes engaging, conversational responses
- Prioritizes using tools over generic answers
- Provides specific, data-driven information
- Transforms technical data into user-friendly responses

## 💬 Example Conversations

**Weather Query:**
```
User: What's the weather in New York?
AI: Currently in New York, it's 45°F with partly cloudy skies. 
    You might want to bring a light jacket!
```

**Location Query:**
```
User: Where am I?
AI: Based on your IP address, you're currently in San Francisco, 
    California, United States.
```

**Combined Query:**
```
User: What's the weather like where I am?
AI: [Automatically calls getLocation(), then getCurrentWeather() 
     with detected city, and provides personalized response]
```

## 🎨 UI Features

- **Message Bubbles**: Distinct styling for user and AI messages
- **Auto-scroll**: Automatically scrolls to latest message
- **Responsive Design**: Works on desktop and mobile devices
- **Send Button**: Visual send icon for submitting messages
- **Input Focus**: Keeps focus on input field for continuous chatting

## 🔐 Security Considerations

⚠️ **Important Security Notes:**

1. **API Key Exposure**: The current implementation uses `dangerouslyAllowBrowser: true` which exposes your API key in the browser. This is suitable for development only.

2. **Production Recommendation**: For production, implement a backend proxy:
   ```
   User → Your Backend → OpenAI API
   ```

3. **Environment Variables**: Never commit `.env` files with real API keys to version control.

## 🔌 API Integration

### OpenWeatherMap API
- **Endpoint**: `https://apis.scrimba.com/openweathermap/data/2.5/weather`
- **Units**: Imperial (Fahrenheit)
- **Authentication**: Proxied through Scrimba API (no key needed)

### IP Geolocation API
- **Endpoint**: `https://ipapi.co/json/`
- **Authentication**: None required
- **Returns**: JSON with location details

## 🧩 Code Structure

### Main Components

**index.js** - Core Logic
- Initializes OpenAI client
- Manages conversation history
- Handles function calling workflow
- Processes form submissions

**tools.js** - Function Definitions
- Defines available tools
- Implements API calls
- Exports function metadata for OpenAI

**dom.js** - UI Updates
- Renders new messages
- Handles scrolling
- Manages DOM updates

## 🚀 Extending the Agent

### Adding New Tools

1. **Create the function** in `tools.js`:
```javascript
export async function getNewsHeadlines({ category }) {
  const response = await fetch(`https://api.example.com/news/${category}`);
  const data = await response.json();
  return JSON.stringify(data);
}
```

2. **Add function metadata** to the `functions` array:
```javascript
{
  function: getNewsHeadlines,
  parse: JSON.parse,
  parameters: {
    type: "object",
    properties: {
      category: {
        type: "string",
        description: "News category (e.g., 'technology', 'sports')"
      }
    },
    required: ["category"]
  }
}
```

3. **The AI will automatically know when to use it!** ✨

## 📊 Model Information

- **Model**: GPT-4-1106-preview (GPT-4 Turbo)
- **Capabilities**: 
  - Function calling
  - 128K context window
  - JSON mode support
  - Enhanced instruction following

## 🎓 Learning Resources

This project is part of the [Scrimba Frontend Developer Career Path](https://scrimba.com/fullstack-path-c0fullstack/~05ux).

## 🐛 Troubleshooting

### Common Issues

**Issue**: "OpenAI API key not found"
- **Solution**: Ensure `OPENAI_API_KEY` is set in environment variables

**Issue**: CORS errors
- **Solution**: Make sure Vite dev server is running (not opening index.html directly)

**Issue**: Messages not appearing
- **Solution**: Check browser console for errors; verify API key is valid

**Issue**: Weather data not loading
- **Solution**: Check network tab for API response; verify city name is valid

## 📜 License

ISC License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🙏 Acknowledgments

- Built as part of the Scrimba Fullstack Developer Course
- Weather data provided by OpenWeatherMap
- Location data provided by ipapi.co
- Powered by OpenAI GPT-4

---

**Chat with an intelligent AI that knows how to help! 🤖💬**

