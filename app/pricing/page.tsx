'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: '全域AI赋能获客体系',
        price: 'AI+人工双轨服务，全流程获客解决方案',
      description: '适合有线上获客经验企业',
      icon: Star,
      features: [
        '智能客服搭建部署',
        '数字人部署与使用教学',
        '内容工厂与CRM搭建',
        '专属定制数字员工',
        'AI全流程打法',
        '线上线下全方位支持'
      ],
      buttonText: '联系我们',
      popular: false
    },
    {      name: 'AI赋能+短期赋能陪跑',
        price: '专业团队手把手教学，确保落地效果',      description: '适合0基础企业短期见效并降本增效',      icon: Zap,      features: [
        '企业获客全流程短跑',
        '智能客服搭建部署',
        '数字人部署与使用教学',
        '内容工厂与CRM搭建',
        '专属定制数字员工',
        'AI全流程打法',
        '线上线下全方位支持'
      ],      buttonText: '联系我们',      popular: true    },
    {
      name: '全域营销赋能陪跑体系',
        price: '快速启动，短期见效的轻量化解决方案',
      description: '适合0基础企业长期目标见效',
      icon: Crown,
      features: [
        '线下培训',
        '实时答疑',
        '效果复盘',
        '策略优化',
        '长期支持'
      ],
      buttonText: '联系我们',
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
        {/* Header */}
        <div className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 title-gradient">
                产品定价
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                选择最适合您的方案，开启AI赋能之旅
              </p>
            </motion.div>

            {/* 定价卡片 */}
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative ${plan.popular ? 'md:scale-105' : ''} flex`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-primary/80 to-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          最受欢迎
                        </span>
                      </div>
                    )}
                    <Card className={`w-full flex flex-col bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 ${
                      plan.popular ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
                    }`}>
                      <CardHeader className="text-center pb-6 flex-shrink-0">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full icon-bg-blue flex items-center justify-center">
                          <IconComponent className="w-8 h-8 icon-feature" />
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl text-foreground mb-3 leading-tight">{plan.name}</CardTitle>
                        <div className="mb-4 min-h-[3rem] flex items-center justify-center">
                          <span className="text-xs lg:text-sm font-bold text-foreground text-center leading-relaxed">{plan.price}</span>
                        </div>
                        <CardDescription className="text-foreground text-base">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <ul className="space-y-3 mb-8 flex-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm leading-relaxed">{feature === '全程陪跑' ? 'AI数字员工' : feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Link href="/contact">
                            <Button
                              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300"
                            >
                              {plan.buttonText}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* 常见问题 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 title-gradient-alt">
                常见问题
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">我能掌握AI使用吗？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      当然可以！我们提供全流程指导和手把手教学，通过流程化培训体系，确保企业任何人都能轻松掌握AI工具的使用方法。
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">陪跑是你们给我们做视频吗？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      不是的，我们提供的是全流程教学服务。我们将底层逻辑与落地效果双重交付，确保企业内部团队能够独立产出优质内容和效果。
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">对于效果有保障吗？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      当然有保障！我们郑重承诺：第一个月内如果没有达到预期效果，我们将提供全额退款保障。
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">你们的产品和其它的有什么区别？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      我们的产品针对行业深度定制，结合顶尖运营老师的实战经验，专注于最终交付结果。我们深知：获客只是开始，转化才是结果！
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="bg-card/80 border-t border-border py-6 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 成都一郅映画文化传媒有限公司版权所有
            </p>
          </div>
        </div>
      </div>
    </>
  );
}