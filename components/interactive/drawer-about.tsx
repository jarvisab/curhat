import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Info, LucideGithub } from "lucide-react";

interface DrawerContentProps {
  title: string;
  description: string;
  links?: string;
  content: string[];
}

interface AboutDrawerProps {
  data: DrawerContentProps;
}

const AboutDrawer: React.FC<AboutDrawerProps> = ({ data }) => {
  const { title, description, links, content } = data;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Info className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="md:w-1/2 mx-auto">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {content.map((item, index) => (
              <p key={index} className="mb-4">{item}</p>
            ))}
          </div>
          <DrawerFooter>
            {links && (
              <Button asChild>
                <a href={links} target="_blank" rel="noopener noreferrer">
                  <LucideGithub className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AboutDrawer;