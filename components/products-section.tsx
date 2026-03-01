'use client';

import { useState, type ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import {
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle,
  ClipboardList,
  Crown,
  Factory,
  Handshake,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
} from 'lucide-react';

const CTA_FORM_URL = 'https://easevision.feishu.cn/share/base/form/shrcnsfdHd9pTbe3loYp2YI67mh';

const productLines = [
  {
    id: 'short-allround-202603',
    title: '秒获客AI-短期全能获客',
    badge: '主推 · 26年3月最新',
    description: 'AI+运营陪跑，一套体系短期全能获客',
    gradient: 'from-blue-500 to-blue-600',
    icon: <Sparkles className="w-8 h-8 icon-feature" />,
    highlights: [
      '双轨服务：线下培训+线上实时答疑',
      '30天内无效全额退款',
      '企业调研+营销选品定制',
      '知识库+智能客服承接留资',
      '秒Claw自动化运营+销售指导',
      '数字人+内容工厂+AI CRM闭环',
    ],
  },
  {
    id: 'marketing-allround-202603',
    title: '秒获客AI-营销全能获客',
    badge: '26年3月最新',
    description: '五阶段陪跑，打通多渠道与销售转化',
    gradient: 'from-purple-500 to-purple-600',
    icon: <TrendingUp className="w-8 h-8 icon-feature" />,
    highlights: [
      '五阶段全景陪跑（基建→见效→多渠道→销售→全年）',
      '抖音/小红书/直播多渠道打通',
      '爆品制定+线下营销方案',
      '邀约与成交培训，提升转化',
      '持续复盘+策略迭代',
      '会员知识库+全年支持',
    ],
  },
  {
    id: 'ad-acquisition-202511',
    title: '秒获客AI-投放获客',
    badge: '25年11月最新',
    description: '以投放为核心的获客路径，快速起量与优化',
    gradient: 'from-orange-500 to-orange-600',
    icon: <Target className="w-8 h-8 icon-feature" />,
    highlights: [
      '投放运营集中课程',
      '投放团队介入执行与优化',
      '写拍剪集中课程+素材标准',
      '智能客服承接+客资同步CRM',
      '数字人+内容工厂辅助产出',
      '投放返点对接+成本优化',
    ],
  },
];

type FlowStep = { title: string; items: string[] };

const shortAllroundFlow: FlowStep[] = [
  { title: '准备期', items: ['企业调研与选品定制', '知识库搭建与承接设计', '账号装修与来客入驻准备'] },
  { title: '4周落地', items: ['写拍剪教学+直播间搭建', '智能客服上线+秒Claw托管运营', '数字人/内容工厂/AI CRM一体搭建'] },
  { title: '全年支持', items: ['线上实时答疑与复盘迭代', '线下集中培训大课', '会员知识库+投放支持/返点'] },
];

const shortAllroundTools = [
  { name: '秒Claw超级AI智能员工', desc: '自动化运营+销售指导，减少专人专职' },
  { name: '智能客服', desc: '7×24销冠级回复，承接留资' },
  { name: '数字人本地部署', desc: '一次拍摄，批量生成内容' },
  { name: '全平台内容工厂', desc: '脚本/笔记/海报/投放计划批量产出' },
  { name: 'AI CRM管理', desc: '客户分配、跟进与转化看板' },
  { name: '投放与直播能力', desc: '投放教学、直播搭建与复盘迭代' },
];

const marketingAllroundFlow: FlowStep[] = [
  { title: '基建', items: ['企业调研与营销选品', '知识库/客服/账号基础搭建', '写拍剪与标准化流程'] },
  { title: '见效提升', items: ['直播间搭建与话术打造', '阶段复盘与策略迭代', '企业提效培训'] },
  { title: '多渠道打通', items: ['抖音+小红书矩阵推进', '爆品制定与内容体系', '投放能力落地'] },
  { title: '销售与营销', items: ['邀约训练与成交训练', '线下转化问题针对性解决', '企业营销体系持续更新'] },
  { title: '全年支持', items: ['会员知识库持续更新', '多对一投放团队支持', '投放返点对接'] },
];

const marketingAllroundTools = [
  { name: '秒Claw超级AI智能员工', desc: '托管运营与销售指导' },
  { name: '智能客服', desc: '全渠道承接留资+话术调教' },
  { name: '数字人本地部署', desc: '内容生产降本提效' },
  { name: '全平台内容工厂', desc: '脚本/笔记/海报/计划一体化' },
  { name: 'AI CRM管理', desc: '可视化看板+全流程管理' },
  { name: '投放/直播能力', desc: '投放策略、执行与复盘迭代' },
];

const adAcquisitionFlow: FlowStep[] = [
  { title: '准备期', items: ['企业基础信息梳理', '抖音来客入驻与账号准备', '知识库搭建与承接流程'] },
  { title: '快速起量', items: ['写拍剪集中课程', '投放课程+团队介入优化', '内容工厂/数字人协同供给素材'] },
  { title: '全年支持', items: ['线上答疑与提效培训', '线下大课与会员知识库', '投放返点对接'] },
];

const adAcquisitionTools = [
  { name: '智能客服', desc: '7×24承接留资，客资同步' },
  { name: '数字人本地部署', desc: '解放拍摄，持续供给内容' },
  { name: '全平台内容工厂', desc: '素材与投放计划批量产出' },
  { name: '直播话术工厂', desc: '话术生成、复盘与教学' },
  { name: '投放团队支持', desc: '执行优化与成本控制' },
  { name: '投放返点对接', desc: '争取福利，降低成本' },
];

const newMediaServices = [
  {
    title: '企业定制化服务方案',
    pain: '服务同质化导致企业优势无法凸显，陷入低价内卷。',
    advantages: ['企业基础信息全维度调研与梳理', '企业适配性获客资源与体系盘点反馈', '营销选品策略与优化方案制定'],
    caseText: '家居品牌【佰汇森】定制专属线上营销方案，实现差异化突围。',
  },
  {
    title: '短视频写拍剪全流程系统化教学',
    pain: '外聘制作团队成本高、管理难，且评判标准缺失导致浪费。',
    advantages: ['盘活企业现有人员', '一周实战培训快速掌握标准', '实现低成本高效率素材自给自足'],
    caseText: '家居品牌【英伦匠人】零基础销售一周内可独立产出获客素材。',
  },
  {
    title: '账号装修、矩阵布局与来客入驻辅导',
    pain: '主页无重点、价值传达弱；来客入驻与线索功能易踩坑导致停滞。',
    advantages: ['定制化装修主页突出工厂优势', '来客入驻标准化流程辅导', '当日入驻-装修-上品-推广闭环'],
    caseText: '板材企业【理想树商贸】当日完成全流程并取得优异获客效果。',
  },
  {
    title: '平台政策及行业主流玩法更新',
    pain: '平台规则迭代快，缺专业跟进易盲目投入错失红利。',
    advantages: ['7×24跟进平台动态', '第一时间同步政策算法与玩法', '重大调整全程陪跑落地执行'],
    caseText: '平台迁移后，客户整体投放成本不升反降并抢占红利窗口。',
  },
  {
    title: '分阶段数据复盘、诊断与优化迭代',
    pain: '缺系统复盘与专业能力，无法定位根因导致效果持续下滑。',
    advantages: ['按节点拆解核心数据呈现ROI', '定位素材/策略/主页/流程根因', '闭环迭代持续提升转化与降本'],
    caseText: '【佰汇森智能家居】2个月内点击率提升35%，成本下降20%。',
  },
  {
    title: '直播全链路陪跑',
    pain: '缺场景标准、脚本话术与投流方法，直播冷场无转化。',
    advantages: ['直播间搭建与设备选型指导', '场控SOP落地+话术打造', '投放策略与复盘迭代'],
    caseText: '【衡固全屋定制】直播走上标准化正轨，线索量明显提升。',
  },
  {
    title: '全平台投放陪跑教学',
    pain: '只会抖加，钱花了拿不到结果。',
    advantages: ['抖音巨量/本地推投放教学', '小红书聚光投放教学', '视频号腾讯广告投放教学'],
    caseText: '【艾丽斯顿】单日投放2000元获取客户120个，客资成本17元/个。',
  },
  {
    title: '全年线上支持+线下培训+专属知识库',
    pain: '缺持续指导与系统化学习渠道，团队能力提升慢且难落地。',
    advantages: ['全年线上一对一响应', '企业专属线下集中培训大课', '会员专属知识库持续更新'],
    caseText: '【凯奇印象】线上获客稳定性提升50%，无需额外投入人力。',
  },
  {
    title: '多对一投放执行+返点对接+成本优化',
    pain: '单人操盘精力有限且不熟返点政策，成本居高不下。',
    advantages: ['多对一专属投放团队执行', '渠道返点对接争取福利', '定制成本优化方案提升投产'],
    caseText: '【成都艾丽斯顿家居】1个月成本下降25%，效果提升30%。',
  },
  {
    title: '陪跑全流程可复用电子资产',
    pain: '一次性交付不沉淀，导师离场后流程断层反复踩坑。',
    advantages: ['调研-方案-执行-复盘流程固化', '模板课件话术表格可复用', '经验沉淀为内部知识库'],
    caseText: '【丽迪亚】搭建电子资产后门店可复制、团队易交接。',
  },
];

type ClawTab = { key: string; label: string; items: string[] };
type CoreProductClaw = {
  id: 'claw';
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  icon: ReactElement;
  tabs: ClawTab[];
};
type CoreProductSimple = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: ReactElement;
  points: string[];
};

