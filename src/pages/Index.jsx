import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    salary: "$110,000 - $130,000",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    salary: "$90,000 - $110,000",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        {jobListings.map((job) => (
          <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="md">
              {job.title}
            </Heading>
            <Text mt={2}>
              <FaBriefcase /> {job.company}
            </Text>
            <Text mt={2}>
              <FaMapMarkerAlt /> {job.location}
            </Text>
            <Text mt={2}>
              <FaDollarSign /> {job.salary}
            </Text>
            <HStack mt={4} spacing={4}>
              <Button colorScheme="teal">Apply Now</Button>
              <IconButton aria-label="Save Job" icon={<FaBriefcase />} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;