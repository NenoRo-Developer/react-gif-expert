import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css';
//import App from './App.jsx';
import { GifExpertApp } from './GiftExpertApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <GifExpertApp />
   </StrictMode>,
)
