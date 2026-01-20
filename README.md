# 📝 QuickNotes - Minimalist Note-Taking API

[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.17-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Minimalist note-taking application with cloud sync capabilities

Simple and efficient RESTful API for managing personal notes. Built with Node.js and Express, featuring file-based JSON storage and a clean, minimalist design. Perfect for quick note-taking and organization.

## ✨ Key Features

- **📝 Note Management** - Create, read, update, and delete notes
- **💾 File-Based Storage** - JSON file persistence (no database required)
- **🌐 CORS Enabled** - Ready for frontend integration
- **⚡ Lightweight** - Minimal dependencies, fast performance
- **🎨 Clean API** - Simple RESTful design
- **🖥️ Web Interface** - Included HTML/JS frontend
- **🔄 Real-time Updates** - Instant note synchronization

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 14+ | Runtime environment |
| Express | 4.17 | Web framework |
| Body-Parser | 1.19 | Request body parsing |
| JavaScript | ES6 | Programming language |
| JSON | - | Data storage format |

## 🚀 Quick Start

### Prerequisites
- Node.js 14 or higher
- npm (Node package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/kelvinmendoza59/api-notas-node.git
cd api-notas-node

# Install dependencies
npm install

# Start the server
npm start

# Or for development with auto-reload:
npm run dev
```

The API will be available at `http://localhost:3000`

## 📡 API Endpoints

### Notes Management

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/notas` | Get all notes | - |
| GET | `/api/notas/:id` | Get note by ID | - |
| POST | `/api/notas` | Create new note | `{ "titulo", "contenido" }` |
| PUT | `/api/notas/:id` | Update note | `{ "titulo", "contenido" }` |
| DELETE | `/api/notas/:id` | Delete note | - |

**Create Note Example:**
```bash
curl -X POST http://localhost:3000/api/notas \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Meeting Notes",
    "contenido": "Discuss project roadmap and deliverables"
  }'
```

**Get All Notes:**
```bash
curl -X GET http://localhost:3000/api/notas
```

**Update Note:**
```bash
curl -X PUT http://localhost:3000/api/notas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Updated Meeting Notes",
    "contenido": "Revised project timeline and milestones"
  }'
```

**Delete Note:**
```bash
curl -X DELETE http://localhost:3000/api/notas/1
```

## 📂 Project Structure

```
api-notas-node/
├── server.js              # Main Express application
├── package.json           # Dependencies and scripts
├── notas.json            # JSON file storage (auto-generated)
├── public/
│   ├── index.html        # Web interface
│   └── app.js            # Frontend JavaScript
└── README.md             # This file
```

## 💡 How It Works

1. **File-Based Storage**: Notes are stored in a `notas.json` file
2. **Auto-Generation**: The JSON file is created automatically on first use
3. **CORS Enabled**: API accessible from any frontend application
4. **REST Principles**: Standard HTTP methods for CRUD operations
5. **Express Routing**: Clean URL structure with Express.js

## 🌐 Web Interface

The API includes a simple web interface for managing notes:

1. Start the server with `npm start`
2. Open `http://localhost:3000` in your browser
3. Use the interface to create, view, edit, and delete notes

## 🗄️ Data Format

Notes are stored in the following JSON structure:

```json
[
  {
    "id": 1,
    "titulo": "Meeting Notes",
    "contenido": "Discuss project roadmap and deliverables",
    "fecha": "2024-01-15T10:30:00Z"
  }
]
```

## 🔄 Response Examples

**Success Response:**
```json
{
  "id": 1,
  "titulo": "Meeting Notes",
  "contenido": "Discuss project roadmap and deliverables",
  "fecha": "2024-01-15T10:30:00Z"
}
```

**Error Response:**
```json
{
  "error": "Nota no encontrada"
}
```

## 🧪 Testing

```bash
# Install development dependencies
npm install

# Start development server with auto-reload
npm run dev

# Test with curl or Postman
# See API Endpoints section for examples
```

## 📈 Roadmap

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Note categories and tags
- [ ] Search and filtering functionality
- [ ] Rich text editor support
- [ ] File attachments
- [ ] Sharing and collaboration features
- [ ] API documentation with Swagger

## ⚙️ Configuration

Edit `server.js` to customize the port:

```javascript
const PORT = 3000; // Change to your preferred port
```

CORS settings can be adjusted in the middleware section:

```javascript
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Customize allowed origins
    // ... other headers
});
```

## 🤝 Contributing

This is a personal project showcasing my Node.js and Express development skills. However, suggestions and feedback are welcome!

## 📧 Contact

**Kelvin Mendoza**
- 🌐 Portfolio: [portfolio-web-kelvin.vercel.app](https://portfolio-web-kelvin.vercel.app)
- 📧 Email: kelvinmendoza309@gmail.com
- 🐙 GitHub: [@kelvinmendoza59](https://github.com/kelvinmendoza59)

## 📝 License

This project is for portfolio demonstration purposes.

---

<p align="center">
  <sub>Built with Node.js and Express 💚 | Part of my Full-stack Portfolio</sub>
</p>
