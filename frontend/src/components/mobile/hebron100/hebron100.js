import React from 'react';
import Photo from './photo/photo.png';
import Photo2 from './photo/photo2.png';
import Photo3 from './photo/photo3.png';
import './hebron100.css';
import Visa from './photo/visa.png';
import Mastercard from './photo/mastercard.png';
import { Map } from '../map/map';

export const Hebron100 = () => {
    return (
        <div className="mobile-hebron100-content">
            <div className="mobile-hebron100">
                <img src={Photo} alt="" />
                <p>ДОПОМОГА</p>
                <span>Інвестуйте в освіту!</span>
                <span>
                    FМи віримо, що якісна освіта - це найкраща інвестиція на
                    сьогоднішній день! Тому розробили програму підтримки “Хеврон
                    100”. Ми шукаємо 100 людей, які готові виділити на розвиток
                    проекту хоча б 500 грн в місяць . Для когось це дрібниця, а
                    для наших студентів - це шанс на краще життя. Ми зможемо
                    допомогти соціально незахищеній молоді з великим потенціалом
                    заради кращого майбутнього!
                </span>
            </div>
            <div className="mobile-hebron100-b">
                <img src={Photo2} alt="" />
                <p>Хеврон 100</p>
                <span>Ідея</span>
                <span style={{ textAlign: 'start' }}>
                    Ми об'єднуємо благодійників у спільноту, яка готова
                    працювати для спільної мети — якісної освіти для соціально
                    незахищеної молоді. Благодійники проекту “Хеврон 100”
                    утворюють мережу, у якій можливо досягнути поставлених
                    цілей.
                </span>
            </div>
            <div className="mobile-hebron100-b">
                <img src={Photo3} alt="" />
                <p>Хеврон 100</p>
                <span>Реалізація</span>
                <span style={{ textAlign: 'start' }}>
                    Благодійники з України та інших країн світу роблять
                    щомісячні внески в тому розмірі, в якому їм зручно.
                    Мінімальна сума внеску 500 грн. Така регулярна підтримка
                    забезпечує розвиток та підтримку благодійної організації
                    Хеврон ІТ Академія.
                </span>
            </div>
            <div className="mobile-hebron100-c">
                <span>ДОЛУЧИТИСЬ ДО</span>
                <span>ХЕВРОН 100</span>
                <p>Благодійники з України та інших країн</p>
                <p>світу роблять щомісячні внески в тому</p>
                <p>розмірі, в якому їм зручно. Мінімальна</p>
                <p>сума внеску 500 грн. Така регулярна</p>
                <p>підтримка забезпечує розвиток та</p>
                <p>підтримку благодійної організації</p>
                <p>Хеврон ІТ Академія.</p>
                <button className="mobile-btn-list">
                    Переглянути жертводавців
                </button>
            </div>
            <div className="mobile-warning">
                <p>Увага!</p>
                <span>Обов’язково вкажіть призначення</span>
                <span>платежу: «Добровільна пожертва на</span>
                <span>статутну діяльність»!</span>
            </div>
            <div className="mobile-requisites">
                <label for="floatingSelect">Мій внесок:</label>
                <div class="form-floating">
                    <select class="form-select" id="floatingSelect">
                        <option value="1">100грн</option>
                        <option value="2">500грн</option>
                        <option value="3">1000грн</option>
                    </select>
                </div>
                <label>Призначення:</label>
                <input
                    className="mobile-form-control"
                    placeholder="Добровільна пожертва на статутну діяльність"
                />
                <div className="mobile-write-off">
                    <span>Регулярне списання</span>
                </div>
                <label>Спосіб повторення:</label>
                <div class="form-floating">
                    <select class="form-select" id="floatingSelect">
                        <option value="1">щотижня</option>
                        <option value="2">Щомісяця</option>
                        <option value="3">Щороку</option>
                    </select>
                </div>
                <label>ПІП:</label>
                <input className="mobile-form-control" />
                <label>Email:</label>
                <input className="mobile-form-control" />
                <div className="mobile-text-agree col-4">
                    <span style={{ textAlign: 'start' }}>
                        Чи хотіли б ви допомагати Хеврону професійними навиками
                        (наприклад, менторством або волонтерством)?
                    </span>
                    <span style={{ textAlign: 'start' }}>
                        Погоджуюсь на обробку персональних даних
                    </span>
                </div>
                <div className="mobile-banking">
                    <img src={Visa} alt="" />
                    <img src={Mastercard} alt="" />
                    <button className="mobile-btn-support">Підтримати</button>
                </div>
            </div>
            <div className="mobile-data">
                <div className="mobile-recquisit">
                    <span>Реквізити</span>
                </div>
                <div className="mobile-bank-iban">
                    <span>IBAN: UA973253210000026002053717183</span>
                    <span>в ЗГРУ ПАТ КБ «ПриватБанку» м.Львів</span>
                </div>
                <div className="mobile-cont">
                    <label>Адреса:</label>
                    <span>79491, Львів-Брюховичі, вул. Бірківська, 11</span>
                    <label>E-mail:</label>
                    <span>itacademyfororphans@gmail.com</span>
                    <label>Skype:</label>
                    <span>ITacademyfororphans</span>
                    <label>Телефон:</label>
                    <span>+38 050 750 2555 - Орест Яцкуляк,</span>
                    <span>
                        заступник директора по навчально-виховній роботі
                    </span>
                </div>
            </div>
            <Map />
        </div>
    );
};
