import React, { FC } from "react";
import { Separator } from "../ui/separator";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="formTitle my-5">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-gray-400">{subtitle}</div>
      </div>

      <Separator />
    </>
  );
};

export default TitleForm;
