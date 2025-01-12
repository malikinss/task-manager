# 1. Specify the base Node.js image
# This allows us to use a pre-prepared environment with Node.js installed
FROM node:20

# 2. Set the working directory inside the container
# All commands after WORKDIR will be executed in this directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
# These files contain a list of all project dependencies
COPY package*.json ./

# 4. Install project dependencies
# This runs `npm install` command to install libraries
RUN npm install

# 5. Copy all project files to the container
# Copy all source code (except ignored files)
COPY . .

# 6. Specify the command to run the application
# This will be executed when the container starts
CMD ["npm", "run", "start"]

# 7. Open port 3000 to access the application
EXPOSE 3000
