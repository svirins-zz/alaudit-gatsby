import React from 'react'


import girl1 from '../assets/images/girls/girl1.jpg'
import girl2 from '../assets/images/girls/girl2.jpg'
import girl3 from '../assets/images/girls/girl3.jpg'
import girl4 from '../assets/images/girls/girl4.jpg'
import girl5 from '../assets/images/girls/girl5.jpg'
import girl6 from '../assets/images/girls/girl6.jpg'
import girl7 from '../assets/images/girls/girl7.jpg'
import girl8 from '../assets/images/girls/girl8.jpg'


const Team = (props) => (
    <section id="team" className="major">
        <div className="inner">
            <header className="major">
                <h2>Наши специалисты</h2>            
                <p>Предоставьте ведение бухгалтерского учета Вашей компании опытным профессионалам. </p>

            </header>                
        
                <div className="box alt">
                    <div className="grid-wrapper">
                             <div className="col-3">                                
                                <span className="image fit"><img src={girl1} alt="" /></span>
                                <strong>Боровик Татьяна</strong>
                                <p>Директор</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl2} alt="" /></span>
                                <strong>Семеняко Ольга</strong>
                                <p>Главный бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl3} alt="" /></span>
                                <strong>Боброва Юлия</strong>
                                <p>Ведущий бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl4} alt="" /></span>
                                <strong>Чикун Марина</strong>
                                <p>Ведущий бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl5} alt="" /></span>
                                <strong>Макеева Каролина</strong>
                                <p>Ведущий бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl8} alt="" /></span>
                                <strong>Рожнева Наталья</strong>
                                <p>Ведущий бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl6} alt="" /></span>
                                <strong>Леонова Мария</strong>
                                <p>Ведущий бухгалтер</p>
                                <hr />
                            </div>
                            <div className="col-3">                                
                                <span className="image fit"><img src={girl7} alt="" /></span>
                                <strong>Шахнович Екатерина</strong>
                                <p>Стажер</p>
                                <hr />
                            </div>                                                       
                    </div>
                </div>
        </div>


    </section>
)

export default Team
