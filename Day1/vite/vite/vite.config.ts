import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //babel({ presets: [reactCompilerPreset()] }) // used in case without memo impl
    babel({ presets: [] }) //used in case of REact memo impl
  ],
})
