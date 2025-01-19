# Next.js Blog with Docker

A modern blog application built with Next.js, PostgreSQL, and Prisma, running in Docker containers. This project serves as both a personal blog platform and a demonstration of modern web development practices.

## 🛠 Tech Stack

### Backend

- **Database**: PostgreSQL
- **ORM**: Prisma
- **Runtime**: Node.js
- **Framework**: Next.js (App Router)
- **Container**: Docker

### Frontend

- **Framework**: React (via Next.js)
- **Styling**: Tailwind CSS
- **Markdown**: [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor)

### Development Tools

- TypeScript
- ESLint
- Docker Compose
- Prisma CLI

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

### Setup and Installation

1. Clone the repository

```bash
git clone git@github.com:Junya-Takaesu/nextjs-blog-lottie.git
cd nextjs-blog-lottie.git
```

2. Start the Docker containers

```bash
docker compose up -d
```

3. Set up the database

```bash
# Generate Prisma Client
docker compose exec nextjs npx prisma generate

# Run migrations
docker compose exec nextjs npx prisma migrate dev

# Seed the database (optional)
docker compose exec nextjs npx prisma db seed
```

4. Access the application

- Blog: [http://localhost:3000](http://localhost:3000)
- Prisma Studio: [http://localhost:5555](http://localhost:5555)

## 📝 Project Structure

```
.
├── app/                  # Next.js App Router pages and components
├── prisma/              # Prisma schema and migrations
├── public/              # Static files
└── docker-compose.yml   # Docker Compose configuration
```

## ✨ Features

- 📝 Markdown-based blog posts
- 🏷 Tag support
- 👤 User authentication
- 🎨 Modern, responsive design
- 🔍 SEO optimization
- 🚀 Server-side rendering
- 🛠 Admin dashboard

## 🔜 Roadmap

See our detailed roadmap and progress in [TODO.md](./README/todo.md)

## 🧪 Development

### Running Tests

TO DO

```bash
docker compose exec nextjs npm test
```

### Database Management

```bash
# Access Prisma Studio
docker compose exec nextjs npx prisma studio

# Reset Database
docker compose exec nextjs npx prisma migrate reset
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- GitHub: [@Junya-Takaesu](https://github.com/Junya-Takaesu)
- Website: [example.com](https://example.com)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/)

---

_This project is a personal blog platform created as a portfolio piece to demonstrate modern web development practices and technologies._
