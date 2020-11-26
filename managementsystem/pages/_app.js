import "../styles/globals.css";

//Importing ChakraProvider in order to get Chakra to work.
import { ChakraProvider } from "@chakra-ui/react";
//Importing extendThem function
import { extendTheme } from "@chakra-ui/react";

// Colors still need to be decided
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
