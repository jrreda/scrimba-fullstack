# Object Detection with Transformers.js in the Browser 🔍

A browser-based object detection application powered by AI that uses Transformers.js and the YOLOS (You Only Look Once) model to detect and identify objects in images with visual bounding boxes.

## Features

- 🤖 **AI-Powered Detection** - Uses Xenova's YOLOS-tiny model for real-time object detection
- 🎯 **High Accuracy** - Configured to detect objects with 95% confidence threshold
- 🖼️ **Visual Feedback** - Draws colored bounding boxes around detected objects
- 🏷️ **Smart Labeling** - Displays object labels with confidence percentages
- ⚡ **Browser-Based** - Runs entirely in the browser, no server required
- 🎨 **Color-Coded** - Random colors for each detected object for easy distinction

## How It Works

The application uses the **Transformers.js** library to run machine learning models directly in the browser. It implements the YOLOS (You Only Look Once) object detection model, which can identify multiple objects in a single image and draw bounding boxes around them.

### Technical Details

- **Model**: Xenova/yolos-tiny
- **Confidence Threshold**: 95%
- **Detection Type**: Object detection with bounding boxes
- **Coordinates**: Percentage-based positioning for responsive display

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm
- A modern web browser with JavaScript ES6+ support

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

### First Run

When you first load the application, it will:
1. Download and load the YOLOS-tiny model (~30MB)
2. Display "Loading model..." status
3. Show "Ready" when the model is loaded
4. Enable the "Detect Objects" button

## Usage

1. **Load the App** - Wait for the model to load (first time may take a few moments)
2. **Detect Objects** - Click the "Detect Objects" button
3. **View Results** - Colored bounding boxes will appear around detected objects
4. **Read Labels** - Each box shows the object type and confidence percentage

### Customization

You can modify the detection behavior in `index.js`:

```javascript
const detectedObjects = await detector(image.src, {
    threshold: 0.95,  // Adjust confidence threshold (0.0 - 1.0)
    percentage: true  // Use percentage-based coordinates
});
```

To use your own images, replace `road.jpeg` with your image file and update the reference in `index.html`.

## Technologies Used

- **Vite** - Fast build tool and development server
- **Transformers.js** - Machine learning library by Xenova
- **YOLOS Model** - You Only Look Once object detection
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with flexbox layout

## Project Structure

```
Object Detection/
├── index.html          # Main HTML structure
├── index.js            # Application logic and ML pipeline
├── style.css           # Styles and bounding box CSS
├── road.jpeg           # Sample image for detection
└── vite.config.js      # Vite configuration
```

## Common Objects Detected

The YOLOS model can detect a wide variety of objects including:
- 🚗 Vehicles (cars, trucks, buses)
- 🚶 People
- 🚲 Bicycles and motorcycles
- 🪑 Furniture
- 🐕 Animals
- 📱 Electronics
- And many more common objects!

## Performance Notes

- **First Load**: The model downloads once (~30MB) and is cached by the browser
- **Subsequent Loads**: Model loads from cache, much faster
- **Detection Speed**: Depends on image size and number of objects
- **Browser Support**: Works best in Chrome, Firefox, and Edge

## About Scrimba

This project is part of **The AI Engineer Path** at Scrimba!

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉

- [Our courses](https://scrimba.com/courses)
- [The AI Engineer Path](https://scrimba.com/the-ai-engineer-path-c02v)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding! 🚀