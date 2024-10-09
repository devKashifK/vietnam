import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { featuresPage } from "../provincial-nominee-programs/alberta-immigration-aaip";
import { Feature } from "@/components/ui/cards-set";

export default function Lmia() {
  return (
    <div className="w-full h-full">
      <div className="w-full px-4">
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiOGMxMThiMGYtNDRmMi00MzU1LThiNTItYWNjNzFkYzYyOTA0IiwidCI6Ijg5ZTUzNjdhLTQ4ZTUtNGQzYy05ZTEzLWZmNTA4OTZlNDJlMCJ9"
          width="100%"
          height="600px"
          frameBorder="0"
          title="Power BI Report"
        ></iframe>
      </div>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-background rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Canada Immigration Program
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-background rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                LMIA
              </h3>

              <p className="text-sm text-black/60 text-left">
                LMIA Map cho phép người dùng lọc kết quả theo nhiều tiêu chí
                khác nhau như: tỉnh bang, ngành nghề, thời gian công ty được cấp
                LMIA, số lượng LMIA được cấp. LMIA Map được thiết kế để hỗ trợ
                các ứng viên nước ngoài đang tìm kiếm cơ hội việc làm tại Canada
                bằng cách cung cấp thông tin minh bạch, rõ ràng về các công ty
                và tỉnh bang có nhu cầu tuyển dụng lao động quốc tế. Với công cụ
                này, các ứng viên có thể dễ dàng: Lên kế hoạch cho hành trình
                nhập cư: tìm tỉnh bang có nhiều cơ hội LMIA nhất, từ đó có thể
                tập trung vào khu vực phù hợp với mục tiêu nghề nghiệp của họ.
                Nắm bắt cơ hội nhanh chóng: Thay vì tìm kiếm thông tin rời rạc
                trên nhiều nguồn, ứng viên có thể sử dụng LMIA Map như một nền
                tảng duy nhất để truy cập dữ liệu về công ty, ngành nghề, và
                tỉnh bang cấp LMIA. Tự tin hơn trong quy trình xin LMIA: Với các
                thông tin chi tiết và cập nhật, công cụ giúp ứng viên hiểu rõ
                hơn về cơ hội và khả năng được cấp LMIA của mình. Temporary
                Foreign Worker Program (TFWP): Positive Labour Market Impact
                Assessment (LMIA) Employers List – Open Government portal.
                (n.d.). https://open.canada.ca
              </p>
            </div>
          </div>
        </Glass>
      </Container>

      <CTADefault
        title="Chúng tôi có thể giúp bạn
"
        subtitle={
          <p className="text-xl text-white/90">
            iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình nhiều
            thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi trở thành
            đối tác đáng tin cậy của bạn trong hành trình này.
            <br />
            Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư Canada,
            sẳn sàng chào đón những cơ hội mới tại đây.
          </p>
        }
        image={"/service.jpg"}
      />
    </div>
  );
}
