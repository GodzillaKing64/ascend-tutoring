import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AscendTutoring from './AscendTutoring.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AscendTutoring />
  </StrictMode>,
)
