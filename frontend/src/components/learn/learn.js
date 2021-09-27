import React from 'react';
import './learn.css';
import Books from './img/books.png';
import Stydy from './img/stydy.png';
import Hebron from './img/HEBRON.png';  
import Vector from './img/Vector.png';
import Vector2 from './img/Vector2.png';
import Vector3 from './img/Vector3.png';
import Shape from './img/thinking.png';
import Krest from './img/pray.png';
import Sport from './img/sport.png';
import Smile from './img/smile.png';
import { Graduate } from './graduate';
import ArrSuccess from './arrSuccess';
import { Maps } from '../map/map';



const Learn = (props) => {
    return(
        <div className='content'>
        <div className='learn'>
                <div className='txt'>
                    <div className='lr'>
                        <img src={Stydy} alt=''/>
                    </div>
                    <div className="text-about">
                        <div className='text-title'>
                            <h1>ХЕВРОН</h1>
                            <h1>IT Академiя</h1>
                        </div>
                        <ul className="about-study">
                            <li><span>24 мiсяця навчання</span></li>
                            <li><span>Студенти зі всієї України</span></li>
                            <li><span>Неформальна освіта для молоді з соціально кризової категорії</span></li>
                            <li><span>Індивідуальна система навчання та підходу</span></li>
                            <li><span>Практика в ІТ компаніях</span></li>
                            <li><span>Духовний, інтелектуальний та фізичний розвиток</span></li>
                            <li><span>Забезпечення студентів житлом, харчуванням та ліками</span></li>
                            <li><span>Працевлаштування випускників</span></li>
                        </ul>
                    </div>
                </div>
                <div className='books'>
                    <img src={Books} alt=''/>
                </div>
        </div>
            <div className='work-academy'>
                <div className='how-academy-works-wrapper'>
                    <div className='dd'>
                        <div className='d-a'></div>
                        <div className='d-b'></div>
                        
                    </div>
                    <div className='head'>
                        <h1>Як Академія Працює?</h1>
                    </div>
                </div>
                
                    <div className='academy'>
                        <div className='a'>
                            <div className='a-img'>
                                <h2><div className='one'>1</div> ВСТУП <img src={Vector} alt=''/></h2>
                            </div>
                            <div className='a-p'>
                           
                            <span>Молоді люди групи ризику, які завершили</span>
                            <span>навчання в школі та досягли повноліття,</span>
                            <span>можуть вступити в Академію.</span>
                            

                            
                            <span> Ми надаємо</span>
                            <span>їм можливість розвиватись в ІТ галузі.</span>
                            <span>Прийом документів відкритий впродовж всього року.</span>
                            </div>
                        </div>
                        <div className='b'>
                            <div className='b-img'>
                                <h2><div className='two'>2</div>НАВЧАННЯ<img src={Vector2} alt=''/></h2>
                            </div>
                            <div className='b-p'>
                            
                            <span>Студент навчається за новітньою</span>
                            <span>24-місячною програмою,</span>
                            <span>розробленою Академією. Дана програма</span>
                            <span>спрямована на тривекторний</span>
                            <span>розвиток: інтелектуальний,</span>
                            <span>фізичний та духовний.</span>
                            
                            </div>
                        </div>
                        <div className='c'>
                            <div className='c-img'>
                                <h2><div className='tree'>3</div>РОБОТА<img src={Vector3} alt=''/></h2>
                            </div>
                            <div className='c-p'>
                            
                            <span>Після завершення навчання,</span>
                            <span>студент отримує Сертифікат,</span>
                            <span>який підтверджує компетентність</span>
                            <span>у вибраній галузі на</span>
                            <span>рівні Junior. Ми допомагаємо</span>
                            <span>студентам з подальшим працевлаштуванням.</span>
                            
                            </div>
                        </div>
                    </div>
                <div className='h'>
                    <img src={Hebron} alt=''/>
                </div>
                   
            </div>

            <div className='development'>
                <div className='hh'>
                    <div className='h-a'>
                        
                        <h3><span>Тривекторна</span></h3>
                        <h3><span>програма навчання</span></h3>
                        <h3><span>Хеврон ІТ Академії</span></h3>
                        
                    </div>

                    <div className='h-b'>
                        
                        <h4><span>Дана програма включає в себе <b>духовну, інтелектуальну</b> та <b>фізичну</b> складову</span></h4>
                        <h4><span>розвитку, а також дає змогу молоді виробити нову систему поведінки</span></h4>
                        <h4> <span>у складних життєвих обставинах.</span></h4>
                        
                    </div>
                </div>

                <div className='devel'>
                    <div className='d-a-t'>
                        <div className='img-a'>
                            <h4>ІНТЕЛЕКТУАЛЬНИЙ РОЗВИТОК:<img src={Shape} alt=''/></h4>
                        </div>
                        <div className='d-a-p'>
                        
                            <p>- Основи програмування</p>
                            <p>- Більше 10-ти мов програмування та сучасних фреймворків</p> 
                            <p>- Англійська мова</p> 
                            <p>- Математика </p>
                            <p>- Історія України</p> 
                            <p>- Правознавство</p>
                            <p>- Ораторське мистецтво</p>
                        
                        </div>
                    </div>
                    <div className='d.b'>
                        <div className='img-b'>
                            <h4>ДУХОВНИЙ РОЗВИТОК:<img src={Krest} alt=''/></h4>
                        </div>
                        <div className='d-b-p'>

                            <p>- Біблійні читання </p>
                            <p>- Духовне спілкування з наставником</p>
                            <p>- Участь в таборах</p>
                            <p>- Волонтерство в реабілітаційних центрах</p>
                            <p>та на львівських подіях.</p>


                        </div>
                    </div>
                    <div className='d.c'>
                        <div className='img-c'>
                          <h4>ФІЗИЧНИЙ РОЗВИТОК:<img src={Sport} alt=''/></h4>
                        </div>
                        <div className='d-c-p'>

                            <p>- Легка атлетика</p>
                            <p>- Футбол</p>
                            <p>- Абонемент в Sport Life</p> 
                            <p>- Туризм</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='success'>
                <div className='s-h'>
                    <h1>Історії успіху наших випускників</h1>
                </div>
                <div className='s-info'>
                       {ArrSuccess.map( Success => {
                         return(  
                             <div className="col-4">
                                <Graduate img={Success.img} fullname={Success.fullname} id={Success.id}/>
                            </div>
                       )})}
                </div>
            </div>
            <div className='connect'>
                    <p>ПРИЄДНУЙТЕСЬ</p>
                    <h3>Твоя історія успіху теж</h3>
                    <h3>може бути тут!</h3>
            </div>
                <div className='card'>
                        <img src={Smile} alt=''/>
                        <h1>Заповнюй заявку на вступ!</h1>
                        <div className='full-name'>
                            <div>
                            <label for="validationDefault01" className="form-label">ПІБ:</label>
                                <input className="form-control search-input"/>
                            </div>
                            <div>
                                <label for="validationDefault02" className="form-label">Номер телефону:</label>
                                <input className="form-control search-input"/>
                            </div>
                            <div>
                                <label for="validationDefault02" className="form-label">Email:</label>
                                <input className="form-control search-input"/>
                            </div>
                        </div>
                        <div className='comit'>
                            <label for="validationDefault02" className="form-label">Коментар:</label>
                            <textarea className="form-control search-input"/>
                            <button className='btn'>Надіслати</button>
                        </div>
                </div>
            <Maps/>
        </div>
    ) 
}
export default Learn;