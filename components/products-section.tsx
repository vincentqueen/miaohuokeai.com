'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
// import { BeamsBackground } from '@/components/ui/beams-background';
import { ArrowRight, CheckCircle, Zap, Users, Factory, Video, Bot, Rocket } from 'lucide-react';
import MagicBento from './MagicBento';

// 主要产品体系
const mainProducts = [
  {
    id: 1,
    title: '全域AI赋能获客体系（企业版）',
    description: 'AI+人工双轨服务，全流程获客解决方案',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-blue-700 to-purple-500',
    features: ['AI智能客服', 'CRM客户管理', '内容工厂', '数字人视频', '全程陪跑']
  },
  {
    id: 2,
    title: '全域营销赋能陪跑体系（企业版）',
    description: '专业团队手把手教学，确保落地效果',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-blue-600 to-purple-400',
    features: ['线下培训', '实时答疑', '效果复盘', '策略优化', '长期支持']
  },
  {
    id: 3,
    title: 'AI赋能+短期赋能陪跑（企业版）',
    description: '快速启动，短期见效的轻量化解决方案',
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-blue-500 to-purple-300',
    features: ['快速部署', '短期培训', '核心功能', '基础陪跑', '效果保障']
  }
];

// AI产品详细介绍
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
  return (
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
              className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent"
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
      <div className="relative z-10 pb-16">
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
            <p className="text-gray-400 text-lg">
              三大核心AI产品，全面提升企业获客效率
            </p>
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

      {/* 全域赋能获客陪跑服务介绍 */}
      <div className="relative z-10 pb-16">
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
            <p className="text-gray-400 text-lg">
              专业团队全程陪跑，确保AI工具落地见效
            </p>
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

      {/* AI赋能+短期赋能陪跑介绍 */}
      <div className="relative z-10 pb-16">
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
              轻量化解决方案，快速启动，短期见效
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">快速启动方案</h3>
                        <p className="text-gray-400">30天快速见效，适合初次尝试AI获客的企业</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="text-white font-semibold">快速部署（3天）</h4>
                          <p className="text-gray-400 text-sm">AI客服、CRM系统快速上线</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="text-white font-semibold">核心培训（7天）</h4>
                          <p className="text-gray-400 text-sm">重点功能培训，快速上手</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="text-white font-semibold">效果跟踪（20天）</h4>
                          <p className="text-gray-400 text-sm">数据监控，策略调优</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4">服务包含</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">AI智能客服基础版</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">CRM客户管理系统</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">内容生成工具</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">30天专属陪跑</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">效果保障承诺</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">￥9,800</div>
                        <div className="text-gray-400 text-sm">30天快速启动</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 服务承诺 */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              服务承诺
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">双轨服务</h3>
                <p className="text-gray-300">线下培训+线上实时答疑</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-white mb-2">效果保障</h3>
                <p className="text-gray-300">首月无效全额退款</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-white mb-2">持续赋能</h3>
                <p className="text-gray-300">持续复盘+策略迭代</p>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              领取定制化解决方案
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}