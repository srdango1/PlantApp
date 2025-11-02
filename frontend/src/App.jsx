import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [status, setStatus] = useState('Verificando...')
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/health')
      .then(() => setStatus('✅ Backend conectado'))
      .catch(() => setStatus('❌ Backend desconectado'))
  }, [])

  return (
    <div className="container">
      <h1>🌱 Plant App IoT</h1>
      <p className="subtitle">Sistema de Monitoreo de Plantas</p>
      
      <div className="card">
        <h2>Estado del Sistema</h2>
        <p>{status}</p>
      </div>

      <div className="card">
        <h2>Contador</h2>
        <button onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>
      </div>
    </div>
  )
}

export default App