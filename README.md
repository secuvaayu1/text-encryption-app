# text-encryption-app


# Text Encryption Web App

A simple Node.js + Express web application to encrypt and decrypt text using AES-256-CBC.  
Each encryption generates a random IV, ensuring different ciphertext even for the same plaintext.

## 🚀 Features
- AES-256-CBC encryption/decryption
- Random IV for every encryption
- Web UI for user interaction
- Works locally, no external APIs

## ⚙️ Setup & Run
```bash
# 1. Clone the repository
git clone https://github.com/your-username/text-encryption-app.git
cd text-encryption-app

# 2. Install dependencies
npm install

# 3. Create .env file from example
cp .env.example .env
# Edit .env and set ENCRYPTION_KEY to a 32-character secret key

# 4. Start the server
npm start

# 5. Open browser
http://localhost:3000
