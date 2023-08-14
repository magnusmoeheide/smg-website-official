import React, { useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div>
      <Header showAllLinks={false} />

      <div className="guide">
        <Link to="/">
          <button className="goback-button">
            <b>Gå tilbake</b>
          </button>
        </Link>

        <h1>Brukerguide 📄</h1>
        <p className="userInfo">
          Her er en brukerguide til{" "}
          <a href="app.klassekartgenerator.no.">app.klassekartgenerator.no</a>.
          Om du står fast eller har spørsmål er det bare å ta kontakt på{" "}
          <a href="mailto:hei@klassekartgenerator.no">
            hei@klassekartgenerator.no
          </a>
          .
        </p>
        <ul>
          <li>
            {" "}
            <a href="#createAccounts">Opprette kontoer</a>
          </li>
          <li>
            {" "}
            <a href="#registerClass">Registrere klasse</a>
          </li>
          <li>
            <a href="#createSeatmap">Lage klassekart</a>
          </li>
          <li>
            <a href="#viewSeatmap">Vise klassekart</a>
          </li>
          <li>
            <a href="#editClass">Endre klasse</a>
          </li>
        </ul>

        <h1 id="createAccounts">Opprette kontoer</h1>
        <div className="flex-image-text greyBg">
          <div className="content">
            <h2>1. Registrere konto på Klassekartgeneratoren.no</h2>
            <p>
              Skolen må bestemme seg for en adminperson for appen. Denne
              personen registrerer en adminkonto på{" "}
              <a href="app.klassekartgenerator.no/signup">
                app.klassekartgenerator.no/signup.
              </a>
            </p>
            <p>Huk av for 'Adminkonto'.</p>
            <p>
              Skriv deretter inn skolens navn, e-postkontoen som skal brukes for
              skolens adminkonto, og et passord for adminkontoen.
            </p>
            <i>
              Merk at e-postadressen som brukes for å opprette en adminkonto
              ikke vil kunne brukes for å opprette en lærerkonto. Dersom du som
              admin også ønsker å opprette klassekart anbefaler vi anbefaler vi
              å bruke en av skolens e-poster, for eksempel
              dinskole.postmottak@osloskolen.no. E-posten brukes kun dersom du
              må nullstille passordet ditt, så så lenge du har tilgang til
              mailen står du fritt til å velge hva som passer deg.
            </i>
          </div>
          <img src={images.signupAdmin} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h2>2. Registrere skolen</h2>
            <p>
              Etter å ha trykket på opprett konto blir du videresendt til
              adminsiden. <br />
              Trykk på 'Administrer trinn' som du finner her.
            </p>
          </div>
          <img src={images.manageGradesBtn} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h3>Skoleår</h3>
            <p>
              Her skriver du inn skoleåret for dette året. Trykk så på Lagre.
            </p>
          </div>
          <img src={images.schoolYearInput} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h3>Trinn</h3>
            <p>
              Så legger du til alle skolens trinn. Dette brukes for å enkelt
              kunne filtrere klassene når man skal se en klasses klassekart.
              <br />
              Skriv inn et trinn og trykk på Legg til. Gjør dette for alle
              skolens trinn. <br />
              Når det er gjort bruker du tilbakeknappen for å gå tilbake til
              hjemsiden.
            </p>
          </div>
          <img src={images.gradeInput} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h3>Lisenskode</h3>
            <p>
              Etter at minst ett klassetrinn er lagt til vil en lisenskode være
              synlig. Denne kopieres og sendes til lærerne som skal opprette en
              konto. Flere lærere kan bruke samme lisenskode.
            </p>
            <p>
              Om du opplever at koden er kommet på avveie, eller ønsker å
              'stenge' registrering av nye lærere, kan du opprette en ny kode.
              Den gamle koden vil da ikke lenger fungere, men de lærerne som
              allerede har registrert seg med koden vil selvfølgelig fremdeles
              ha tilgang.
            </p>
          </div>
          <img src={images.licenseCode} alt="" />
        </div>

        <div className="flex-image-text greyBg">
          <div className="content">
            <h2>3. Registrere lærerkonto</h2>
            <p>
              Lærerne bruker lisenskoden tilsendt for å opprette en lærerkonto.
            </p>
            <h3>Lisenskode</h3>
            <p>
              Etter at minst ett klassetrinn er lagt til vil en lisenskode være
              synlig. Denne kopieres og sendes til lærerne som skal opprette en
              konto. Flere lærere kan bruke samme lisenskode.
            </p>
            <p>
              Om du opplever at koden er kommet på avveie, eller ønsker å
              'stenge' registrering av nye lærere, kan du opprette en ny kode.
              Den gamle koden vil da ikke lenger fungere, men de lærerne som
              allerede har registrert seg med koden vil selvfølgelig fremdeles
              ha tilgang.
            </p>
          </div>
          <img src={images.signupTeacher} alt="" />
        </div>

        <h1 id="registerClass">Registrere klasse</h1>
        <div className="flex-image-text greyBg">
          <div className="content">
            <h2>1. Registrere klassen din</h2>
            <p>
              Du blir så tatt til hjemsiden. Her kan du enten trykke på 'Lag
              nytt klassekart' eller 'Administrer mine klasser', deretter
              'Opprett ny klasse.'
            </p>
            <p>Her velger du først klassens trinn, for eksempel 8. trinn.</p>
            <p>
              Deretter skriver du inn navnet på klassen, for eksempel 8A eller
              Tysk 8. trinn.
            </p>
            <p>
              Så legger du inn elevene. Du kan velge mellom å skrive ett og ett
              navn, eller laste opp et Excelskjema.
            </p>
            <p>Når du har lagt til alle elevene trykker du på Lagre klasse.</p>
          </div>
          <img src={images.registerClass} alt="" />
        </div>

        <h1 id="createSeatmap">Opprette et klassekart</h1>
        <div className="flex-image-text greyBg">
          <div className="content">
            <h2>1. Velg klasse</h2>
            <p>
              Etter å ha opprettet en ny klasse blir du sendt til hjemskjermen.
              Trykk på 'Opprett nytt klassekart' og velg klassen din.
            </p>
          </div>
          <img src={images.selectSeating} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h2>2. Velg hvordan elevene skal sitte</h2>
            <p>Deretter velger du hvordan du ønsker at elevene skal sitte.</p>
            <p>
              Om du ønsker å opprette ditt eget klasserom kan du gjøre det under
              'Egendefinert klasserom'.
            </p>
          </div>
          <img src={images.selectSeating} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h3>Standard klasserom</h3>
            <p>
              Om du har valgt en av våre standard klasserom får du se en
              forhåndsvisning av hvordan klasserommet vil se ut før du går
              videre.
            </p>
            <p>
              Du kan manuelt flytte på pultene etter å ha genertert
              klassekartet, men dersom det er for ulikt hvordan klasserommet
              ditt ser ut anbefaler vi at du designer ditt eget klasserom.
            </p>
          </div>
          <img src={images.preview} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h3>Egendefinert klasserom</h3>
            <p>
              Om du har valgt egendefinert klasserom, trykk på 'Opprett nytt
              klasserom'. Du vil så bli tatt til en side hvor du kan opprette
              ditt eget klasserom.
            </p>
            <p>
              Trykk på en celle for å opprette en pult. Du kan også holde
              musepekeren inne og dra den over flere celler for å opprette flere
              pulter samtidig.
            </p>
            <i>
              Hold øye med antallet sitteplasser som telles nederst på siden.
              Antallet sitteplasser bør samsvare med antallet elever i klassen
              din.
            </i>
            <p>
              Når du er fornøyd gir du den et navn, for eksempel 8A og trykker
              Lagre.
            </p>
          </div>
          <img src={images.customArrangement} alt="" />
        </div>

        <div className="flex-image-text greyBg">
          <div className="content">
            <h2>3. Legge inn vilkår</h2>
            <p>
              Etter at du har valgt klasse og hvordan elevene skal sitte kan du
              legge inn vilkårene dine.
            </p>
            <p>
              Her kan du legge inn hvem som skal, eller ikke skal sitte sammen,
              hvem som skal sitte bak eller foran, og hvem som må sitte på et
              spesifikt sted.
            </p>
          </div>
          <img src={images.selectConditions} alt="" />
        </div>

        <div className="flex-image-text greyBg">
          <div className="content">
            <h3>Manuelt plassere en elev</h3>
            <p>
              For å manuelt plassere en elev trykker du på 'Plasser elev
              manuelt'. Deretter drar du eleven fra elevlista til venstre over i
              klassekartet på ønsket plass. Du kan klikke på eleven for å fjerne
              valget ditt.
            </p>
            <p>Når du er fornyød trykker du på 'Lagre og gå tilbake'.</p>
          </div>
          <img src={images.manuallyPlace} alt="" />
        </div>

        <div className="flex-image-text greyBg">
          <div className="content">
            <h3>Skal, eller ikke skal sitte sammen</h3>
            <p>
              For å velge elever som skal, eller ikke skal sitte sammen, må du
              registrere en gruppe med minst to elever.
            </p>
            <p>
              Velg en elev fra nedtrekksmenyen. Åpne nedtrekksmenyen igjen og
              velg elev nummer to. Når du er fornøyd med gruppen trykker du
              lagre gruppe.
            </p>
            <i>
              Det anbefales å lage grupper basert på hvordan elevene sitter. For
              eksempel, hvis du har valgt at elevene skal sitte 2 og 2 anbefaler
              vi at du lager grupper på 2 og 2 som skal sitte sammen.
            </i>
          </div>
          <img src={images.sitTogether} alt="" />
        </div>

        <div className="flex-image-text lightGreyBg">
          <div className="content">
            <h2>4. Generere klassekart</h2>
            <p>
              Når du er fornøyd med vilkårene dine trykker du på 'Generer
              klassekart'.
            </p>
            <p>
              Her kan du se hvilke vilkår som har blitt oppfylt, og du kan laste
              ned klassekartet som pdf eller Excelfil.
            </p>
            <p>Om du ikke er fornøyd kan du trykke på 'Generer igjen'.</p>
            <p>
              Når du er fornøyd trykker du på 'Lagre og gå hjem'. Det sørger for
              at klassekartet ditt er lagret i appen og synlig for både deg og
              andre lærere på skolen din.
            </p>
          </div>
          <img src={images.generatedMap} alt="" />
        </div>

        <h1 id="viewSeatmap">Vise klassekart</h1>
        <div className="flex-image-text greyBg">
          <div className="content">
            <h3>Velg klasse</h3>
            <p>
              Gå til hjemsiden og trykk på 'Vis klassekart'. Velg så klassen du
              ønsker å finne klassekartet til.
            </p>
            <p>
              Øverst kan du se dine klassekart, og under kan du søke etter de
              andre klassene på skolen og se de andre lærerne sine klassekart.
            </p>
          </div>
          <img src={images.generatedMap} alt="" />
        </div>

        <div className="flex-image-text greyBg">
          <div className="content">
            <h3>Velg klassekart</h3>
            <p>
              I klassen valgt kan du vise alle genererte klassekart. Datoene
              står i parentes, slik at du vet hvilket som er aktivt.
            </p>
            <p>
              Du kan vise klassekartene i fullskjerm eller laste det ned som pdf
              eller Excelfil.
            </p>
          </div>
          <img src={images.viewMap} alt="" />
        </div>

        <h1 id="editClass">Endre klasse</h1>
        <div className="flex-image-text greyBg">
          <div className="content">
            <p>
              Velg 'Administrere klasser' og velg klassen din. Her kan du endre
              elevnavn eller slette dem.
            </p>
            <p>
              Du kan vise klassekartene i fullskjerm eller laste det ned som pdf
              eller Excelfil.
            </p>
          </div>
          <img src={images.editStudents} alt="" />
        </div>
        <div className="flex-image-text greyBg">
          <div className="content">
            <p>På den samme siden kan du endre klassenavn og slette klassen.</p>
          </div>
          <img src={images.editClass} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;
