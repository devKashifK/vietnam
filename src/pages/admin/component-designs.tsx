import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import HeroDefault from "@/components/ui/hero-all";
import HoverCard from "@/components/ui/hover-card";
import { Button } from "@/components/ui/moving-border";
import Wrapper from "./wrapper";
import {
  CtaCard,
  CtaCard2,
  CTADefault,
  CTAWithImage,
} from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import { InfoCard } from "../immigration/immigration-challenges/page";

export const componentDesigns = {
  hero: [
    {
      id: "hero1",
      name: "Centered Hero",
      component: ({ title, description, image, buttonText }) => (
        <HeroDefault img={image ? image : "/aaa.jpg"} text={title} path="" />
      ),
    },
    {
      id: "hero2",
      name: "Split Hero",
      component: ({ title, description, buttonText, image }) => (
        <div className="flex items-center py-12 px-4">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">
              {title || "[Hero Title]"}
            </h1>
            <p className="text-xl mb-8">
              {description || "[Hero Description]"}
            </p>
            <Button type="button">{buttonText || "[Button Text]"}</Button>
          </div>
          <div className="w-1/2">
            {image ? (
              <img
                src={image}
                alt="Hero"
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="bg-gray-300 h-64 rounded-lg">
                [Image Placeholder]
              </div>
            )}
          </div>
        </div>
      ),
    },
  ],
  cards: [
    {
      id: "HoverCard",
      name: "Basic Cards",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <HoverCard
                  key={i}
                  icon={card.icon}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "ServicesCard",
      name: "Service Cards",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <ServicesCard
                  key={i}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "InfoCard",
      name: "Info Card",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <InfoCard
                  key={i}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "CardWithImage",
      name: "Image Card OverLay",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return (
              <CardWithImage
                key={i}
                image={card.image}
                description={card.content}
                title={card.title}
              />
            );
          })}
        </div>
      ),
    },
    {
      id: "CtaCard",
      name: "Basic Image Card",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return <CtaCard key={i} item={card} />;
          })}
        </div>
      ),
    },
    {
      id: "CtaCard2",
      name: "Image Card",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return <CtaCard2 key={i} item={card} flip={i % 2 === 0} />;
          })}
        </div>
      ),
    },
  ],

  cta: [
    {
      id: "cta1",
      name: "Simple CTA",
      component: ({ title, description, subtitle, image }) => (
        <CTADefault
          description={description}
          title={title}
          image={image}
          subtitle={subtitle}
        />
      ),
    },
    {
      id: "cta2",
      name: "Split CTA",
      component: ({ title, description, subtitle, image }) => (
        <CTAWithImage
          description={description}
          title={title}
          subtitle={subtitle}
          image={image}
        />
      ),
    },
  ],
};
