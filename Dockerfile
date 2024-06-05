# Etapa 1: Construção do aplicativo
FROM node:18.16.1 AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Execute o build do aplicativo
RUN npm run build

# Etapa 2: Configuração do servidor Nginx para servir os arquivos estáticos
FROM nginx:stable-alpine

# Copie os arquivos de build do aplicativo para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copie o arquivo de configuração personalizado do Nginx, se necessário
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta em que o Nginx está configurado para escutar
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
