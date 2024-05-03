import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const OurApples = () => (
  <Box p={5}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Our Apples</Heading>
      <Text fontSize="lg">
        We grow a wide range of apple varieties, each with its own unique taste and texture. From the crisp
        and sweet 'Honeycrisp' to the tart and robust 'Granny Smith', our apples are perfect for a variety of uses,
        whether it's baking, juicing, or eating straight from the tree.
      </Text>
      <Text fontSize="lg">
        Each variety is harvested at its peak season to ensure maximum flavor and freshness. Our harvest
        season starts in early September and extends through late October, welcoming visitors to experience
        the joy of picking their own apples directly from our orchards.
      </Text>
    </VStack>
  </Box>
);

export default OurApples;