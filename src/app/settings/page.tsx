import OverviewForm from "@/components/forms/OverviewForm";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div id="settingsPage">
      <h1 className="text-3xl font-semibold mb-5">Settings</h1>
      <div className="tabMain">
        <Tabs defaultValue="overview">
          <TabsList className="mb-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sociallinks">Social Links</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <OverviewForm />
          </TabsContent>
          <TabsContent value="sociallinks">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            doloremque commodi odio nisi rerum, dolorem accusantium natus
            explicabo aperiam amet quam animi fugiat ipsum doloribus ipsam
            placeat voluptate reiciendis quae.
          </TabsContent>
          <TabsContent value="teams">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            doloremque commodi odio nisi rerum, dolorem accusantium natus
            explicabo aperiam amet quam animi fugiat ipsum doloribus ipsam
            placeat voluptate reiciendis quae.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
