FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt flask

ENV PORT=80

COPY src/ .

# Expose port 80 for Azure App Service
EXPOSE 80

# Use gunicorn for production-ready deployment
RUN pip install gunicorn

CMD ["gunicorn", "--bind", "0.0.0.0:80", "app:app", "--workers", "4", "--threads", "2"]