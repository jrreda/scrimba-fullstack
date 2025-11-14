# Meme Generator

A fun and interactive meme generator built with React and Vite. Create custom memes by adding your own text to popular meme templates from the Imgflip API.

## Features

- **Random Meme Selection**: Get random meme templates from a large collection
- **Custom Text**: Add your own top and bottom text to memes
- **Live Preview**: See your meme update in real-time as you type
- **External API Integration**: Fetches popular meme templates from Imgflip API
- **Responsive Design**: Works seamlessly across different screen sizes
- **Comprehensive Testing**: Includes unit tests, integration tests, and accessibility tests

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Testing**: Vitest, Testing Library, MSW (Mock Service Worker)
- **Code Quality**: ESLint
- **API**: Imgflip API

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # App header with branding
│   ├── Header.test.jsx  # Header component tests
│   ├── Main.jsx         # Main meme generator interface
│   └── Main.test.jsx    # Main component tests
├── images/              # Static image assets
├── App.jsx              # Root application component
├── App.test.jsx         # App integration tests
├── a11y.test.jsx        # Accessibility tests
└── index.jsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run test suite in watch mode
- `npm run test:coverage` - Run tests with coverage report

## How to Use

1. **Enter Text**: Type your custom text in the "Top Text" and "Bottom Text" input fields
2. **Get New Image**: Click the "Get a new meme image" button to randomly select a different meme template
3. **Create Your Meme**: Your text will overlay on the meme image automatically

## Features in Detail

### API Integration
The app fetches meme templates from the [Imgflip API](https://api.imgflip.com/get_memes), providing access to a wide variety of popular meme formats.

### State Management
Uses React hooks (`useState` and `useEffect`) to manage:
- Current meme state (image URL, top text, bottom text, alt text)
- Collection of available meme templates
- Form input synchronization

### Testing
The project includes comprehensive test coverage:
- **Unit Tests**: Individual component functionality
- **Integration Tests**: Component interaction and data flow
- **Accessibility Tests**: WCAG compliance and screen reader support
- **Mock Service Worker**: API mocking for reliable testing

### Accessibility
Built with accessibility in mind:
- Proper semantic HTML
- Alt text for images
- ARIA labels where appropriate
- Keyboard navigation support
