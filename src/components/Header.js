import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Text, Grid } from "@radix-ui/themes";
import { menu } from "../data/menu";
import { Link } from "react-router-dom";

import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Box
      position="sticky"
      top="0"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 1000,
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
      }}
    >
      <Grid
        as="header"
        columns={{ initial: "1fr 1fr", md: "1fr auto 1fr" }}
        align="center"
        width="100%"
        maxWidth="1280px"
        gap="32px"
        style={{
          margin: "0 auto",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Left menu */}
        <Flex
          as="nav"
          justify="start"
          align="center"
          gap="0"
          display={{ initial: "none", md: "flex" }}
        >
          {menu?.slice(0, 4)?.map((item, index) => (
            <Link to={item.path} key={index}>
              <Button
                color="lime"
                variant="ghost"
                size="3"
                style={{ marginRight: "16px" }}
              >
                <Text as="p" wrap="nowrap" style={{ color: "var(--gray-12)" }}>
                  {item.name}
                </Text>
              </Button>
            </Link>
          ))}
        </Flex>

        <Box
          position="relative"
          display="flex"
          align={{ initial: "left", md: "center" }}
          justify="center"
          minWidth="145px"
          pt="4px"
        >
          <Link to="/">
            <img
              src="https://ansisarthur.com/friendsandburgers/assets/images/landing-page/logo-small.svg"
              alt="logo"
              style={{
                width: "145px",
                height: "20px",
                objectFit: "contain",
                pointerEvents: "none",
                maxWidth: "160px",
              }}
            />
          </Link>
        </Box>

        {/* Right menu */}
        <Flex
          as="nav"
          justify="end"
          align="center"
          gap="0"
          display={{ initial: "none", md: "flex" }}
        >
          {menu?.slice(4)?.map((item, index) => (
            <Link to={item.path} key={index}>
              <Button
                color="lime"
                variant="ghost"
                size="3"
                style={{ marginRight: "16px" }}
              >
                <Text as="p" wrap="nowrap" style={{ color: "var(--gray-12)" }}>
                  {item.name}
                </Text>
              </Button>
            </Link>
          ))}
          <Link to="/">
            <Button size="3">
              <Text as="p" size="3" weight="medium">
                Order Now
              </Text>
            </Button>
          </Link>
        </Flex>

        {/* Mobile Menu  */}
        <Flex display={{ initial: "flex", md: "none" }} justify="end">
          <Hamburger toggled={isOpen} toggle={setOpen} size="18" />
        </Flex>
      </Grid>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "80vw",
              maxWidth: 320,
              height: "100vh",
              background: "#fff",
              zIndex: 2000,
              boxShadow: "-2px 0 16px 0 rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.5rem 1.5rem 1.5rem",
            }}
          >
            <nav>
              <Flex direction="column" gap="4">
                {menu?.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    onClick={() => setOpen(false)}
                    style={{ marginBottom: 16 }}
                  >
                    <Button
                      color="lime"
                      variant="ghost"
                      size="4"
                      style={{ width: "100%" }}
                    >
                      <Text
                        as="p"
                        wrap="nowrap"
                        style={{
                          color: "var(--gray-12)",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </Text>
                    </Button>
                  </Link>
                ))}
                <Link to="/" onClick={() => setOpen(false)}>
                  <Button size="4" style={{ width: "100%" }}>
                    <Text as="p" size="4" weight="medium">
                      Order Now
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </nav>

            <Button
              variant="ghost"
              color="gray"
              size="3"
              style={{ marginTop: "auto" }}
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Header;
