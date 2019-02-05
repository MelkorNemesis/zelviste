import React, { PureComponent } from "react";

import { Box, Text } from "../../atoms";

export class NotFound extends PureComponent {
  render() {
    return (
      <div className="NotFound">
        <Box>
          <Text.Header h1 first>
            Stránka nenalezena
          </Text.Header>

          <Text.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac quam sem. <strong>Phasellus nec ante eu</strong> ante scelerisque
            convallis. Proin sed tellus varius, vehicula lectus at, sollicitudin
            eros. Sed ut lectu.
          </Text.Paragraph>
        </Box>
      </div>
    );
  }
}
