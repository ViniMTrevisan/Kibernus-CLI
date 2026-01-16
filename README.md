# Kybernus

> Do grego *Kybernetes* (piloto/governador) — raiz etimológica de Kubernetes e Cybernetics

**Kybernus** é uma CLI Open Core que acelera o desenvolvimento de projetos backend e fullstack, gerando código pronto para produção em minutos.

## 🚀 Quick Start

```bash
# Com npx (recomendado - sempre usa a versão mais recente)
npx kybernus init

# Ou instale globalmente
npm install -g kybernus
kybernus init
```

## ✨ Features

### Free (Open Source)
- ✅ **Next.js Fullstack** - App Router + Prisma + Tailwind
- ✅ **Java Spring Boot** - Spring Boot 4 + Java 21 (MVC)
- ✅ **Node.js Express** - Express.js + TypeScript (MVC)
- ✅ Banco de dados: H2 (memória) + MySQL básico
- ✅ Docker Compose para banco de dados
- ✅ Documentação gerada por IA (Google Gemini BYOK)

### Pro
- 🌟 **Python FastAPI** - FastAPI + Pydantic
- 🌟 **NestJS** - NestJS + TypeScript
- 🌟 **Arquiteturas Avançadas** - Clean Architecture + Hexagonal
- 🌟 **DevOps Completo** - Dockerfile + CI/CD + Terraform (AWS)
- 🌟 **Integrações SaaS** - Stripe + NextAuth + Keycloak

## 📋 Requisitos

- **Node.js** >= 18.0.0
- **macOS** ou **Linux** (Windows em breve)

## 🎯 Como Funciona

1. Execute `npx kybernus init`
2. Responda ao wizard interativo
3. Receba um projeto estruturado e pronto para desenvolver

## 🏗️ Estrutura de Projeto Gerada

### Java Spring Boot (MVC - Free)
```
meu-projeto/
├── pom.xml
├── src/main/java/com/usuario/projeto/
│   ├── Application.java
│   ├── controller/
│   ├── service/
│   ├── repository/
│   └── model/
└── docker-compose.yml (banco de dados)
```

### Java Spring Boot (Clean Architecture - Pro)
```
meu-projeto/
├── pom.xml
├── Dockerfile
├── docker-compose.yml (app + banco)
├── .github/workflows/ci-cd.yml
├── terraform/
└── src/main/java/com/usuario/projeto/
    ├── domain/
    ├── application/
    └── infrastructure/
```

## 🤝 Contribuindo

Kybernus é **Open Core**:
- Templates Free são open source (neste repo)
- Templates Pro são privados
- Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 Licença

- **CLI e Templates Free**: MIT License
- **Templates Pro**: Commercial License

## 🔗 Links

- 🌐 **Website**: https://kybernus.dev
- 📚 **Documentação**: https://docs.kybernus.dev
- 💬 **Discord**: https://discord.gg/kybernus
- 🐦 **Twitter**: [@kybernus](https://twitter.com/kybernus)

---

**Made with ❤️ by [Vini Trevisan](https://github.com/vinitrevisan)**
