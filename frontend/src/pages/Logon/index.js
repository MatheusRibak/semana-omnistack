import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Be The Hero" />

                <form action="">
                    <h1>Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" />
                    <button type="submit" className="button">

                        Entrar</button>
                    <Link className="back-link" to="/register"> <FiLogIn size={16} color="#E02841" /> Não Tenho Cadastro</Link>
                </form>


            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    );
}