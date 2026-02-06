from typing import Any, Dict

import requests

from .config import API_BASE_URL, API_TIMEOUT_SECONDS


class CdtApiClient:
    def __init__(self, base_url: str = API_BASE_URL, timeout: float = API_TIMEOUT_SECONDS) -> None:
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout

    def login(self, cpf: str, senha: str) -> Dict[str, Any]:
        url = f"{self.base_url}/api/cnh/consultar/login"
        response = requests.post(
            url,
            json={"cpf": cpf, "senha": senha},
            timeout=self.timeout,
            headers={"Content-Type": "application/json"},
        )

        if not response.ok:
            try:
                message = response.json().get("message")
            except Exception:
                message = None
            raise RuntimeError(message or f"Erro HTTP {response.status_code} no login")

        return response.json()
