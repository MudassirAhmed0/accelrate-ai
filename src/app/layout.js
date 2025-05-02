import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const metadata = getStaticMetaData({
  title: "Accelerate AI || Home Page",
  description: `By 2030, AI will add $15.7 trillion to the global economy. At Accelerate-AI, we help you claim your share by integrating AI and automation into your business processes—quickly and effectively.`,
  isRobotFollow: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* {children} */}

      </body>
    </html>
  );
}
