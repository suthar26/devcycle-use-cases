'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DVCProvider } from '@devcycle/devcycle-react-sdk';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DVCProvider
      config={{
        sdkKey:
          process.env.NEXT_PUBLIC_DVC_SDK_KEY ||
          'dvc_client_f6749f7c_89a0_4862_8b29_17459737c13f_decb3ca'
      }}
    >
      <UserProvider>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </UserProvider>
    </DVCProvider>
  );
}
