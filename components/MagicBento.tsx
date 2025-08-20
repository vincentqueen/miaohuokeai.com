import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const cardData: BentoCardProps[] = [
  {
    color: "#060010",
    title: "AI智能客服",
    description: "AI销冠上岗，7×24小时接待客户，两三句就让客户留下客资",
    label: "智能客服",
  },
  {
    color: "#060010",
    title: "CRM客户管理系统",
    description: "全渠道客户信息整合，销售数据可视化分析",
    label: "CRM系统",
  },
  {
    color: "#060010",
    title: "AI数字员工",
    description: "自研AI数字员工-为企业专属定制，为企业解决全域全流程获客难题",
    label: "数字员工",
  },
  {
    color: "#060010",
    title: "AI内容工厂",
    description: "批量生成优质内容，抖音小红书一键发布",
    label: "内容工厂",
  },
  {
    color: "#060010",
    title: "数字人短视频",
    description: "真人拍摄一次，AI生成无限视频内容",
    label: "数字人视频",
  },
];

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  // enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  const handleMouseEnter = useCallback(() => {
    if (disableAnimations) return;
    isHoveredRef.current = true;
    animateParticles();

    if (enableTilt && cardRef.current) {
      gsap.to(cardRef.current, {
        rotationY: 5,
        rotationX: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [disableAnimations, animateParticles, enableTilt]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    clearAllParticles();

    if (enableTilt && cardRef.current) {
      gsap.to(cardRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [clearAllParticles, enableTilt]);

  const handleClick = useCallback(() => {
    if (!clickEffect || !cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  }, [clickEffect]);

  useEffect(() => {
    const magnetismAnimation = magnetismAnimationRef.current;
    return () => {
      clearAllParticles();
      magnetismAnimation?.kill();
    };
  }, [clearAllParticles]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        ...style,
        background: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, var(--glow-intensity, 0)) 0%, transparent var(--glow-radius, 300px))`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

const MagicBento: React.FC<BentoProps> = ({
  // textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enableSpotlight || isMobile) return;
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      if (enableBorderGlow) {
        const cards = containerRef.current?.querySelectorAll('.bento-card');
        cards?.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const distance = Math.sqrt(
            Math.pow(e.clientX - (cardRect.left + cardRect.width / 2), 2) +
            Math.pow(e.clientY - (cardRect.top + cardRect.height / 2), 2)
          );
          
          const { fadeDistance } = calculateSpotlightValues(spotlightRadius);
          const glow = Math.max(0, 1 - distance / fadeDistance);
          
          updateCardGlowProperties(
            card as HTMLElement,
            e.clientX,
            e.clientY,
            glow,
            spotlightRadius
          );
        });
      }
    },
    [enableSpotlight, enableBorderGlow, spotlightRadius, isMobile]
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6"
      onMouseMove={handleMouseMove}
      style={{
        background: enableStars ? `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
        ` : undefined,
      }}
    >
      {cardData.map((card, index) => {
        // 创建拼图式布局：不同卡片占用不同的网格空间
        const getCardClassName = (index: number) => {
           const baseClass = "bento-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300";
           switch (index) {
             case 0: // AI智能客服 - 占据2列
               return `${baseClass} lg:col-span-2`;
             case 1: // CRM系统 - 占据1列
               return `${baseClass}`;
             case 2: // AI数字员工 - 占据1列，但高度较大
               return `${baseClass} lg:row-span-2`;
             case 3: // AI内容工厂 - 占据2列
               return `${baseClass} lg:col-span-2`;
             case 4: // 数字人短视频 - 占据2列
               return `${baseClass} lg:col-span-2`;
             default:
               return baseClass;
           }
         };
        
        return (
        <ParticleCard
          key={index}
          className={getCardClassName(index)}
          disableAnimations={disableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              {index === 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-6 h-6" aria-hidden="true">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              )}
              {index === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-6 h-6" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                  <path d="M3 12a9 3 0 0 0 18 0"></path>
                </svg>
              )}
              {index === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              )}
              {index === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory w-6 h-6" aria-hidden="true">
                  <path d="M12 16h.01"></path>
                  <path d="M16 16h.01"></path>
                  <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              )}
              {index === 4 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video w-6 h-6" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <path d="M12 18v-6l4 3-4 3z"></path>
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-lg">{card.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              {index === 0 && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">高情商回复，复杂问题回复</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">接入抖音后台，全天候无人回复，自动获取客资</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">自动调用实时更新的知识库，精准人性回答</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">客资自动写入AI CRM系统，实现快速跟进与可视化管理</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">针对行业与企业独家定制，回复精准如金牌销售</p>
                  </div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">客户信息全记录：完整跟踪客户生命周期</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">销售数据可视化：实时分析转化率和业绩表现</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">多端同步：手机/电脑实时查看，随时随地跟进</p>
                  </div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">秒获客AI数字员工：对话式命令，手机电脑多端使用</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">企业定制化私有知识库，专属模型能力调优</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">小红书数字员工：爆款笔记生成、代码生图、海报设计</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">抖音数字员工：脚本创作、爆款仿拍、直播运营专家</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">线索投放专家：精准投放策略，提升获客转化率</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">销售冠军：智能分析通话录音，给出专业销售建议</p>
                  </div>
                </>
              )}
              {index === 3 && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">批量生成：抖音/小红书内容、海报一键生成</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">智能仿写：输入链接即可生成同类优质内容</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">多平台发布：支持各大社交媒体平台同步发布</p>
                  </div>
                </>
              )}
              {index === 4 && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">真人拍摄一次：AI生成无限视频内容</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">24类数字模特：产品介绍、活动宣传多场景应用</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">本地部署：数据安全，支持个性化定制</p>
                  </div>
                </>
              )}
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
              <h4 className="text-green-300 font-semibold mb-2">效果案例</h4>
              {index === 0 && (
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm leading-relaxed">家居品牌「金卡瑞」：抖音咨询10秒响应，留资率提升320%</p>
                  <p className="text-gray-300 text-sm leading-relaxed">家居品牌「英伦匠人」：凌晨自动聊，老板终于能睡觉</p>
                  <p className="text-gray-300 text-sm leading-relaxed">板材品牌「大参林」：同时接待5组咨询，一天聊出30个客资</p>
                </div>
              )}
              {index === 1 && (
                <p className="text-gray-300 text-sm leading-relaxed">板材品牌「大参林」：10余个销售分配客资井然有序，老板一眼查看数据报表情况</p>
              )}
              {index === 2 && (
                <p className="text-gray-300 text-sm leading-relaxed">家居品牌「金卡瑞」：老板一人轻松拿捏，每月省去上万元</p>
              )}
              {index === 3 && (
                <p className="text-gray-300 text-sm leading-relaxed">服装品牌「太平鸟」：日产100条优质内容，内容制作效率提升500%</p>
              )}
              {index === 4 && (
                <p className="text-gray-300 text-sm leading-relaxed">科技公司「小米」：数字人视频播放量提升300%，节省80%拍摄成本</p>
              )}
            </div>
          </div>
        </ParticleCard>
        );
      })}
    </div>
  );
};

export default MagicBento;