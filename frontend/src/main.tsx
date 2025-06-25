import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider} from "@chakra-ui/react";
import App from './App.tsx'
import theme from "./theme/theme";
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>,
)
