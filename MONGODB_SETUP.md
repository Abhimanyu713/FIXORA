# MongoDB Setup Guide for Fixora

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. Click "Try Free" and create an account
3. Choose "Free" tier (M0)

### Step 2: Create a Cluster
1. Click "Build a Database"
2. Choose "FREE" tier
3. Select your preferred cloud provider and region
4. Click "Create"

### Step 3: Set Up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a username and password (save these!)
4. Select "Read and write to any database"
5. Click "Add User"

### Step 4: Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go back to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `your_username`, `your_password`, and `your_cluster` in `backend/config.env`

### Step 6: Update Config
Edit `backend/config.env` and replace the MONGODB_URI with your actual connection string.

## Option 2: Local MongoDB Installation (Windows)

### Step 1: Download MongoDB
1. Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Select "MongoDB Community Server"
3. Choose "Windows" and "msi"
4. Download the latest version

### Step 2: Install MongoDB
1. Run the MSI installer
2. Choose "Complete" installation
3. Install MongoDB as a Windows Service
4. Complete the installation

### Step 3: Verify Installation
1. Open Command Prompt as Administrator
2. Run: `net start MongoDB`
3. MongoDB should start as a Windows service

### Step 4: Update Config
Edit `backend/config.env` and uncomment the local MongoDB line:
```
MONGODB_URI=mongodb://localhost:27017/fixora
```

## Option 3: Use Local JSON Files (Development Only)

If you want to test the application without MongoDB, I can modify the backend to use local JSON files instead.

## Testing the Connection

After setting up MongoDB (either option), run:
```bash
npm run seed
```

This should successfully connect and seed your database with sample data.

## Troubleshooting

### Common Issues:
1. **Connection Refused**: MongoDB service not running
2. **Authentication Failed**: Wrong username/password in connection string
3. **Network Access**: IP not whitelisted in Atlas

### For MongoDB Atlas:
- Make sure your IP is whitelisted
- Verify username and password are correct
- Check if your cluster is running

### For Local MongoDB:
- Ensure MongoDB service is running: `net start MongoDB`
- Check if port 27017 is not blocked by firewall
- Verify MongoDB is installed correctly

## Need Help?

If you're still having issues, let me know and I can:
1. Help you set up MongoDB Atlas step by step
2. Modify the backend to use local JSON files instead
3. Provide alternative database solutions
