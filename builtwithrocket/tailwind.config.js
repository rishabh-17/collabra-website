/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/layouts/**/*.{js,jsx,ts,tsx}',
        './src/app/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'var(--color-border)', /* gray-200 */
                input: 'var(--color-input)', /* gray-200 */
                ring: 'var(--color-ring)', /* Sophisticated Teal */
                background: 'var(--color-background)', /* gray-50 */
                foreground: 'var(--color-foreground)', /* gray-900 */
                primary: {
                    DEFAULT: 'var(--color-primary)', /* Deep Professional Blue */
                    foreground: 'var(--color-primary-foreground)', /* white */
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)', /* Sophisticated Teal */
                    foreground: 'var(--color-secondary-foreground)', /* white */
                },
                destructive: {
                    DEFAULT: 'var(--color-destructive)', /* red-700 */
                    foreground: 'var(--color-destructive-foreground)', /* white */
                },
                muted: {
                    DEFAULT: 'var(--color-muted)', /* gray-100 */
                    foreground: 'var(--color-muted-foreground)', /* gray-600 */
                },
                accent: {
                    DEFAULT: 'var(--color-accent)', /* green-800 */
                    foreground: 'var(--color-accent-foreground)', /* white */
                },
                popover: {
                    DEFAULT: 'var(--color-popover)', /* white */
                    foreground: 'var(--color-popover-foreground)', /* gray-900 */
                },
                card: {
                    DEFAULT: 'var(--color-card)', /* white */
                    foreground: 'var(--color-card-foreground)', /* gray-900 */
                },
                success: {
                    DEFAULT: 'var(--color-success)', /* green-700 */
                    foreground: 'var(--color-success-foreground)', /* white */
                },
                warning: {
                    DEFAULT: 'var(--color-warning)', /* orange-700 */
                    foreground: 'var(--color-warning-foreground)', /* white */
                },
                error: {
                    DEFAULT: 'var(--color-error)', /* red-700 */
                    foreground: 'var(--color-error-foreground)', /* white */
                },
                conversion: {
                    DEFAULT: 'var(--color-conversion)', /* orange-500 */
                    foreground: 'var(--color-conversion-foreground)', /* white */
                },
                trust: {
                    DEFAULT: 'var(--color-trust)', /* slate-700 */
                    foreground: 'var(--color-trust-foreground)', /* white */
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                mono: ['JetBrains Mono', 'Courier New', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            boxShadow: {
                'subtle': '0 4px 12px rgba(13, 42, 74, 0.08)',
                'elevated': '0 8px 24px rgba(13, 42, 74, 0.12)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-animate'),
    ],
}