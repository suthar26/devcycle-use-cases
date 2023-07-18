'use client';

import { Container, Heading, Stack, Box, Text } from '@chakra-ui/react';
import { useVariableValue } from '@devcycle/devcycle-react-sdk';

export default function Page() {
  const heading = "Goat";
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          {heading}
        </Heading>
        <Text color={'gray.500'}>This is a {heading}</Text>
      </Stack>
    </Container>
  );
}