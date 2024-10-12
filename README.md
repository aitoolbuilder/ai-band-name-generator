# AI Band Name Generator

AI Band Name Generator is a Next.js application that uses OpenAI's GPT-3.5 model to generate creative band names, slogans, meanings, and simple SVG logos based on user input.

## Features

- Generate unique band names with accompanying slogans and meanings
- Create simple SVG logos for each band name
- Responsive design with a clean, modern interface
- Built with Next.js, React, and Tailwind CSS
- Powered by OpenAI's GPT-3.5 model

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn package manager
- An OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-band-name-generator.git
   cd ai-band-name-generator
   ```

2. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   CHAT_COMPLETIONS_ENDPOINT=https://api.openai.com/v1/chat/completions
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a description of your band in the input field and click "Generate" to receive unique band names, slogans, meanings, and logos.

## Project Structure

- `app/`: Contains the main application code
  - `components/`: React components used in the application
  - `api/`: API routes for server-side functionality
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Axios
- OpenAI API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- OpenAI for providing the GPT-3.5 model
- Vercel for Next.js and hosting solutions
- The open-source community for various tools and libraries used in this project
