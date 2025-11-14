# Sales Dashboard

A real-time sales tracking dashboard built with React, Vite, and Supabase.

## Features

- **Real-time Updates**: Dashboard automatically updates when sales deals change using Supabase realtime subscriptions
- **Authentication**: Secure user authentication with sign-in and sign-up functionality
- **Protected Routes**: Route protection to ensure only authenticated users can access the dashboard
- **Data Visualization**: Interactive bar chart displaying sales metrics by user
- **Sales Deal Management**: Form interface to add new sales deals
- **User Profiles**: Integration with user profile data from Supabase

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Backend/Database**: Supabase (PostgreSQL + Realtime)
- **Charts**: react-charts
- **Styling**: CSS

## Project Structure

```
src/
├── components/
│   ├── BarChart.jsx       # Sales data visualization
│   ├── Form.jsx           # Sales deal submission form
│   ├── Header.jsx         # Navigation header
│   ├── Signin.jsx         # Sign in form
│   └── Signup.jsx         # Sign up form
├── routes/
│   ├── Dashboard.jsx      # Main dashboard page
│   ├── ProtectedRoute.jsx # Route protection wrapper
│   └── RootRedirect.jsx   # Root route handler
├── context/
│   └── AuthContext.jsx    # Authentication state management
├── supabase-client.js     # Supabase configuration
├── router.jsx             # Route configuration
├── App.jsx                # Main app component
└── main.jsx               # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Database Schema

The application expects the following Supabase tables:

- `sales_deals`: Sales transaction data
  - `value`: Deal amount
  - User profile relationship (foreign key)

- `user_profiles`: User information
  - `name`: User display name

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Real-time Synchronization
The dashboard uses Supabase's realtime features to automatically update when any changes occur in the `sales_deals` table, ensuring all users see the latest data without manual refreshing.

### Authentication Flow
Users must authenticate to access the dashboard. The app provides sign-in and sign-up forms, with protected routes ensuring unauthorized users cannot access sensitive data.

### Data Aggregation
Sales metrics are aggregated by user, showing the sum of deal values per user profile for easy performance tracking.
