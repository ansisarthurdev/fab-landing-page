import React from "react";
import {
  Flex,
  Grid,
  Heading,
  Text,
  Box,
  Button,
  Section,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//data
import { menuHighlights } from "../../data/menu-highlights-list";

const MenuHighlights = () => {
  return (
    <Section
      pl="1.5rem"
      pr="1.5rem"
      width="100%"
      maxWidth="1280px"
      style={{ margin: "0 auto" }}
    >
      <Flex
        direction="column"
        align="center"
        gap="16px"
        width="100%"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        <Heading
          as="h2"
          size="7"
          style={{
            maxWidth: "620px",
            fontFamily: "var(--font-family-heading)",
          }}
        >
          Whether you’re a meat lover, vegan, or just here for the fries — we’ve
          got you covered.
        </Heading>

        <Text as="p" size="3" style={{ maxWidth: "580px" }}>
          From juicy classics to plant-based favorites, every bite is made fresh
          and full of flavor.
        </Text>
      </Flex>

      <Grid
        mt="100px"
        mb={{ initial: "0", lg: "60px" }}
        columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
        width="100%"
        gap="16px"
      >
        {menuHighlights?.map((item, index) => (
          <Box
            key={index}
            display="inline-block"
            mb={{ initial: "80px", lg: "8px" }}
            as={motion.div}
            whileHover={{}}
          >
            <Flex
              direction="column"
              gap="8px"
              style={{
                backgroundColor: "var(--color-background-2)",
                position: "relative",
                borderRadius: "20px",
              }}
            >
              <motion.img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "cover",
                  position: "absolute",
                  top: "-100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                initial={{ y: 0, x: "-50%" }}
                whileHover={{ y: 10 }}
                whileTap={{ y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <Flex
                direction="column"
                pt="100px"
                pl="24px"
                pr="24px"
                pb="24px"
                gap="8px"
                style={{ textAlign: "center" }}
              >
                <Text
                  as="p"
                  weight="bold"
                  size="6"
                  style={{
                    textTransform: "uppercase",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
                <Box display="inline-block" mt="8px">
                  <Link to="/">
                    <Text as="p" style={{ color: "var(--lime-10)" }}>
                      Learn More
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
      <Flex width="100%" justify="center">
        <Link to="/">
          <Button
            size="3"
            color="brown"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            <Text as="p" weight="medium">
              See Full Menu
            </Text>
          </Button>
        </Link>
      </Flex>
    </Section>
  );
};

export default MenuHighlights;
