import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Responsive breakpoints (mobile-first)
  theme: {
    extend: {
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // ===========================================
      // TOKENS: Primitive values only
      // ===========================================
      tokens: {
        colors: {
          // Primary palette (Warm Honey Gold)
          primary: {
            50: { value: "#fff9eb" },
            100: { value: "#fff2cc" },
            200: { value: "#ffe299" },
            300: { value: "#ffd166" },
            400: { value: "#ffc233" },
            500: { value: "#f5b700" },
            600: { value: "#db9e00" },
            700: { value: "#b88300" },
            800: { value: "#8f6500" },
            900: { value: "#694b00" },
            950: { value: "#3d2b00" },
          },
          // Secondary palette (Soft Coral Pink)
          secondary: {
            50: { value: "#fff5f7" },
            100: { value: "#ffe7ec" },
            200: { value: "#ffcfdc" },
            300: { value: "#ffb0c5" },
            400: { value: "#ff8bab" },
            500: { value: "#ff6f98" },
            600: { value: "#f24c82" },
            700: { value: "#cc2f66" },
            800: { value: "#a12651" },
            900: { value: "#781d3c" },
            950: { value: "#4a1024" },
          },
          // Neutral colors (warm gray)
          neutral: {
            50: { value: "#fbf8f5" },
            100: { value: "#f3ede7" },
            200: { value: "#e5ddd5" },
            300: { value: "#d0c3b6" },
            400: { value: "#b2a393" },
            500: { value: "#938271" },
            600: { value: "#77685b" },
            700: { value: "#5d5147" },
            800: { value: "#443b34" },
            900: { value: "#2f2924" },
            950: { value: "#1d1915" },
          },
          // Green palette (base for success)
          green: {
            50: { value: "#f0fdf4" },
            100: { value: "#dcfce7" },
            200: { value: "#bbf7d0" },
            300: { value: "#86efac" },
            400: { value: "#4ade80" },
            500: { value: "#22c55e" },
            600: { value: "#16a34a" },
            700: { value: "#15803d" },
            800: { value: "#166534" },
            900: { value: "#14532d" },
          },
          // Amber palette (base for warning)
          amber: {
            50: { value: "#fffbeb" },
            100: { value: "#fef3c7" },
            200: { value: "#fde68a" },
            300: { value: "#fcd34d" },
            400: { value: "#fbbf24" },
            500: { value: "#f59e0b" },
            600: { value: "#d97706" },
            700: { value: "#b45309" },
            800: { value: "#92400e" },
            900: { value: "#78350f" },
          },
          // Red palette (base for error)
          red: {
            50: { value: "#fef2f2" },
            100: { value: "#fee2e2" },
            200: { value: "#fecaca" },
            300: { value: "#fca5a5" },
            400: { value: "#f87171" },
            500: { value: "#ef4444" },
            600: { value: "#dc2626" },
            700: { value: "#b91c1c" },
            800: { value: "#991b1b" },
            900: { value: "#7f1d1d" },
          },
          // Neutral colors
          white: { value: "#ffffff" },
          black: { value: "#000000" },
          transparent: { value: "transparent" },
          bgGradient: {
            from: { value: "#fffdf8" },
            to: { value: "#fff3f7" },
          },
        },

        // Typography tokens
        fonts: {
          sans: {
            value:
              "Inter, var(--font-m-plus-rounded-1c), 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif",
          },
          mono: {
            value: "'JetBrains Mono', 'SF Mono', Consolas, 'Monaco', 'Courier New', monospace",
          },
        },

        fontSizes: {
          xs: { value: "0.75rem" }, // 12px
          sm: { value: "0.875rem" }, // 14px
          base: { value: "1rem" }, // 16px
          lg: { value: "1.125rem" }, // 18px
          xl: { value: "1.25rem" }, // 20px
          "2xl": { value: "1.5rem" }, // 24px
          "2.5xl": { value: "1.75rem" }, // 28px
          "3xl": { value: "1.875rem" }, // 30px
          "3.5xl": { value: "3.5rem" }, // 56px
          "4xl": { value: "2.25rem" }, // 36px
          "5xl": { value: "3rem" }, // 48px
          "6xl": { value: "3.75rem" }, // 60px
          "7xl": { value: "4.5rem" }, // 72px
          "8xl": { value: "5.25rem" }, // 84px
        },

        fontWeights: {
          thin: { value: 100 },
          light: { value: 300 },
          normal: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
          bold: { value: 700 },
          extrabold: { value: 800 },
          black: { value: 900 },
        },

        lineHeights: {
          none: { value: 1 },
          tight: { value: 1.25 },
          snug: { value: 1.375 },
          normal: { value: 1.5 },
          relaxed: { value: 1.625 },
          loose: { value: 2 },
        },

        // Spacing tokens - 8px grid system + 4px (numeric only)
        spacing: {
          0: { value: "0" }, // 0px
          1: { value: "0.25rem" }, // 4px
          2: { value: "0.5rem" }, // 8px
          3: { value: "0.75rem" }, // 12px
          4: { value: "1rem" }, // 16px
          5: { value: "1.25rem" }, // 20px
          6: { value: "1.5rem" }, // 24px
          7: { value: "1.75rem" }, // 28px
          8: { value: "2rem" }, // 32px
          9: { value: "2.25rem" }, // 36px
          10: { value: "2.5rem" }, // 40px
          11: { value: "2.75rem" }, // 44px
          12: { value: "3rem" }, // 48px
          14: { value: "3.5rem" }, // 56px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          28: { value: "7rem" }, // 112px
          32: { value: "8rem" }, // 128px
          36: { value: "9rem" }, // 144px
          40: { value: "10rem" }, // 160px
          44: { value: "11rem" }, // 176px
          48: { value: "12rem" }, // 192px
          52: { value: "13rem" }, // 208px
          56: { value: "14rem" }, // 224px
          60: { value: "15rem" }, // 240px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
        },

        // Sizing tokens - numeric only
        sizes: {
          0: { value: "0" }, // 0px
          1: { value: "0.25rem" }, // 4px
          2: { value: "0.5rem" }, // 8px
          3: { value: "0.75rem" }, // 12px
          4: { value: "1rem" }, // 16px
          5: { value: "1.25rem" }, // 20px
          6: { value: "1.5rem" }, // 24px
          7: { value: "1.75rem" }, // 28px
          8: { value: "2rem" }, // 32px
          9: { value: "2.25rem" }, // 36px
          10: { value: "2.5rem" }, // 40px
          11: { value: "2.75rem" }, // 44px
          12: { value: "3rem" }, // 48px
          14: { value: "3.5rem" }, // 56px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          28: { value: "7rem" }, // 112px
          32: { value: "8rem" }, // 128px
          36: { value: "9rem" }, // 144px
          40: { value: "10rem" }, // 160px
          44: { value: "11rem" }, // 176px
          48: { value: "12rem" }, // 192px
          52: { value: "13rem" }, // 208px
          56: { value: "14rem" }, // 224px
          60: { value: "15rem" }, // 240px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
          // Special values
          full: { value: "100%" },
          screen: { value: "100vw" },
          svw: { value: "100svw" },
          lvw: { value: "100lvw" },
          dvw: { value: "100dvw" },
          screenH: { value: "100vh" },
          svh: { value: "100svh" },
          lvh: { value: "100lvh" },
          dvh: { value: "100dvh" },
          min: { value: "min-content" },
          max: { value: "max-content" },
          fit: { value: "fit-content" },
        },

        // Border radius tokens
        radii: {
          none: { value: "0" },
          sm: { value: "0.125rem" }, // 2px
          base: { value: "0.25rem" }, // 4px
          md: { value: "0.375rem" }, // 6px
          lg: { value: "0.5rem" }, // 8px
          xl: { value: "0.75rem" }, // 12px
          "2xl": { value: "1rem" }, // 16px
          "3xl": { value: "1.5rem" }, // 24px
          full: { value: "9999px" },
        },

        // Border width tokens
        borderWidths: {
          0: { value: "0" },
          1: { value: "1px" },
          2: { value: "2px" },
          4: { value: "4px" },
          8: { value: "8px" },
        },

        // Shadow tokens
        shadows: {
          sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
          base: { value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
          md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
          lg: { value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
          xl: { value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
          "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
          inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
          none: { value: "none" },
        },
      },

      // ===========================================
      // SEMANTIC TOKENS: Purpose-based references
      // ===========================================
      semanticTokens: {
        colors: {
          // Semantic colors (referencing base palettes)
          success: {
            50: { value: "{colors.green.50}" },
            100: { value: "{colors.green.100}" },
            200: { value: "{colors.green.200}" },
            300: { value: "{colors.green.300}" },
            400: { value: "{colors.green.400}" },
            500: { value: "{colors.green.500}" },
            600: { value: "{colors.green.600}" },
            700: { value: "{colors.green.700}" },
            800: { value: "{colors.green.800}" },
            900: { value: "{colors.green.900}" },
          },
          warning: {
            50: { value: "{colors.amber.50}" },
            100: { value: "{colors.amber.100}" },
            200: { value: "{colors.amber.200}" },
            300: { value: "{colors.amber.300}" },
            400: { value: "{colors.amber.400}" },
            500: { value: "{colors.amber.500}" },
            600: { value: "{colors.amber.600}" },
            700: { value: "{colors.amber.700}" },
            800: { value: "{colors.amber.800}" },
            900: { value: "{colors.amber.900}" },
          },
          error: {
            50: { value: "{colors.red.50}" },
            100: { value: "{colors.red.100}" },
            200: { value: "{colors.red.200}" },
            300: { value: "{colors.red.300}" },
            400: { value: "{colors.red.400}" },
            500: { value: "{colors.red.500}" },
            600: { value: "{colors.red.600}" },
            700: { value: "{colors.red.700}" },
            800: { value: "{colors.red.800}" },
            900: { value: "{colors.red.900}" },
          },

          // UI purpose-based colors
          fg: {
            DEFAULT: { value: "{colors.neutral.900}" },
            muted: { value: "{colors.neutral.600}" },
            subtle: { value: "{colors.neutral.500}" },
            inverted: { value: "{colors.white}" },
          },
          bg: {
            canvas: { value: "{colors.white}" },
            DEFAULT: { value: "{colors.white}" },
            subtle: { value: "{colors.secondary.50}" },
            muted: { value: "{colors.neutral.100}" },
            emphasized: { value: "{colors.neutral.200}" },
            inverted: { value: "{colors.neutral.900}" },
          },
          border: {
            DEFAULT: { value: "{colors.neutral.200}" },
            muted: { value: "{colors.neutral.100}" },
            subtle: { value: "{colors.secondary.100}" },
            emphasized: { value: "{colors.neutral.300}" },
          },

          // Interactive colors
          interactive: {
            DEFAULT: { value: "{colors.primary.500}" },
            hover: { value: "{colors.primary.600}" },
            active: { value: "{colors.primary.700}" },
            muted: { value: "{colors.primary.200}" },
          },
        },

        // Semantic fonts
        fonts: {
          heading: {
            value: "{fonts.sans}",
          },
          body: {
            value: "{fonts.sans}",
          },
          japanese: {
            value:
              "var(--font-m-plus-rounded-1c), 'M PLUS Rounded 1c', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'Yu Gothic', 'YuGothic', sans-serif",
          },
        },

        // Semantic spacing
        spacing: {
          xs: { value: "{spacing.2}" }, // 8px
          sm: { value: "{spacing.4}" }, // 16px
          md: { value: "{spacing.6}" }, // 24px
          lg: { value: "{spacing.8}" }, // 32px
          xl: { value: "{spacing.10}" }, // 40px
          "2xl": { value: "{spacing.12}" }, // 48px
          "3xl": { value: "{spacing.16}" }, // 64px

          // Mobile-first page spacing
          page: {
            x: { value: "{spacing.4}" }, // 16px - horizontal padding
            y: { value: "{spacing.6}" }, // 24px - vertical padding
          },

          // Component spacing
          gutter: { value: "{spacing.4}" }, // 16px - grid gutter
          section: { value: "{spacing.16}" }, // 64px - section spacing
        },

        // Semantic sizes
        sizes: {
          xs: { value: "20rem" }, // 320px
          sm: { value: "24rem" }, // 384px
          md: { value: "28rem" }, // 448px
          lg: { value: "32rem" }, // 512px
          xl: { value: "36rem" }, // 576px
          "2xl": { value: "42rem" }, // 672px
          "3xl": { value: "48rem" }, // 768px
          "4xl": { value: "56rem" }, // 896px
          "5xl": { value: "64rem" }, // 1024px
          "6xl": { value: "72rem" }, // 1152px
          "7xl": { value: "80rem" }, // 1280px

          // Touch targets (mobile-first)
          touchTarget: { value: "2.75rem" }, // 44px - iOS minimum
          touchTargetLg: { value: "3rem" }, // 48px - Android/recommended

          // Container widths
          container: {
            xs: { value: "20rem" }, // 320px
            sm: { value: "24rem" }, // 384px
            md: { value: "28rem" }, // 448px
            lg: { value: "32rem" }, // 512px
            xl: { value: "36rem" }, // 576px
            "2xl": { value: "42rem" }, // 672px
            "3xl": { value: "48rem" }, // 768px
            "4xl": { value: "56rem" }, // 896px
            "5xl": { value: "64rem" }, // 1024px
            "6xl": { value: "72rem" }, // 1152px
            "7xl": { value: "80rem" }, // 1280px
          },
        },

        // Semantic z-index (purpose-based)
        zIndex: {
          hide: { value: -1 },
          auto: { value: "auto" },
          base: { value: 0 },
          docked: { value: 10 },
          dropdown: { value: 1000 },
          sticky: { value: 1100 },
          banner: { value: 1200 },
          overlay: { value: 1300 },
          modal: { value: 1400 },
          popover: { value: 1500 },
          skipLink: { value: 1600 },
          toast: { value: 1700 },
          tooltip: { value: 1800 },
        },
      },

      // Keyframes for animations
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounce: {
          "0%, 20%, 53%, 80%, 100%": { transform: "translate3d(0,0,0)" },
          "40%, 43%": { transform: "translate3d(0, -30px, 0)" },
          "70%": { transform: "translate3d(0, -15px, 0)" },
          "90%": { transform: "translate3d(0, -4px, 0)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Enable JSX framework
  jsxFramework: "react",
});
