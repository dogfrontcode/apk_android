# CLAUDE.md — CDT (Carteira Digital de Trânsito)

Projeto composto por dois repositórios:
- `apk_android/` — app mobile (Expo / React Native)
- `server_closefriends/` — backend (Flask + SQLite)

---

## Estrutura do projeto

```
apk_android/
  app/                    # Rotas (expo-router, file-based)
    _layout.tsx           # Root layout — carrega fontes e controla splash screen
    index.tsx             # Tela inicial — verifica session e redireciona
    login/gov.tsx         # Tela de login
    login/out.tsx         # Logout — limpa todo o storage
    app/_layout.tsx       # Layout das telas internas (pós-login)
    app/menu.tsx          # Menu principal
    app/driver/           # Subárea Condutor
    app/vehicles/         # Subárea Veículos
    app/infractions/      # Subárea Infrações
    app/education/        # Subárea Educação
  components/
    Templates/            # Telas completas (uma por página)
    Organisms/            # Componentes complexos (Header, Carousel, Drawer)
    Molecules/            # Componentes médios (Document, RenderCards)
  hooks/
    useFonts.ts           # Carrega fontes Poppins + helper getFontFamily()
  utils/
    api.ts                # Instância axios + api_base_url
    storage.ts            # Wrapper de AsyncStorage (web/native)
  assets/fonts/Poppins/   # Apenas as 10 variantes usadas (não carregar as 18)

server_closefriends/
  __init__.py             # create_app(), config SQLAlchemy, blueprints
  models/user.py          # Model User — username, password_hash, credits
  models/cnh_request.py   # Model CNHRequest — dados da CNH + arquivos gerados
  controllers/auth.py     # Blueprint /api/auth — register, login, logout
  controllers/cnh.py      # Blueprint /api/cnh — geração e consulta de CNH
  static/uploads/cnh/     # Imagens geradas (frente, verso, QR code)
```

---

## Contratos de API relevantes

### POST `/api/cnh/consultar/login` — login do app mobile
**Request:**
```json
{ "cpf": "123.456.789-00", "senha": "123456" }
```
**Response:**
```json
{
  "success": true,
  "cnh": {
    "controle": {
      "nome_completo": "...",
      "cpf": "...",
      "sexo_condutor": "M",
      "local_uf": "SP",
      "categoria_habilitacao": "B",
      "data_nascimento": "...",
      "data_emissao": "...",
      "validade": "...",
      "data_criada": "...",
      "data_expiracao": "..."
    },
    "arquivos": {
      "cnh_front_path": "static/uploads/...",
      "cnh_back_path": "static/uploads/...",
      "cnh_back2_path": "static/uploads/...",
      "qr_code_path": "static/uploads/..."
    }
  }
}
```

**Importante:** O app salva `data.cnh` como `JSON.stringify(data.cnh)` no storage com a chave `user_data`. Sempre ler com `JSON.parse()`.

---

## Convenções do app

- **Storage keys:** `user_data`, `cnh_front`, `cnh_back`, `cnh_sign`, `cnh_qr`, `cnh_files_cached`, `profile_image`
- **`cnh_files_cached`:** flag que evita re-download das imagens da CNH a cada abertura do menu. Limpar no login (`removeItem`) e no logout.
- **Fontes:** usar sempre `getFontFamily("700")` etc. — nunca `fontWeight` direto no React Native, pois não funciona com fontes customizadas.
- **Env var da API:** `EXPO_PUBLIC_API_URL` (não `NEXT_PUBLIC_API_URL`)
- **Estrutura `user_data`:** o campo raiz é `controle` (não `dados_pessoais` — esse campo não existe)

---

## Onde mudar o front-end (trocar React Native / Expo)

O front-end está 100% desacoplado do servidor via API REST. Para trocar:

