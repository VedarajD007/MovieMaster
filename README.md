# Netflix Clone - React + TMDB API

A Netflix-like movie streaming landing page built with React, Vite, and TMDB (The Movie Database) API.

## Features

✨ **Netflix-Style Design**
- Modern dark theme UI similar to Netflix
- Responsive layout for all devices
- Smooth animations and transitions
- Hover effects on movie cards

📽️ **Movie Features**
- Trending movies carousel
- Popular movies section
- Top-rated movies collection
- Movie details display (title, rating, overview)
- Movie posters and backdrop images
- Play and info buttons
- Add to list and rating actions

🎯 **User Experience**
- Fixed header with navigation
- Auto-scrolling hero section
- Horizontal carousels with arrow navigation
- Smooth scroll behavior
- Loading state handling

## Setup Instructions

### 1. Get TMDB API Key

1. Visit [Free Keys GitHub Repository](https://github.com/rickylawson/freekeys)
2. Find the TMDB API section and follow the instructions to get a free API key
3. Alternatively, register directly at [TMDB](https://www.themoviedb.org/settings/api)

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

Open `src/services/tmdbService.js` and replace `YOUR_TMDB_API_KEY_HERE` with your actual API key:

```javascript
const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE'
```

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation header
│   ├── Hero.jsx            # Large featured movie banner
│   ├── MovieCarousel.jsx   # Horizontal scrollable movie list
│   ├── MovieCard.jsx       # Individual movie card
│   └── *.css               # Component styles
├── services/
│   └── tmdbService.js      # TMDB API integration
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS3** - Styling and animations

## Key Components

### Header
- Sticky navigation with scroll effect
- Logo and menu items
- Search and notification icons
- Profile picture

### Hero Section
- Large featured movie with backdrop
- Movie title and overview
- Play and More Info buttons
- Gradient overlay

### Movie Carousel
- Horizontal scrolling movie list
- Navigation arrows
- Lazy arrow visibility toggle
- Movie cards with hover effects

### Movie Card
- Movie poster image
- Overlay with details on hover
- Rating display
- Action buttons (Play, Add, Like)

## API Endpoints Used

- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top-rated movies
- `/trending/movie/week` - Trending movies
- `/search/movie` - Search movies
- `/movie/{id}` - Movie details

## Styling Highlights

- Dark theme (#0f0f0f background)
- Netflix red accent color (#e50914)
- Smooth transitions and hover effects
- Responsive design for mobile devices
- Custom scrollbar styling

## Future Enhancements

- [ ] Search functionality
- [ ] Movie detail modal
- [ ] Favorites/watchlist feature
- [ ] User authentication
- [ ] Comments and reviews
- [ ] Multiple categories and filters
- [ ] Dark/Light theme toggle

## Colors Used

- Primary Background: `#0f0f0f` (dark)
- Text Color: `#ffffff` (white)
- Accent Color: `#e50914` (Netflix red)
- Secondary Text: `#b3b3b3` (light gray)
- Overlay: `rgba(0, 0, 0, 0.7-0.9)` (semi-transparent black)

## License

This project is created for educational purposes.

## Support

For issues with the TMDB API key, visit the [Free Keys repository](https://github.com/rickylawson/freekeys) for the latest instructions.
