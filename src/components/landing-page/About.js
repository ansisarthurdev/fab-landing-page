import React from "react";
import { Flex, Grid, Heading, Text, Button, Box } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const About = () => {
  return (
    <section>
      <Flex
        direction="column"
        pl="1.5rem"
        pr="1.5rem"
        gap="32px"
        width="100%"
        maxWidth="1280px"
        style={{ margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Grid columns={{ initial: "1", sm: "2" }} gap="32px">
            <Flex
              direction="column"
              gap="16px"
              justify="center"
              width="100%"
              maxWidth={{ initial: "100%", sm: "400px" }}
            >
              <Heading
                as="h3"
                size="7"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  textTransform: "uppercase",
                }}
              >
                Fresh tastes best, which is why we bake our own buns in the
                restaurant, every day.
              </Heading>

              <Text as="p" size="3">
                Over 95% of our ingredients come from Finland. That means fewer
                shortcuts, more flavor, and food that feels good to eat.
              </Text>

              <Box mt="16px">
                <Link to="/">
                  <StyledButton size="3">
                    <Text as="p" size="3" weight="medium">
                      Learn More
                    </Text>
                  </StyledButton>
                </Link>
              </Box>
            </Flex>

            <Flex justify="end">
              <Box
                width="100%"
                maxWidth={{ initial: "100%", sm: "500px" }}
                height="100%"
                maxHeight={{ initial: "100%", sm: "400px" }}
              >
                <img
                  src="/assets/images/landing-page/about/1.jpeg"
                  alt="About Us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Flex>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Grid columns={{ initial: "1", sm: "2" }} gap="32px">
            <Flex justify="start">
              <Box
                width="100%"
                maxWidth={{ initial: "100%", sm: "500px" }}
                height="100%"
                maxHeight={{ initial: "100%", sm: "400px" }}
              >
                <img
                  src="/assets/images/landing-page/about/2.jpeg"
                  alt="About Us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Flex>

            <Flex
              direction="column"
              gap="16px"
              justify="center"
              width="100%"
              maxWidth={{ initial: "100%", sm: "400px" }}
            >
              <Heading
                as="h3"
                size="7"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  textTransform: "uppercase",
                }}
              >
                Craving something real?
              </Heading>

              <Text as="p" size="3">
                Your next freshly smashed burger is just around the corner.
              </Text>

              <Text as="p" size="3">
                We’re serving up good vibes and better burgers in cities across
                Finland - walk in, chill out, or get it to go.
              </Text>

              <Flex mt="16px" gap="16px" wrap="wrap">
                <StyledButtonAnchor>
                  <StyledButton
                    size="3"
                    color="brown"
                    style={{
                      backgroundColor: "var(--color-secondary)",
                    }}
                  >
                    <Text as="p" size="3" weight="medium">
                      Get Directions
                    </Text>
                  </StyledButton>
                </StyledButtonAnchor>

                <StyledButtonAnchor to="/">
                  <StyledButton size="3" variant="outline">
                    <Text as="p" size="3" weight="medium">
                      Order Online
                    </Text>
                  </StyledButton>
                </StyledButtonAnchor>
              </Flex>
            </Flex>
          </Grid>
        </motion.div>
      </Flex>
    </section>
  );
};

const StyledButtonAnchor = styled(Link)`
  @media (max-width: 768px) {
    flex: 1 0 0;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default About;
