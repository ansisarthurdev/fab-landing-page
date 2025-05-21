import React from "react";
import { Flex, Box, Text, Button, Link as RadixLink } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import {
  Envelope,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
} from "phosphor-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <Envelope size="18" style={{ minWidth: 18 }} />,
      url: "mailto:@somewhere",
    },
    {
      name: "Instagram",
      icon: <InstagramLogo size="18" style={{ minWidth: 18 }} />,
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <FacebookLogo size="18" style={{ minWidth: 18 }} />,
      url: "https://www.facebook.com/",
    },
    {
      name: "TikTok",
      icon: <TiktokLogo size="18" style={{ minWidth: 18 }} />,
      url: "https://www.tiktok.com/",
    },
  ];

  return (
    <section>
      <Flex
        direction="column"
        pt="60px"
        pb="60px"
        style={{ backgroundColor: "var(--color-background-2)" }}
        gap="40px"
      >
        <Flex
          justify="between"
          align="center"
          pl="1.5rem"
          pr="1.5rem"
          gap="32px"
          width="100%"
          maxWidth="1280px"
          style={{ margin: "0 auto" }}
          direction={{ initial: "column", sm: "row" }}
        >
          <Box width="100%" maxWidth="500px">
            <Text as="p" size="2" align={{ initial: "center", sm: "left" }}>
              Our aim is simple: crafting better Finnish burgers, using the
              fresh Finnish ingredients. We take pride in supporting Finnish
              food producers and embracing responsible production practices.
            </Text>
          </Box>

          <Flex gap="8px">
            {socialLinks.map((link, index) => (
              <Box key={index}>
                <Link to={link.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="3"
                    variant="outline"
                    style={{ height: "40px", width: "40px" }}
                  >
                    {link.icon}
                  </Button>
                </Link>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Box
          pl="1.5rem"
          pr="1.5rem"
          gap="32px"
          width="100%"
          maxWidth="1280px"
          style={{ margin: "0 auto" }}
        >
          <img
            src="https://ansisarthur.com/friendsandburgers/assets/images/landing-page/logo-large.svg"
            alt="Logo"
            style={{ width: "100%", pointerEvents: "none" }}
          />
        </Box>

        <Flex
          justify="between"
          align="center"
          pl="1.5rem"
          pr="1.5rem"
          gap="32px"
          width="100%"
          maxWidth="1280px"
          style={{ margin: "0 auto" }}
          direction={{ initial: "column", md: "row" }}
        >
          <Text
            as="p"
            size="3"
            align={{ initial: "center", sm: "left" }}
            style={{ textTransform: "uppercase" }}
          >
            <strong>©2025 Friends&Brgrs</strong> All rights reserved
          </Text>

          <Text as="p" size="3" style={{ textTransform: "uppercase" }}>
            Design and code by{" "}
            <RadixLink
              style={{ color: "var(--lime-10)" }}
              href="https://ansisarthur.com/"
            >
              ansisarthur.com
            </RadixLink>
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default Footer;
