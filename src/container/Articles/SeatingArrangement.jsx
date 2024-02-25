import React, { useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SeatingArrangement = () => {
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
        <i>A study by Magnus Heide, 10.06.2023.</i>
        <h1>
          What is the relationship between classroom seating arrangement and
          maximized social and academic development of students?
        </h1>
        <p className="quote">
          “As a teacher, creating seating charts is always something that I
          dread. Seating charts is one of those things where there is no way to
          make everybody happy.”
        </p>
        <div class="flex-image-text">
          <div>
            <p>
              Many teachers detest changing and making seating maps because of
              its complexity (Heaney, 2012). However, the importance of
              regularly shifting the classroom seating arrangement is also
              apparent to many teachers.
            </p>
            <p>
              This essay discusses the relationship between classroom seating
              arrangement and maximized social and academic development of
              students.
            </p>
            <p>
              I define “seating arrangement” as how the classroom desks are
              arranged, for example if the students sit alone, with a partner,
              or in a group. With that I also discuss the teacher’s role in
              creating the seating arrangement, and the ideal frequency of
              rotating the students. Academic development is defined as the
              process of becoming as book-smart as possible, which would mean
              that you possess a lot of knowledge, and I define social
              development as the process of obtaining the ability to interact
              and engage with others in the most seamless way possible.
            </p>
          </div>
          <img src={images.klassekart} />
        </div>

        <div className="flex-image-text">
          <div>
            <p>
              Social skills are very important for academic success, because
              being able to communicate, collaborate and work in teams is often
              highly connected to academic success (Pauli, 2023). Growing
              socially means you learn about how the world works and your role
              in it, which can also help you academically (Herrity, 2023).
              However, growing academically very often means gaining knowledge
              from other people’s experiences, which teaches you little about
              yourself and doesn’t help you grow much as a person.
            </p>
            <p>
              Based on that, it is fair to say that developing social skills can
              enhance your academic skills, but not the other way around. The
              development of social skills is therefore weighed higher when
              arguing for the ideal seating arrangement.
            </p>
          </div>
          <img src={images.socialAdacemic} />
        </div>

        <div className="flex-image-text">
          <div>
            <h2>What is the ideal seating configuration?</h2>
            <p>
              The study “Considerations for classroom seating arrangements and
              the role of teacher characteristics and beliefs” found that the
              best arrangement to increase student interactions is in smaller
              groups (Gremmen et al., 2016, p. 753). That is because smaller
              groups allow the students to cooperate more easily because of
              their proximity and close positions in regards to each other.
            </p>
            <p>
              However, a 3 and 3 configuration in general does not maximize
              social and academic development for several reasons. First, it is
              not possible to find an arrangement where all three students both
              have a partner beside them, and a good view of both the teacher
              and all of their fellow group students. Second, in a group of 3
              and 3, it is very easy for the either academically or socially
              weaker student to intentionally stay out, or be left out from
              discussions. For example if the weaker student does not understand
              the contents of the group discussion, it is easier to stay out
              than to speak up and ask questions. Even if you do not possess a
              lot of knowledge, you learn a lot more by conversing and asking
              questions to what you are unsure about than just listening, which
              could prove more challenging in such a configuration.
            </p>
          </div>
          <img src={images.arrangements} />
        </div>

        <p>
          However, in a 2 and 2 configuration you would be forced to converse
          for any discussion to happen. Having only one partner that you need to
          engage in conversation with is also less overwhelming for the more
          insecure students. A 2 and 2 configuration would also allow for the
          teacher to place a weaker and stronger student together, which could
          be beneficial for both parties. The Protégé Effect explains how
          teaching, and preparing to teach others is very beneficial for an
          individual, because you are forced to break down the information and
          present it in a coherent manner (Avery, 2018). That will help you
          remember the material better and discover potential knowledge gaps.
          The weaker student could also benefit more from having their partner
          explain something to them. The teachers often have to leave out
          previous, underlying information in order to teach something new to
          the entire class, and often do not have enough time for individualized
          student tutoring (Heggebø, 2017). Having a partner who can teach you
          and answer your questions is therefore beneficial to both group
          parties.
        </p>
        <p>
          A 2 and 2 configuration where everyone faces in the same direction is
          also beneficial for the students who are afraid to speak out loud. In
          comparison to a 4 and 4 group, having few eyes on you when you are to
          say something out loud can reduce student stress and lead to more
          students actively engaging with the lesson (Scopophobia, n.d.). This
          would mean that they might be less afraid to ask academic questions
          and also slowly develop the confidence to speak in front of more
          people, which is ideal for both social and academic development.
        </p>
        <p>
          However, as you grow older and get more confident and less afraid of
          speaking out loud, a 4 and 4 group configuration might be even better
          (Madormo, 2021). In this configuration, you would have one student
          next to you and two students opposite you, which would allow for the
          same benefits of a 2 and 2 configuration because you could also decide
          to not engage as a group. However, it would allow for more input,
          deeper discussions and more varied thoughts, should you decide to have
          a group discussion. This would then train the students’ social skills
          and improve academic skills.
        </p>
        <p>
          We can therefore partially conclude that the best seating arrangement
          for maximal social and academic development for the average young
          student is a 2 and 2 configuration, while for older students, a 4 and
          4 configuration would in many cases be more ideal.
        </p>
        <h2>
          What role should the teacher have in assigning student partners?
        </h2>
        <p>
          The study “Classroom Seat Proximity Predicts Friendship Formation”
          found that the seating arrangement set by the teacher often affects
          the friendships that are formed, especially at a younger age (Laursen
          et al., 2022, p. 5). Is it therefore right to leave that
          responsibility to the teacher alone?
        </p>
        <p className="quote">
          “You pray to get seated next to your one friend in that class, but
          instead are met with an audible groan from the person you are about to
          sit next to because they just found out that you’re their desk partner
          for the next six weeks.”
        </p>
        <div className="flex-image-text">
          <div>
            <p>
              This describes the feeling many students can feel after getting a
              new seating arrangement, and some argue that the best way to keep
              students calm and happy is to grant them their preferred partner
              (Srivastava, 2017).
            </p>
            <p>
              However, a school’s job is to make students be able to work with
              everyone in a society of different people. The ‘Mere-exposure
              effect’ argues that humans by nature always will choose what they
              are familiar with (Nickerson, 2023). Therefore, unless forced to,
              students will most likely decide to sit together with people they
              already know. Because most humans by nature won’t naturally seek
              the unknown themselves, I would argue that to let students choose
              partners themselves does not maximize social development.
            </p>
          </div>
          <img src={images.teacherStudents} />
        </div>

        <p>
          Also, even if you do not know any of the students in your class, I
          would still argue that the teacher should be in charge. The sociology
          term ‘homophily’ describes the tendency that people are more likely to
          form friendships with people who share the same characteristics, for
          example gender and race (Chaku & Beltz, 2022). Because of that, if the
          students are free to choose partners themselves, you are likely to
          find a lot of groupings in the classroom, with gender or race as the
          dividing factor.
        </p>
        <p>
          School is one of the first places where children are able to interact
          with people from different backgrounds who have different lifestyles
          and cultures. Learning about and breaking down xenophobia at an early
          age will help the children develop their social and collaboration
          skills.
        </p>
        <p>
          We therefore see that having the teacher assign seating partners is
          more beneficial for the students’ social development, than if they
          were to choose them themselves.
        </p>

        <div className="flex-image-text">
          <div>
            <h2>
              How do partner rotations affect students socially and
              academically?
            </h2>
            <p>
              A very important part in figuring out the academic and social
              development of students based on seating arrangement is to find
              out how important the frequency and rotation of a partner is.
            </p>
            <p>
              Some benefits to changing places often include increased
              socialization, because the students get to interact more with
              everyone in the class, which can also improve the class
              environment and reduce groupings. It can also reduce distractions,
              as students are less likely to get bored in their new spot if they
              change frequently. Changing places can also give a varied
              perspective of the lessons. However, some disadvantages include
              that it can be disruptive for students who do not adapt well to
              changes and instability, and it can also be uncomfortable for some
              to sit in certain parts of the classroom or around certain
              students, which can be a challenge with more frequent changes.
            </p>
          </div>
          <img src={images.rotations} />
        </div>
        <p>
          A study by psychotherapist Mia Rosenberg found that children in
          general are more adaptable than adults because of their limited world
          experience and knowledge (Booth, 2020). The older you get, the more
          exposed you are to social biases, prejudices and stereotypes. In other
          words, younger kids are more open to new interactions and would in
          most cases deal better with frequent partner changes. Also, time tends
          to feel slower for younger children because they have more new
          experiences and fewer responsibilities (Spector, 2018). Therefore, the
          younger the students, the more frequent changes could be made.
        </p>
        <p>
          If the practice with frequent changes were done with older students
          from an early age, they should also not have any problem with it.
          However, increasing the frequency of changes for someone who is used
          to sitting with someone for a longer period of time might be
          challenging. The term “habit inertia” explains that many people have
          difficulties with breaking long-term established habits and adapting
          to new ones (Congdon, 2018). For students who have been used to a
          certain system for years, you might find it difficult to suddenly
          start switching everyone around frequently. You might experience
          protests, less concentration and increased insecurity from students,
          which would not increase their social development but rather limit it.
        </p>
        <p>
          However, as students get older, you might consider reducing the
          frequency of changes compared to the younger ones. As people grow
          older, their friendships often require a deeper understanding of one
          another with more complex emotions than children. A too frequent
          change of older students could therefore result in less development of
          social relationships than what is actually achievable. Children have
          relationships on a lower level and also find it easier to make friends
          due to their reduced self-consciousness and strong openness and
          curiosity, and should therefore be moved around more often (Via,
          2014).
        </p>
        <p>
          I conducted a research at a lower secondary school in Oslo, Norway,
          which has students aged 13-16 and most students sit 2 and 2. The
          research showed that the teachers on average change places every 3-4
          weeks. It also showed that if time complexity and stress of creating
          maps were no issue, over half of the teachers would change places more
          frequently. Based on the various responses, this would indicate every
          2-3 weeks on average, but not more often than every 2 weeks. In total,
          this would mean that almost everyone in the class would get to sit
          with everyone throughout the year.
        </p>
        <p>
          Based on this concrete data, provided by active industry
          practitioners, as well as the other factors mentioned, it is fair to
          say that the ideal frequency should be for everyone to sit with
          everyone throughout the year. Younger students should sit 2 and 2 and
          could therefore also change more frequently, maybe twice as often as
          older students, where the ideal configuration in many cases would be 4
          and 4.
        </p>
        <br />
        <p>
          This research has shown that the classroom seating arrangement heavily
          affects the social and academic development of students. The research
          found that the seating arrangement with the most social and academic
          development for younger students is 2 and 2, while older students in
          many cases could benefit more from a 4 and 4 configuration. It also
          found that the teacher should be in charge of the student’s partners,
          and the ideal student partner rotation is so that everyone gets to sit
          with everyone throughout the year.
        </p>
        <br />
        <br />
        <br />
        <div className="references">
          <h3>Attachments</h3>
          <p>
            Heide, M. (2023). <i>Appendix_1</i>. Retrievable here:{" "}
            <a
              href="https://1drv.ms/b/s!Ai2vvlpx_1zvgcJLE591-afEwlXi1A?e=h7E0Oc"
              target="_blank"
            >
              https://1drv.ms/b/s!Ai2vvlpx_1zvgcJLE591-afEwlXi1A?e=h7E0Oc
            </a>
          </p>
          <br />
          <h3>References</h3>

          <p>
            Aasen, E. (2011).{" "}
            <i>
              Å lære sammen - En kvalitativ case-studie av elever i 9. klasse
              som samarbeider i par
            </i>{" "}
            (Page 9). Retrieved from{" "}
            <a
              href="https://uia.brage.unit.no/uia-xmlui/bitstream/handle/11250/138098/ErlingAasen.pdf?sequence=1"
              target="_blank"
            >
              https://uia.brage.unit.no/uia-xmlui/bitstream/handle/11250/138098/ErlingAasen.pdf?sequence=1
            </a>
          </p>
          <p>
            Avery, B. (2018, October 7). <i>Learning By Teaching</i>. Retrieved
            from{" "}
            <a
              href="https://medium.com/@bravery/learning-by-teaching-4c9cf15d86fe"
              target="_blank"
            >
              https://medium.com/@bravery/learning-by-teaching-4c9cf15d86fe
            </a>
          </p>
          <p>
            Booth, J. (2020, November 5).{" "}
            <i>
              It's True — Your Child Is Way More Adaptable Than You, & Here's
              Why.{" "}
            </i>
            Retrieved from{" "}
            <a
              href="
          https://www.romper.com/p/are-children-more-adaptable-than-adults-experts-weigh-in-40474839"
              target="_blank"
            >
              https://www.romper.com/p/are-children-more-adaptable-than-adults-experts-weigh-in-40474839
            </a>
          </p>
          <p>
            Bwalya, F. (2022, June 4).{" "}
            <i>LEARNING BY DOING: WHAT YOU NEED TO KNOW.</i> Retrieved from{" "}
            <a
              href="
          https://www.the-learning-agency-lab.com/the-learning-curve/learning-by-doing/"
              target="_blank"
            >
              https://www.the-learning-agency-lab.com/the-learning-curve/learning-by-doing/
            </a>
          </p>
          <p>
            Chaku, N. & Beltz, A. (2022).{" "}
            <i>New Methods and Approaches for Studying Child Development</i>.
            Retrieved from{" "}
            <a
              href="https://www.sciencedirect.com/topics/psychology/homophily"
              target="_blank"
            >
              https://www.sciencedirect.com/topics/psychology/homophily
            </a>
          </p>
          <p>
            Congdon, B. (2018, July 2).{" "}
            <i>Inertia and When to Break a Habit.</i> Retrieved from{" "}
            <a
              href="https://benjamincongdon.me/blog/2018/07/02/Inertia-and-When-to-Break-a-Habit/"
              target="_blank"
            >
              https://benjamincongdon.me/blog/2018/07/02/Inertia-and-When-to-Break-a-Habit/
            </a>
          </p>
          <p>
            Faur, S. & Laursen, B. (2022).{" "}
            <i>Classroom Seat Proximity Predicts Friendship Formation. </i>{" "}
            Retrieved from{" "}
            <a
              href="https://www.frontiersin.org/articles/10.3389/fpsyg.2022.796002/full"
              target="_blank"
            >
              https://www.frontiersin.org/articles/10.3389/fpsyg.2022.796002/full
            </a>
          </p>
          <p>
            Gremmen, M., van den Berg, Y., Segers, E. & Cillessen, A. (2016).{" "}
            <i>
              Considerations for classroom seating arrangements and the role of
              teacher characteristics and beliefs.
            </i>{" "}
            Retrieved from{" "}
            <a
              href="https://link.springer.com/article/10.1007/s11218-016-9353-y"
              target="_blank"
            >
              https://link.springer.com/article/10.1007/s11218-016-9353-y
            </a>
          </p>
          <p>
            Hackathorna, J., Solomonb, E., Blankmeyerb, K., Tennialb, R. &
            Garczynskib, A. (2011).{" "}
            <i>
              Learning by Doing: An Empirical Study of Active Teaching
              Techniques.
            </i>{" "}
            Retrieved from{" "}
            <a
              href="https://files.eric.ed.gov/fulltext/EJ1092139.pdf"
              target="_blank"
            >
              https://files.eric.ed.gov/fulltext/EJ1092139.pdf
            </a>
          </p>
          <p>
            Heaney, C. (2012, February 28).{" "}
            <i>Ask an Expert: My son’s classroom seat keeps changing.</i>{" "}
            Retrieved from{" "}
            <a
              href="https://co.chalkbeat.org/2012/2/28/21096766/ask-an-expert-my-son-s-classroom-seat-keeps-changing"
              target="_blank"
            >
              https://co.chalkbeat.org/2012/2/28/21096766/ask-an-expert-my-son-s-classroom-seat-keeps-changing
            </a>
          </p>
          <p>
            Heggebø, J. (2017, September 29).{" "}
            <i>- Lærere rekker ikke å følge opp elevene</i>. Retrieved from{" "}
            <a
              href="https://www.dagsavisen.no/rogalandsavis/nyheter/2017/09/29/laerere-rekker-ikke-a-folge-opp-elevene/"
              target="_blank"
            >
              https://www.dagsavisen.no/rogalandsavis/nyheter/2017/09/29/laerere-rekker-ikke-a-folge-opp-elevene/
            </a>
          </p>
          <p>
            Herrity, J. (2023, March 17).{" "}
            <i>What are Social Skills? Definition and Examples</i>. Retrieved
            from{" "}
            <a
              href="https://www.indeed.com/career-advice/career-development/social-skills"
              target="_blank"
            >
              https://www.indeed.com/career-advice/career-development/social-skills
            </a>
          </p>
          <p>
            Madormo, C. (2021, January 14).{" "}
            <i>
              This Is the Exact Age When the Average Person Is Most Confident
            </i>
            . Retrieved from{" "}
            <a
              href="https://www.thehealthy.com/mental-health/self-care/age-when-average-person-most-confident/"
              target="_blank"
            >
              https://www.thehealthy.com/mental-health/self-care/age-when-average-person-most-confident/
            </a>
          </p>
          <p>
            Nickerson, C. (2023, April 12).{" "}
            <i>Mere Exposure Effect In Psychology: Biases & Heuristics</i>.
            Retrieved from{" "}
            <a
              href="https://www.simplypsychology.org/mere-exposure-effect.html"
              target="_blank"
            >
              https://www.simplypsychology.org/mere-exposure-effect.html
            </a>
          </p>
          <p>
            Pauli, J. (2023).{" "}
            <i>The Importance of Teamwork in School and in the Workplace</i>.
            Retrieved from{" "}
            <a
              href="https://aboutleaders.com/teamwork-in-the-workplace/"
              target="_blank"
            >
              https://aboutleaders.com/teamwork-in-the-workplace/
            </a>
          </p>
          <p>
            Spector, N. (2018, November 26).{" "}
            <i>
              Why our sense of time speeds up as we age — and how to slow it
              down
            </i>
            . Retrieved from{" "}
            <a
              href="https://www.nbcnews.com/better/health/why-our-sense-time-speeds-we-age-how-slow-it-ncna936351"
              target="_blank"
            >
              https://www.nbcnews.com/better/health/why-our-sense-time-speeds-we-age-how-slow-it-ncna936351
            </a>
          </p>
          <p>
            Srivastava, U. (2017, November 6).{" "}
            <i>
              Students should be allowed to choose their own seating in class
            </i>
            . Retrieved from{" "}
            <a
              href="https://thecampanile.org/15013/opinion/students-should-be-allowed-to-choose-their-own-seating-in-class/"
              target="_blank"
            >
              {" "}
              https://thecampanile.org/15013/opinion/students-should-be-allowed-to-choose-their-own-seating-in-class/
            </a>
          </p>
          <p>
            Tranceform Psychology (n.d.){" "}
            <i>Scopophobia – Fear of Being Stared At</i>. Retrieved from{" "}
            <a
              href="https://www.tranceformpsychology.com/phobias/scopophobia.html#:~:text=Scopophobia"
              target="_blank"
            >
              https://www.tranceformpsychology.com/phobias/scopophobia.html#:~:text=Scopophobia
            </a>
          </p>
          <p>
            Via, E. (2014, October 12).{" "}
            <i>Kids Make Friends More Easily Than You. Here's Why</i>. Retrieved
            from{" "}
            <a
              href="https://www.thehappytalent.com/blog/kids-make-friends-more-easily-than-you-heres-why"
              target="_blank"
            >
              https://www.thehappytalent.com/blog/kids-make-friends-more-easily-than-you-heres-why
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeatingArrangement;
