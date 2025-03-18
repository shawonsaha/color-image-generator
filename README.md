# Color Image Generator

This is a [Next.js](https://nextjs.org) project that allows users to generate images based on a color code, dimensions, and format. The application is built with TypeScript and styled using Tailwind CSS.

## Features

- **Color Picker**: Select any color using a modern color picker.
- **Custom Dimensions**: Set image dimensions up to 100,000px.
- **Aspect Ratio**: Choose from common aspect ratios to maintain proportions.
- **Format Selection**: Generate images in PNG, JPEG, or WebP formats.
- **Responsive Design**: Mobile-friendly and dark mode support.
- **Image Download**: Download the generated image directly.

## Getting Started

### Prerequisites

- Node.js (v18.12.0 or later)
- npm (v9.8.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/color-image-generator.git
   cd color-image-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Use the color picker to select a color.
2. Set the desired image dimensions (width and height).
3. Choose an aspect ratio to maintain proportions.
4. Select the output format (PNG, JPEG, or WebP).
5. Click "Generate Image" to create the image.
6. View the generated image and download it.

## Project Structure

- `app/components`: Contains the React components for the application.
- `app/api/generate-image`: API route for image generation using the `canvas` library.
- `app/page.tsx`: Main page component that integrates the form and display components.
- `app/layout.tsx`: Layout component for global styles and metadata.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
