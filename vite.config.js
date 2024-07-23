import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { imagemin } from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    imagemin({
      plugins: [
        require('imagemin-mozjpeg')({ quality: 75 }),
        require('imagemin-pngquant')({ quality: [0.65, 0.80] }),
        require('imagemin-svgo')(),
        require('imagemin-webp')()
      ]
    })
  ],
  build: {
    outDir: 'dist'
  }
});
