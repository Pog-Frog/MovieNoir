# MovieNoir 🎬

MovieNoir is a sleek React application designed for discovering movies and TV shows. Built with modern web technologies, it leverages the TMDB (The Movie Database) API to provide up-to-date information, ratings, trailers, and more.
## ✨ What MovieNoir Offers

*   **Dynamic Home Feed:** A central hub featuring a prominent slider showcasing the 5 most popular current movies. It also provides instant access to organized lists highlighting top-rated films and widely-watched TV series.
*   **Comprehensive Information View:** Selecting any title reveals a detailed breakdown: its narrative overview, memorable tagline, user rating, runtime, premiere date, current status (Released, Ended, etc.), key cast members, and an integrated video trailer. TV shows include relevant season details.
*   **Focused Exploration Sections:** Dedicated pages allow users to browse movies or TV series independently. Utilize the search function to find specific entries or apply filters like 'Top Rated' and 'Popular' to sort the catalogs.
*   **Viewing Options Guide:** A practical 'Providers' page lists the leading 50 platforms (streaming services, rental/purchase options) where a selected movie or TV show is available, based on TMDB's regional data.

## 🛠️ Technologies Used

*   **React (v19):** Core UI library.
*   **React Router:** For handling client-side routing and navigation between pages.
*   **TypeScript:** For static typing, enhancing code quality and developer experience.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **TMDB API:** Source for all movie and TV show data.

## 🚀 Getting Started

### Prerequisites

*   Node.js
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Pog-Frog/MovieNoir.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd MovieNoir
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
  
4.  **Set up environment variables:**
    *   Create a `.env` file in the root of the project.
    *   Add your TMDB API key to the `.env` file. 
    
        ```env
        VITE_TMDB_API_KEY=your_actual_tmdb_api_key_here
        ```

### Usage

1.  **Start the development server:**
   
    ```bash
    npm run dev
    ```
2.  **Open your browser:**
    Navigate to `http://localhost:3000` 