const coreProducts: [CoreProductClaw, ...CoreProductSimple[]] = [
  {
    id: 'claw',
    title: '秒Claw超级AI智能员工',
    tagline: '把获客运营交给秒Claw，你只负责成交。',
    description: '全自动完成线上运营工作与企业销售指导，无需再任专人专职。',
    badges: ['全自动', '全自主', '无需专人专职'],
    icon: <UserCog className="w-7 h-7" />,
    tabs: [
      {
        key: 'douyin',
        label: '抖音能力',
        items: [
          '主动追踪爆款账号数据并同步到数据库',
          '主动搜集与追踪行业爆款并自主分析',
          '主动生产脚本内容并安排运营计划',
          '主动数字人口播生成',
          '全自动化操作投放系统（综合分析转化与视频表现）',
          '主动评论区截流',
        ],
      },
      {
        key: 'xiaohongshu',
        label: '小红书能力',
        items: [
          '全自主托管式运营',
          '自动追踪账号数据并同步日报',
          '自动搜集与追踪行业爆款并自主分析',
          '主动笔记选题与撰写',
          '主动制作海报封面',
          '主动上传发布与评论回复',
          '聚光全自动化操作能力',
        ],
      },
      {
        key: 'sales',
        label: '销售与营销能力',
        items: [
          '全局分析CRM客户管理表，输出日报周报与销售人员分析',
          '综合分析跟进情况，给出整改提升方法与下一步动作',
          '全局分析企业形势，给出企业智能营销方案',
        ],
      },
    ],
  },
  {
    id: 'cs',
    title: 'AI智能客服系统',
    tagline: '7×24小时高情商自动回复，留资率提升300%。',
    description: '抖音/小红书全渠道接入，实时抓取客资并同步至CRM，0秒推送销售跟进。',
    icon: <Bot className="w-7 h-7" />,
    points: ['全渠道接入与实时抓取', '自动同步CRM与多端查看', '销冠话术风格深度调教'],
  },
  {
    id: 'crm',
    title: 'AI CRM客户管理系统',
    tagline: '客户不再“散”，转化不再“盲”。',
    description: '可视化看板+全流程管理+AI赋能销售，提升跟进效率与签约转化。',
    icon: <BarChart3 className="w-7 h-7" />,
    points: ['客户来源/楼盘/销售排名实时分析', '售前到售后全链路追踪', 'AI话术/合同/邀约提醒'],
  },
  {
    id: 'employees',
    title: 'AI数字员工（全域获客引擎）',
    tagline: '一人管十号，日更百条。',
    description: '覆盖小红书/抖音/销售等岗位能力，内容生成效率提升200%，千次曝光成本下降40%。',
    icon: <MessageSquare className="w-7 h-7" />,
    points: ['小红书：爆款生成/仿写/封面/下载', '抖音：脚本/仿拍/直播/投流优化', '销售：通话与聊天分析给建议'],
  },
  {
    id: 'content',
    title: 'AI内容工厂 + 数字人短视频',
    tagline: '一次拍摄，生成数百条。',
    description: '批量生成内容与投放计划，数字人替代真人拍摄，节省80%拍摄时间。',
    icon: <Factory className="w-7 h-7" />,
    points: ['批量生成抖音/小红书/海报/投放计划', '数字人本地部署替代拍摄', '投后数据反馈驱动优化'],
  },
];

