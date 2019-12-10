import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/Banners/BannerLanding'

import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic02.png'
import pic03 from '../assets/images/pic03.png'
import pic04 from '../assets/images/pic04.png'
import pic05 from '../assets/images/pic05.png'
import pic06 from '../assets/images/pic06.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>ЗАО "АЛЕКСАНДРАУДИТ" ведение бухгалтерского и налогового учета</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Преимущества работы с нами</h2>
                    </header>
                    
                    <p>С 1995 года наша компания осуществляет бухгалтерскую и налоговую поддержку белорусских и зарубежных предприятий.
Есть, мнение, что для ведения бухгалтерского учета малых предприятий и индивидуальных предпринимателей, не требуется особых навыков, однако, это не соответствует истине.
Без опыта и знаний можно придти к отрицательному результату.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic01} alt="" />
                    </div>    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Доступность</h3>
                            </header>
                            <p>Опыт и знания наших специалистов позволяют уверенно вести Ваш бизнес.</p>

                        </div>
                    </div>

                </section>
                <section>
                    <div className="image">
                        <img src={pic02} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Компетентность</h3>
                            </header>
                            <p>Наши услуги будут стоить дешевле оплаты собственного главного бухгалтера, но будут превосходить по качеству и уровню работы.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic03} alt="" />
                    </div>    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Команда</h3>
                            </header>
                            <p>Мы всегда на связи любым удобным способом, Вы можете обратится к нам неограниченное количество раз и наши бухгалтера на понятном языке ответят на все вопросы.</p>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic04} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Без бюрократии</h3>
                            </header>
                            <p>Мы минимизируем ваши контакты с государственными органами.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic05} alt="" />
                    </div>    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Страховка</h3>
                            </header>
                            <p>Наши услуги застрахованы</p>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic06} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Партнеры</h3>
                            </header>
                            <p>Не только мы, но и наши партнеры (аудиторы, юристы) при необходимости придут на помощь.</p>
                        </div>
                    </div>
                </section>
   
            </section>
        </div>

    </Layout>
)

export default Landing