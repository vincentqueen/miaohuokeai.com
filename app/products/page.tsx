import { ProductsSection } from "@/components/products-section";
import { Navigation } from "@/components/navigation";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProductsSection />
    </div>
  );
}

export const metadata = {
  title: "产品介绍 - 秒获客AI",
  description: "AI智能客服、AI CRM客户管理、AI内容工厂、数字人短视频制作、全流程获客赋能陪跑",
};