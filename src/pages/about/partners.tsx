import { CTADefault } from "@/components/ui/cta";
import React from "react";

export default function Partners() {
  return (
    <div>
      <CTADefault
        image="/ontario.png"
        subtitle="Chúng tôi có thể giúp bạn"
        description={
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-lg text-white">
              iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình
              nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi
              trở thành đối tác đáng tin cậy của bạn trong hành trình này.
            </p>
            <p className="text-lg text-white">
              Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư Canada,
              sẳn sàng chào đón những cơ hội mới tại đây.
            </p>
          </div>
        }
      />
    </div>
  );
}
