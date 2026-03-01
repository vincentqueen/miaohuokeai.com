'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Target } from 'lucide-react';
export default function PricingPage() {
  const CTA_FORM_URL = 'https://easevision.feishu.cn/share/base/form/shrcnsfdHd9pTbe3loYp2YI67mh';

  const plans = [
    {
      name: '秒获客AI-短期全能获客',
      badge: '30天内无效全额退款',
      summary: 'AI+运营陪跑，一套体系短期全能获客',
      description: '适合希望短期内跑通获客闭环并降本提效的企业',
      icon: Sparkles,
      features: [
        '阶段化交付：准备阶段+4周落地+全年支持',
        '秒Claw超级AI智能员工：自动化运营与销售指导',
        '7×24智能客服：全渠道接入+销冠话术',
        '数字人本地部署：一次拍摄，批量生成内容',
        'AI内容工厂+AI CRM：内容生产到转化闭环',
        '双轨服务：线下培训+线上实时答疑',
        '营销获客体系搭建与教学'
      ],
      popular: true
    },
    {
      name: '秒获客AI-营销全能获客',
      badge: '30天内无效全额退款',
      summary: '五阶段陪跑，打通多渠道与销售转化',
      description: '适合希望长期系统化增长、打通销售与营销的企业',
      icon: Crown,
      features: [
        '五阶段全景规划：基建→见效→多渠道→销售与营销→全年支持',
        '秒Claw+智能客服+数字人+内容工厂+AI CRM',
        '直播与投放策略制定、复盘迭代',
        '线下转化赋能：销售SOP/设计成交/利润管理',
        '会员知识库持续更新',
        '投放返点对接与成本优化'
      ],
      popular: false
    },
    {
      name: '秒获客AI-投放获客',
      badge: '30天内无效全额退款',
      summary: '以投放为核心的获客路径，快速起量与优化',
      description: '适合以投放为核心、希望快速起量并稳定获客的企业',
      icon: Target,
      features: [
        '投放运营集中课程教学',
        '投放团队介入执行与优化',
        '智能客服承接与客资同步',
        'AI内容工厂与数字员工协同',
        '直播话术工厂与复盘教学',
        '投放返点对接'
      ],
      popular: false,
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
                方案说明与报价入口
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                先看清交付内容与适用企业，再领取定制化方案与报价
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
                        <div className="mb-3 flex justify-center">
                          <span className="px-3 py-1 rounded-full bg-secondary/30 border border-border text-xs text-foreground">{plan.badge}</span>
                        </div>
                        <div className="mb-4 min-h-[3rem] flex items-center justify-center">
                          <span className="text-xs lg:text-sm font-bold text-foreground text-center leading-relaxed">{plan.summary}</span>
                        </div>
                        <CardDescription className="text-foreground text-base">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <ul className="space-y-3 mb-8 flex-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <a href={CTA_FORM_URL} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300">
                              领取定制化方案
                            </Button>
                          </a>
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
                    <CardTitle className="text-lg text-foreground">AI会不会回复不灵活？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      系统基于企业知识库定制，使用最新大模型基底深度调教，出资率只会比人工更高。
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">多久见效？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      30天内无效全额退款（首月无效退款），并配合分阶段复盘与策略迭代，确保可持续提升效果。
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card/80 to-muted/80 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">你们的产品和其它的有什么区别？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      我们交付的不只是工具，而是可复用的获客体系：从内容生产、客户承接、CRM管理、到销售转化与自动化运营，形成闭环并持续迭代。
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
