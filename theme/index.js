import {extendTheme, withDefaultColorScheme} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fcfdfd", "#151a23")(props),
    },
  }),
};

const fonts = {
  heading: "Nunito, -apple-system",
  body: "Nunito, -apple-system",
}


//const theme = extendTheme(withDefaultColorScheme({ ...config, styles, fonts, colorScheme: "telegram", }));
const theme = extendTheme({
  ...config,
  styles,
  fonts,
},
  withDefaultColorScheme({colorScheme: "linkedin"}),
);
export default theme;
