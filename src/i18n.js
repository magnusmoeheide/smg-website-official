import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


export const localStorageKey = 'preferredLanguage';
const defaultLanguage = 'en'; // Set your default language here

const storedLanguage = localStorage.getItem(localStorageKey);

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'no',
    lng: storedLanguage || defaultLanguage,

    resources: {
      no: {
        translation: {

          // ------------- HEADER ---------------- //
          headerHome: "Hjem",
          headerAbout: "Om",
          headerPricing: "Pris",
          headerTestimonials: "Anmeldelser",
          headerQA: "Q&A",
          headerLogin: "Logg inn",
          logo: "logoNo",

          // ------------- HERO SECTION ---------------- //
          heroTitle: "Klassekart Lagd",
          heroTitleOrange: "Enkelt",
          heroText: "Si farvel til stresset med å lage klassekart med vår klassekartgenerator! På bare noen få klikk har du et perfekt generert kart med alle betingelsene dine oppfylt.",
          startBtn: "Start nå",

          // ------------- FEATURES SECTION ---------------- //
          featuresTitle: "Om",
          featuresTitleOrange: "Generatoren",
          feature1Title: "Enkel og brukervennlig",
          feature1Text: "Vår klassekartgenerator er den perfekte løsningen for å lage et klassekart på få minutter. Vi har designet den med et spesielt fokus på brukervennlighet og intuitivt design. Alle lærere skal enkelt kunne forstå og bruke appen, uavhengig av teknisk kompetanse.",
          feature2Title: "Vi har tenkt på alt",
          feature2Text: "Algoritmen vår lar deg spesifisere hvem som skal, eller ikke skal sitte sammen, hvem som skal sitte foran eller bak i klasserommet, hvem som skal sitte på et bestemt sted, og den lar deg tildele alle en ny partner og plass fra tidligere kart. Du kan også velge mellom våre mange klasseromskonfigurasjoner eller designe dine egne.",
          feature3Title: "Personvern",
          feature3Text: "Vi lagrer kun elevenes fornavn. All data lagres på europeiske servere, som er underlagt strenge EU-forskrifter for databeskyttelse. Våre retningslinjer og prosedyrer har blitt grundig gjennomgått og vurdert av ledende bransjeeksperter, og vi gjennomgår og oppdaterer dem kontinuerlig.",

          // ------------- REASONS SECTION ---------------- //
          reasonsTitle: "Hvorfor bruke vår",
          reasonsTitleOrange: "Generator?",
          reason1Title: "Spar tid",
          reason1Text: "I gjennomsnitt tar det rundt 25 minutter å lage et manuelt kart. Å bruke generatoren tar mindre enn 2 minutter. Du velger ganske enkelt en av klassene dine, velger betingelsene dine, og vipps så har du et generert kart, fullt tilpassbart og eksporterbart.",
          reason2Title: "Spar budsjettet",
          reason2Text: "Et nytt kart lages i gjennomsnitt hver 3-4 uke. En lærer i Norge har en gjennomsnittslønn på 300 kr per time. Å lage klassekart manuelt koster skolen din i gjennomsnitt 4000 kr per lærer per år. Spart tid er sparte penger!",
          reason3Title: "Spar energi",
          reason3Text: "Å være lærer kan være slitsomt nok. Spar tålmodigheten til der du trenger den, ikke kast den bort på kontorarbeid.",

          // ------------- PRICING SECTION ---------------- //
          pricingTitle1: "Vårt",
          pricingTitleOrange: "abonnement",
          pricingTitle2: "",
          plan1Title: "For skoler",
          plan1Description: "Vi tester ut vår nyutviklede app og den gis gratis til skoler for hele 2023. På slutten av året vil du få informasjon om appen har vært lønnsom for din skole og kan deretter bestemme om du ønsker å fortsette på betalt versjon eller stoppe abonnementet.",
          plan1Price: "kr 0",
          plan1PricePeriod: "for hele 2023",
          plan1PriceDescription: "Deretter kr 999 per år.",
          plan1IncludedTitle: "Inkludert i abonnementet:",
          plan1Included1: "Alle betingelser og klasseromskonfigurasjoner",
          plan1Included2: "Ubegrensede klasser og klassekart",
          plan1Included3: "Lagre dine klasser og betingelser",
          plan1Included4: "Se andre lærere sine klassekart",
          plan1Included5: "Rapporter og statistikk for din skole",
          plan1Included6: "Utmerket kundeservice",
          plan1Comment: "Pris er eks. MVA.",

          // ------------- TESTIMONIALS ---------------- //
          testimonialsTitle1: "Hva",
          testimonialsTitleOrange: "skolene",
          testimonialsTitle2: "sier",
          testimonial1Text: "Det jeg liker best med appen er at den passer for alle typer klasserom. Enten om elevene skal sitte 2 og 2 eller i hestesko, så klarer appen å anbefale hvordan de best bør sitte sammen basert på kravene mine. Super generator!",
          testimonial2Text: "Et flott verktøy for lærere som ønsker å lage gode klassekart for klasserommene eller andre arrangementer. Appen er enkel å bruke, og det er flott at man kan se klassekartene i andre klasser hvis man tar vikartimer der og ikke vet hvor elevene skal sitte.",
        
          // ------------- Q&A ---------------- //
          qaTitle: "Ofte spurte",
          qaTitleOrange: "Q&A",
          qaQuestion1: "Hva er Klassekartgeneratoren?",
          qaAnswer1: "Klassekartgeneratoren er en app som tar klassens elever, lar deg sette kravene du ønsker for hvordan de bør sitte, og deretter får et generert klassekart. Dette fjerner styret med å manuelt måtte få alt til å fungere, og finner den beste løsningen for deg i løpet av sekunder.",
          qaQuestion2: "Hvordan fungerer appen?",
          qaAnswer2: "Først registrerer du klassen din med elevene dine. Da blir klassen din lagret for fremtidig bruk. For å lage et kart velger du klassen din, og deretter hvilken konfigurasjon de skal sitte. Du kan velge mellom våre standard '1 og 1', '2 og 2' osv. eller du kan lage din egen. Etter det velger du forholdene som hvem som skal sitte foran eller bak i klasserommet, hvem som skal eller ikke skal sitte sammen, og du kan manuelt plassere elever. Algoritmen sørger for at betingelsene er oppfylt og resten er randomisert. Derfra kan du laste ned og eksportere kartet ditt slik du vil. Kartet er registrert på skolen din, og andre lærere på skolen din kan se de nyeste kartene dine, noe som er fordelaktig når klassen har en lærervikar.",
          qaQuestion3: "Hvordan fungerer prøveperioden og betalingen hvis jeg velger å fortsette?",
          qaAnswer3: "Vi gir alle skoler appen gratis ut 2023 for å teste den ut og se om det er noe de vil kunne ta nytte av. En uke før planen utgår sender vi en mail og minner deg om å kansellere hvis du ikke ønsker å fortsette. Dette er en simpel prosess, og det er bare å skrive at du ikke ønsker å fortsette med appen, så er alt ordnet. Om du ønsker å fortsette med abonnementet vil du motta en faktura hvert semester som standard, men abonnementet kan også tilpasses din skoles behov.",
        
          // ------------- FOOTER ---------------- //
          contactButton: "Kontakt oss",
          termsButton: "Vilkår for bruk",
          address: "Klassekartgenerator.no",
          contactEmail: "hei@klassekartgenerator.no"
        }
      },
      en: {
        translation: {

          // ------------- HEADER ---------------- //
          headerHome: "Home",
          headerAbout: "About",
          headerPricing: "Pricing",
          headerTestimonials: "Testimonials",
          headerQA: "Q&A",
          headerLogin: "Log in",
          logo: "logoEn",

          // ------------- HERO SECTION ---------------- //
          heroTitle: "Seat Map Made",
          heroTitleOrange: "Easy",
          heroText: "Say goodbye to the headache of creating classroom seating arrangements with our seat map generator. With just a few clicks, you have a fully generated map with all your conditions met.",
          startBtn: "Start now",

          // ------------- FEATURES SECTION ---------------- //
          featuresTitle: "About The",
          featuresTitleOrange: "Generator",
          feature1Title: "Simple and easy",
          feature1Text: "Our Seat Map Generator is the perfect solution for creating a classroom seat map in just minutes. We have designed it with a particular focus on user-friendliness and intuitive design. This means that anyone can use it with ease, regardless of their technical expertise.",
          feature2Title: "We have thought of everything",
          feature2Text: "Our algorithm allows you to specify who should or should not sit together, who should sit in front or back of the classroom, who should sit in a specific place, and it allows you to assign everyone a new partner and seat from previous maps. You can also choose between our many seat configurations or design your own.",
          feature3Title: "Data privacy",
          feature3Text: "We only store students' first names. All data is stored on European servers, which are subject to strict EU data protection regulations. Our policies and procedures have been thoroughly vetted and assessed by leading industry experts, and we continually review and update them.",
        
          // ------------- REASONS SECTION ---------------- //
          reasonsTitle: "Why use our",
          reasonsTitleOrange: "Generator?",
          reason1Title: "Save Time",
          reason1Text: "On average, to make a manual map takes around 25 minutes. To use the generator takes less than 2 minutes. You simply select one of your classes, choose your conditions, and there you have a generated map, fully customizable and exportable.",
          reason2Title: "Save Money",
          reason2Text: "A new map is on average made every 3-4 weeks. A teacher in Norway has an average salary of €30 per hour. To make seat maps manually costs your school on average €400 per teacher per year. Saved time is saved money!",
          reason3Title: "Save Energy",
          reason3Text: "Being a teacher can be stressful enough. Save your patience to where it is needed, don't waste it on paperwork.",

          // ------------- PRICING SECTION ---------------- //
          pricingTitle1: "Our",
          pricingTitleOrange: "Pricing",
          pricingTitle2: "Plan",
          plan1Title: "School Plan",
          plan1Description: "We are testing our newly developed app and it will be given to schools free of charge for the whole of 2023. At the end of the year, you will receive information on whether the app has been profitable for your school and can then decide whether you want to continue with the paid version or terminate the subscription.",
          plan1Price: "€ 0",
          plan1PricePeriod: "for the entire 2023",
          plan1PriceDescription: "Thereafter €100 per year.",
          plan1IncludedTitle: "What's included:",
          plan1Included1: "All conditions and arrangements",
          plan1Included2: "Unlimited classes and maps",
          plan1Included3: "Save your classes and conditions",
          plan1Included4: "See other teachers' maps",
          plan1Included5: "Reports and school stats",
          plan1Included6: "Excellent support",
          plan1Comment: "Price is VAT excluded.",

          // ------------- TESTIMONIALS ---------------- //
          testimonialsTitle1: "What The",
          testimonialsTitleOrange: "Schools",
          testimonialsTitle2: "Say",
          testimonial1Text: "One of the standout features of the app is its ability to accommodate a wide range of classroom sizes and seating arrangements. Whether you're dealing with a 1 and 1 or 3 and 3 configuration, the app provides a variety of customization options to help you create the perfect seating plan for your needs.",
          testimonial2Text: "After testing the app, I found it to be a highly useful tool for schools looking to create custom seating arrangements for their classrooms or other events. The app is user-friendly and intuitive, with a simple interface that makes it easy for teachers and administrators to create detailed seating plans in a matter of minutes",
        
          // ------------- Q&A ---------------- //
          qaTitle: "Frequently asked",
          qaTitleOrange: "Q&A",
          qaQuestion1: "What is the Seat Map Generator?",
          qaAnswer1: "The Seat Map Generator is an app that takes your class' students, allowes you to select the conditions you want and then get a map with your conditions and the rest is randomized. This removes the struggle of having you manually make everything work and finds the best solution for you in a matter of seconds.",
          qaQuestion2: "How does the app work?",
          qaAnswer2: "First you register your class with your students. Then your class is saved for future use. To create a map you select your class, then what configuration they are supposed to sit. You can choose between our defualt '1 and 1', '2 and 2' etc. or you can create your own. After that, you select the conditions such as who should sit in front or back of the classroom, who should or should not sit together, and you can manually place students. The algorithm makes sure the conditions are met and the rest is randomized. From there you can download and export your map however you like. The map is registered to your school and other teachers in your school can see your most recent maps, which is beneficial for when the class has a substitute teacher.",
          qaQuestion3: "How does the trial and payment work if I choose to continue?",
          qaAnswer3: "We are giving all schools the app for free in 2023 to test it out and see if it is something they will be able to benefit from. A week before the plan expires, we send an email reminding you to cancel if you do not wish to continue. This is a simple process, and all you have to do is write that you do not want to continue with the app, then everything is sorted. If you wish to continue with the subscription, you will receive an invoice every semester as standard, but the subscription can also be adapted to your school's needs.",
        
          // ------------- FOOTER ---------------- //
          contactButton: "Contact us",
          termsButton: "Terms of Service & Policies",
          address: "SeatMapGenerator.com",
          contactEmail: "hi@seatmapgenerator.com"

        }
      }
    }
    



    


  });

export default i18n;