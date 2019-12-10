import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title='ЗАО "Александраудит" - бухгалтерская поддержка бизнеса'
                    meta={[
                        { name: 'description', content: ' Мы осуществляеи бухгалтерскую и налоговую поддержку белорусских и зарубежных предприятий' },
                        { name: 'keywords', content: 'Аудиит, бухгалтерские услуги' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Мы работаем на результат</h2>
                            </header><p>ЗАО "Александраудит" предоставляет бухгалтерские и юридические услуги для индивидуальных предпринимателей и организаций.</p>
                            <p>Приоритет нашей работы заключается в том, чтобы, сконцентрировавшись на потребностях клиента, обеспечить практический, творческий и коммерческий подход к оказанию услуг</p>
                      
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic07})`}}>
                            <header className="major">
                                <h3>Ведение бухгалтерского и налогового учета</h3>
                                <p>Включает обработку первичной учетной документации. Непосредственно ведение учета в 1С. Формирование финансового результата.</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic08})`}}>
                            <header className="major">
                                <h3>Постановка бухгалтерского и налогового учета</h3>
                                <p>Подберем подходящую для вас систему бухгалтерского учета, поможем наладить документооборот. </p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic09})`}}>
                            <header className="major">
                                <h3>Составление и подача бухгалтерской, налоговой и статистической отчетности</h3>
                                <p>При необходимости подготовим не только необходимую в соответствии с законодательством отчетность, но и индивидуальную отчетность для учредителей.</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic10})`}}>
                            <header className="major">
                                <h3>Консультирование по бухгалтерскому и налоговому учету</h3>
                                <p>Если у Вас есть вопросы, мы ответим на простом и понятном языке.</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic11})`}}>
                            <header className="major">
                                <h3>Восстановление бухгалтерского учета</h3>
                                <p>Утеряли документы, подвел бухгалтер? Мы поможем восстановить бухгалтерский учет.</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic12})`}}>
                            <header className="major">
                                <h3>Кадровый учет</h3>
                                <p>Включает в себя оформление и ведение личных дел, трудовых контрактов.</p>
                            </header>
                        </article>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex