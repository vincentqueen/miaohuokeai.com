'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
// import { BeamsBackground } from '@/components/ui/beams-background';
import { ArrowRight, CheckCircle, Zap, Users, Rocket, X } from 'lucide-react';
import MagicBento from './MagicBento';
import { Navigation } from './navigation';

// 主要产品体系
const mainProducts = [
  {
    id: 1,
    title: '全域AI赋能获客体系',
    description: 'AI+人工双轨服务，全流程获客解决方案',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-blue-600 to-purple-600',
    features: ['AI智能客服', 'CRM客户管理', '内容工厂', '数字人视频', '全程陪跑']
  },
  {
    id: 2,
    title: 'AI赋能+短期赋能陪跑',
    description: '快速启动，短期见效的轻量化解决方案',
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-blue-500 to-blue-700',
    features: ['快速部署', '短期培训', '核心功能', '基础陪跑', '效果保障']
  },
  {
    id: 3,
    title: '全域营销赋能陪跑体系',
    description: '专业团队手把手教学，确保落地效果',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-blue-700 to-purple-700',
    features: ['线下培训', '实时答疑', '效果复盘', '策略优化', '长期支持']
  }
];

// AI产品详细介绍
/*
const aiProducts = [
  {
    id: 1,
    title: 'AI智能客服+CRM系统',
    description: '7×24小时高情商自动回复，留资率提升300%',
    icon: <Bot className="w-6 h-6" />,
    features: [
      '智能客服：7×24小时模拟销冠话术，高情商回复复杂问题',
      '全渠道接入：抖音/小红书实时抓取客资，0秒推送销售',
      'AI CRM：客户信息全记录，销售数据可视化分析',
      '多端同步：手机/电脑实时查看，随时随地跟进客户'
    ],
    case: '家居品牌「金卡瑞」：抖音咨询10秒响应，留资率提升320%'
  },
  {
    id: 2,
    title: 'AI数字员工',
    description: '多平台运营精力不足？数字员工帮你搞定',
    icon: <Users className="w-6 h-6" />,
    features: [
      '小红书数字员工：爆款笔记生成/仿写/封面设计/内容下载',
      '抖音数字员工：脚本创作/爆款仿拍/直播运营/投流优化',
      '销售数字员工：智能分析通话录音，给出销售建议',
      '企业级服务：法务咨询、营销顾问等增值服务'
    ],
    case: '千次曝光成本降低40%，企业销售能力全面提升'
  },
  {
    id: 3,
    title: 'AI内容工厂 + 数字人短视频',
    description: '一键生成百条内容，数字人替代真人拍摄',
    icon: <Factory className="w-6 h-6" />,
    features: [
      '批量生成：抖音/小红书内容、海报、投放计划一键生成',
      '智能仿写：输入链接即可生成同类优质内容',
      '数字人本地部署：老板/员工仅需1次拍摄，生成数百条视频',
      '24类数字模特：产品介绍、活动宣传等多场景应用'
    ],
    case: '1名员工管理10个账号，日更百条优质内容，节省80%拍摄时间'
  }
];
*/

// 秒获客AI赋能获客体系流程
const aiProcessSteps = [
  { step: '准备', title: '准备阶段', description: '企业基础信息了解，反馈企业配置会议' },
  { step: '第一周', title: '第一阶段', description: '企业初步搭建，智能客服开发' },
  { step: '第二周', title: '第二阶段', description: '数字人部署，数字人使用流程教学' },
  { step: '第三周', title: '第三阶段', description: 'AI内容工厂搭建与教学，AI CRM搭建与教学' },
  { step: '第四周', title: '第四阶段', description: '智能客服上线，数字员工' },
  { step: '第五周', title: '第五阶段', description: 'AI企业应用培训，AI企业经营培训' }
];

export function ProductsSection() {
  const router = useRouter();
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              产品体系
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              基于AI智能客服、内容工厂、数字人视频、专业陪跑服务等核心产品，
              为企业提供从获客到转化的完整解决方案，实现降本提效和业绩增长
            </p>
          </motion.div>
        </div>
      </div>

      {/* 主要产品体系 */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              主要产品体系
            </h2>
            <p className="text-gray-400 text-lg">
              三大核心产品体系，满足不同企业的获客需求
            </p>
          </motion.div>
          
          <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:border-gray-600/60">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center text-2xl shadow-lg mb-4`}>
                        {product.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        {product.description}
                      </CardDescription>
                      {product.id === 1 && (
                        <div className="mt-3 px-3 py-1 bg-slate-700 text-gray-200 text-xs font-medium rounded-full inline-block border border-slate-600">
                          适合有线上获客经验企业
                        </div>
                      )}
                      {product.id === 2 && (
                        <div className="mt-3 px-3 py-1 bg-slate-700 text-gray-200 text-xs font-medium rounded-full inline-block border border-slate-600">
                          适合0基础企业短期见效并降本增效
                        </div>
                      )}
                      {product.id === 3 && (
                        <div className="mt-3 px-3 py-1 bg-slate-700 text-gray-200 text-xs font-medium rounded-full inline-block border border-slate-600">
                          适合0基础企业长期目标见效
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300`}
                      onClick={() => {
                        let targetId = '';
                        if (product.id === 1) {
                          targetId = 'ai-system-detail';
                        } else if (product.id === 2) {
                          targetId = 'ai-short-term-detail';
                        } else if (product.id === 3) {
                          targetId = 'full-service-detail';
                        }
                        const element = document.getElementById(targetId);
                        if (element) {
                          const elementPosition = element.offsetTop;
                          const offsetPosition = elementPosition - 100; // 导航栏高度偏移
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      了解详情
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedGroup>
        </div>
      </div>

      {/* 全域AI赋能流程 */}
      <div id="ai-system-detail" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              秒获客AI赋能获客体系
            </h2>
            <p className="text-gray-400 text-lg">
              六个阶段系统化实施，确保AI获客体系落地见效
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProcessSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < aiProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI产品详细介绍 */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI产品详细介绍
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              五大核心AI产品，助力从内容生产客户承接到销售转化全流程获客
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://easevision.feishu.cn/share/base/form/shrcnsfdHd9pTbe3loYp2YI67mh', '_blank')}
              >
                预约展示
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </motion.div>
        </div>
      </div>

      {/* AI赋能+短期赋能陪跑介绍 */}
      <div id="ai-short-term-detail" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI赋能+短期赋能陪跑
            </h2>
            <p className="text-gray-400 text-lg">
              AI工具使用+团队线下教学，带你快速拿到结果
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">快速启动方案</h3>
                        <p className="text-gray-400">30天快速见效，适合0线上获客基础企业</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="text-white font-semibold">快速部署（3天）</h4>
                          <p className="text-gray-400 text-sm">AI客服、CRM系统快速上线</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="text-white font-semibold">核心培训（7天）</h4>
                          <p className="text-gray-400 text-sm">重点功能培训，快速上手</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="text-white font-semibold">效果跟踪与调优（50天）</h4>
                          <p className="text-gray-400 text-sm">数据监控，策略调优</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="text-white font-semibold">全年产品支持</h4>
                          <p className="text-gray-400 text-sm">持续技术支持与产品更新</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4">服务包含</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">AI智能客服</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">CRM客户管理搭建</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">AI数字员工</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">内容工厂+数字人本地部署</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">60天专属陪跑</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">投放与直播教学</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="text-center">
                        <Button 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-1"
                          onClick={() => router.push('/contact')}
                        >
                          联系销售了解更多详情
                        </Button>
                        <div className="text-gray-400 text-sm">定制化方案报价</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 全域赋能获客陪跑服务介绍 */}
      <div id="full-service-detail" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              全域赋能获客陪跑服务
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              专业团队针对企业定制化陪跑，助力企业实现真实转化
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => router.push('/contact')}
            >
              联系我们
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-400" />
                    线下培训服务
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">系统化培训</h4>
                        <p className="text-gray-400 text-sm">AI工具使用、获客策略、转化技巧全覆盖</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">实操演练</h4>
                        <p className="text-gray-400 text-sm">现场指导，手把手教学，确保学会为止</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">定制方案</h4>
                        <p className="text-gray-400 text-sm">根据企业特点制定专属获客策略</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Zap className="w-8 h-8 text-purple-400" />
                    线上陪跑服务
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">实时答疑</h4>
                        <p className="text-gray-400 text-sm">专属群组7×24小时在线解答问题</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">效果复盘</h4>
                        <p className="text-gray-400 text-sm">定期数据分析，持续优化获客策略</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">长期支持</h4>
                        <p className="text-gray-400 text-sm">持续跟进服务，确保长期稳定效果</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 服务承诺 */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              服务承诺
            </h2>
            <p className="text-gray-400 text-lg">
              我们承诺为每一位客户提供最优质的服务体验
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/50 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-3xl">🎯</div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">双轨服务</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">线下培训+线上实时答疑</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm text-center hover:border-green-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/20">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/50 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-3xl">💰</div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">效果保障</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">首月无效全额退款</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm text-center hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/50 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-3xl">🔄</div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">持续赋能</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">持续复盘+策略迭代</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                onClick={() => setShowQRCode(true)}
              >
                领取定制化解决方案
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 微信二维码弹窗 */}
      {showQRCode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowQRCode(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQRCode(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                扫码获取定制化方案
              </h3>
              <p className="text-gray-600 mb-6">
                添加企业微信，获取专属AI获客解决方案
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <img
                  src="/微信二维码.jpg"
                  alt="微信二维码"
                  className="w-48 h-48 mx-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="text-sm text-gray-500">
                <p>扫描二维码或保存图片</p>
                <p>专业顾问1对1服务</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* 版权信息 */}
      <div className="bg-gray-900/80 border-t border-gray-700/50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 成都一郅映画文化传媒有限公司版权所有
          </p>
        </div>
      </div>
      </div>
    </>
  );
}