# Makefile para simplificar comandos do projeto React Native/Expo

# Detectar o gerenciador de pacotes (npm ou yarn)
PM := npm
ifeq ($(shell test -f yarn.lock && echo yes),yes)
	PM := yarn
endif

.PHONY: help setup start android ios web clean lint

help:
	@echo "Comandos disponíveis:"
	@echo "  make setup    - Instala todas as dependências do projeto"
	@echo "  make start    - Inicia o servidor de desenvolvimento (Expo)"
	@echo "  make android  - Inicia o app no emulador Android"
	@echo "  make ios      - Inicia o app no simulador iOS (apenas Mac)"
	@echo "  make web      - Inicia o app no navegador (versão Web)"
	@echo "  make clean    - Limpa cache e reinstala dependências (útil para erros)"

setup:
	@echo "Instalando dependências com $(PM)..."
	$(PM) install

start:
	@echo "Iniciando servidor Expo..."
	npx expo start

android:
	@echo "Iniciando no Android..."
	npx expo start --android

ios:
	@echo "Iniciando no iOS..."
	npx expo start --ios

web:
	@echo "Iniciando versão Web..."
	npx expo start --web

clean:
	@echo "Limpando node_modules e cache..."
	rm -rf node_modules
	rm -rf package-lock.json yarn.lock
	@echo "Reinstalando..."
	make setup