const offlineEmpowerment = [
  {
    title: '业绩目标与利润管理',
    pain: '只追业绩不算账，投产不清导致越做越亏。',
    deliver: ['算清获客/转化成本与盈亏平衡点', '目标拆解到渠道/投放/团队动作', '以利润为导向优化策略与定价'],
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: '体验提升：用包装做溢价服务',
    pain: '只拼产品价格，体验与信任缺失导致难溢价。',
    deliver: ['设计师墙/安装师墙/销售团队统一包装', '标准话术与异议处理工具', '让客户为信任与体验买单'],
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: '门店销售SOP实战：从进店到成交',
    pain: '流程混乱难复制，新人上手慢，留客难转化低。',
    deliver: ['可复制可考核的全流程SOP', '固定话术+工具模板降低依赖', '提升成交率与客单价'],
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    title: '设计管理：从量尺到成交闭环',
    pain: '量尺随意、方案混乱，专业度弱导致成交难。',
    deliver: ['8步标准化量尺流程', '9步PPT汇报法讲清价值', '老板可落地的设计管理方法'],
    icon: <Crown className="w-6 h-6" />,
  },
  {
    title: '设计驱动销售体系',
    pain: '设计只画图不抓成交，流程无标准难复制。',
    deliver: ['标准化设计流程与团队管理法', '空间汇报逻辑+异议话术', '解决缺人易错与转化低问题'],
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: '门店盈利体系精细化运营',
    pain: '活动无规划、政策不合理、落地混乱导致引流差。',
    deliver: ['5步活动精细化运营闭环', '全年活动布局模板与宣讲闭环', '过程管控降低内耗提升成交'],
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

const exposureCase = {
  title: '矩阵账号辅助曝光',
  subtitle: '自有IP账号，全年辅助企业进行全网百万级曝光。',
  caseTable: {
    headers: ['客户', '服务内容', '使用方式', '结果'],
    rows: [
      ['大参林板材', '爆品打造、账号定位、账号简介、脚本撰写、数字人视频、AI客服、数字化CRM', '全流程使用AI获客体系', '7天完成全流程打造，客资单价20，日出资20个'],
    ],
  },
  qa: [
    { q: 'AI会不会回复不灵活？', a: '系统基于企业知识库定制，使用最新大模型基底深度调教，出资率只会比人工更高。' },
    { q: '多久见效？', a: '30天内无效全额退款（首月无效退款）。' },
  ],
};

const clawProduct = coreProducts[0];
const otherCoreProducts = coreProducts.slice(1) as CoreProductSimple[];
const defaultClawTab = clawProduct.tabs[0]?.key ?? 'douyin';

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient-alt">{title}</h2>
      {description ? <p className="text-foreground text-lg">{description}</p> : null}
    </div>
  );
}

