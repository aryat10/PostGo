# PostGo

PostGo is a full-fledged MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to create, read, update, and delete posts. Users can also upload images along with their posts. The platform supports secure user authentication and dynamic content display.

## 🚀 Live Demo
Check out the live application here: [PostGo](https://post-go-pink.vercel.app/)

## 💻 Tech Stack
- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Image Uploads:** Multer
- **Deployment:** Render

## ✨ Features
- User registration and login with JWT authentication
- Create, view, update, and delete posts
- Image uploads for each post
- User profile with post history
- Responsive design and smooth UI

## 🛠️ Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aryat10/PostGo.git
   cd PostGo
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install 
   npm i express cors jwt axios bcrypt mongoose multer 
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npx create-react-app .
   ```

4. Set up environment variables:
   Create a `.env` file in the `backend` folder with the following:
   ```env
   JWT_SECRET=KEY
   MONGO_URI=mongo_db_uri
   ```

5. Start the backend server:
   ```bash
   node index.js
   ```

6. Start the frontend server:
   ```bash
   npm run start
   ```

## 🤝 Contributing
Contributions are welcome! Feel free to submit a PR or open an issue.

## 💼 Connect with Me
[LinkedIn](https://www.linkedin.com/in/aryatsrivastavaweb/)

## 📄 License
This project is licensed under the MIT License.
