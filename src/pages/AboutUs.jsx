import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const AboutUs = () => (
  <Box p={5}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">About Us</Heading>
      <Text fontSize="lg">
        Nestled in the heart of Norway's pristine natural landscapes, our apple farm has been a family-owned
        enterprise for over a century. We pride ourselves on sustainable farming practices and a deep respect
        for nature, which is reflected in the quality of our produce.
      </Text>
      <Text fontSize="lg">
        Our farm spans several hectares with a variety of apple trees that are tended to with the utmost care.
        We believe in maintaining a harmonious balance with the environment, which has been key to our
        farm's longevity and success.
      </Text>
    </VStack>
  </Box>
);

export default AboutUs;