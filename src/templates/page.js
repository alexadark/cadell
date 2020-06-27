/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  SectionBlock,
  CaseStudiesBlock,
  ManagementBlock,
  ConferenceBlock,
  ArtistsBlock,
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
          start: "top top",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play reset play reset",
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: section.querySelector(".painting"),
          // markers: true,
          pinSpacing: false,
        },
      })

      tl.to(section.querySelector(".text"), { duration: 1, y: "-30%" })
      tl.to(
        section.querySelector(".painting"),
        {
          duration: 1,
          y: "-50%",
          opacity: 0,
        },
        "-=0.5"
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
            case "WpPage_Flexlayouts_FlexibleLayouts_ConferenceBlock":
              return <ConferenceBlock {...block} />
            case "WpPage_Flexlayouts_FlexibleLayouts_ArtistsBlock":
              return <ArtistsBlock {...block} />

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
          ...conferenceBlockFragment
          ...artistsBlockFragment
        }
      }
    }
  }
`
