import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Container from '../components/index/container';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Container>
          <Component {...pageProps} />
        </Container>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
