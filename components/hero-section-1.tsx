'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { BeamsBackground } from '@/components/ui/beams-background'

const transitionVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <BeamsBackground intensity="medium" className="min-h-screen">
                <main className="overflow-hidden relative z-10 min-h-screen flex flex-col">
                <section className="flex-1 pb-16 md:pb-24">
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <div
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), linear-gradient(135deg, hsl(var(--background) / 0.8) 0%, hsl(var(--muted) / 0.6) 50%, hsl(var(--border) / 0.4) 100%)'
                                }}
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-screen-2xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="https://work.weixin.qq.com/kfid/kfc73f9dc680411ab11"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">联系我们了解更多</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-foreground/20 dark:bg-muted"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                                        秒获客AI<br />全域赋能企业获客体系
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        线下体系陪跑，真实落地企业可持续获客流<br />
                                        AI超级数字员工，全流程接管运营，客服，内容生产，助理企业降本增效快速落地。
                                    </p>
                                    <div className="mt-6 flex justify-center">
                                        <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm text-foreground shadow-md shadow-black/5">
                                            <ShieldCheck className="size-4 text-primary" />
                                            30天内无效全额退款
                                        </div>
                                    </div>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        ...transitionVariants,
                                        container: {
                                            ...transitionVariants.container,
                                            visible: {
                                                ...transitionVariants.container.visible,
                                                transition: {
                                                    ...transitionVariants.container.visible.transition,
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="/products">
                                                <span className="text-nowrap">开始探索</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="https://easevision.feishu.cn/share/base/form/shrcnsfdHd9pTbe3loYp2YI67mh" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">领取定制化方案</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                ...transitionVariants,
                                container: {
                                    ...transitionVariants.container,
                                    visible: {
                                        ...transitionVariants.container.visible,
                                        transition: {
                                            ...transitionVariants.container.visible.transition,
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                {/* 核心优势模块 - 上方 */}
                                <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12 mb-16">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold text-foreground mb-4">核心优势</h2>
                                        <p className="text-muted-foreground text-lg">AI驱动的全域获客解决方案，助力企业快速增长</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {/* 获客效率 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">获客效率</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">AI驱动，留资率与转化率双重提升</p>
                                        </div>
                                        
                                        {/* 成本降低 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">成本降低</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">数字员工替代人工，节省80%运营成本</p>
                                        </div>
                                        
                                        {/* 数据可控 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">数据可控</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">全流程数字化，客户转化路径可视化</p>
                                        </div>
                                        
                                        {/* 快速上手 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">快速上手</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">0技术门槛，7天完成部署落地</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 三大核心产品卡片区域 - 创意动画版本 */}
                                <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
                                    <div className="relative mt-16 rounded-3xl border bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl p-8 lg:p-10" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08)'}}>
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                            <div className="lg:col-span-7">
                                                <div className="inline-flex items-center gap-2 rounded-full border bg-secondary/30 px-4 py-2 text-sm text-foreground">
                                                    <Sparkles className="size-4 text-primary" />
                                                    主推：短期全能获客
                                                </div>
                                                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground">
                                                    一套体系，30天搭建企业自主获客能力
                                                </h2>
                                                <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                                                    AI工具体系 + 线下体系陪跑双轨交付：30天跑通获客闭环，全年线上答疑与复盘迭代，企业能力可复制、可持续。
                                                </p>
                                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    <div className="rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground">
                                                        30天内无效全额退款
                                                    </div>
                                                    <div className="rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground">
                                                        线下培训 + 线上实时答疑
                                                    </div>
                                                    <div className="rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground">
                                                        全流程阶段化交付
                                                    </div>
                                                </div>
                                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                                    <div className="bg-foreground/10 rounded-[14px] border p-0.5 w-fit">
                                                        <Button asChild size="lg" className="rounded-xl px-6 text-base">
                                                            <Link href="/products">查看产品介绍</Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-5">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div className="rounded-2xl border bg-gradient-to-br from-muted/10 to-muted/5 p-5">
                                                        <div className="text-sm text-muted-foreground">第一核心能力</div>
                                                        <div className="mt-2 text-xl font-bold text-foreground">秒Claw超级AI智能员工</div>
                                                        <div className="mt-2 text-sm text-muted-foreground">全自动完成线上运营与企业销售指导</div>
                                                    </div>
                                                    <div className="rounded-2xl border bg-gradient-to-br from-muted/10 to-muted/5 p-5">
                                                        <div className="text-sm text-muted-foreground">7×24承接</div>
                                                        <div className="mt-2 text-xl font-bold text-foreground">AI智能客服系统</div>
                                                        <div className="mt-2 text-sm text-muted-foreground">销冠级回复，客资实时同步CRM</div>
                                                    </div>
                                                    <div className="rounded-2xl border bg-gradient-to-br from-muted/10 to-muted/5 p-5">
                                                        <div className="text-sm text-muted-foreground">陪跑落地</div>
                                                        <div className="mt-2 text-xl font-bold text-foreground">线下培训 + 线上答疑</div>
                                                        <div className="mt-2 text-sm text-muted-foreground">阶段复盘迭代，确保团队学会并拿到结果</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                {/* 版权信息 */}
                <footer className="w-full bg-muted/50 border-t border-border py-4 mt-auto">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-muted-foreground text-sm">
                            © 2025 成都一郅映画文化传媒有限公司版权所有
                        </p>
                    </div>
                </footer>
            </main>
            </BeamsBackground>
        </>
    )
}
