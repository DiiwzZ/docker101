# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# If using Express, ensure the public directory is copied
COPY public /usr/src/app/public

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the application
CMD ["npm", "start"] 