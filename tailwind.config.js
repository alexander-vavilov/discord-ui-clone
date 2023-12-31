export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      height: {
        'd-screen': '100dvh'
      },
      colors: {
        discord: {
          100: '#f2f3f5',
          200: '#ebedef',
          300: '#e3e5E8',
          400: '#d4d7dc',
          muted: '#949ba4',
          500: '#45484f',
          600: '#36393f',
          700: '#2f3136',
          800: '#292B2F',
          900: '#232428',
          950: '#202225',
          1000: '#111214'
        },
        blurple: {
          100: '#949cf7',
          200: '#3e70dd',
          300: '#216add',
          400: '#5865f2'
        }
      },
      boxShadow: {
        discord: '0px 1px 1px 0px rgba(0, 0, 0, 0.35)'
      },
      borderRadius: {
        inherit: 'inherit'
      },
      fontFamily: {
        whitney: 'whitney'
      }
    }
  },
  plugins: []
}
