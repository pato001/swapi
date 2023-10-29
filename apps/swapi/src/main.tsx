// LIBRARIES
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// COMPONENTS
import App from './app/app'

// STYLING
import 'unfonts.css'
import './styles.css'

// CONSTANTS
const theme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          initial: {
            display: 'block',
            width: 'w-full',
            maxWidth: 'max-w-screen-2xl',
            borderRadius: 'rounded-xl',
            py: 'py-4',
            px: 'px-8'
          },
          shadow: {
            boxShadow: 'shadow-md'
          },
          blurred: {
            backdropFilter: 'backdrop-saturate-200 backdrop-blur-2xl',
            bgOpacity: 'bg-opacity-80',
            borderWidth: 'border',
            borderColor: 'border-white/80'
          },
          fullWidth: {
            width: 'w-full',
            maxWidth: 'max-w-full',
            rounded: 'rounded-none',
            px: 'px-4'
          }
        },
        mobileNav: {
          display: 'block',
          width: 'w-full',
          basis: 'basis-full',
          overflow: 'overflow-hidden'
        }
      },
      variants: {
        filled: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-white',
            boxShadow: 'shadow-none'
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-white'
          },
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white'
          },
          gray: {
            backgroud: 'bg-gray-500',
            color: 'text-white'
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white'
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white'
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white'
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-black'
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-black'
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-black'
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white'
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white'
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white'
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white'
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white'
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white'
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white'
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white'
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white'
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white'
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white'
          }
        },
        gradient: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-blue-gray-900',
            boxShadow: 'shadow-none'
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-blue-gray-900'
          },
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white'
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-600 to-gray-400',
            color: 'text-white'
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white'
          },
          'deep-orange': {
            backgroud:
              'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white'
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white'
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black'
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black'
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black'
          },
          'light-green': {
            backgroud:
              'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white'
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white'
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white'
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white'
          },
          'light-blue': {
            backgroud:
              'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white'
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white'
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white'
          },
          'deep-purple': {
            backgroud:
              'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white'
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white'
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white'
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white'
          }
        }
      }
    }
  }
}

// Create a client for @tanstack/react-query
const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnReconnect: true,
      cacheTime: 1000 * 60 * 120, //120 minutes
      refetchInterval: 0,
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 1000 * 60 * 120
    }
  }
}

const queryClient = new QueryClient(queryClientConfig)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={theme}>
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
