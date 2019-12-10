import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPrices from '../components/Banners/BannerPrices'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Цены на бухгалтерские услуги в Минске</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <BannerPrices />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  
                    <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Вид деятельности / Юрлицо</th>
                                    <th>Упрощенная система налогообложения<br/> с НДС / без НДС</th>
                                    <th>Общая система налогообложения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Вновь созданные предприятия на время организационного периода</td>
                                    <td>50 / 50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Индивидуальные предприниматели	</td>
                                    <td>от 150</td>
                                    <td>от 100</td>
                                </tr>
                                <tr>
                                    <td>Юридические лица</td>
                                    <td>от 150</td>
                                    <td>от 250</td>
                                </tr>
                                <tr>
                                    <td>Восстановление бухгалтерского учета (за месяц)</td>
                                    <td>от 150</td>
                                    <td>от 150</td>
                                </tr>
                            </tbody>
         
                        </table>

                        <h4>В стоимость услуг входит:</h4>
                        <ul>
                            <li>Ведение бухгалтерского учета в программе 1С на основании предоставленных Заказчиком первичных учетных документов;</li>
                            <li>Расчет заработной платы (в т.ч. отпускных, больничных) и ведение персонифицированного учета    </li>
                            <li>Составление и сдача отчетности в ИМНС, ФСЗН, Белгосстрах и органы статистики</li>
                            <li>Базовый кадровый учет</li>
                            <li>Составление годовой отчетности</li>
                            <li>Консультации по текущей деятельности</li>

                        </ul>

                        <blockquote>Цены приведены в USD</blockquote>

                    </div>
                </div>
                
            </section>
    
        </div>

    </Layout>
)

export default Generic