'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { BeamsBackground } from '@/components/ui/beams-background'
import { cn } from '@/lib/utils'

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
            <HeroHeader />
            <BeamsBackground intensity="medium" className="min-h-screen">
                <main className="overflow-hidden relative z-10">
                <section>
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
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width={3276}
                                height={4095}
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
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

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
                                        秒获客AI<br />全域赋能获客体系
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        AI全域赋能企业获客，降本提效增转化<br />7×24小时智能客服+数字员工+内容工厂，一套系统解决获客全链路难题
                                    </p>
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
                                            <Link href="#link">
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
                                        <Link href="#link">
                                            <span className="text-nowrap">查看价格</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
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
                                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">获客效率</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">AI驱动，留资率与转化率双重提升</p>
                                        </div>
                                        
                                        {/* 成本降低 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">成本降低</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">数字员工替代人工，节省80%运营成本</p>
                                        </div>
                                        
                                        {/* 数据可控 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">数据可控</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">全流程数字化，客户转化路径可视化</p>
                                        </div>
                                        
                                        {/* 快速上手 */}
                                        <div className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>
                                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    {/* 背景装饰元素 */}
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
                                        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                                    </div>

                                    {/* 卡片容器 - 统一布局 */}
                                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                                        {/* 全域AI赋能获客体系 */}
                                        <div className="lg:col-span-1 group">
                                            <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
                                                {/* 渐变背景动画 */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-muted/3 to-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* 浮动粒子效果 - 限制在卡片内部 */}
                                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                    <div className="absolute top-4 right-4 w-2 h-2 bg-muted-foreground/30 rounded-full animate-ping"></div>
                                                    <div className="absolute top-8 right-8 w-1 h-1 bg-muted-foreground/20 rounded-full animate-ping delay-300"></div>
                                                    <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-muted-foreground/25 rounded-full animate-ping delay-700"></div>
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                        <svg className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-4 text-foreground">全域AI赋能获客体系</h3>
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">以AI工具为核心，分阶段搭建自主获客能力，覆盖全周期运营，让获客变得智能化、自动化</p>
                                                    <div className="space-y-3 text-xs">
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            智能客服7×24小时自动回复
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            数字人本地部署，无需拍摄
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            AI CRM可视化客户管理
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 px-3 py-1.5 bg-muted/30 rounded-lg">
                                                        <div className="text-xs text-foreground font-semibold">企业版 • 全年支持</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 全域营销赋能陪跑体系 */}
                                        <div className="lg:col-span-1 group">
                                            <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-muted/3 to-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* 浮动粒子效果 - 限制在卡片内部 */}
                                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                    <div className="absolute top-4 right-4 w-2 h-2 bg-muted-foreground/30 rounded-full animate-ping"></div>
                                                    <div className="absolute top-8 right-8 w-1 h-1 bg-muted-foreground/20 rounded-full animate-ping delay-300"></div>
                                                    <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-muted-foreground/25 rounded-full animate-ping delay-700"></div>
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                        <svg className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-4 text-foreground">全域营销赋能陪跑体系</h3>
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">手把手教学+复盘优化，从内容创作到销售转化全流程落地</p>
                                                    <div className="space-y-3 text-xs">
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            写拍剪全流程线下教学
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            直播间搭建与话术打造
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            营销体系规划与爆品制定
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 px-3 py-1.5 bg-muted/30 rounded-lg">
                                                        <div className="text-xs text-foreground font-semibold">企业版 • 五阶段陪跑</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI赋能+短期赋能陪跑 */}
                                        <div className="lg:col-span-1 group">
                                            <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-muted/3 to-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* 浮动粒子效果 - 限制在卡片内部 */}
                                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                    <div className="absolute top-4 right-4 w-2 h-2 bg-muted-foreground/30 rounded-full animate-ping"></div>
                                                    <div className="absolute top-8 right-8 w-1 h-1 bg-muted-foreground/20 rounded-full animate-ping delay-300"></div>
                                                    <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-muted-foreground/25 rounded-full animate-ping delay-700"></div>
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                        <svg className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-4 text-foreground">AI赋能+短期赋能陪跑</h3>
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">聚焦短期高效获客，融合AI工具与专项教学，2个月内快速见效</p>
                                                    <div className="space-y-3 text-xs">
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            AI工具快速搭建部署
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            专项技能密集教学
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                                                            黄老师分身专属支持
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 px-3 py-1.5 bg-muted/30 rounded-lg">
                                                        <div className="text-xs text-foreground font-semibold">企业版 • 短期见效</div>
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
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <div className="text-sm text-muted-foreground">
                                <span>© 2025 成都一郅映画文化传媒有限公司版权所有</span>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            </BeamsBackground>
        </>
    )
}

const menuItems = [
    { name: '首页', href: '/' },
    { name: '产品介绍', href: '/products' },
    { name: 'AIGC应用平台', href: '#link' },
    { name: 'AI数字员工', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-screen-xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-screen-lg rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
                    src="/logo.png"
                    alt="秒获客Logo"
                    width={120}
                    height={48}
                    className={cn('h-12 w-auto', className)}
                />
    )
}