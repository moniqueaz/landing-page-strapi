const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      media {
        url
        alternativeText
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        id
        title
        icon {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subTitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment priceBox on LandingPage {
    pricingBox {
      totalPrice
      discount
      numberInstallments
      priceInstallments
      benefits
      button {
        label
        url
      }
    }
  }

  fragment authors on Author {
    name
    role
    description
    foto {
      url
      alternativeText
    }
    socialLinks {
      title
      url
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors: authors {
        ...authors
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        review
        foto {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...priceBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`

export default GET_LANDING_PAGE
