import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Plus, Trash2, GripVertical } from "lucide-react";

import { ComponentForm } from "./component-form";
import { saveToDatabase } from "./save-to-json";
import { componentDesigns } from "./component-designs";
import { ImageUploaderAndPicker } from "./image-picker";
import { Icon } from "@iconify/react/dist/iconify.js";

export function NewPageForm({ onSubmit }) {
  const [formData, setFormData] = React.useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    sections: [],
  });

  const [expandView, setExpandView] = React.useState(false);

  const handleSlugChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, slug: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (imageUrl) => {
    setFormData((prev) => ({ ...prev, image: imageUrl }));
  };

  const handleAddSection = (type) => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: Date.now(),
          type,
          design: componentDesigns[type][0].id,
          variation: "hover", // Default variation for cards
          content: {},
        },
      ],
    }));
  };

  const handleRemoveSection = (id) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== id),
    }));
  };

  const handleSectionDesignChange = (id, design) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, design } : section
      ),
    }));
  };

  // const handleSectionVariationChange = (id, variation) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     sections: prev.sections.map((section) =>
  //       section.id === id ? { ...section, variation } : section
  //     ),
  //   }));
  // };

  const handleSectionContentChange = (id, content) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, content } : section
      ),
    }));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(formData.sections);
    const [reorderedSection] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedSection);

    setFormData((prev) => ({ ...prev, sections: newSections }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData, "CHECKFORMDATA");
    await saveToDatabase(formData);
  };

  const renderSectionPreview = (section) => {
    const design = componentDesigns[section.type].find(
      (d) => d.id === section.design
    );
    if (!design) return null;

    const Component = design.component;
    return (
      <div className="mt-4 border p-4 rounded-lg">
        <h4 className="text-sm font-semibold mb-2">Section Preview</h4>
        <Component {...section.content} cardType={section.variation} />
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 relative ">
      <h1 className="text-3xl font-bold mb-6 text-left">Page Builder</h1>
      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="edit" className="space-y-4 justify-start ">
          <TabsList className="justify-start flex w-max">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <div className="grid gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Page Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      name="title"
                      placeholder="Page Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="slug"
                      placeholder="Page Slug"
                      value={formData.slug}
                      onChange={handleSlugChange}
                      required
                    />
                    <Textarea
                      name="description"
                      placeholder="Page Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                    <ImageUploaderAndPicker
                      onChange={(image) => {
                        handleImageChange(image);
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Page Sections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    {/* <Button
                      type="button"
                      onClick={() => handleAddSection("hero")}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Hero
                    </Button> */}
                    <Button
                      type="button"
                      onClick={() => handleAddSection("cards")}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Cards
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleAddSection("cta")}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add CTA
                    </Button>
                  </div>
                  <ScrollArea className="h-[calc(100vh-200px)] shadow-none">
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable
                        droppableId="sections"
                        className="shadow-none"
                        style={{ boxShadow: "none" }}
                      >
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="shadow-none"
                            style={{ boxShadow: "none" }}
                          >
                            {formData.sections.map((section, index) => (
                              <Draggable
                                key={section.id}
                                draggableId={section.id.toString()}
                                index={index}
                                className="mb-4 shadow-none"
                                style={{ boxShadow: "none" }}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className="mb-4 bg-none shadow-none"
                                    style={{ boxShadow: "none" }}
                                  >
                                    <Accordion
                                      type="single"
                                      collapsible
                                      className="bg-transparent !shadow-none border rounded-lg"
                                    >
                                      <AccordionItem
                                        value={section.id.toString()}
                                        className="bg-white border-none !shadow-none rounded-lg"
                                      >
                                        <AccordionTrigger className="hover:bg-primary h-10 hover:no-underline">
                                          <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                              <span
                                                {...provided.dragHandleProps}
                                              >
                                                <GripVertical className="mr-2 h-5 w-5" />
                                              </span>
                                              <span className="font-medium capitalize">
                                                {section.type} Section
                                              </span>
                                            </div>
                                            <Button
                                              type="button"
                                              variant="ghost"
                                              size="sm"
                                              onClick={() =>
                                                handleRemoveSection(section.id)
                                              }
                                            >
                                              <Trash2 className="h-4 w-4" />
                                            </Button>
                                          </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="w-full px-1">
                                          <div className="space-y-4 px-1 py-4">
                                            <Select
                                              value={section.design}
                                              onValueChange={(value) =>
                                                handleSectionDesignChange(
                                                  section.id,
                                                  value
                                                )
                                              }
                                            >
                                              <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select design" />
                                              </SelectTrigger>
                                              <SelectContent className="">
                                                {componentDesigns[
                                                  section.type
                                                ].map((design) => (
                                                  <SelectItem
                                                    key={design.id}
                                                    value={design.id}
                                                  >
                                                    {design.name}
                                                  </SelectItem>
                                                ))}
                                              </SelectContent>
                                            </Select>

                                            {/* {section.type === "cards" && (
                                              <Select
                                                value={section.variation}
                                                onValueChange={(value) =>
                                                  handleSectionVariationChange(
                                                    section.id,
                                                    value
                                                  )
                                                }
                                              >
                                                <SelectTrigger className="w-full">
                                                  <SelectValue placeholder="Select Card Variation" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                  <SelectItem value="card1">
                                                    Card 1
                                                  </SelectItem>
                                                  <SelectItem value="card2">
                                                    Card 2
                                                  </SelectItem>
                                                  <SelectItem value="card3">
                                                    Card 3
                                                  </SelectItem>
                                                </SelectContent>
                                              </Select>
                                            )} */}

                                            {renderSectionPreview(section)}
                                            <ComponentForm
                                              type={section.type}
                                              design={section.design}
                                              content={section.content}
                                              onChange={(content) =>
                                                handleSectionContentChange(
                                                  section.id,
                                                  content
                                                )
                                              }
                                            />
                                          </div>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="preview">
            <Card>
              <CardContent className="p-6">
                <div
                  className="absolute right-20 cursor-pointer bg-content rounded-sm px-1 py-1"
                  onClick={() => setExpandView(true)}
                >
                  <Icon icon={"material-symbols:expand-content"} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Page Preview</h2>
                <div className="space-y-8 border p-4 rounded-lg">
                  <h1 className="text-4xl font-bold">
                    {formData.title || "Page Title"}
                  </h1>
                  <p className="text-xl">
                    {formData.description || "Page Description"}
                  </p>
                  {formData.sections.map((section) => (
                    <div key={section.id}>
                      {componentDesigns[section.type]
                        .find((d) => d.id === section.design)
                        ?.component(section.content)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 w-full">
          <Button type="submit" className="w-full">
            Save Page
          </Button>
        </div>
      </form>
      {expandView && (
        <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto pretty-scroll">
          {formData.sections.map((section) => (
            <div key={section.id}>
              {componentDesigns[section.type]
                .find((d) => d.id === section.design)
                ?.component(section.content)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
