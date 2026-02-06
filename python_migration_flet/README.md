# Migração inicial para Python (Flet)

Este diretório contém uma base funcional para migração do app React Native para Python usando **Flet**.

## O que já foi migrado (MVP)

- Fluxo de sessão inicial (`/`): redireciona para login ou menu.
- Login real contra a API (`POST /api/cnh/consultar/login`).
- Persistência local de `user_data` em arquivo JSON.
- Menu principal com navegação.
- Tela de **Condutor** (dados básicos de `controle`).
- Tela base de **Infrações**.

## Estrutura

- `app.py`: aplicação e roteamento.
- `services/api.py`: cliente HTTP do backend.
- `services/storage.py`: armazenamento local.
- `views/login_view.py`: componente da tela de login.

## Executar

```bash
cd python_migration_flet
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

## Próximos passos sugeridos

1. Migrar as demais telas (`vehicles`, `education`, `notifications`, etc.).
2. Criar camada de modelos/validação para payloads da API.
3. Migrar cache de documentos base64 para arquivos + índice local.
4. Ajustar tema/tipografia para maior paridade visual com o app atual.
