# Calculator App

This is a simple calculator web application built using Flask. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The application also displays the text "phanuruj 1650703554" on the webpage.

## Project Structure

```
calculator-app
├── src
│   ├── app.py
├── Dockerfile
├── requirements.txt
└── README.md
```

## Requirements

- Python 3.x
- Flask

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/calculator-app.git
   cd calculator-app
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Running the Application Locally

To run the application locally, execute the following command:
```
python src/app.py
```
The application will be accessible at `http://127.0.0.1:5000`.

## Building the Docker Image

To build the Docker image, run the following command in the root directory of the project:
```
docker build -t calculator-app .
```

## Running the Docker Container

To run the Docker container, use the following command:
```
docker run -p 5000:5000 calculator-app
```
The application will be accessible at `http://localhost:5000`.

## Deploying to Azure App Service

1. Push the Docker image to Docker Hub:
   ```
   docker tag calculator-app yourdockerhubusername/calculator-app
   docker push yourdockerhubusername/calculator-app
   ```

2. Create an Azure App Service and configure it to pull the Docker image from Docker Hub.

3. Access the application via the Azure App Service URL.