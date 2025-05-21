import React from "react";
import {
  Grid,
  Section,
  Flex,
  Text,
  Box,
  Button,
  Heading,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Work = () => {
  return (
    <Section
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
        <Grid
          columns={{ initial: "1", sm: "2" }}
          gap="32px"
          style={{
            backgroundColor: "var(--color-secondary)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Flex
            direction="column"
            gap="16px"
            justify="center"
            width="100%"
            maxWidth="90%"
            pt="32px"
            pb="16px"
            pl="16px"
            pr="16px"
            style={{ margin: "0 auto" }}
          >
            <Heading
              as="h3"
              size="7"
              style={{
                textTransform: "uppercase",
                color: "white",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              Come work with us
            </Heading>
            <Text as="p" size="3" style={{ color: "white" }}>
              We value a positive attitude and commitment to work. We believe in
              cooperation and want everyone to have the opportunity to
              participate and develop their skills. 
            </Text>
            <Box mt="16px">
              <Link to="/">
                <ApplyButton size="3">
                  <Text as="p" size="3" style={{ color: "white" }}>
                    Read More And Apply
                  </Text>
                </ApplyButton>
              </Link>
            </Box>
          </Flex>

          <Box height="100%" maxHeight="500px">
            <img
              src="https://ansisarthur.com/friendsandburgers/assets/images/landing-page/work/work.jpeg"
              alt="Work with us"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </motion.div>
    </Section>
  );
};

const ApplyButton = styled(Button)`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default Work;