function StageFlow({ title, steps }: { title: string; steps: FlowStep[] }) {
  const gridClassName = steps.length >= 5 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4' : 'grid grid-cols-1 md:grid-cols-3 gap-4';
  return (
    <Card className="bg-card/50 border-border backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={gridClassName}>
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-secondary/10 p-5">
              <div className="text-lg font-semibold text-foreground">{s.title}</div>
              <div className="mt-3 space-y-2">
                {s.items.map((it) => (
                  <div key={it} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-foreground text-sm leading-relaxed">{it}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ToolsGrid({ title, items }: { title: string; items: Array<{ name: string; desc: string }> }) {
  return (
    <Card className="bg-card/50 border-border backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border border-border bg-secondary/10 p-5">
              <div className="font-semibold text-foreground">{it.name}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductsSection() {
  const router = useRouter();
  const [clawTab, setClawTab] = useState<string>(defaultClawTab);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-black mb-6 title-gradient"
            >
              产品体系全景
            </motion.h1>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">用AI全域赋能企业获客，降本提效，实现转化增长</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-secondary/30 border border-border text-sm text-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                30天内无效全额退款
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/30 border border-border text-sm text-foreground flex items-center gap-2">
                <Handshake className="w-4 h-4 text-primary" />
                AI产品与线下陪跑双重保障
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-blue-purple font-semibold px-8 py-3 rounded-lg" onClick={() => window.open(CTA_FORM_URL, '_blank')}>
                领取定制化解决方案
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-lg" onClick={() => router.push('/contact')}>
                联系我们
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="产品套餐一览" description="根据你的企业选择最适合的套餐" />
          <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productLines.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group"
              >
                <Card className="h-full bg-card/50 border-border backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:border-border/60">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${p.gradient} flex items-center justify-center shadow-lg mb-4 text-white`}>
                        {p.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</CardTitle>
                      <CardDescription className="text-foreground mt-2">{p.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all duration-300"
                      onClick={() => {
                        const el = document.getElementById(p.id);
                        if (!el) return;
                        const offsetPosition = el.offsetTop - 100;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

      <div id={productLines[0].id} className="relative z-10 pb-16">
        <div className="container mx-auto px-4 space-y-8">
          <SectionHeader title="主推：短期全能获客" description="让企业在更短周期内搭建自主获客能力，并跑通增长闭环" />
          <Card className="bg-gradient-to-br from-card/80 to-muted/60 border-border backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <div className="text-2xl md:text-3xl font-black text-foreground leading-tight">AI全域赋能获客，降本提效，实现转化增长</div>
                  <p className="mt-3 text-foreground leading-relaxed">
                    从企业知识库、智能客服、数字人、内容工厂、AI CRM到秒Claw自动化运营，一次搭建，形成可复用的获客能力。
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="rounded-xl border border-border bg-secondary/10 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      30天内无效全额退款
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Handshake className="w-5 h-5 text-primary" />
                      AI产品与线下陪跑双重保障
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button className="flex-1" onClick={() => window.open(CTA_FORM_URL, '_blank')}>
                        领取方案
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => router.push('/contact')}>
                        联系我们
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <StageFlow title="交付节奏" steps={shortAllroundFlow} />
          <ToolsGrid title="提供工具与功能说明" items={shortAllroundTools} />
        </div>
      </div>

      <div id={productLines[1].id} className="relative z-10 pb-16">
        <div className="container mx-auto px-4 space-y-8">
          <SectionHeader title="营销全能获客" description="五阶段陪跑，覆盖多渠道打通与销售转化" />
          <StageFlow title="交付节奏" steps={marketingAllroundFlow} />
          <ToolsGrid title="提供工具与功能说明" items={marketingAllroundTools} />
        </div>
      </div>

      <div id={productLines[2].id} className="relative z-10 pb-16">
        <div className="container mx-auto px-4 space-y-8">
          <SectionHeader title="投放获客" description="以投放为核心路径的获客备选方案" />
          <StageFlow title="交付节奏" steps={adAcquisitionFlow} />
          <ToolsGrid title="提供工具与功能说明" items={adAcquisitionTools} />
        </div>
      </div>

      <div id="new-media-services" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="新媒体线上陪跑赋能" description="从调研到落地复盘的全周期陪跑，确保结果可持续" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newMediaServices.map((s) => (
              <Card key={s.title} className="bg-card/50 border-border backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl text-foreground">{s.title}</CardTitle>
                  <CardDescription className="text-foreground">{s.pain}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {s.advantages.map((a) => (
                      <div key={a} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-foreground text-sm leading-relaxed">{a}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/10 p-3 text-sm text-foreground">
                    <span className="font-semibold">客户案例：</span>
                    {s.caseText}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div id="core-products" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="全域AI核心产品价值" description="核心能力一套打通：内容生产 → 承接留资 → 客户管理 → 销售转化 → 自动化运营" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="relative overflow-hidden lg:col-span-12 bg-gradient-to-br from-card/80 to-muted/60 border-border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30">
              <motion.div
                aria-hidden
                className="absolute -inset-24"
                animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.25) 0%, transparent 55%), radial-gradient(circle at 70% 60%, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
                }}
              />
              <CardContent className="relative p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-border flex items-center justify-center text-foreground">
                      {clawProduct.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs text-foreground">第一核心能力</div>
                        {clawProduct.badges.map((b) => (
                          <div key={b} className="px-3 py-1 rounded-full bg-secondary/30 border border-border text-xs text-foreground">
                            {b}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-2xl md:text-3xl font-black text-foreground">{clawProduct.title}</div>
                      <div className="mt-2 text-lg md:text-xl font-semibold text-foreground">{clawProduct.tagline}</div>
                      <div className="mt-2 text-foreground leading-relaxed">{clawProduct.description}</div>
                    </div>
                  </div>
                  <div className="lg:ml-auto flex gap-3">
                    <Button className="btn-blue-purple" onClick={() => window.open(CTA_FORM_URL, '_blank')}>
                      领取方案
                    </Button>
                    <Button variant="outline" onClick={() => router.push('/contact')}>
                      联系我们
                    </Button>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {clawProduct.tabs.map((t) => (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => setClawTab(t.key)}
                        className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                          clawTab === t.key ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/20 text-foreground border-border hover:bg-secondary/30'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {clawProduct.tabs
                      .find((t) => t.key === clawTab)
                      ?.items.map((it) => (
                        <div key={it} className="flex items-start gap-2 rounded-lg border border-border bg-secondary/10 p-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div className="text-foreground text-sm leading-relaxed">{it}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {otherCoreProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                className="lg:col-span-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <Card className="h-full bg-card/50 border-border backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-border flex items-center justify-center text-foreground">
                        {p.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg md:text-xl text-foreground">{p.title}</CardTitle>
                        <CardDescription className="text-foreground">{p.tagline}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-foreground text-sm leading-relaxed">{p.description}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {p.points.map((pt) => (
                        <div key={pt} className="rounded-lg border border-border bg-secondary/10 p-3 text-sm text-foreground">
                          {pt}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div id="offline-empowerment" className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="线下转化营销赋能" description="用标准化体系提升成交率、客单价与利润" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {offlineEmpowerment.map((m) => (
              <Card key={m.title} className="bg-card/50 border-border backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-border flex items-center justify-center text-foreground">
                      {m.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl text-foreground">{m.title}</CardTitle>
                      <CardDescription className="text-foreground">{m.pain}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {m.deliver.map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-foreground text-sm leading-relaxed">{d}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div id="exposure" className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeader title={exposureCase.title} description={exposureCase.subtitle} />
          <div className="grid grid-cols-1 gap-6 items-start max-w-3xl mx-auto">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  保障与答疑
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exposureCase.qa.map((qa) => (
                  <div key={qa.q} className="rounded-lg border border-border bg-secondary/10 p-4">
                    <div className="font-semibold text-foreground">{qa.q}</div>
                    <div className="mt-1 text-foreground text-sm leading-relaxed">{qa.a}</div>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-blue-purple flex-1" onClick={() => window.open(CTA_FORM_URL, '_blank')}>
                    领取定制化解决方案
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => router.push('/contact')}>
                    联系我们
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-card/80 border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">© 2025 成都一郅映画文化传媒有限公司版权所有</p>
        </div>
      </div>
    </div>
  );
}
