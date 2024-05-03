import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';

const ContactUs = () => (
  <Box p={5}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Contact Us</Heading>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea id="message" />
      </FormControl>
      <Button colorScheme="blue" mt={4}>Send</Button>
    </VStack>
  </Box>
);

export default ContactUs;