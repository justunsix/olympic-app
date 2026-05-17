SHELL := /bin/bash

.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

run: ## Start app
	pnpm run dev

check-eslint: ## Check project files with ESLint
	pnpm dlx eslint ./*.js
	
update: ## Update dependencies
	pnpm update --latest

install: ## Install dependencies
	pnpm install
