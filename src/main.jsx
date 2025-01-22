import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './components/principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
