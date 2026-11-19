// O GitHub Pages não conhece as rotas do Vue (ex.: /projetos/witchcrafter).
// Copiar o index.html para 404.html faz o Pages devolver o app e o Vue Router resolver a rota.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('postbuild: dist/404.html criado')
