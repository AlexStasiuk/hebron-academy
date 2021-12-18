import React from 'react';
import './learn.css';
import Book from './photo/book.png';
import Vector from './photo/vector.png';
import Vector2 from './photo/vector2.png';
import Vector3 from './photo/vector3.png';
import Union from './photo/union.png';
import Union2 from './photo/union2.png';
import Union3 from './photo/union3.png';
import Smile from './photo/smile.png';
import Students from './students';
import { Map } from '../map/map';

const getFirstName = (fullname, param) => {
    let res = fullname.split(' ')[param];
    return res;
};

export const Learn = () => {
    return (
        <div className="mobile-book">
            <img src={Book} alt="" />
            <div className="mobile-learn-text">
                <span>НАВЧАННЯ</span>
            </div>
            <div className="mobile-text-a">
                <span>ХЕВРОН</span>
                <span>IT академiя</span>
            </div>
            <div className="mobile-text-b">
                <li>
                    <span>24 місяці навчання</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Студенти зі всієї України</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Неформальна освіта для молоді</span>
                </li>
                <li>
                    <span>з соціально кризової категорії</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Індивідуальна система навчання</span>
                </li>
                <li>
                    <span>та підходу</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Практика в ІТ компаніях</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Духовний, інтелектуальний</span>
                </li>
                <li>
                    <span>та фізичний розвиток</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Забезпечення студентів житлом,</span>
                </li>
                <li>
                    <span>харчуванням та ліками</span>
                </li>
                <div className="mobile-mt-2" />
                <li>
                    <span>Працевлаштування випускників</span>
                </li>
            </div>
            <div className="mobile-line" />
            <div className="mobile-who-work-academy">
                <span>Як Академія Працює?</span>
            </div>
            <div className="mobile-entry">
                <div className="mobile-square">
                    <span>1</span>
                </div>
                <span>ВСТУП</span>
                <img src={Vector} alt="" />
            </div>
            <div className="mobile-entry-text">
                <span>Молоді люди групи ризику, які завершили</span>
                <span>навчання в школі та досягли повноліття,</span>
                <span>можуть вступити в Академію.</span>
                <div className="mobile-mt-2" />
                <span>Ми надаємо їм можливість розвиватись в ІТ</span>
                <span>галузі. Прийом документів відкритий</span>
                <span>впродовж всього року.</span>
            </div>
            <div className="mobile-entry">
                <div className="mobile-square">
                    <span>2</span>
                </div>
                <span>НАВЧАННЯ</span>
                <img src={Vector2} alt="" />
            </div>
            <div className="mobile-entry-text">
                <span>Студент навчається за новітньою</span>
                <span>24-місячною програмою, розробленою</span>
                <span>Академією. Дана програма спрямована на</span>
                <span>тривекторний розвиток: інтелектуальний,</span>
                <span>фізичний та духовний.</span>
            </div>
            <div className="mobile-entry">
                <div className="mobile-square">
                    <span>3</span>
                </div>
                <span>РОБОТА</span>
                <img src={Vector3} alt="" />
            </div>
            <div className="mobile-entry-text">
                <span>Після завершення навчання, студент</span>
                <span>отримує Сертифікат, який підтверджує</span>
                <span>компетентність у вибраній галузі на рівні</span>
                <span>Junior. Ми допомагаємо студентам з</span>
                <span>подальшим працевлаштуванням.</span>
            </div>
            <div className="mobile-text-c">
                <div className="mobile-programma">
                    <span>Тривекторна</span>
                    <span>програма навчання</span>
                    <span>Хеврон ІТ Академії</span>
                </div>
                <div className="mobile-progress">
                    <div className="mobile-progress-block">
                        <p>01</p>
                        <span>ІНТЕЛЕКТУАЛЬНИЙ</span>
                        <span>РОЗВИТОК:</span>
                        <img src={Union} alt="" />
                    </div>
                    <div className="mobile-progress-text">
                        <span>- Основи програмування</span>
                        <span>- більше 10-ти мов програмування</span>
                        <span>та сучасних фреймворків</span>
                        <span>- Англійська мова</span>
                        <span>- Математика </span>
                        <span>- Історія України</span>
                        <div className="mobile-mt-2" />
                        <span>- Правознавство</span>
                        <span>- Ораторське мистецтво</span>
                    </div>
                </div>
                <div className="mobile-progress">
                    <div className="mobile-progress-block">
                        <p>02</p>
                        <span>ДУХОВНИЙ</span>
                        <span>РОЗВИТОК:</span>
                        <img src={Union3} alt="" />
                    </div>
                    <div className="mobile-progress-text">
                        <span>- Біблійні читання</span>
                        <span>- Духовне спілкування з наставником</span>
                        <span>- Участь в таборах</span>
                        <span>- Волонтерство в реабілітаційних</span>
                        <span>центрах та на львівських подіях.</span>
                    </div>
                </div>
                <div className="mobile-progress">
                    <div className="mobile-progress-block">
                        <p>03</p>
                        <span>ФIЗИЧНИЙ</span>
                        <span>РОЗВИТОК:</span>
                        <img src={Union2} alt="" />
                    </div>
                    <div className="mobile-progress-text">
                        <span>- Легка атлетика</span>
                        <span>- Футбол</span>
                        <span>- Абонемент в Sport Life</span>
                        <span>- Туризм</span>
                    </div>
                </div>
            </div>
            <div className="mobile-text-d">
                <span>Історії успіху</span>
                <span>наших випускників</span>
            </div>
            <div className="mobile-block-img">
                {Students.map((Student) => (
                    <div className="mobile-students" key={Student.id}>
                        <img src={Student.img} alt="cart" />
                        <div className="mobile-fullname">
                            <span>{getFirstName(Student.fullname, 0)}</span>
                            <span>{getFirstName(Student.fullname, 1)}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mobile-text-i">
                <p>ПРИЄДНУЙТЕСЬ</p>
                <span>Твоя історія успіху теж</span>
                <span>може бути тут!</span>
            </div>
            <div className="mobile-hand-block">
                <img src={Smile} alt="" />
                <span>Заповнюй заявку</span>
                <span>на вступ!</span>
                <label for="validationDefault01" className="mobile-form-label">
                    Ім’я:
                </label>
                <input className="mobile-form-control" />
                <label for="validationDefault01" className="mobile-form-label">
                    Номер телефону:
                </label>
                <input className="mobile-form-control" />
                <label for="validationDefault01" className="mobile-form-label">
                    Email:
                </label>
                <input className="mobile-form-control" />
                <label for="validationDefault01" className="mobile-form-label">
                    Коментар:
                </label>
                <textarea className="mobile-form-control" />
                <button className="mobile-btn-send">Надіслати</button>
            </div>
            <Map />
        </div>
    );
};
