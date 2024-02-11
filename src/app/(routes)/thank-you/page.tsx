"use client";

import Container from "@/components/ui/container";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="">
      <Container className="pl-8">
        <div className="flex flex-col text-4xl font-semibold pt-12 items-center justify-center">
          <CheckCircle size={64} color="green"/>
          <h1 className="pt-5">Hvala na narudžbi</h1>
        </div>
        <div className="w-1/2 bg-gray-400">
            <ul>
                <li>d</li>
                <li>d</li>
                <li>d</li>
            </ul>
        </div>
      </Container>
    </div>
  );
};

export default ThankYouPage;
