module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          white: "var(--text-white)"
        },
        // Background Colors
        background: {
          overlay: "var(--bg-overlay)",
          primary: "var(--bg-primary)",
          accent: "var(--bg-accent)",
          white: "var(--bg-white)"
        },
        // Border Colors
        border: {
          secondary: "var(--border-secondary)",
          accent: "var(--border-accent)",
          white: "var(--border-white)"
        },
        // Component-specific colors
        button: {
          background: {
            primary: "var(--button-bg-primary)",
            secondary: "var(--button-bg-secondary)"
          },
          text: {
            primary: "var(--button-text-primary)",
            secondary: "var(--button-text-secondary)"
          },
          border: "var(--button-border)"
        },
        input: {
          text: "var(--input-text)",
          border: "var(--input-border)"
        },
        link: {
          text: {
            primary: "var(--link-text-primary)",
            accent: "var(--link-text-accent)"
          }
        },
        line: {
          background: "var(--line-bg)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'xl': 'var(--font-size-xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
        '12xl': 'var(--spacing-12xl)',
        '13xl': 'var(--spacing-13xl)',
        '14xl': 'var(--spacing-14xl)',
        '15xl': 'var(--spacing-15xl)',
        '16xl': 'var(--spacing-16xl)',
        '17xl': 'var(--spacing-17xl)',
        '18xl': 'var(--spacing-18xl)'
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)'
      },
      borderWidth: {
        'none': 'var(--border-width-none)',
        'thin': 'var(--border-width-thin)',
        'medium': 'var(--border-width-medium)'
      }
    }
  },
  plugins: []
};