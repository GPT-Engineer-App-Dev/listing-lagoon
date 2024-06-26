import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
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
  const [jobs, setJobs] = useState(jobListings);
  const [form, setForm] = useState({ title: "", company: "", location: "", salary: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationForm, setApplicationForm] = useState({ name: "", email: "", resume: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { id: jobs.length + 1, ...form };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setForm({ title: "", company: "", location: "", salary: "" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to a server
    console.log("Application submitted:", applicationForm);
    setApplicationForm({ name: "", email: "", resume: "" });
    closeModal();
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <Box as="form" onSubmit={handleSubmit} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={8}>
          <FormControl id="title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input name="title" value={form.title} onChange={handleChange} />
          </FormControl>
          <FormControl id="company" isRequired mt={4}>
            <FormLabel>Company Name</FormLabel>
            <Input name="company" value={form.company} onChange={handleChange} />
          </FormControl>
          <FormControl id="location" isRequired mt={4}>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={form.location} onChange={handleChange} />
          </FormControl>
          <FormControl id="salary" isRequired mt={4}>
            <FormLabel>Salary</FormLabel>
            <Input name="salary" value={form.salary} onChange={handleChange} />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">Post Job</Button>
        </Box>

        {jobs.map((job) => (
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
              <Button colorScheme="teal" onClick={openModal}>Apply Now</Button>
              <IconButton aria-label="Save Job" icon={<FaBriefcase />} />
            </HStack>
          </Box>
        ))}
      </VStack>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply for Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={applicationForm.name} onChange={handleApplicationChange} />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input name="email" value={applicationForm.email} onChange={handleApplicationChange} />
            </FormControl>
            <FormControl id="resume" isRequired mt={4}>
              <FormLabel>Resume</FormLabel>
              <Input name="resume" value={applicationForm.resume} onChange={handleApplicationChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleApplicationSubmit}>Submit Application</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;