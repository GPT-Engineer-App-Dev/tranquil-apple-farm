import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box textAlign="center" p={5}>
      <Image src="/images/farm.jpg" alt="Apple Farm" />
      <Text fontSize="2xl" mt={3}>Welcome to Our Apple Farm</Text>
      <Text fontSize="lg" mt={2}>Discover the natural beauty and taste of our locally grown apples.</Text>
      <Box mt={4}>
        <Link to="/about-us"><Button colorScheme="teal" mr={3}>About Us</Button></Link>
        <Link to="/our-apples"><Button colorScheme="teal" mr={3}>Our Apples</Button></Link>
        <Link to="/gallery"><Button colorScheme="teal" mr={3}>Gallery</Button></Link>
        <Link to="/contact-us"><Button colorScheme="teal">Contact Us</Button></Link>
      </Box>
    </Box>
  );
};

export default Index;