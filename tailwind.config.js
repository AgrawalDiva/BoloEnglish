/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#16a34a', // emerald-600
            light: '#22c55e',   // green-500
            dark: '#15803d',    // green-700
            soft: '#dcfce7',    // green-100
          },
          yellow: {
            DEFAULT: '#f59e0b', // amber-500
            light: '#fcd34d',   // amber-300
            soft: '#fef3c7',    // amber-100
          },
          orange: {
            DEFAULT: '#ea580c', // orange-600
            light: '#f97316',   // orange-500
            soft: '#ffedd5',    // orange-100
          },
          navy: {
            DEFAULT: '#0f172a', // slate-900
            light: '#334155',   // slate-700
            muted: '#64748b',   // slate-500
          },
          bg: '#f8fafc',        // slate-50 off-white
          card: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'duo': '0 4px 0 0 #15803d',
        'duo-yellow': '0 4px 0 0 #d97706',
        'duo-orange': '0 4px 0 0 #c2410c',
        'duo-slate': '0 4px 0 0 #cbd5e1',
        'duo-active': '0 0px 0 0 transparent',
      },
      animation: {
        'bounce-slight': 'bounceSlight 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.85' },
        }
      }
    },
  },
  plugins: [],
}
