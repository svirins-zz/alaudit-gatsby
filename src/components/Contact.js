import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="POST"  name="alaudit-contact" data-netlify="true">
                    <input type="hidden" name="form-name" value="alaudit-contact" />
                    <div className="field half first">
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Ваш Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Сообщение</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <button type="submit" value="Отправить" className="special">Отправить</button>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">alexandraudit@tut.by</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Телефоны</h3>
                        <span>+ 375 (25) 762-57-61<br /></span>
                        <span>+ 375 (17) 377-48-26<br /></span>
                        <span>+ 375 (17) 377-43-34</span>
                      
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Адрес</h3>
                        <span>г. Минск, ул.Куприянова 1а, к.311<br />
                        УНП 100923384</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
