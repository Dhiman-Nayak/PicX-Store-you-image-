# Decentralized Image Sharing Platform

This repository contains the source code for a decentralized image sharing platform built on blockchain technology. Users can upload, store, and share images securely using the Ethereum blockchain and IPFS (InterPlanetary File System).

## Features

- **Decentralized Storage:** Images are stored on IPFS, a decentralized storage system, ensuring data integrity and availability.
  
- **Blockchain Integration:** Ethereum blockchain is used for user authentication and managing access to uploaded images.
  
- **User Authentication:** Users can authenticate themselves using their Ethereum wallet address.
  
- **Image Encryption:** Uploaded images are encrypted before being stored on IPFS to ensure privacy and security.
  
- **Image Retrieval:** Users can retrieve their images by querying the smart contract with their wallet address.
  
- **Pagination:** Images are paginated to improve user experience and performance.

## Technologies Used

- **Ethereum:** Smart contract development for user authentication and access control.
  
- **IPFS:** Decentralized storage for storing encrypted images.
  
- **React:** Frontend framework for building the user interface.
  
- **Node.js/Express:** Backend server for handling API requests and business logic.
  
- **Axios:** HTTP client for making requests to the backend API.

## Installation

To run the application locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/decentralized-image-sharing.git
   ```

2. Navigate to the project directory:
   ```bash
   cd decentralized-image-sharing
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up the Ethereum development environment and deploy the smart contract.

5. Configure the environment variables for the backend server and the frontend application.

6. Start the backend server:
   ```bash
   npm start
   ```

7. Start the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

8. Open your web browser and navigate to `http://localhost:5173` to access the application.

## Usage

- Sign in with your Ethereum wallet address.
- Upload images securely.
- View and share your uploaded images.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).
