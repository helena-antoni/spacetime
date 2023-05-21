import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'

import Multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRouters } from './routes/auth'
import jwt from '@fastify/jwt'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(Multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRouters)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀🚀🚀 HTTP server running on http://localhost:3333 🚀🚀🚀')
  })
