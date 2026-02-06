import os

API_BASE_URL = os.getenv("API_BASE_URL", "https://coconut-sever.online")
API_TIMEOUT_SECONDS = float(os.getenv("API_TIMEOUT_SECONDS", "10"))
STORAGE_FILE = os.getenv("STORAGE_FILE", ".flet_storage.json")
