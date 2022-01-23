import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SiderBarDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ChakraProvider resetCSS theme={theme}>
			<SiderBarDrawerProvider>
				<Component {...pageProps} />
			</SiderBarDrawerProvider>
		</ChakraProvider>
  )
}

export default MyApp
