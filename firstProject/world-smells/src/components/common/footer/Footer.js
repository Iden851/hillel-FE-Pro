import "./Footer.css";

function Footer() {
    return (
        <div className="Footer-site">
            <div className="footer-wrapper">
                <section>
                    <h3>About us</h3>
                    <ul>
                        <li>
                            <a href="#">About company</a>
                        </li>
                        <li>
                            <a href="#">Shops</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>For customers</h3>
                    <ul>
                        <li>
                            <a href="#">Payment</a>
                        </li>
                        <li>
                            <a href="#">Delivery</a>
                        </li>
                        <li>
                            <a href="#">Refund</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Contacts</h3>
                    <ul>
                        <li>
                            <a href="tel:800000000">800 000 000</a>
                        </li>
                        <li>
                            <a href="mailto: worldsmells@gmail.com">worldsmells@gmail.com</a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer-privacy">© 2022 - WorldSmells All Right Reserved</div>
        </div>
    );
}

export default Footer;
