# BioGPT

![GitHub repo size](https://img.shields.io/github/repo-size/ehsanghaffar/biogpt)
![GitHub issues](https://img.shields.io/github/issues/ehsanghaffar/biogpt)
![GitHub stars](https://img.shields.io/github/stars/ehsanghaffar/biogpt)
![GitHub forks](https://img.shields.io/github/forks/ehsanghaffar/biogpt)
![GitHub license](https://img.shields.io/github/license/ehsanghaffar/biogpt)

Create engaging social media bios with ease using the Social Media Bio Generator! This web application generates unique and personalized social media bios based on user input and offers different vibes to choose from.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Compose](#docker-compose)
- [Vibes](#vibes)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate personalized social media bios.
- Choose from three different vibes: Advanced, Regular, and Funny.
- User-friendly interface for input and bio selection.
- Copy the generated bio to the clipboard with a single click.
- Mobile-responsive design for a seamless experience on all devices.

## Demo

![Demo](demo.gif)

Check out the live demo of the Social Media Bio Generator [here](https://bio.ehsanghaffarii.ir/).

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ehsanghaffar/biogpt 
   ```

2. Navigate to the project directory:

   ```bash
   cd biogpt
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the Social Media Bio Generator.

## Usage

1. Visit the web application at [your-website-url](https://bio.ehsanghaffarii.ir/).

2. Enter a short description about yourself or the person for whom you want to create a social media bio.

3. Select the desired vibe from the options: Advanced, Regular, or Funny.

4. Click the "Generate Bio" button, and a unique social media bio will be displayed.

5. Click the "Copy to Clipboard" button to easily copy the generated bio.

## Docker Compose

You can also run the Social Media Bio Generator using Docker Compose. Follow these steps:

1. Create a Docker network:

   ```bash
   docker network create my_network
   ```

2. Build the project:

   ```bash
   docker compose -f docker-compose.dev.yml build
   ```

3. Start the application:

   ```bash
   docker compose -f docker-compose.dev.yml up
   ```

## Vibes

The Social Media Bio Generator offers three different vibes to suit your personality and style:

- **Advanced**: For a professional and sophisticated bio.
- **Regular**: A balanced and standard bio.
- **Funny**: Add some humor to your bio for a fun and light-hearted feel.

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add your commit message here'
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
