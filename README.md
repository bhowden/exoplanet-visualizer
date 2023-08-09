# Exoplanet Visualizer

The Exoplanet Visualizer is a web application that allows you to visualize the position of an exoplanet in 3D space. It uses Three.js, a popular JavaScript library for 3D graphics, to create an interactive representation of the exoplanet's location and relevant data.

## Features

- Display the exoplanet's position on a 3D globe.
- Show a marker and line indicating the exoplanet's direction from Earth.
- Label the exoplanet's Right Ascension (RA) and distance in light years.
- Easily customize the exoplanet's data using query parameters.
- Responsive design that adapts to different screen sizes.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Docker (optional)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/exoplanet-visualizer.git
   cd exoplanet-visualizer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. Customize the exoplanet data by modifying the query parameters in the URL or by editing the `index.html` file.

2. Start the local development server:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

### Docker (Alternative)

You can also use Docker to run the application:

1. Build the Docker image:

   ```bash
   docker build -t exoplanet-visualizer .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 exoplanet-visualizer
   ```

   Access the application at `http://localhost:3000` in your web browser.

## Customization

You can customize the exoplanet's data and appearance by modifying the query parameters in the URL or by editing the `index.html` file. The `server.js` file serves the static content and sets up the web server.

## Contributing

Contributions are welcome! If you find a bug or have an enhancement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Replace `yourusername` with your GitHub username, and make sure to adjust any details and URLs as needed. You can also add more sections or details to the `README.md` file as your project evolves.
