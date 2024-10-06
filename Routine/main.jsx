import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Routine from './Components/JSX Files/Routine'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routine></Routine>
    </StrictMode>
)