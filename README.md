# curso-frontend

###EBAC

# GIT

## Conceitos de versionamento
- Histórico
- Controle de versão
- Quem alterou
- O que alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalação do Git

windows: https://git-scm.com/download/win

## Criar conta no GitHub

## Clonar o projeto
git clone https://github.com/beccacoutinho/curso-frontend.git

## Commits
Informação de alteração
- após testado todo seu código
- git add *
- git commit -m
- git push (enviar alterações para o repositório)
- git pull (puxar/trazer alterações para sua maquina)

## Gitflow
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop
- DOD Definition of Done: critérios de aceite
- versuibanebti 1.0.0

git checkout -b dev (cria uma branch)
git checkout main (mudar de branch)

### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente

git merge main

### Pull Request
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente

### configura o GitFlow
git flow init
git flow feature start (nome-da-feature)