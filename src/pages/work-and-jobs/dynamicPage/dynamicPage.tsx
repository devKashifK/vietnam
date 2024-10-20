import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../supabaseClient";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/ui/container";
import HoverCard from "@/components/ui/hover-card";
import { CardWithImage } from "@/components/ui/card-with-image";
import Title from "@/components/ui/Title";
import Wrapper from "@/pages/admin/wrapper";
import { ServicesCard } from "@/components/ui/services-card";
import { InfoCard } from "@/pages/immigration/immigration-challenges/page";
import {
  CtaCard,
  CtaCard2,
  CTADefault,
  CTAWithImage,
} from "@/components/ui/cta";

export default function DynamicPage() {
  const param = useParams();

  const { data, error } = useQuery({
    queryKey: ["page", param.slug],
    queryFn: async () => {
      const response = await supabase
        .from("pages")
        .select("*")
        .eq("slug", param.slug)
        .single();
      return response.data;
    },
  });

  const pageContent = useMemo(() => {
    if (data) {
      const parsedData = JSON.parse(data.content);
      return parsedData.map((section, index) => {
        if (section.component === "Container") {
          return renderContainerWithChildren(section, index);
        } else {
          return renderWithChildren(section, index);
        }
      });
    }
  }, [param.slug, data]);

  return <div>{pageContent}</div>;
}

const renderWithChildren = (section, index) => {
  const Component = componentMapping[section.component];

  if (Component) {
    return <Component key={index} {...section.props} />;
  }
};

const renderContainerWithChildren = (section) => {
  return (
    <Container className="mt-8">
      {section.title && (
        <Title
          className="text-left justify-start items-start"
          subtitleClass="!text-left"
          titleClass="text-left justify-start items-start"
          descriptionClass="text-left"
          subtitle={section.subtitle}
          title={section.title}
          description={section.description}
        />
      )}

      <Wrapper>
        {section.props.children.map((child, index) => {
          const Component = componentMapping[child.component];
          if (Component) {
            return <Component key={index} {...child.props} />;
          }
        })}
      </Wrapper>
    </Container>
  );
};

const componentMapping = {
  HoverCard: HoverCard,
  CardWithImage: CardWithImage,
  ServicesCard: ServicesCard,
  InfoCard: InfoCard,
  CtaCard: CtaCard,
  CtaCard2: CtaCard2,
  Cta1: CTADefault,
  Cta2: CTAWithImage,
};
