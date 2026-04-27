import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ca'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            follow: 'Follow',
          },
          home: {
            briefTitle: 'Briefly about me',
            stack: 'Stack',
            degree1: "Bachelor's degree in Multimedia, UPC",
            degree2: "Master's Degree in Interaction Design and User Experience (UX), UOC",
          },
          blog: {
            back: 'Back to blog',
            readMore: 'Read more',
            noPosts: 'No posts found yet.',
          }
        }
      },
      ca: {
        translation: {
          nav: {
            home: 'Inici',
            about: 'Sobre mi',
            projects: 'Projectes',
            blog: 'Blog',
            follow: 'Segueix-me',
          },
          home: {
            briefTitle: 'Sobre mi (breument)',
            stack: 'Stack tecnològic',
            degree1: "Grau en Multimèdia, UPC",
            degree2: "Màster en Disseny d'Interacció i Experiència d'Usuari (UX), UOC",
          },
          blog: {
            back: 'Tornar al blog',
            readMore: 'Llegir més',
            noPosts: 'Encara no s\'ha trobat cap article.',
          }
        }
      }
    }
  })

export default i18n
