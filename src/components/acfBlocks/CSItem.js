/** @jsx jsx */
import { jsx, Flex, Grid, Container } from "theme-ui"
import React, { useState } from "react"
import { Close } from "grommet-icons"
import { Button } from "grommet"
import { motion, AnimatePresence } from "framer-motion"

const CSItem = ({ title, content, key, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const toggleModal = () => setIsOpen(!isOpen)
  const openClass = isOpen ? "open" : "closed"
  return (
    <div
      key={key}
      className={`csItem ${openClass}`}
      sx={{ ...style }}
      {...props}
    >
      <Flex sx={{ alignItems: "center", mb: 50 }}>
        <Button
          className="open"
          icon={<Close />}
          //   plain
          onClick={toggleModal}
          gap="none"
        />
        <h3 className="csTitle" sx={{ fontSize: 22 }}>
          {title}
        </h3>
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-10%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0, y: "2%" }}
            transition={{ duration: 0.5 }}
            className="modal"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              bg: "white",
              zIndex: 10,
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container sx={{ maxWidth: 1200 }}>
              <Grid columns={[1, 1, 2]} gap={40} sx={{ alignItems: "start" }}>
                <Flex sx={{ alignItems: "flex-start" }}>
                  <Button
                    className="close"
                    icon={<Close />}
                    plain
                    onClick={toggleModal}
                    gap="none"
                    sx={{ position: "relative", top: 15 }}
                  />
                  <h3 className="csTitle" sx={{ fontSize: 22 }}>
                    {title}
                  </h3>
                </Flex>
                <div
                  className="csContent"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </Grid>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CSItem

const style = {
  button: {
    pr: 20,
    focus: {
      outline: "none",
    },
    svg: {
      focus: {
        outline: "none",
      },

      strokeWidth: 1,
      width: 20,
      variant: "transitions.m",
      "&:hover": {
        stroke: "primary",
      },
    },
    "&.open": {
      svg: {
        stroke: "#B5B19B",
        transform: "rotate(45deg)",

        "&:hover": {
          transform: "rotate(90deg)",
          stroke: "primary",
        },
      },
    },

    "&.close": {
      svg: {
        "&:hover": {
          transform: "rotate(45deg)",
          stroke: "#B5B19B",
        },
      },
    },
  },
}
