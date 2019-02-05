import React from "react";
import { Link, Text } from "../../atoms";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__cols">
        <section>
          <Text bold light block className="Footer__header">
            Želviště.cz
          </Text>

          <Text.Paragraph light thin>
            Mikulčická 9<br />
            Brno, 62700
            <br />
            IČO: 123123123
            <br />
            DIČ: CZ1212121212
          </Text.Paragraph>
        </section>

        <section>
          <Text bold light block className="Footer__header">
            Důležité odkazy
          </Text>
          <Text.Paragraph>
            <Link to="/abc">Doprava a platba</Link>
            <br />
            <Link to="/abc">Terarijní burzy</Link>
            <br />
            <Link to="/abc">Kamenny obchod</Link>
            <br />
            <Link to="/abc">Doprava a platba</Link>
            <br />
            <Link to="/abc">Terarijní burzy</Link>
            <br />
            <Link to="/abc">Kamenny obchod</Link>
          </Text.Paragraph>
        </section>
      </div>

      <Text.Block mediumBold smaller light className="Footer__copyright">
        {"\u00A9"} Želviště 2019
      </Text.Block>
    </footer>
  );
};
