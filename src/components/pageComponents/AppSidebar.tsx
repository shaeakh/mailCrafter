import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";

import logo from "../../assets/logo.png";

interface Template {
  id: string;
  label: string;
  html: string;
}

interface Props {
  templates: Template[];
  selectedTemplateId: string;
  onSelect: (html: string) => void;
}

const AppSidebar = ({ templates, selectedTemplateId, onSelect }: Props) => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Templates</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="w-full flex justify-center py-2">
                <img className="w-30 h-auto" src={logo} alt="" />
              </div>
              {templates.map((template) => (
                <SidebarMenuItem key={template.id}>
                  <SidebarMenuButton
                    isActive={selectedTemplateId === template.id}
                    onClick={() => onSelect(template.html)}
                  >
                    {template.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
