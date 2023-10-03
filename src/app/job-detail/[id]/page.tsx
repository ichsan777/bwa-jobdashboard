import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface JobDetailPageProps {}

const JobDetailPage: FC<JobDetailPageProps> = ({}) => {
  return (
    <div id="JobDetailPage">
      <div className="inline-flex items-center gap-5 mb-5 backSection">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-1">Brand Designer</h1>
          <div>
            <p>Design . Full-Time . 1/10 Hired</p>
          </div>
        </div>
      </div>

      <div className="tabSection">
        <Tabs defaultValue="applicants">
          <TabsList className="mb-5">
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="jobdetails">Job Details</TabsTrigger>
          </TabsList>
          <TabsContent value="applicants">
            <Applicants />
          </TabsContent>
          <TabsContent value="jobdetails">
            <JobDetail />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobDetailPage;
