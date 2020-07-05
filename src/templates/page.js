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
import { window } from "browser-monads"

const Page = ({ data }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    if (window.matchMedia("(min-width: 900px)").matches) {
      const wwaTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#whoWeAre",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#whoWeAre",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#whoWeAre .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      wwaTl.to("#whoWeAre .text", { duration: 1, y: "-30%" })
      wwaTl.to(
        "#whoWeAre .painting",
        {
          duration: 1,
          y: "-60%",
          opacity: 0,
        },
        "-=0.8"
      )

      //Independent

      const indeTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#independent",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#independent",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#independent .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      indeTl.to("#independent .text", { duration: 1, y: "-10%" })
      indeTl.to(
        "#independent .painting",
        {
          duration: 1,
          y: "-80%",
          opacity: 0,
        },
        "-=0.95"
      )

      //Selling

      const sellingTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#sellingAdvice",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#sellingAdvice",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#sellingAdvice .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      sellingTl.to("#sellingAdvice .text", { duration: 1, y: "-30%" })
      sellingTl.to(
        "#sellingAdvice .painting",
        {
          duration: 1,
          y: "-50%",
          opacity: 0,
        },
        "-=0.5"
      )

      //Strategy

      const strategyTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#collectionStrategy",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#collectionStrategy",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#collectionStrategy .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      strategyTl.to("#collectionStrategy .text", { duration: 1, y: "-30%" })
      strategyTl.to(
        "#collectionStrategy .painting",
        {
          duration: 1,
          y: "-60%",
          opacity: 0,
        },
        "-=0.8"
      )

      //Buying

      const buyingTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#buyingAdvice",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#buyingAdvice",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#buyingAdvice .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      buyingTl.to("#buyingAdvice .text", { duration: 1, y: "-30%" })
      buyingTl.to(
        "#buyingAdvice .painting",
        {
          duration: 1,
          y: "-60%",
          opacity: 0,
        },
        "-=0.7"
      )

      //Expertise

      const expertiseTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#expertise",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#expertise",
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: "#expertise .painting",
          // markers: true,
          pinSpacing: false,
        },
      })

      expertiseTl.to("#expertise .text", { duration: 1, y: "-30%" })
      expertiseTl.to(
        "#expertise .painting",
        {
          duration: 1,
          y: "-60%",
          opacity: 0,
        },
        "-=0.6"
      )
    }
  }, [])
  const {
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
