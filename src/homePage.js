// src/homePage.js
import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      <Heading>Happy Birthday my sweet sweet love ❤️</Heading>
      <Text mt={4}>This is the homepage of your app.</Text>
      <Button as={Link} to="/about" colorScheme="teal" mt={6}>
        Go to About Page
      </Button>
    </Box>
  );
}

export default Home;
