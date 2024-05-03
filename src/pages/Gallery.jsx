import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';

const Gallery = () => (
  <Box p={5}>
    <Heading as="h1" size="xl" mb={4}>Gallery</Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      <Image src="/images/orchard.jpg" alt="Orchard" />
      <Image src="/images/harvest.jpg" alt="Harvest" />
      <Image src="/images/scenery.jpg" alt="Scenic View" />
    </SimpleGrid>
  </Box>
);

export default Gallery;