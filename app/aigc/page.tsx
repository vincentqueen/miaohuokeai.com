'use client';

import { Navigation } from '@/components/navigation';
import TrueFocus from '@/components/TrueFocus';
import LightRays from '@/components/LightRays';

export default function AIGCPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* 背景光线效果 */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays 
          raysOrigin="top-center" 
          raysColor="#e6f3ff" 
          raysSpeed={1.5} 
          lightSpread={0.8} 
          rayLength={1.2} 
          followMouse={true} 
          mouseInfluence={0.1} 
          noiseAmount={0.1} 
          distortion={0.05} 
          className="custom-rays" 
        />
      </div>
      
      {/* 导航栏 */}
      <div className="relative z-10">
        <Navigation />
      </div>
      
      {/* 主要内容区域 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <TrueFocus 
            sentence="AIGC即将上线" 
            manualMode={false} 
            blurAmount={5} 
            borderColor="#3b82f6" 
            glowColor="rgba(59, 130, 246, 0.6)"
            animationDuration={2} 
            pauseBetweenAnimations={1} 
          />
        </div>
      </div>
    </div>
  );
}