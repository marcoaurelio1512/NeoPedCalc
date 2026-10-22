FROM node:24-alpine
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --chown=node:node server ./server
COPY --chown=node:node css ./css
COPY --chown=node:node js ./js
COPY --chown=node:node images ./images
COPY --chown=node:node files ./files
COPY --chown=node:node *.html ./
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
EXPOSE 3000
USER node
CMD ["node", "server/index.js"]
