import React from 'react';
import {FaViber, FaWhatsapp, FaTelegram, FaPhone} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
 
function Header() {
    return (
        <header>
            <div className={`${styles.mainNav}`}>
                <Link to="/"><img width={200} className={`${styles.logoImg}`} src="/images/logo.png" alt="Logo" /></Link>
                <div style={{width: '1px', height: '40px', backgroundColor: '#a9a2a3'}}></div>
                <div className={`${styles.navHolder}`}>
                    <ul className={`${styles.navList}`}>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="catalog">Каталог</Link></li>
                        <li><Link to="about">О нас</Link></li>
                        <li><Link to="questions">Вопросы и Ответы</Link></li>
                        <li><Link to="contacts">Контакты</Link></li>
                    </ul>
                </div>
                <div style={{width: '1px', height: '40px', backgroundColor: '#a9a2a3'}}></div>
                <div className={`${styles.contactsInfo}`}>
                    <div className={`${styles.cont}`}>
                        <span><a href={'https://www.google.by/intl/ru/gmail/about/'} target="_blank">cardbcorp@gmail.com</a></span>
                        <span style={{fontSize:'18px', fontWeight: '600'}}>+375 (29) 456 98 90</span>
                    </div>
                    <div className={`${styles.netw}`}>
                        <a href={'https://www.viber.com/ru/'} target="_blank"><FaViber size={25}/></a>
                        <a href={'https://telegram.org/?1&ysclid=lo4uk50vfc49186148'} target="_blank"><FaTelegram size={25}/></a>
                        <a href={'https://www.whatsapp.com/'} target="_blank"><FaWhatsapp size={25}/></a>
                    </div>
                </div>
            </div> 
        </header>
    )
};

export default Header;
