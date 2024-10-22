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

  console.log(data, "checkData2");

  const pageContent = useMemo(() => {
    if (data) {
      const parsedData = JSON.parse(data.content);
      console.log(parsedData, "parsedData");
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
  console.log(section, "sectionTest");
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
          console.log(child, "childTest");
          const Component = componentMapping[child.component];
          if (Component) {
            return <Component key={index} {...child.props} />;
          }
        })}
      </Wrapper>
    </Container>
  );
};

const CustomComponent = (props) => {
  const {
    backgroundColor,
    borderColor,
    borderWidth,
    title,
    subtitle,
    description,
    imagePosition,
    padding,
    textColor,
    image,
  } = props;

  const containerStyle = {
    backgroundColor,
    color: textColor,
    borderColor,
    borderWidth: `${borderWidth}px`,
    borderStyle: "solid",
    padding: `${padding}px`,
  };

  const imageElement = image ? (
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover rounded-lg"
    />
  ) : (
    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
      [Image Placeholder]
    </div>
  );

  const contentElement = (
    <Title title={title} subtitle={subtitle} description={description} />
  );

  const renderContent = () => {
    switch (imagePosition) {
      case "left":
        return (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">{imageElement}</div>
            <div className="w-full md:w-1/2">{contentElement}</div>
          </div>
        );
      case "right":
        return (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">{contentElement}</div>
            <div className="w-full md:w-1/2">{imageElement}</div>
          </div>
        );
      case "top":
        return (
          <div className="space-y-8">
            {imageElement}
            {contentElement}
          </div>
        );
      case "bottom":
        return (
          <div className="space-y-8">
            {contentElement}
            {imageElement}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">{imageElement}</div>
            <div className="w-full md:w-1/2">{contentElement}</div>
          </div>
        );
    }
  };

  return (
    <section className="py-12" style={containerStyle}>
      <div className="container mx-auto px-4">{renderContent()}</div>
    </section>
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
  Custom: CustomComponent,
};
