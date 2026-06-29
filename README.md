## This will be a personal collection of wallpapers that I have used on my computer.

![preview](https://raw.githubusercontent.com/JoaoG0988/m_wallpapers/refs/heads/main/wallpapers-frontend/src/assets/preview.png)


### Configuração inicial

1. **No terminal, instale as dependências do projeto:**

```bash
npm run setup
```

2. **Iniciar o Projeto por completo:**

Este comando sobe o banco de dados (Docker), o servidor Node.js e o site React simultaneamente

```bash
npm run dev:full
```

3. **Fazer as migrações necessárias no Banco de Dados:**
```bash
npm run prisma:migrate
```

### Serviços da aplicação

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Frontend** | [http://localhost:5173](http://localhost:5173) | Interface principal da aplicação |
| **Backend API** | [http://localhost:3000/wallpapers](http://localhost:3000/wallpapers) | BACKEND |
| **Prisma Studio** | [http://localhost:5555](http://localhost:5555) | Visualização do banco de dados Prisma |



