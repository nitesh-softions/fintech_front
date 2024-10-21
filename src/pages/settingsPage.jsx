import PropTypes from "prop-types";
import React, { useState } from "react";
import { Container, Button, Input, Row, Col } from "reactstrap";

// Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

// i18n
import { withTranslation } from "react-i18next";
import CryptoJS from "crypto-js";


// Example of encrypting JSON data
const jsonData = {
  "first_name": "Rajan",
  "last_name": "Softieons",
  "email": "rajan.softieons@gmail.com",
  "password": "12345678",
  "country_id": 1,
  "mobile_number": 7874449936,
  "formatted_number": "+917874449936",
  "referalcode": "ref123",
  "is_company": 1,
  "status": 1,
  "company_name": "Softieons",
  "business_licence": "test214soft",
  "tin": "147asd15",
  "vat": "3f1541dfe1",
  "company_address": "5th floor Abhinandan Royal, Bhatar road, Althan, Surat",
  "postcode": 395007,
  "bank_name": "IDFC Bank",
  "account_number": "21234567890123",
  "bank_code": "IDFC2024"
};

const Settings = (props) => {
  // Meta title
  document.title = "Settings";

  // State for encryption/decryption
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");



  // Encrypt function
  function encryptData(data) {
    // Your secret key (must match the Laravel decryption key)
    const secretKey = 'zQeWCql9Fm7+rQ83Tag/p9kOa2N+tsFU95Yl+U6LAKk=';
    // Convert the secret key to Base64
    const key = CryptoJS.enc.Base64.parse(secretKey);
    // Encrypt the JSON data using AES with ECB mode and PKCS7 padding
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    // Send the encrypted data as Base64 encoded string
    setEncryptedText(encrypted);
    return encrypted;
  }

  // Decrypt function
  function decryptData(encryptedData) {
    // Your secret key (must match the Laravel encryption key)
    const secretKey = 'aw62h3ioeRB9K2rnFFVQ+bohzZo4gl0x/u8OaXbRoFM=';
    // Convert the secret key to Base64
    const key = CryptoJS.enc.Base64.parse(secretKey);
    
    // Decrypt the encrypted data using AES with ECB mode and PKCS7 padding
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    // Convert the decrypted bytes to a string
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

    return decryptedText;
}


  const handleEncrypt = () => {
    encryptData(jsonData);
  };

  const checkData = "x3yVt0Spczb2veqGtFfkn1bSHNE8zzeg2J75ktjAKMGRUVlZnAxeJJPrhEXhpl70FtqiicoMyCZil1oy9oaS1KoIdoO74X+Xrwqz2CMbFuwcW2xbSlhTHwx8mSGUZkB8ENfRwSWl1x6Xp+Zdk+5SNt9m0ej9E2d5Zxe2GO2Zw7Qc+ZKqhAKfiVcNpjBFSdoioIz6E+kbv71IpDziHxD4hQWrfV15CsekVmKkZImb4l5Pev7y8MgSU++VWOvoSeOgRh2MmZA4qmJvKdIZxrDDu3ccD1Rszfw1uRwip4p5cWqwwP2CiRqguD+qL+dwN5Lg/xdV5oz5GsvGf1Z6bbZxVgWTdcc9/uHRE1qJmjrJiS9gblBo8orr3grGMpzKNpUrVecKuifioe7AvsTBsIFjEwvY+Lscjw3wld8++c/wVNeW53kLScFkqOal9tI1SIAK62IWQLUv8JSksAT8rx34ynq+BJseFg5dUFtJ7LxOxB+NR378/UsPFopkeRQUlAYLKOJsFiqR0d27g/MKqw8iIhgmOMzFHv4tQFga3uXXx8UXDc9JBn1ozctzXSgoRzEeSbgKO7izlKK4ExaSBi5C4hDHwg7T0/175hUlMOS1B24ZnTebE/RG18NpF1cR1jPDatrWZdNzW3ZLSD9orZRu8KEBkiQT+/OL6VSWDO+Lr3k="

  const handleDecrypt = () => {
    const decryptedText = decryptData(checkData); // Assuming encryptedText is your encrypted string
    setDecryptedText(decryptedText);
  };

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs initialPageRoute={'/dashboard'} title={props.t("Settings")} breadcrumbItem={props.t("Settings")} />

        <Row className="mt-4">
          <Col md="6">
            <h2>AES Encryption/Decryption</h2>
            <Input type="text" placeholder="Enter text to encrypt" value={text} onChange={(e) => setText(e.target.value)} />
            <Button color="primary" onClick={handleEncrypt} className="mt-2">
              Encrypt
            </Button>

            <div className="mt-3 text-wrap">
              <strong>Encrypted Text:</strong> {encryptedText}
            </div>

            <Button color="secondary" onClick={handleDecrypt} className="mt-2">
              Decrypt
            </Button>

            <div className="mt-3 text-wrap">
              <strong>Decrypted Text:</strong> {decryptedText}
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

Settings.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Settings);
