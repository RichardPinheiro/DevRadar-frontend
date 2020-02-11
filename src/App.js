import React, { useState, useEffect } from 'react';
import api from './services/api'
import DevItens from './components/DevItens'
import DevForm from './components/DevForm'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        async function loadDevelopers() {
            const response = await api.get('/developers')
            
            setDevelopers(response.data)
        }
        
        loadDevelopers()
    }, [])

    async function handleSaveDeveloper(data) {
        const response = await api.post('/developers', data)

        setDevelopers([...developers, response.data])
    }

    return (
        <div id="app">
            <aside>
                <strong> Register </strong>

                <DevForm onSubmit={ handleSaveDeveloper } />
            </aside>

            <main>
                <ul>
                    { developers.map(developer => (
                        <DevItens key={ developer._id } developer={ developer } />
                    )) }
                </ul>
            </main>
        </div>
    );
}

export default App;
