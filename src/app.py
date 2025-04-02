from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='static')

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    # Serve static files from the 'static' folder
    return send_from_directory(app.static_folder, path)

@app.errorhandler(404)
def handle_404(e):
    # Return a custom 404 error message or redirect to the index page
    return send_from_directory(app.static_folder, 'index.html'), 404

if __name__ == '__main__':
    try:
        port = int(os.getenv("PORT", 8000))  # Default to port 8000 for Azure compatibility
        print(f"Starting server on port {port}...")  # Log the port being used
        app.run(host='0.0.0.0', port=port)
    except Exception as e:
        print(f"Error starting the server: {e}")  # Log any startup errors