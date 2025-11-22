# Dodgy Dave's Stock Predictions 📈

A fun and entertaining stock analysis tool that generates AI-powered stock reports with a humorous twist. Add up to 3 stock tickers and get a personalized report analyzing their performance over the past 3 days.

## Features

- 📊 Fetch real-time stock data from Polygon.io API
- 🤖 Generate entertaining stock reports using OpenAI GPT-4
- 🎯 Support for multiple stock tickers (up to 3)
- 💬 Fun, tongue-in-cheek reporting style
- ⚡ Fast and responsive UI built with Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm
- API keys for:
  - [Polygon.io](https://polygon.io/) (for stock data)
  - [OpenAI](https://platform.openai.com/) (for AI report generation)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your API keys:
   ```
   POLYGON_API_KEY=your_polygon_api_key_here
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Usage

1. Enter a stock ticker symbol (e.g., `TSLA`, `AAPL`, `MSFT`) in the input field
2. Click the add button to add the ticker to your list
3. Repeat for up to 3 stock tickers
4. Click "Generate Report" to fetch stock data and generate your personalized report
5. Read your entertaining stock analysis report!

## Technologies Used

- **Vite** - Fast build tool and dev server
- **OpenAI API** - GPT-4 for generating stock reports
- **Polygon.io API** - Stock market data
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with custom fonts

## Project Structure

```
Stock Assistant/
├── index.html          # Main HTML structure
├── index.js            # Application logic
├── index.css           # Styles
├── utils/
│   └── dates.js        # Date utility functions
└── images/             # Logo and UI assets
```

## Disclaimer

⚠️ **This is not real financial advice!** This application is for entertainment purposes only. The reports generated are meant to be humorous and should not be used as the basis for any investment decisions. Always consult with a qualified financial advisor before making investment decisions.

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉

- [Our courses](https://scrimba.com/courses)
- [The Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding! 🚀