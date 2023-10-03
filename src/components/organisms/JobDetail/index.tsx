import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

interface JobDetailProps {}

const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div id="jobDetailTable">
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-semibold">Description</h2>
            <div className="text-grey-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, culpa aut placeat minima cum aspernatur delectus
                maiores ad perferendis? Eveniet iste odio dolor facilis quod
                consequuntur temporibus, voluptas deserunt nobis!
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Responsibilities</h2>
            <div className="text-grey-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, culpa aut placeat minima cum aspernatur delectus
                maiores ad perferendis? Eveniet iste odio dolor facilis quod
                consequuntur temporibus, voluptas deserunt nobis!
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Who You Are</h2>
            <div className="text-grey-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, culpa aut placeat minima cum aspernatur delectus
                maiores ad perferendis? Eveniet iste odio dolor facilis quod
                consequuntur temporibus, voluptas deserunt nobis!
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Nice-To-Haves</h2>
            <div className="text-grey-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, culpa aut placeat minima cum aspernatur delectus
                maiores ad perferendis? Eveniet iste odio dolor facilis quod
                consequuntur temporibus, voluptas deserunt nobis!
              </p>
            </div>
          </div>
        </div>
        <div className="jobDetailSidebar">
          <h2 className="text-3xl font-semibold">About This Role</h2>

          <div className="bg-gray-200 shadow-md p-3 text-center my-6">
            <p>
              1 <span className="text-gray-500">of 10 capacity</span>
            </p>
            <Progress className="mt-3" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <h3 className="text-gray-500">Apply Before</h3>
              <p className="font-semibold">20 Aug 2023</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-500">Job Posted On</h3>
              <p className="font-semibold">10 Aug 2023</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-500">Job Type</h3>
              <p className="font-semibold">Full-Time</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-500">Salary</h3>
              <p className="font-semibold">$100 - $1000 USD</p>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Categories</h2>

            <div className="space-x-3">
              <Badge className="shadow-md">Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Required Skills</h2>

            <div className="space-x-3">
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge key={i} variant="outline" className="shadow-md">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <h2 className="text-3xl font-semibold">Perks & Benefits</h2>
        <p className="text-gray-500">
          This job comes with several perks and benefits
        </p>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2, 3].map((item: number) => (
            <div key={item} className="p-5 bg-white shadow-md rounded">
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-lg font-semibold mb-3">Full Healthcare</h3>
              <p className="text-gray-500">
                We believe in thriving communities and that starts with our team
                being happy and healthy
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
