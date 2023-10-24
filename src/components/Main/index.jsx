import React from 'react';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

function Main() {
    return(
        <main>
            <div className={`${styles.bannerInfo}`}>
                <div className={`${styles.bannerImg}`}>
                    <img src='/images/banner1.jpg'/>
                </div>
                <div className={`${styles.bannerText}`}>
                    <h1>Панели из сотового картона</h1>
                    <p>Сотовые панели представляют собой трехслойные изделия, состоящие из одного внутреннего слоя - сотового картонного заполнителя с шестигранной формой ячеек и двух плоских наружных слоев картона, приклеенных к заполнителю с обеих сторон клеем ПВА. Толщина сотовых плит, выпускаемых предприятием варьируется от 6мм до 100мм. Они могут быть изготовлены из мелованного, макулатурного или крафт-картона.</p>
                    <div className={`${styles.bannerBtns}`}>
                        <Link to='about'><button>Подробнее...</button></Link>
                        <Link to='catalog'><button>Открыть Каталог</button></Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;