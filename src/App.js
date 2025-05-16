// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import Home from './homePage';
import About from './aboutPage';

function App() {
  return (
    <BrowserRouter>
      <Box p={4}>
        <Flex as="nav" justify="space-between" align="center" mb={6}>
          <Heading size="md">My Website</Heading>
          <Flex gap={4}>
            <Button as={Link} to="/" colorScheme="teal" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/about" colorScheme="teal" variant="ghost">
              About
            </Button>
          </Flex>
        </Flex>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
