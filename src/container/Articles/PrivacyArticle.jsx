import React, { useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PrivacyArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div>
      <Header showAllLinks={false} />

      <div className="article">
        <Link to="/">
          <button className="goback-button">
            <b>Gå tilbake</b>
          </button>
        </Link>
        <br />
        <br />
        <i>A study by Cem Kirciltepeli, 18.12.2023.</i>
        <h1>
          The importance of data privacy in education, and the essential
          strategies.
        </h1>
        {/* <p className="quote">
          “As a teacher, creating seating charts is always something that I
          dread. Seating charts is one of those things where there is no way to
          make everybody happy.”
        </p> */}
        <div class="flex-image-text">
          <div>
            <p>
              In today's digital age, the safeguarding of data privacy in
              education has become a significant concern. The widespread use of
              data-driven technologies in schools has changed how education
              works, sparking discussions that go beyond just talking about
              technology. This essay sets out to explore and explain the
              critical importance of data privacy in education, looking closely
              at issues like Consent, Security, Data Retention, and
              Transparency.
            </p>
          </div>
        </div>

        <div className="flex-image-text">
          <div>
            <p>
              Education, once limited to classrooms and textbooks, is now part
              of the digital world. As we navigate this digital space, the
              ethical considerations around data privacy become more important.
              Consent, which means giving informed permission, connects closely
              with Security, which is like a key protector of important
              information. At the same time, how long data is kept (Data
              Retention) and being open about how data is used (Transparency)
              are crucial for schools and other educational institutions in
              looking after the privacy of students and others involved.
            </p>
            <p>
              Yet, this discussion goes beyond just talking about technology;
              it's a broader conversation about how technology and society
              interact. As we explore the social and technical sides of data
              privacy, we don't only think about how well educational tools work
              but also about their impact on society.
            </p>
            <p>
              As we travel through the history of technology in education and
              face the challenges of data privacy, this essay looks at how
              technology and society shape each other. It digs into the social
              and technical aspects of concerns and challenges, carefully looks
              at existing ways of dealing with these issues, and examines the
              rules and laws that guide these discussions. The essay calls for
              adopting best practices that make educational organizations not
              just tech leaders but also responsible guardians of data privacy
              in today's fast-paced digital world.
            </p>
          </div>
          <img src={images.privacy2} />
        </div>

        <h2>Educational Technological Landscape</h2>
        <p>
          In exploring the landscape of educational technology, it's crucial to
          trace the historical evolution of data-driven technologies within
          educational settings. This journey unveils key milestones and
          technological shifts that have significantly shaped the current
          educational landscape. One noteworthy development is the widespread
          adoption of data-driven technologies, marking a transition from
          traditional educational methods to more technologically advanced
          approaches.
        </p>
        <div className="flex-image-text">
          <div>
            <p>
              The move to cloud computing represents a pivotal moment in
              educational data collection. Cloud computing, with its advantages
              in accessibility and collaboration, has become a cornerstone in
              educational technology. Also, a notable trend in the educational
              landscape is the involvement of third parties in collecting and
              processing educational data. These third parties operate on remote
              servers and data centers, often beyond the direct control of
              educational institutions.
            </p>
            <p>
              Privacy and data protection emerge as central themes in this
              technological landscape. Privacy, defined as the right to be left
              alone and control information about oneself, aligns with the
              concept of data protection (Cambridge Dictionary, 2019). The
              European Union (EU) has a longstanding commitment to safeguarding
              privacy and data protection. In 1995, the EU pioneered the Data
              Protection Directive, the world's first comprehensive data
              protection law. Subsequently, the General Data Protection
              Regulation (GDPR), enacted in 2016, stands out as the most
              comprehensive and progressive piece of data protection legislation
              globally.
            </p>
          </div>
          <img src={images.privacy3} />
        </div>

        <h2>Concerns and Challenges</h2>
        <p>
          In delving into the societal concerns and challenges surrounding data
          privacy in education, a comprehensive sociotechnical exploration is
          essential. Understanding the sociotechnical dimensions of data privacy
          concerns, such as Consent, Security, Data Retention, and Transparency,
          is critical in navigating the complex interplay between technology and
          societal values.
        </p>
        <p>
          The adoption of data-driven technologies and the move to cloud
          computing in educational settings have given rise to a myriad of
          challenges. The ubiquity of data, encompassing personal data and
          metadata, has sparked concerns about the responsible and ethical use
          of this information. Third parties entering the scene, collecting and
          processing educational data on remote servers outside the direct
          control of educational institutions, further compound these
          challenges, leading to potential leaks, misuse, and improper access to
          sensitive information.
        </p>
        <p>
          The urgency of addressing these challenges becomes evident when
          examining the alarming increase in education data breaches. In 2021,
          there were 1,714 data breaches in the K-12 sector alone, representing
          a 61% surge from the previous year (Merod, 2023). This escalation can
          be attributed to factors such as increased technology use in
          education, heightened cybercriminal sophistication, and the inadequacy
          of cybersecurity measures in many schools. The pandemic-induced shift
          to remote learning and increased online tools has also created a
          fertile ground for hackers.
        </p>
        <div className="flex-image-text">
          <div>
            <p>
              The repercussions of these breaches extend beyond mere numbers,
              with 59.7 million student records exposed—a 220% increase from the
              previous year (Merod, 2023). The aftermath underscores the
              critical need for more investment in cybersecurity education and
              training for teachers and students, alongside increased funding
              for schools to implement robust cybersecurity measures.
            </p>
            <p>
              Malicious actors target educational institutions because they hold
              a lot of valuable data. Consequences of cyber attacks may include
              financial burdens, reputational damage, legal actions, and an
              increased risk of fraud from compromised data. It emphasizes the
              vital role of robust cybersecurity in protecting sensitive
              information (Coker, 2023).
            </p>
            <p>
              Additionally, the integration of big data in education introduces
              new dimensions to privacy concerns. While big data holds the
              potential to create personalized learning experiences, it must be
              approached with caution to protect student privacy. The sensitive
              nature of information contained in big data, including grades,
              attendance records, and disciplinary actions, necessitates clear
              policies, procedures, and training for teachers and staff.
              Parental awareness and informed consent regarding data collection
              and usage further contribute to responsible and ethical practices.
            </p>
          </div>
          <img src={images.privacy7} alt="" />
        </div>

        <h2>Why data privacy must be prioritized in education.</h2>
        <div className="flex-image-text">
          <div>
            <ul>
              <li>
                <b>Protecting student rights:</b> Upholding the fundamental
                right to privacy ensures that students retain control over their
                personal information in an era of increasing data-driven
                educational technologies.
              </li>
              <li>
                <b>Preserving trust:</b> Establishing and maintaining trust
                between educational institutions, students, and their families
                hinges on the responsible handling of data, fostering an
                environment where sharing information is comfortable and secure.
              </li>
              <li>
                <b>Avoiding legal and reputational risks:</b> Neglecting data
                protection exposes schools to legal penalties and damages their
                reputation. Data breaches can lead to identity theft, financial
                fraud, and other harms, creating significant legal and public
                relations burdens.
              </li>
              <li>
                <b>Enhancing student well-being:</b> Safeguarding data privacy
                is integral to protecting student well-being, particularly
                concerning sensitive information like disciplinary records or
                mental health data.
              </li>
              <li>
                <b>Promoting equity and fairness:</b> Data-driven
                decision-making should adhere to principles of transparency and
                equity, ensuring that processes do not lead to discrimination or
                unfair treatment of students.
              </li>
              <li>
                <b>Ensuring responsible innovation:</b> Ethical considerations
                and responsible innovation practices should guide the use of big
                data in education, involving relevant stakeholders in
                discussions about data collection, usage, and privacy
                protections.
              </li>
              <li>
                <b>Preparing students for the digital world:</b> Emphasizing
                data privacy in education empowers students to become
                responsible digital citizens, fostering an understanding and
                respect for their own data rights and the privacy of others.
              </li>
            </ul>
          </div>
        </div>
        <p>
          As we navigate the intricate sociotechnical landscape of data privacy
          in education, prioritizing responsible practices becomes imperative
          for the collective well-being of students, educators, and the
          educational ecosystem as a whole.
        </p>

        <div className="flex-image-text">
          <div>
            <h2>Frameworks and Solutions</h2>
            <p>
              In the pursuit of fortifying data privacy in educational settings,
              various frameworks have emerged, each aiming to strike a delicate
              balance between technological innovation and societal values. This
              section introduces two frameworks, namely "Seven principles to
              foster privacy and security in educational tools: Local
              Educational Data Analytics" (Amo et al., 2020) and "Local
              Technology to Enhance Data Privacy and Security in Educational
              Technology" (Amo et al., 2021), shedding light on their potential
              effectiveness in addressing data privacy concerns within
              educational tools.
            </p>
            <p>
              The first framework, as presented in the paper "Seven principles
              to foster privacy and security in educational tools," posits a set
              of seven principles rooted in the concept of local data analytics.
              Simultaneously, the second framework, outlined in "Local
              Technology to Enhance Data Privacy and Security in Educational
              Technology," advocates for the preference of local technology over
              cloud-based solutions.
            </p>
          </div>
          <img src={images.privacy6} />
        </div>

        <br />
        <p className="quote">
          {" "}
          <h3>"Seven Principles to Foster Privacy and Security"</h3>
        </p>
        <div className="flex-image-text">
          <div>
            <ul>
              <li>
                <b>Data Minimization: </b>The framework advocates for collecting
                the minimum necessary data for pedagogical objectives.
              </li>
              <li>
                <b>Data Purpose Specification:</b> It stresses the importance of
                clearly defining the purpose of data collection and limiting its
                use to that purpose.
              </li>
              <li>
                <b>Data Anonymization:</b> Anonymizing or de-identifying student
                data where possible is recommended.
              </li>
              <li>
                <b>Data Localization:</b> The framework encourages processing
                and storing student data within educational institutions.
              </li>
              <li>
                <b>Transparency:</b> Providing clear and transparent information
                to students and parents about data usage is a key principle.
              </li>
              <li>
                <b>Access Control:</b> Implementing robust access control
                mechanisms to prevent unauthorized access is advised.
              </li>
              <li>
                <b>Security Auditing:</b> The framework proposes regular
                security audits to identify and address potential
                vulnerabilities.
              </li>
            </ul>
            <p>
              This framework offers a comprehensive set of principles that, if
              effectively implemented, can significantly enhance data privacy in
              educational tools. Striking a balance between data-driven insights
              and the protection of sensitive information is a central tenet.
            </p>
          </div>
        </div>
        <br />

        <p className="quote">
          <h3>"Local Technology to Enhance Data Privacy and Security"</h3>
        </p>
        <div className="flex-image-text">
          <div>
            <ul>
              <li>
                <b>Data Localisation:</b> The framework suggests collecting,
                storing, and analyzing student data within educational
                institutions.
              </li>
              <li>
                <b>Data Decentralisation:</b> Advocates for distributing the
                processing of student data across multiple devices and servers.
              </li>
              <li>
                <b>Data Minimization:</b> Recommends collecting only the minimum
                amount of data necessary for educational purposes.
              </li>
            </ul>
            <p>
              This framework provides an alternative perspective by endorsing
              the use of local technology. It addresses concerns associated with
              cloud-based solutions and aims to mitigate risks linked to
              third-party involvement.
            </p>
          </div>
        </div>

        <br />
        <br />
        <div className="flex-image-text">
          <div>
            <h3>Evaluation of Effectiveness</h3>
            <ul>
              <li>
                Both frameworks contribute valuable insights to the ongoing
                discourse on data privacy in education.
              </li>
              <li>
                The effectiveness of these frameworks hinges on their practical
                applicability and the willingness of educational institutions to
                implement and adhere to the proposed principles.
              </li>
              <li>
                Continuous assessment and adaptation of these frameworks are
                crucial to staying abreast of evolving technological landscapes
                and emerging privacy challenges.
              </li>
            </ul>
            <p>
              In essence, the analysis underscores the imperative of considering
              both technological advancements and societal dimensions when
              navigating the complex terrain of data privacy in educational
              tools. These frameworks provide valuable guidelines for
              educational institutions seeking to fortify data privacy in the
              ever-evolving digital age.
            </p>
          </div>
          <img src={images.privacy1} />
        </div>

        <h2>Legal and Regulatory Dimensions</h2>
        <div className="flex-image-text">
          <div>
            <p>
              In the digital era, legal and regulatory frameworks wield
              substantial influence over data privacy, especially in educational
              contexts. This section scrutinizes the societal impacts of data
              protection regulations, spotlighting the role of the European Data
              Protection Supervisor (EDPS) and highlighting some aspects of the
              "Regulation(EU) 2018/1725 of the European Parliament and of the
              Council.", which also can be refered as General Data Protection
              Regulation (GDPR).
            </p>
            <p>
              The EDPS, a linchpin in European regulatory architecture, guides
              EU institutions on personal data processing intricacies,
              contributing not just to individual privacy but fostering broader
              societal trust. By advising on data processing matters, the EDPS
              shapes regulations, instilling a sense of security and
              accountability in the wider societal context.
            </p>
            <p>
              The GDPR has a nuanced approach to balancing data privacy and
              security in education. Examining its responses to evolving
              challenges posed by data-driven technologies sheds light on
              potential efficacy and impact areas in safeguarding sensitive
              information. It universally applies to organizations handling
              personal data of EU individuals, regardless of location. It
              introduces key rights like data information, access, and
              objection, coupled with obligations for obtaining consent and
              ensuring data protection measures. Despite its ambitious goals,
              the GDPR faces critique for complexity and potential business
              costs.
            </p>
          </div>
          <img src={images.privacy4} alt="" />
        </div>

        <p>
          The comparative analysis of data protection policies in "Data
          Protection and Privacy in the United States and Europe" (Stratford &
          Stratford, 1999) highlights distinct U.S. and European approaches. The
          U.S. framework, with specific legislation, contrasts with the EU's
          unified supra-national policy. The patchwork U.S. laws, focusing on
          government-held information, juxtapose against the EU's emphasis on
          individual rights and comprehensive, unified directives.
        </p>
        <p>
          The EU's prioritization of individual rights and effective enforcement
          positions it as a robust privacy guardian. Implications for e-commerce
          showcase challenges faced by U.S. companies navigating diverse data
          protection laws in both markets. EU directives, like the ePrivacy
          Directive, not only influence legal landscapes but also shape
          e-commerce standards, reflecting the multifaceted impact of data
          protection regulations on evolving digital practices.
        </p>
        <br />
        <p>
          This overarching theme underscores the rising significance of data
          protection regulations in an era of ubiquitous online data usage. The
          distinct U.S. and European approaches signal a global dialogue seeking
          equilibrium between privacy protection and innovation promotion. As
          the landscape evolves, these frameworks are poised to adapt,
          showcasing the dynamic interplay between privacy concerns and
          technological advancements.
        </p>

        <h2>Conclusion</h2>

        <div className="flex-image-text">
          <div>
            <p>
              In today's digital world, protecting data privacy in education is
              crucial. This essay explores the societal impact of data privacy,
              going beyond technology to unveil its profound implications.
              Navigating this digital journey, we uncover key findings at the
              crossroads of technology, society, and education—from Consent,
              Security, Data Retention, to Transparency. Education seamlessly
              integrates with the digital realm, demanding a recalibration of
              ethical considerations. Our exploration delves into history,
              evaluating tech shifts, emphasizing the role of educational
              institutions as vigilant guardians of data privacy.
            </p>
            <p>
              Beyond technological intricacies, the broader societal impact of
              data privacy in education becomes clear. Choices in educational
              technology resonate in the social fabric, shaping trust, fairness,
              and democratic values. Protecting student rights, preserving
              trust, avoiding legal risks, and promoting equity emerge as
              guiding principles for societal well-being.
            </p>
            <p>
              In essence, this exploration is more than a tech discourse; it's a
              societal dialogue urging conscientious navigation through evolving
              data privacy realms. Choices made today shape a future where
              education thrives on tech and upholds privacy, security, and
              societal well-being. As we conclude, it invites reflection on the
              delicate balance between leveraging technology for education and
              being responsible stewards in a society built on trust and
              openness.
            </p>
          </div>
          <img src={images.privacy5} alt="" />
        </div>
        <br />
        <br />
        <br />
        <div className="references">
          <h3>References</h3>

          <p>
            Amo, D., Prinsloo, P., Alier, M., Fonseca, D., Torres Kompen, R.,
            Canaleta, X., & Herrero-Martín, J. (2021). Local Technology to
            Enhance Data Privacy and Security in Educational Technology.
            International Journal of Interactive Multimedia and Artificial
            Intelligence, 7(2), 262. https://doi.org/10.9781/ijimai.2021.11.006
          </p>
          <p>
            Amo, D., Torres, R., Canaleta, X., Herrero-Martín, J.,
            Rodríguez-Merino, C., & Fonseca, D. (2020). Seven principles to
            foster privacy and security in educational tools: Local Educational
            Data Analytics. Eighth International Conference on Technological
            Ecosystems for Enhancing Multiculturality.
            https://doi.org/10.1145/3434780.3436637
          </p>
          <p>
            Bird, S. J. (2013). Security and Privacy: Why Privacy Matters.
            Science and Engineering Ethics, 19(3), 669–671.
            https://doi.org/10.1007/s11948-013-9458-z
          </p>
          <p>
            Cambridge Dictionary. (2019). PRIVACY | meaning in the Cambridge
            English Dictionary. Cambridge.org.
            https://dictionary.cambridge.org/dictionary/english/privacy
          </p>
          <p>
            Coker, J. (2023, June 9). University of Manchester Suffers Suspected
            Data Breach During Cyber Incident. Infosecurity Magazine.
            https://www.infosecurity-magazine.com/news/uni-manchester-data-breach-incident/
          </p>
          <p>
            Hand, D. J. (2018). Aspects of Data Ethics in a Changing World:
            Where Are We Now? Big Data, 6(3), 176–190.
            https://doi.org/10.1089/big.2018.0083
          </p>
          <p>
            Kemp, K. (2020). Concealed data practices and competition law: why
            privacy matters. European Competition Journal, 1–45.
            https://doi.org/10.1080/17441056.2020.1839228
          </p>
          <p>
            Merod, A. (2023, April 10). Education data breaches hit record high
            in 2021. K-12 Dive.
            https://www.k12dive.com/news/2021-record-year-education-data-breaches/647204/
            REGULATION (EU) 2018/1725 OF THE EUROPEAN PARLIAMENT AND OF THE
            COUNCIL of 23 October 2018 on the protection of natural persons with
            regard to the processing of personal data by the Union institutions,
            bodies, offices and agencies and on the free movement of such data,
            and repealing Regulation (EC) No 45/2001 and Decision No
            1247/2002/EC (Text with EEA relevance). (2018, November 21).
            https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32018R1725
          </p>
          <p>
            Ruiz, K. (2022, November 15). How Schools Can Become Cyber Resilient
            in 2023. Infosecurity Magazine.
            https://www.infosecurity-magazine.com/blogs/how-schools-can-become-cyber/
          </p>
          <p>
            Smith, J. (2016, November 11). Data Protection. European Data
            Protection Supervisor - European Data Protection Supervisor.
            https://edps.europa.eu/data-protection/data-protection_en
          </p>
          <p>
            Solove, D. (2011). Why Privacy Matters Even if You Have “Nothing to
            Hide.”
            https://immagic.com/eLibrary/ARCHIVES/GENERAL/CHRON_HE/C110515S.pdf
          </p>
          <p>
            Stratford, J. S., & Stratford, J. (1999). Data Protection and
            Privacy in the United States and Europe. IASSIST Quarterly, 22(3),
            17. https://doi.org/10.29173/iq80
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyArticle;
