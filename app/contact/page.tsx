'use client';

import { Navigation } from '@/components/navigation';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    }
  };

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* 背景动画元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Header */}
        <div className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                联系我们
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                我们期待与您的合作，为您提供专业的AI解决方案
              </motion.p>
              
              {/* 统计数据 */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              >
                <motion.div variants={itemVariants} className="text-center">
                  <motion.div animate={floatingAnimation} className="text-3xl font-bold text-blue-400 mb-2">40+</motion.div>
                  <p className="text-gray-400 text-sm">服务企业</p>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <motion.div animate={floatingAnimation} className="text-3xl font-bold text-purple-400 mb-2">98%</motion.div>
                  <p className="text-gray-400 text-sm">客户满意度</p>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <motion.div animate={floatingAnimation} className="text-3xl font-bold text-pink-400 mb-2">24/7</motion.div>
                  <p className="text-gray-400 text-sm">技术支持</p>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <motion.div animate={floatingAnimation} className="text-3xl font-bold text-green-400 mb-2">6年+</motion.div>
                  <p className="text-gray-400 text-sm">行业经验</p>
                </motion.div>
              </motion.div>
            </motion.div>



            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* 联系信息 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white mb-4">联系方式</CardTitle>
                    <CardDescription className="text-gray-300">
                      多种方式联系我们，我们将尽快回复您
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                      <motion.div 
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <MessageCircle className="w-6 h-6 text-green-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-white font-semibold">添加微信</h3>
                          <button 
                            onClick={() => {
                              const modal = document.createElement('div');
                              modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                              modal.innerHTML = `
                                <div class="bg-white p-6 rounded-lg max-w-sm mx-4 transform transition-all duration-300">
                                  <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-lg font-semibold">微信二维码</h3>
                                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 text-xl">
                                      ✕
                                    </button>
                                  </div>
                                  <img src="/微信二维码.jpg" alt="微信二维码" class="w-full h-auto rounded-lg" />
                                  <p class="text-center text-gray-600 mt-2">扫描二维码添加微信</p>
                                </div>
                              `;
                              document.body.appendChild(modal);
                              modal.onclick = (e) => {
                                if (e.target === modal) modal.remove();
                              };
                            }}
                            className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer hover:underline"
                          >
                            点击查看微信二维码
                          </button>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <MessageCircle className="w-6 h-6 text-blue-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-white font-semibold">AI智能客服</h3>
                          <a href="https://work.weixin.qq.com/kfid/kfc73f9dc680411ab11" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline">
                            点击进入智能客服
                          </a>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Mail className="w-6 h-6 text-purple-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-white font-semibold">企业邮箱</h3>
                          <p className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">jiangyunxi@yizhivision.cn</p>
                        </div>
                      </motion.div>
                    </CardContent>
                </Card>
              </motion.div>

              {/* 联系表单 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-slate-500/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white mb-4">联系专属顾问</CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      点击按钮，获得专业的咨询服务
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.a 
                      href="https://easevision.feishu.cn/share/base/form/shrcnsfdHd9pTbe3loYp2YI67mh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      联系专属顾问
                    </motion.a>
                    
                    {/* 服务承诺 */}
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/30">
                      <h4 className="text-white font-semibold mb-3">我们的服务承诺</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <motion.li 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>1小时内快速响应</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>免费方案咨询</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>专业技术支持</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>定制化解决方案</span>
                        </motion.li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                常见问题
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                以下是客户经常咨询的问题，希望能帮助您更好地了解我们的服务
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <motion.div 
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.3)' }}
              >
                <h3 className="text-white font-semibold mb-3">如何开始合作？</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  您可以通过微信、智能客服或专属顾问联系我们，我们会安排专业顾问为您提供免费咨询，了解您的需求后制定专属解决方案。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.3)' }}
              >
                <h3 className="text-white font-semibold mb-3">项目周期多长？</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  项目服务持续一年，第一个月内保证见效。
                </p>
              </motion.div>
              

            </div>
          </div>
        </motion.div>

        {/* 版权信息 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative z-10 bg-gray-900/80 border-t border-gray-700/50 py-8 mt-16"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.p 
                className="text-gray-400 text-sm mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                © 2025 成都一郅映画文化传媒有限公司版权所有
              </motion.p>
              <div className="flex justify-center space-x-6 text-xs text-gray-500">
                <span>蜀ICP备xxxxxxxx号</span>
                <span>|</span>
                <span>川公网安备xxxxxxxx号</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}