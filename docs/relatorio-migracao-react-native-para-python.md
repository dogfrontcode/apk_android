# Relatório Técnico de Migração: React Native (Expo) → Framework Python

## 1) Diagnóstico do projeto atual

Com base no código-fonte, a aplicação atual é um app mobile em **React Native + Expo + TypeScript**, com:

- Navegação por arquivos usando **Expo Router**.
- Estilização em **styled-components/native**.
- Consumo de API HTTP com **Axios**.
- Persistência local com **expo-storage** (e `localStorage` no web).
- Estrutura de UI em padrão de componentes (Templates/Organisms/Molecules).

O fluxo principal observado:

1. Tela inicial verifica `user_data` no storage.
2. Se houver sessão, redireciona para menu principal.
3. Se não houver sessão, segue para autenticação.
4. Login faz POST em `/api/cnh/consultar/login`, salva dados retornados e abre o menu.

Além disso, o projeto utiliza assets locais (imagens e fontes) e renderiza múltiplas telas funcionais (condutor, infrações, veículos, educação, notificações etc.).

## 2) O que precisa ser migrado (inventário funcional)

### Camadas técnicas

- **Navegação** (Stack/rotas por arquivo).
- **Componentes e layout** (cards, headers, listas e telas com blocos reutilizáveis).
- **Tema/estilos** (cores, tipografia, sombras, espaçamento).
- **Autenticação** e **estado de sessão**.
- **Persistência local** de dados e documentos em base64.
- **Integração com API REST**.
- **Assets estáticos** (ícones, imagens, fontes).

### Complexidade atual estimada

- `23` arquivos de rota em `app/`.
- `19` componentes de template em `components/Templates`.
- `9` componentes em `components/Organisms`.

Isso indica uma migração de porte **médio** (UI multi-tela + autenticação + armazenamento local + integração remota).

## 3) Frameworks Python candidatos

## Opção A — **Flet** (recomendação principal para velocidade)

**Resumo:** framework Python para apps multiplataforma (mobile/web/desktop), com abordagem declarativa de UI e roteamento.

**Prós:**
- Curva de migração mais curta para equipe focada em produtividade.
- Código único Python para Android/iOS/Web/Desktop.
- Componentização e roteamento simples para reproduzir fluxo atual.
- Bom para apps com formulários, dashboards, listas e navegação.

**Contras:**
- Menor ecossistema de plugins mobile nativos que React Native.
- Ajustes visuais “pixel-perfect” podem exigir adaptação.

**Quando escolher:**
- Quando prioridade é migrar rápido, manter funcionalidades e reduzir stack JS.

---

## Opção B — **Kivy / KivyMD**

**Resumo:** stack Python madura para apps gráficos e mobile.

**Prós:**
- Ecossistema conhecido em Python para UI mobile.
- Bom controle de UI e eventos.
- Distribuição Android consolidada com Buildozer.

**Contras:**
- Visual padrão difere de apps nativos modernos (pode exigir esforço de design).
- Migração de componentes visuais tende a ser mais manual.

**Quando escolher:**
- Quando equipe já domina Kivy e aceita maior esforço de UI.

---

## Opção C — **BeeWare (Toga)**

**Resumo:** proposta de apps nativos multiplataforma em Python.

**Prós:**
- Abordagem mais próxima de componentes nativos.
- Projeto alinhado com ecossistema Python puro.

**Contras:**
- Ecossistema e maturidade prática podem variar por plataforma/caso.
- Maior risco de retrabalho dependendo dos componentes exigidos.

**Quando escolher:**
- Quando o objetivo principal é “nativo” em Python, com tolerância a maior risco técnico.

## 4) Recomendação objetiva

Para este projeto específico (múltiplas telas de CRUD/consulta, login, persistência local e API REST), a recomendação é:

1. **Flet** como alvo principal de migração.
2. Arquitetura em camadas:
   - `ui/` (telas e componentes),
   - `services/` (API, auth),
   - `storage/` (persistência),
   - `models/` (tipos e validação).
3. Entrega incremental por módulos (login → menu → condutor → infrações → demais telas).

## 5) Mapeamento React Native → Python (Flet)

- `expo-router` → roteamento por `page.route` + views por rota.
- `useState` / `useEffect` → estado em classes/funções e ciclo de vida via handlers.
- `styled-components/native` → tema + propriedades visuais por controle/componente Flet.
- `axios` → `httpx` ou `requests` com camada de serviço.
- `expo-storage`/`localStorage` → SQLite local (recomendado) ou armazenamento chave-valor.
- Assets (`require(...)`) → diretório de assets com paths explícitos no app Python.

## 6) Plano de migração sugerido (8–12 semanas)

### Fase 0 — Prova de conceito (1 semana)
- Estruturar projeto Flet.
- Implementar navegação base e tela de login mock.
- Validar build Android de ponta a ponta.

### Fase 1 — Núcleo técnico (1–2 semanas)
- Cliente HTTP com timeout, tratamento de erro e interceptação simples.
- Persistência local (sessão + cache de documentos).
- Tema global (cores/fontes) equivalente ao app atual.

### Fase 2 — Fluxo crítico (2–3 semanas)
- Login real com endpoint atual.
- Menu inicial e redirecionamento por sessão.
- Tela de condutor com dados principais.

### Fase 3 — Demais módulos (2–4 semanas)
- Infrações, veículos, educação, notificações e telas complementares.
- Ajustes de UX e consistência visual.

### Fase 4 — Hardening e publicação (2 semanas)
- Testes funcionais e regressão.
- Telemetria/logs de erro.
- Build de release e documentação operacional.

## 7) Riscos e mitigação

- **Risco de regressão visual:** definir design tokens e checklist de paridade por tela.
- **Risco de contrato de API:** congelar schema de resposta e criar testes de contrato.
- **Risco de performance em assets/base64:** migrar cache para arquivos + índice em SQLite.
- **Risco de prazo:** migrar primeiro fluxo crítico e publicar em ondas.

## 8) Critérios de sucesso da migração

- Login + sessão persistente funcionando em Android.
- Paridade funcional das telas críticas (menu, condutor, infrações, veículos).
- Erro de API tratado com mensagens amigáveis.
- Build de release reproduzível por pipeline.
- Tempo de abertura e navegação dentro de metas acordadas.

## 9) Conclusão executiva

A migração para Python é viável e tecnicamente recomendável, desde que seja **incremental**. Para manter a mesma proposta funcional do app atual com menor risco de prazo, **Flet** oferece a melhor relação entre produtividade e cobertura multiplataforma. Kivy e BeeWare continuam opções válidas, porém com maior custo de adaptação ou risco de ecossistema, dependendo do nível de paridade visual exigido.
