# AI Article Summarizer

https://openai-article-shortener.netlify.app/
![ai-sum](https://github.com/TheODDYSEY/AI-Summarizer-SaaS/assets/98217039/3de37cc4-3160-45f3-82d5-47a64cc4b074)

This is a React-based web application for summarizing articles using an AI-powered service. It allows users to input article links, retrieve summaries, and browse their history of summarized articles. Below is a README file providing an overview of the code and its functionality.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The AI Article Summarizer is a web application that leverages React to provide the following features:

1. **Summarize Articles**: Users can input the URL of an article, and the application will fetch and display a summary of the article's content using an AI-powered service.

2. **Browse History**: The application stores a history of summarized articles, allowing users to click on a previously summarized article to view its summary again.

3. **Copy URL**: Users can copy the URL of a summarized article to their clipboard for easy sharing.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager): You can download them from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-article-summarizer
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will start the application locally, and you can access it in your web browser at `http://localhost:3000`.

## Usage

1. **Summarize an Article**:
   - Enter the URL of the article you want to summarize in the input field.
   - Press the Enter key or click the submit button.
   - The application will fetch and display the summary of the article.

2. **Browse History**:
   - Scroll down to see a list of previously summarized articles.
   - Click on any article in the history list to view its summary.

3. **Copy URL**:
   - To copy the URL of a summarized article to your clipboard, click the copy icon next to the article in the history list.
   - You will receive feedback in the form of an icon change and a notification.

## Folder Structure

The project has the following folder structure:

- `src/`: Contains the React application source code.
  - `components/`: React components used in the application.
  - `assets/`: Static assets such as images.
  - `services/`: API service integration.
- `public/`: Contains the public assets and the HTML template.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux Toolkit: A state management library for React applications.
- RTK Query: A library for data fetching and caching with Redux.
- Tailwind CSS: A utility-first CSS framework for styling the application.
- Clipboard API: Used to copy URLs to the clipboard.
- Local Storage: Used to store and retrieve the history of summarized articles.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your forked repository: `git push origin feature-name`.
5. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to use, modify, and distribute this code according to the terms of the MIT License.
