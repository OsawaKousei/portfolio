# Next.js Static Website Template

This repository is a template project for creating static websites using Next.js. It's built with TypeScript, Tailwind CSS, and shadcn/ui, and provides a Docker-based local development environment. The project name in package.json and service/container names in docker-compose are automatically initialized to the repository name via GitHub Actions.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)

## Prerequisites

Make sure you have the following tools installed:

- Docker and Docker Compose
- Node.js 18.18.0 or higher (for local development)

## Project Structure

```
next-static-website-template/
├── frontend/               # Frontend application
│   ├── app/               # Next.js application
│   │   ├── src/           # Source code
│   │   │   ├── app/       # App Router directory
│   │   │   │   └── page.tsx # Main page
│   │   │   └── components/ # React components
│   │   │       ├── Header.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── Contents.tsx
│   │   │       ├── About.tsx
│   │   │       ├── Contact.tsx
│   │   │       └── Footer.tsx
│   │   ├── package.json   # Dependencies
│   │   ├── tsconfig.json  # TypeScript configuration
│   │   ├── components.json # shadcn/ui configuration
│   │   └── next.config.ts # Next.js configuration
│   ├── Dockerfile         # Production build
│   └── Dockerfile.dev     # Development environment
├── docker-compose.yaml    # Local development configuration
└── README.md             # This file
```

## Setup Instructions

1. Clone the repository

```bash
git clone <repository-url>
cd next-static-website-template
```

2. Start the development environment using Docker Compose

```bash
docker compose up --build
```

3. Open `http://localhost:3000` in your browser

## Local Development

### Development with Docker

Start the local development environment using Docker Compose:

```bash
# Initial startup or when Dockerfile changes
docker compose up --build

# Regular startup
docker compose up
```

Hot reload is enabled, so changes to source code will automatically be reflected in the browser.

### Local Development without Docker

If you prefer to develop without Docker:

```bash
cd frontend/app
npm install
npm run dev
```

## Build

### Static Site Generation

To build the static site:

```bash
# Using Docker
docker build -f frontend/Dockerfile ./frontend

# Local environment
cd frontend/app
npm run build
```

The built static files will be generated in the `frontend/app/out` directory.

### Extracting Production Build

#### Using Build Script (Recommended)

Run the build script from the project root:

```bash
./build.sh
```

This script automatically performs the following:

- Remove old builds
- Build Docker container
- Copy static files to `./dist` directory

#### Manual Build

To extract static files from Docker container:

```bash
# Remove old builds
rm -rf ./dist
# Create build container
docker build -f frontend/Dockerfile -t website-build ./frontend

# Copy static files to local directory
docker create --name temp-container website-build
docker cp temp-container:/app/out ./dist
docker rm temp-container
```

## Deployment

### Static Hosting Services

### Manual AWS S3 Deployment Example

```bash
# If AWS CLI is installed and configured
aws s3 sync ./dist s3://your-bucket-name --delete
```

## Tech Stack

- **Framework**: Next.js 15.4.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Development Environment**: Docker & Docker Compose
- **Runtime**: Node.js 23.11.0

## Customization

### Editing Components

Each section's components are located in `frontend/app/src/components/`:

- `Header.tsx`: Navigation header
- `Hero.tsx`: Hero section
- `Contents.tsx`: Content section
- `About.tsx`: About section
- `Contact.tsx`: Contact section
- `Footer.tsx`: Footer

### Style Customization

You can customize styles using Tailwind CSS. To add shadcn/ui components:

```bash
cd frontend/app
npx shadcn@latest add button  # Add button component
```

### Environment Configuration

Development and build settings are managed in these files:

- `next.config.ts`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration (auto-generated)
- `components.json`: shadcn/ui configuration

## Troubleshooting

### Port 3000 is in use

```bash
# Check processes using the port
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

### Docker Cleanup

```bash
# Remove unused containers and images
docker system prune -a

# Remove including volumes
docker system prune -a --volumes
```
