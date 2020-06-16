/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui"
import { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  SectionBlock,
  CaseStudiesBlock,
  ManagementBlock,
} from "../components/acfBlocks"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { window, document, exists } from "browser-monads"

const Page = ({ data }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const sections = exists(document)
      ? document.querySelectorAll(".animSection")
      : ""

    sections.forEach(section => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          // start: "top-=10% top",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          // toggleActions: "play reset play reset",
          // markers: true,
          ease: "power4.out",

          onEnterBack: self =>
            self.getVelocity() < -1200 &&
            gsap.to(".text", { duration: 1, y: 0 }) &&
            console.log("anim"),
        },
      })
      tl.fromTo(
        section.querySelector(".text"),
        { y: 0 },
        { duration: 1, y: "-80%" }
      )
    })
  }, [])
  const {
    title,
    content,
    flexLayouts: { flexibleLayouts },
  } = data.wpPage
  return (
    <Layout>
      {flexibleLayouts &&
        flexibleLayouts.length > 0 &&
        flexibleLayouts.map(block => {
          switch (block.__typename) {
            case "WpPage_Flexlayouts_FlexibleLayouts_CaseStudiesBlock":
              return <CaseStudiesBlock {...block} />
            case "WpPage_Flexlayouts_FlexibleLayouts_SectionBlock":
              return <SectionBlock {...block} />
            case "WpPage_Flexlayouts_FlexibleLayouts_ManagementBlock":
              return <ManagementBlock {...block} />

            default:
              return ""
          }
        })}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
      flexLayouts {
        flexibleLayouts {
          __typename
          ...sectionBlockFragment
          ...caseStudiesBlockFragment
          ...managementBlockFragment
        }
      }
    }
  }
`
