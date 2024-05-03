import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import MyState from './context/MyState.jsx';
import App from './App.jsx'

const queryClient = new QueryClient();

// Routing, context, query wrapper 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MyState>
          <App />
        </MyState>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
