import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


export const localStorageKey = 'preferredLanguage';
const defaultLanguage = 'no';


const hostnameLanguageMap = {
  'klassekartgenerator.no': 'no',
  'seatmapgenerator.com': 'en'
}

const storedLanguage = localStorage.getItem(localStorageKey);
const hostname = window.location.hostname;

export const getLanguageFromHostname = (hostname) => {
  return hostnameLanguageMap[hostname] || defaultLanguage
}

const selectedLanguage = storedLanguage || getLanguageFromHostname(hostname)


i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: defaultLanguage,
    lng: selectedLanguage,

    resources: {
      no: {
        translation: {

          // ------------- LINKS ---------------- // 
          signupLink: "https://app.klassekartgenerator.no/signup",
          loginLink: "https://app.klassekartgenerator.no/login",
          goToApp: "Åpne appen",

          // ------------- HEADER ---------------- //
          headerHome: "Hjem",
          headerAbout: "Om",
          headerPricing: "Pris",
          headerTestimonials: "Anmeldelser",
          headerGuide: "Guide",
          headerFaq: "FAQ",
          headerLogin: "Logg inn",
          headerSignup: "Registrer deg",
          logo: "logoNo",

          // ------------- HERO SECTION ---------------- //
          heroTitle: "Klassekart Lagd",
          heroTitleOrange: "Enkelt",
          heroText: "Si farvel til stresset med å lage klassekart med vår klassekartgenerator! På bare noen få klikk har du et perfekt generert kart med alle betingelsene dine oppfylt.",
          startBtn: "Start nå",

          // ------------- FEATURES SECTION ---------------- //
          ourfeatures: "Våre funksjoner",
          featuresTitle: "Om Generatoren",
          feature1Title: "Enkel og brukervennlig",
          feature1Text: "Vår klassekartgenerator er den perfekte løsningen for å lage et klassekart på få minutter. Vi har designet den med et spesielt fokus på brukervennlighet og intuitivt design. Alle lærere skal enkelt kunne forstå og bruke appen, uavhengig av teknisk kompetanse.",
          feature2Title: "Vi har tenkt på alt",
          feature2Text: "Algoritmen vår lar deg spesifisere hvem som skal, eller ikke skal sitte sammen, hvem som skal sitte foran eller bak i klasserommet, og hvem som skal sitte på et bestemt sted. Du kan også velge mellom våre mange klasseromskonfigurasjoner eller designe dine egne.",
          feature3Title: "Personvern",
          feature3Text: "Vi lagrer kun elevenes fornavn. All data lagres på europeiske servere, som er underlagt strenge EU-forskrifter for databeskyttelse. Våre retningslinjer og prosedyrer har blitt grundig gjennomgått og vurdert av ledende bransjeeksperter, og vi gjennomgår og oppdaterer dem kontinuerlig.",

          // ------------- REASONS SECTION ---------------- //
          yourBenefits: "Dine fordeler",
          reasonsTitle: "Hvorfor bruke vår Generator?",
          reason1Title: "Spar tid",
          reason1Text: "I gjennomsnitt tar det rundt 20 minutter å lage et manuelt kart. Å bruke generatoren tar mindre enn 2 minutter. Du velger ganske enkelt en av klassene dine, velger betingelsene dine, og vipps så har du et generert kart, fullt tilpassbart og eksporterbart.",
          reason2Title: "Spar budsjettet",
          reason2Text: "Et nytt kart lages i gjennomsnitt hver 3-4 uke. En lærer i Norge har en gjennomsnittslønn på 300 kr per time. Å lage klassekart manuelt koster skolen din i gjennomsnitt 4000 kr per lærer per år. Spart tid er sparte penger!",
          reason3Title: "Spar energi",
          reason3Text: "Å være lærer kan være slitsomt nok. Spar tålmodigheten til der du trenger den, ikke kast den bort på kontorarbeid.",

          // ------------- PRICING SECTION ---------------- //
          pricingTitle1: "Vårt",
          pricingTitleOrange: "abonnement",
          pricingTitle2: "",
          plan1Title: "For skoler",
          plan1Description: "Test ut vår nyutviklede klassekartgenerator gratis i en måned! På slutten av perioden vil du få informasjon om appen har vært lønnsom for din skole, og kan deretter bestemme om du ønsker å fortsette på betalt versjon eller stoppe abonnementet.",
          plan1Price: "kr 0",
          plan1PricePeriod: "den første måneden",
          plan1PriceDescription: "Deretter kr 999 per år.",
          plan1PriceDescription2: "Test gjerne appen - Konto kan enkelt slettes om du ikke skulle ønske å fortsette på betalt abonnement!",
          plan1IncludedTitle: "Inkludert i abonnementet:",
          plan1Included1: "Alle betingelser og klasseromskonfigurasjoner",
          plan1Included2: "Ubegrensede klasser og klassekart",
          plan1Included3: "Lagre dine klasser og betingelser",
          plan1Included4: "Se andre lærere sine klassekart",
          plan1Included5: "Rapporter og statistikk for din skole",
          plan1Included6: "Utmerket kundeservice",
          plan1Comment: "Pris inkl. MVA.",
          plan1Comment2: "Pris eks. MVA.",

          // ------------- TESTIMONIALS ---------------- //
          testimonialsTitle: "Hva skolene sier",
          testimonial1Text: "Det jeg liker best med appen er at den passer for alle typer klasserom. Enten om elevene skal sitte 2 og 2 eller i hestesko, så klarer appen å anbefale hvordan de best bør sitte sammen basert på kravene mine. Super generator!",
          testimonial2Text: "Et flott verktøy for lærere som ønsker å lage gode klassekart for klasserommene eller andre arrangementer. Appen er enkel å bruke, og det er flott at man kan se klassekartene i andre klasser hvis man tar vikartimer der og ikke vet hvor elevene skal sitte.",
          // ------------- Q&A ---------------- //
          qaTitle: "Ofte spurte spørsmål",
          qaQuestion1: "Hva er Klassekartgeneratoren?",
          qaAnswer1: "Klassekartgeneratoren er en app som tar klassens elever, lar deg sette kravene du ønsker for hvordan de bør sitte, og deretter får et generert klassekart. Dette fjerner styret med å manuelt måtte få alt til å passe sammen. Algoritmen vår finner den beste løsningen for deg i løpet av sekunder.",
          qaQuestion2: "Hvordan fungerer appen?",
          qaAnswer2: "Først registrerer du klassen din med elevene dine. Klassen din lagret for fremtidig bruk. For å lage et kart velger du klassen din, og deretter hvordan de skal sitte. Du kan velge mellom våre standard '1 og 1', '2 og 2' osv. eller du kan lage din egen. Etter det kan du velge hvem som skal sitte foran eller bak i klasserommet, hvem som skal eller ikke skal sitte sammen, og du kan manuelt plassere elever. Algoritmen sørger for at betingelsene er oppfylt og at resten blir tilfeldig plassert. Du får et generert kart som du laste ned og eksportere, både som pdf og Excel. Kartet er registrert på skolen din, og andre lærere på skolen din kan se kartene dine, noe som spesielt er nyttig hvis de tar vikartimer.",
          qaQuestion3: "Hvordan fungerer prøveperioden og betalingen hvis jeg velger å fortsette?",
          qaAnswer3: "Vi gir alle skoler appen gratis ut 2023 for å teste den ut og se om det er noe de vil kunne ta nytte av. En uke før planen utgår sender vi en mail og minner deg om å kansellere hvis du ikke ønsker å fortsette. Dette er en simpel prosess, og det er bare å skrive en mail om at du ikke ønsker å fortsette med appen, så er alt ordnet. Om du ønsker å fortsette med abonnementet vil du motta en faktura hvert semester som standard, men abonnementet kan også tilpasses din skoles behov.",

          // ------------- BLOG ---------------- //
          blogTitle: "Forskningsartikler",
          blogText: "Les forskningsartikler fra vårt team av eksperter. (Kun tilgjengelig på engelsk)",
          goBack: "Gå tilbake",

          // ------------- FOOTER ---------------- //
          contactButton: "Kontakt oss",
          termsButton: "Vilkår for bruk",
          address: "Klassekartgenerator.no",
          contactEmail: "hei@klassekartgenerator.no",

          // ------------- PRICING ---------------- //
          pricing: "Pris",
          pricingTitle: "Pris som passer dine behov",
          pricingText: "Velg abonnementet som passer dine behov. Hvis du trenger et tilpasset abonnement, vennligst kontakt oss.",
          pricingCTA: "Velg abonnement",
          vatIncluded: "MVA inkludert",
          monthly: "månedlig",
          yearly: "årlig",
          monthSuffix: "/mnd",
          yearSuffix: "/år",
          // Added new translation key for price including VAT:
          priceInclVAT: "Pris inkl. MVA: {{price}}",
          tiers: {
            trial: {
              name: "Prøve"
            },
            teacher: {
              name: "Lærer",
              description: "Et abonnement for individuelle lærere som ønsker en enkel løsning.",
              features: [
                "30 dagers gratis prøve",
                "ubegrensede klasser",
                "ubegrensede kart",
                "tilpassbare kart"
              ]
            },
            schoolS: {
              name: "Skole S",
              description: "Et abonnement for skoler som vil gi tilgang for opptil 20 lærere.",
              features: [
                "opptil 20 lærere",
                "ubegrensede klasser",
                "ubegrensede kart",
                "tilpassbare kart"
              ]
            },
            schoolM: {
              name: "Skole M",
              description: "Et abonnement for skoler som vil gi tilgang for opptil 35 lærere.",
              features: [
                "opptil 35 lærere",
                "ubegrensede klasser",
                "ubegrensede kart",
                "tilpassbare kart"
              ]
            },
            schoolL: {
              name: "Skole L",
              description: "Et abonnement for skoler som vil gi tilgang for opptil 50 lærere.",
              features: [
                "opptil 50 lærere",
                "ubegrensede klasser",
                "ubegrensede kart",
                "tilpassbare kart"
              ]
            }
          },
          planDetails: "Abonnementsdetaljer",
          easyCardPayment: "Betal enkelt med kreditt- eller debetkort.",
          invoicePayment: "Velg abonnement og vent på faktura.",
          trialInfo: "Start med en 30-dagers gratis prøveperiode.",
          whatIsIncluded: "Hva er inkludert",
          mobilePayment: "Mobilbetaling",
          checkout: "Gå til kassen",
          payInvoice: "Fakturabetaling",
          selectPlan: "Velg abonnement",
          cancelInfo: "Du kan kansellere abonnementet ditt når som helst.",
          loginToContinue: "Logg inn for å fortsette",
          currentPlan: "Nåværende abonnement",
          currentSubscription: "Nåværende abonnement",
          upgradePlan: "Oppgrader abonnement",
          createSchoolFirst: "Opprett en skole først",
          leaveSchoolFirst: "Forlat skolen",
          contactSchoolAdmin: "Kontakt skoleadministrasjonen din",
          cannotSwitchPlanType: "Du kan ikke bytte abonnementstype",

          // Payment page form
          billingInformation: "Faktureringsinformasjon",
          organizationNumber: "Organisasjonsnummer",
          invoiceType: "Faktureringstype",
          ehfInvoice: "EHF",
          emailInvoice: "E-post",
          customerReference: "Kundens referanse",
          invoiceEmail: "E-postadresse for faktura",
          orderSummary: "Ordresammendrag",
          confirmSubscription: "Bekreft abonnement",
          processing: "Behandler...",
          trial: "prøve",
          buyPlan: "Kjøp abonnement",
          tierNotFound: "Abonnementsplan ikke funnet",
          orgNumberRequired: "Organisasjonsnummer er påkrevd",
          customerReferenceRequired: "Kundens referanse er påkrevd",
          invoiceEmailRequired: "E-postadresse for faktura er påkrevd",
          subscriptionUpdateSuccess: "Abonnementet ble oppdatert",
          subscriptionUpdateError: "Noe gikk galt ved oppdatering av abonnement",
          checkoutSuccess: "Betalingen var vellykket. Abonnementet ditt er nå aktivt.",
          checkoutCanceled: "Betalingen ble avbrutt. Ingen endringer ble gjort.",
          checkoutFailed: "Betalingen feilet. Prøv igjen eller kontakt support.",
          close: "Lukk",

          // ------------- LOGIN ---------------- //
          signInToYourAccount: "Logg inn på kontoen din",
          emailAddress: "E-postadresse",
          password: "Passord",
          signIn: "Logg inn",
          noAccount: "Ingen Account?",
          createAccount: "Opprett en konto",
          forgotPassword: "Glemt passordet?",
          signingIn: "Logger inn...",
          errorInvalidEmail: "Ugyldig e-postadresseformat",
          errorAccountDisabled: "Denne kontoen er deaktivert",
          errorUserNotFound: "Ingen konto funnet med denne e-posten",
          errorWrongPassword: "Feil passord",
          errorTooManyAttempts: "For mange mislykkede påloggingsforsøk. Vennligst prøv igjen senere",
          errorSignIn: "Feil ved pålogging",
          loggedInAs: "Logget inn som",
          logout: "Logg ut",
          resetYourPassword: "Tilbakestill passordet ditt",
          resetPasswordInstructions: "Skriv inn e-postadressen din, så sender vi deg en lenke for å tilbakestille passordet ditt.",
          resetPassword: "Tilbakestill passord",
          backToLogin: "Tilbake til login",
          sending: "Sender...",
          resetEmailSent: "E-post for tilbakestilling av passord sendt! Sjekk innboksen din for instruksjoner.",
          errorEmailRequired: "E-postadresse er påkrevd",
          errorResetPassword: "Feil ved tilbakestilling av passord",
        }
      },
      en: {
        translation: {

          // ------------- LINKS ---------------- // 
          signupLink: "https://app.klassekartgenerator.no/signup",
          loginLink: "https://app.klassekartgenerator.no/login",
          goToApp: "Open app",

          // ------------- HEADER ---------------- //
          headerHome: "Home",
          headerAbout: "About",
          headerPricing: "Pricing",
          headerTestimonials: "Testimonials",
          headerGuide: "Guide",
          headerFAQ: "FAQ",
          headerLogin: "Log in",
          headerSignup: "Sign up",
          logo: "logoEn",

          // ------------- HERO SECTION ---------------- //
          heroTitle: "Seat Map Made",
          heroTitleOrange: "Easy",
          heroText: "Say goodbye to the headache of creating classroom seating arrangements with our seat map generator. With just a few clicks, you have a fully generated map with all your conditions met.",
          startBtn: "Start now",

          // ------------- FEATURES SECTION ---------------- //
          ourfeatures: "Our features",
          featuresTitle: "About The Generator",
          feature1Title: "Simple and easy",
          feature1Text: "Our Seat Map Generator is the perfect solution for creating a classroom seat map in just minutes. We have designed it with a particular focus on user-friendliness and intuitive design. This means that anyone can use it with ease, regardless of their technical expertise.",
          feature2Title: "We have thought of everything",
          feature2Text: "Our algorithm allows you to specify who should or should not sit together, who should sit in front or back of the classroom, and who should sit in a specific place. You can also choose between our many seat configurations or design your own.",
          feature3Title: "Data privacy",
          feature3Text: "We only store students' first names. All data is stored on European servers, which are subject to strict EU data protection regulations. Our policies and procedures have been thoroughly vetted and assessed by leading industry experts, and we continually review and update them.",

          // ------------- REASONS SECTION ---------------- //
          yourBenefits: "Your benefits",
          reasonsTitle: "Why use our Generator?",
          reason1Title: "Save Time",
          reason1Text: "On average, to make a manual map takes around 20 minutes. To use the generator takes less than 2 minutes. You simply select one of your classes, choose your conditions, and there you have a generated map, fully customizable and exportable.",
          reason2Title: "Save Money",
          reason2Text: "A new map is on average made every 3-4 weeks. A teacher in Norway has an average salary of €30 per hour. To make seat maps manually costs your school on average €400 per teacher per year. Saved time is saved money!",
          reason3Title: "Save Energy",
          reason3Text: "Being a teacher can be stressful enough. Save your patience to where it is needed, don't waste it on paperwork.",

          // ------------- PRICING SECTION ---------------- //
          pricingTitle1: "Our",
          pricingTitleOrange: "Pricing",
          pricingTitle2: "Plan",
          plan1Title: "School Plan",
          plan1Description: "Test our newly developed app for free at your school for one month. At the end of the period, you will receive information on whether the app has been profitable for your school and can then decide whether you want to continue with the paid version or terminate the subscription.",
          plan1Price: "€ 0",
          plan1PricePeriod: "for the first month",
          plan1PriceDescription: "Thereafter €100 per year.",
          plan1PriceDescription2: "Feel free to test the app - The account can easily be deleted if you don't wish to continue on paid subscription!",
          plan1IncludedTitle: "What's included:",
          plan1Included1: "All conditions and arrangements",
          plan1Included2: "Unlimited classes and maps",
          plan1Included3: "Save your classes and conditions",
          plan1Included4: "See other teachers' maps",
          plan1Included5: "Reports and school stats",
          plan1Included6: "Excellent support",
          plan1Comment: "Price is VAT included.",
          plan1Comment2: "Price is VAT excluded.",

          // ------------- TESTIMONIALS ---------------- //
          testimonialsTitle: "What The Schools Say",
          testimonial1Text: "One of the standout features of the app is its ability to accommodate a wide range of classroom sizes and seating arrangements. Whether you're dealing with a 1 and 1 or 3 and 3 configuration, the app provides a variety of customization options to help you create the perfect seating plan for your needs.",
          testimonial2Text: "After testing the app, I found it to be a highly useful tool for schools looking to create custom seating arrangements for their classrooms or other events. The app is user-friendly and intuitive, with a simple interface that makes it easy for teachers and administrators to create detailed seating plans in a matter of minutes",

          // ------------- Q&A ---------------- //
          qaTitle: "Frequently asked Questions",
          qaQuestion1: "What is the Seat Map Generator?",
          qaAnswer1: "The Seat Map Generator is an app that takes your class' students, allowes you to select the conditions you want and then get a map with your conditions and the rest is randomized. This removes the struggle of having you manually make everything work and finds the best solution for you in a matter of seconds.",
          qaQuestion2: "How does the app work?",
          qaAnswer2: "First you register your class with your students. Then your class is saved for future use. To create a map you select your class, then what configuration they are supposed to sit. You can choose between our defualt '1 and 1', '2 and 2' etc. or you can create your own. After that, you select the conditions such as who should sit in front or back of the classroom, who should or should not sit together, and you can manually place students. The algorithm makes sure the conditions are met and the rest is randomized. From there you can download and export your map however you like. The map is registered to your school and other teachers in your school can see your most recent maps, which is beneficial for when the class has a substitute teacher.",
          qaQuestion3: "How does the trial and payment work if I choose to continue?",
          qaAnswer3: "We are giving all schools the app for free in 2023 to test it out and see if it is something they will be able to benefit from. A week before the plan expires, we send an email reminding you to cancel if you do not wish to continue. This is a simple process, and all you have to do is write that you do not want to continue with the app, then everything is sorted. If you wish to continue with the subscription, you will receive an invoice every semester as standard, but the subscription can also be adapted to your school's needs.",

          // ------------- BLOG ---------------- //
          blogTitle: "Research Articles",
          blogText: "Read research articles from our team of experts. (Only available in English)",
          goBack: "Go back",

          // ------------- FOOTER ---------------- //
          contactButton: "Contact us",
          termsButton: "Terms of Service & Policies",
          address: "Klassekartgenerator.com",
          contactEmail: "hi@klassekartgenerator.com",

          // ------------- PRICING ---------------- //
          pricing: "Pricing",
          pricingTitle: "Pricing that fits your needs",
          pricingText: "Choose the plan that fits your needs. If you need a custom plan, please contact us.",
          pricingCTA: "Select plan",
          vatIncluded: "VAT included",
          monthly: "Monthly",
          yearly: "Yearly",
          monthSuffix: "/month",
          yearSuffix: "/year",
          // Added new translation key for price including VAT:
          priceInclVAT: "Price incl. VAT: {{price}}",
          tiers: {
            trial: {
              name: "Trial"
            },
            teacher: {
              name: "Teacher",
              description: "A plan for individual teachers who just want an easy solution.",
              features: [
                "30 days free trial",
                "unlimited classes",
                "unlimited maps",
                "customizable maps"
              ]
            },
            schoolS: {
              name: "School S",
              description: "A plan for schools that want access for up to 20 teachers.",
              features: [
                "up to 20 teachers",
                "unlimited classes",
                "unlimited maps",
                "customizable maps"
              ]
            },
            schoolM: {
              name: "School M",
              description: "A plan for schools that want access for up to 35 teachers.",
              features: [
                "up to 35 teachers",
                "unlimited classes",
                "unlimited maps",
                "customizable maps"
              ]
            },
            schoolL: {
              name: "School L",
              description: "A plan for schools that want access for up to 50 teachers.",
              features: [
                "up to 50 teachers",
                "unlimited classes",
                "unlimited maps",
                "customizable maps"
              ]
            }
          },
          planDetails: "Plan Details",
          easyCardPayment: "Pay easily with your credit or debit card.",
          invoicePayment: "Select the plan and wait for the invoice.",
          trialInfo: "Start with a 30-day free trial.",
          whatIsIncluded: "What's included",
          mobilePayment: "Mobile Payment",
          checkout: "Checkout",
          payInvoice: "Invoice payment",
          selectPlan: "Select plan",
          cancelInfo: "You can cancel your subscription at any time.",
          loginToContinue: "Log in to continue",
          currentPlan: "Current Plan",
          currentSubscription: "Current Subscription",
          upgradePlan: "Upgrade Plan",
          createSchoolFirst: "Create a school first",
          leaveSchoolFirst: "Leave school",
          contactSchoolAdmin: "Contact your school admin",
          cannotSwitchPlanType: "You cannot switch plans",

          // Payment page form
          billingInformation: "Billing Information",
          organizationNumber: "Organization Number",
          invoiceType: "Invoice Type",
          ehfInvoice: "EHF",
          emailInvoice: "Email",
          customerReference: "Customer Reference",
          invoiceEmail: "Invoice Email Address",
          orderSummary: "Order Summary",
          confirmSubscription: "Confirm Subscription",
          processing: "Processing...",
          trial: "trial",
          buyPlan: "Buy Plan",
          tierNotFound: "Subscription plan not found",
          orgNumberRequired: "Organization number is required",
          customerReferenceRequired: "Customer reference is required",
          invoiceEmailRequired: "Invoice email address is required",
          subscriptionUpdateSuccess: "Subscription updated successfully",
          subscriptionUpdateError: "Something went wrong updating the subscription",
          checkoutSuccess: "Checkout successful. Your subscription is now active.",
          checkoutCanceled: "Checkout canceled. No changes were made.",
          checkoutFailed: "Checkout failed. Please try again or contact support.",
          close: "Close",

          // ------------- LOGIN ---------------- //
          signInToYourAccount: "Sign in to your account",
          emailAddress: "Email address",
          password: "Password",
          signIn: "Sign in",
          noAccount: "No account?",
          createAccount: "Create an account",
          forgotPassword: "Forgot password?",
          signingIn: "Signing in...",
          errorInvalidEmail: "Invalid email address format",
          errorAccountDisabled: "This account has been disabled",
          errorUserNotFound: "No account found with this email",
          errorWrongPassword: "Incorrect password",
          errorTooManyAttempts: "Too many failed login attempts. Please try again later",
          errorSignIn: "Error signing in",
          loggedInAs: "Logged in as",
          logout: "Log out",
          resetYourPassword: "Reset Your Password",
          resetPasswordInstructions: "Enter your email address and we'll send you a link to reset your password.",
          resetPassword: "Reset Password",
          backToLogin: "Back to Login",
          sending: "Sending...",
          resetEmailSent: "Password reset email sent! Check your inbox for instructions.",
          errorEmailRequired: "Email address is required",
          errorResetPassword: "Error resetting password",
        }
      }
    }
  });

export default i18n;
