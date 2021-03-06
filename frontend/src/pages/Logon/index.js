import React, {useState} from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
            e.preventDefault();

            try {
                const response = await api.post('sessions', {id});
                console.log(response.data.name);
                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);
                history.push('/profile');
            } catch (error) {
                alert('Falha no login, tente novamente.');
            }
    }

    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Be The Hero" />

                <form action="" onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input 
                    type="text" 
                    placeholder="Sua ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">

                        Entrar</button>
                    <Link className="back-link" to="/register"> <FiLogIn size={16} color="#E02841" /> Não Tenho Cadastro</Link>
                </form>


            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    );
}