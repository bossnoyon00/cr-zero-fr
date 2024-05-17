# Use an official Node.js runtime as a parent image
FROM node:21-alpine3.17

# Set the working directory inside the container
WORKDIR /app

COPY . .

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./



# Copy the rest of the application code to the working directory
# COPY . .

# Install dependencies
RUN npm install

# Build the React application for production
RUN npm run build

# Install a simple HTTP server to serve the built React application
RUN npm install -g serve

# Set the environment variable to serve the built files from build folder
ENV REACT_APP_PORT 4000

# Start the HTTP server and serve the built files
CMD ["serve", "-s", "build", "-l", "4000"]

# Expose port 4000 to the outside world
EXPOSE 4000



