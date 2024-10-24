import PropTypes from "prop-types";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

const AboutUs = props => {

  //meta title
  document.title = "GeoPay | About Us";

  return (
    <div className="overflow-auto">
      <span className="d-block d-sm-none">
        <h2 className="mb-3 font-size-18 text-secondary text-center">About Us</h2>
      </span>
      {/* <h2 className="mb-2 mt-3 font-size-18 text-dark">About Us</h2> */}
      <p>GeoPay is a FinTech company, whose primary purpose is to provide its users with the means to easily, securely and reliably send money, instantaneously, across borders, at a low cost. It has developed a unique USD Global Wallet, accessible via an App or through web access, though which these money transfers can be made.</p>
      <p>GeoPay Limited, incorporated in Republic of Mauritius holds a Global Business License No: GB20025920 & a Payment Intermediary Service License No: GB20025920 issued by Financial Service Commission, Mauritius. GeoPay, is a brand from the house of Artificial Intelligence Technologies limited which is a private company limited by shares and duly incorporated under the laws of the U.A.E. The concept behind GeoPay was created by a group of seasoned professionals with diverse and rich experiences in telecommunications, mobile digital technology and mobile payment gateways in Africa.</p>
      <p>GeoPay recognizes the vast impact and role of technology in modern society and the growing demand to provide convenient and secure payment services. GeoPay has combined and improved technology-based payment services that can work with your preferred Mobile Money wallet, bank account or your Visa/Master card to offer a simple, secure and overall better payment experience.</p>
      <p>GeoPay provides a complete end-to-end online and mobile payment transactions solution to enable consumers and businesses alike to send, spend and receive payments easier and more safely.</p>
      <p>Geopay’s expertise in this regard continues to be strengthened by our deep and thorough understanding of the policy and legal regulatory framework of mobile money ecosystems in Sub-Saharan Africa. We provide solutions that address the issues and challenges of financial inclusion, to promote better payment services and the drive towards cashless or cash lite economy and the ease of instant money transfer directly into Mobile money wallets and bank accounts.</p>
      <p>Our core concept is to have partnerships with e-Wallet companies across South and East Africa, Europe and Asia, empowering residents, expats, local and international businesses from West Africa to send and receive money easier, faster and securely, throughout these regions. As a result, we will be able to help reduce the enormous bottleneck or problems that consumers and businesses face when transferring money both interAfrica and to other countries due to foreign currency regulations and costly charges.</p>
      <p className="mb-0">Our core concept is to have partnerships with e-Wallet companies across South and East Africa, Europe and Asia, empowering residents, expats, local and international businesses from West Africa to send and receive money easier, faster and securely, throughout these regions. As a result, we will be able to help reduce the enormous bottleneck or problems that consumers and businesses face when transferring money both interAfrica and to other countries due to foreign currency regulations and costly charges.</p>

      <h2 className="mb-2 mt-3 font-size-18 text-secondary text-center text-sm-start">Our Vision</h2>
      <p className="mb-0">Within 3 years, GeoPay will become one of the most trusted digital financial service providers and eWallet partners for more than 1,000 leading mobile wallet and eCommerce companies, not only in West Africa but also across South and East Africa, Europe and Asia, servicing the needs of its end users reliably, swiftly and efficiently.</p>
    </div>
  );
};

AboutUs.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(AboutUs);
