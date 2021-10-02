
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
import { Graduate } from './graduate';
import ArrSuccess from './arrSuccess';
import { Maps } from '../map/map';
import Contacts  from '../contacts';



const Learn = (props) => {
    return(
        <div className='content row no-gutters'>
            <div className='learn'>
                    <div className='col-1'></div>
                    <div className='col-3 txt'>
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
                    <div className='books col-7'>
                        <img src={Books} alt=''/>
                    </div>
            </div>
            <div className='work-academy row no-gutters'>
                <div className='h'>
                    <img src={Hebron} alt=''/>
                </div>
                
                <div className='how-academy-works-wrapper '>
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
                            <div className='one'>1</div> 
                            <span>ВСТУП</span> 
                            <img src={Vector} alt=''/>
                        </div>
                        <div className='a-p'>
                            <span>Молоді люди групи ризику, які завершили</span>
                            <span>навчання в школі та досягли повноліття,</span>
                            <span>можуть вступити в Академію.</span>
                            <div className='mt-2'></div>
                            <span>Ми надаємо</span>
                            <span>їм можливість розвиватись в ІТ галузі.</span>
                            <span>Прийом документів відкритий впродовж</span>
                            <span>всього року.</span>
                        </div>
                    </div>
                    <div className='a'>
                        <div className='a-img'>
                            <div className='one'>2</div>
                            <span>НАВЧАННЯ</span>
                            <img src={Vector2} alt=''/>
                        </div>
                        <div className='a-p'>
                        
                            <span>Студент навчається за новітньою</span>
                            <span>24-місячною програмою,</span>
                            <span>розробленою Академією. Дана програма</span>
                            <span>спрямована на тривекторний</span>
                            <span>розвиток: інтелектуальний,</span>
                            <span>фізичний та духовний.</span>
                        
                        </div>
                    </div>
                    <div className='a'>
                        <div className='a-img'>
                            <div className='one'>3</div>
                            <span>РОБОТА</span>
                            <img src={Vector3} alt=''/>
                        </div>
                        <div className='a-p'>
                            <span>Після завершення навчання,</span>
                            <span>студент отримує Сертифікат,</span>
                            <span>який підтверджує компетентність</span>
                            <span>у вибраній галузі на</span>
                            <span>рівні Junior. Ми допомагаємо</span>
                            <span>студентам з подальшим працевлаштуванням.</span>
                        </div>
                    </div>
                </div>   
            </div>

            
            <div className='hh row no-gutters'>
                <div className='h-a col-4'>
                    <span>Тривекторна</span>
                    <span>програма навчання</span>
                    <span>Хеврон ІТ Академії</span>
                </div>

                <div className='h-b col-8'>
                    <span>Дана програма включає в себе <b>духовну, інтелектуальну</b> та <b>фізичну</b> складову</span>
                    <span>розвитку, а також дає змогу молоді виробити нову систему поведінки</span>
                    <span>у складних життєвих обставинах.</span>
                </div>
            
            </div>
                <div className='devel col-12'>
                    <div className='d-a-t col-3'>
                        <div className='img-a'>
                            <span>
                                <h4>ІНТЕЛЕКТУАЛЬНИЙ</h4>
                                <h4>РОЗВИТОК:</h4>
                                <img src={Shape} alt=''/>
                            </span>
                        </div>
                        <div className='d-a-p col-9'>
                            <p>- Основи програмування</p>
                            <p>- Більше 10-ти мов програмування</p>
                            <p>та сучасних фреймворків</p> 
                            <p>- Англійська мова</p> 
                            <p>- Математика </p>
                            <p>- Історія України</p> 
                            <p>- Правознавство</p>
                            <p>- Ораторське мистецтво</p>
                        </div>
                    </div>
                    <div className='d-a-t col-3'>
                        <div className='img-a'>
                            <span>
                                <h4>ДУХОВНИЙ</h4>
                                <h4>РОЗВИТОК:</h4>
                                <img src={Krest} alt=''/>
                            </span>
                        </div>
                        <div className='d-a-p'>
                            <p>- Біблійні читання </p>
                            <p>- Духовне спілкування з наставником</p>
                            <p>- Участь в таборах</p>
                            <p>- Волонтерство в реабілітаційних</p> 
                            <p>центрах</p>
                            <p>та на львівських подіях.</p>
                        </div>
                    </div>
                    <div className='d-a-t col-3'>
                        <div className='img-a'>
                            <span className=''>
                              <h4>ФІЗИЧНИЙ</h4>
                              <h4>РОЗВИТОК:</h4>
                              <img src={Sport} alt=''/>
                            </span>
                        </div>
                        <div className='d-a-p'>
                            <p>- Легка атлетика</p>
                            <p>- Футбол</p>
                            <p>- Абонемент в Sport Life</p> 
                            <p>- Туризм</p>
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
                <Contacts/>
            <Maps/>
        </div>
    ) 
}

export default Learn;