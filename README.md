# URL Shortener & Tracker

A simple yet powerful URL shortener with tracking functionality, built using Node.js, Express, and MongoDB.

## Features
- Shorten long URLs into compact, shareable links
- Track the number of times a shortened URL has been accessed
- Store URL metadata in a MongoDB database
- Simple API for generating and retrieving shortened links

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Other:** JavaScript, REST API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kush1jpeg/URL-shortener-x-tracker.git
   cd URL-shortener-x-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     BASE_URL=http://localhost:5000 # Change as per deployment
     PORT=5000
     ```
4. Start the server:
   ```sh
   npm start
   ```

## API Usage

### 1. Shorten a URL
   - **Endpoint:** `POST /shorten`
   - **Request Body:**
     ```json
     {
       "longUrl": "https://example.com"
     }
     ```
   - **Response:**
     ```json
     {
       "shortUrl": "http://localhost:5000/abc123"
     }
     ```

### 2. Redirect to Original URL
   - **Endpoint:** `GET /:shortCode`
   - **Description:** Redirects the user to the original URL and updates the visit count.

### 3. Get URL Stats
   - **Endpoint:** `GET /stats/:shortCode`
   - **Response:**
     ```json
     {
       "originalUrl": "https://example.com",
       "shortUrl": "http://localhost:5000/abc123",
       "clicks": 10
     }
     ```

## Roadmap
- [ ] Implement user authentication
- [ ] Add custom short link support
- [ ] Improve UI for easier usage
- [ ] Deploy on a cloud platform

## Contributing
Feel free to fork this repository, make improvements, and submit a pull request!