### Arquivos que definem o framework atual:
| Arquivo | O que faz |
|---|---|
| `package.json` | Dependências — `expo`, `react-native`, `expo-router` |
| `app.json` | Config do Expo (ícone, splash, plugins, scheme `cdt://`) |
| `app/_layout.tsx` | Entry point do app — aqui começa o React Native |
| `eas.json` | Config de build (EAS Build — Expo) |

### Para trocar por outro framework (Flutter, React Native CLI, Kotlin nativo):
1. O servidor **não muda nada** — continua respondendo os mesmos endpoints
2. Reimplementar a chamada `POST /api/cnh/consultar/login` com CPF + senha
3. Reimplementar o armazenamento local das imagens base64 da CNH
4. O `scheme: "cdt"` no `app.json` é o deep link — recriar no novo framework
5. Os assets (`assets/images/`, `assets/fonts/`) são reaproveitáveis

### Para trocar só a web (manter mobile):
- `app.json` → `web.output: "static"` e `web.bundler: "metro"` — isso é Expo Web
- Para usar Next.js/Vite no lugar: criar projeto separado e apontar para a mesma API

---

## Alteracoes futuras planejadas

### [ALTA PRIORIDADE] Migrar banco SQLite -> Supabase (PostgreSQL)

**Motivo:** SQLite fica preso na VPS. Rodar localmente e em produção cria bancos separados. Supabase resolve isso — banco na nuvem, acessível de qualquer lugar.

**O que muda no servidor:**
```python
# __init__.py — trocar apenas esta linha:
# ANTES:
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# DEPOIS:
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
# DATABASE_URL vem do painel do Supabase (connection string PostgreSQL)
```

**O que NÃO muda:** models, controllers, lógica de negócio — SQLAlchemy abstrai tudo.

**Passos:**
1. Criar projeto no supabase.com (grátis até 500MB)
2. Copiar a connection string em Settings > Database > Connection string (URI mode)
3. Instalar `psycopg2-binary` no `requirements.txt`
4. Substituir a linha acima e colocar `DATABASE_URL` como variável de ambiente na VPS
5. Rodar `flask db upgrade` ou deixar o `db.create_all()` criar as tabelas automaticamente

**Benefícios:**
- Dashboard visual para ver/editar usuários e CNHs
- Backup automático
- Desenvolvimento local e produção usando o mesmo banco
- Escalável sem mudar código

---

### [MEDIA PRIORIDADE] Imagens da CNH — mover para storage em nuvem

**Situação atual:** imagens geradas ficam em `static/uploads/` na VPS. Se a VPS reiniciar ou trocar, os arquivos somem.

**Solução:** Supabase Storage (ou S3) para guardar as imagens.

**Impacto no app:** o `cnh_front_path` etc. passariam a ser URLs públicas em vez de caminhos locais — o `fileToBase64` em `TMenuScreen` faria fetch normalmente.

---

### [BAIXA PRIORIDADE] Autenticacao do app com JWT

**Situação atual:** o login retorna os dados da CNH diretamente, sem token de sessão para o app.

**Melhoria:** retornar um JWT no login e enviá-lo no header `Authorization: Bearer <token>` em chamadas futuras — protege endpoints sensíveis.

---

## Problemas ja corrigidos (historico)

- `storage.setItem('user_data', data.cnh)` → faltava `JSON.stringify()` — dados eram salvos como `[object Object]`
- `dados_pessoais.nome_completo` → campo inexistente; correto é `controle.nome_completo`
- `useFonts` carregava 18 variantes → reduzido para 10 (sem italic de peso específico)
- `isJson()` em `storage.ts` nunca funcionava (comparava string com `typeof object`)
- `NEXT_PUBLIC_API_URL` → corrigido para `EXPO_PUBLIC_API_URL` (padrão Expo)
- Carousel instanciava todos os 4 documentos simultaneamente → lazy render por slide
- `TMenuScreen` re-baixava imagens da CNH a cada abertura do menu → flag `cnh_files_cached`
- Logout não limpava imagens da CNH no storage local
