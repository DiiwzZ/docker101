#!/bin/bash
cd /home/site/wwwroot
gunicorn --bind=0.0.0.0:8000 src.app:app --workers 4 --threads 2 