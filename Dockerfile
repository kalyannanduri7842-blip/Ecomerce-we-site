FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend ./backend
COPY frontend ./frontend
EXPOSE 4000
CMD ["node", "backend/src/server.js"]
