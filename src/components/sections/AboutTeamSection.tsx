import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { TeamCard } from "@/components/ui/TeamCard";
import { aboutPageContent } from "@/data/about";

export function AboutTeamSection() {
  const { title, members } = aboutPageContent.team;

  return (
    <Section id="team" ariaLabelledBy="team-heading" className="bg-surface">
      <Container>
        <Reveal variant="up">
          <h2
            id="team-heading"
            className="text-center font-serif text-[clamp(2.25rem,3.7037vw,3.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em] text-navy"
          >
            {title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[0.9375rem]">
          {members.map((member, index) => (
            <Reveal
              key={member.name}
              as="li"
              variant="up"
              delay={100 + index * 110}
              className="group"
            >
              <TeamCard {...member} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
