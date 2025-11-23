# Personal Website - GitHub Projects Showcase

A modern, unique personal website to showcase your GitHub projects with a beautiful UI.

## Features

- 🎨 Modern, unique design with gradient accents and smooth animations
- 📱 Fully responsive layout
- ⚡ Fast and lightweight (built with Vite + React)
- 🔄 Automatic GitHub API integration
- 🎯 Displays project stats (stars, forks, languages)
- 🏷️ Shows repository topics/tags
- 🌐 Live demo links support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Configure your GitHub username:
   - Open `src/config.js`
   - Replace `'YOUR_GITHUB_USERNAME'` with your actual GitHub username

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Customization

### Colors and Styling

The color scheme is defined in `src/index.css` using CSS variables. You can customize:

- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background color
- `--accent`: Accent color (used for links and highlights)
- `--gradient-start` and `--gradient-end`: Gradient colors

### Header Text

Edit `src/components/Header.jsx` to change the header title and subtitle.

## Deployment

You can deploy this website to any static hosting service:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect your repo for automatic deployments

## License

MIT

