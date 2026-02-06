import json
from pathlib import Path
from typing import Any, Optional

from .config import STORAGE_FILE


class LocalStorage:
    def __init__(self, file_path: str = STORAGE_FILE) -> None:
        self.path = Path(file_path)
        if not self.path.exists():
            self.path.write_text("{}", encoding="utf-8")

    def _read_all(self) -> dict:
        try:
            return json.loads(self.path.read_text(encoding="utf-8"))
        except Exception:
            return {}

    def _write_all(self, data: dict) -> None:
        self.path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")

    def get(self, key: str, default: Optional[Any] = None) -> Any:
        return self._read_all().get(key, default)

    def set(self, key: str, value: Any) -> None:
        data = self._read_all()
        data[key] = value
        self._write_all(data)

    def remove(self, key: str) -> None:
        data = self._read_all()
        if key in data:
            del data[key]
            self._write_all(data)
