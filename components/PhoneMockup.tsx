'use client'
import { motion } from 'framer-motion'
import { Zap, Bell, TrendingUp, User } from 'lucide-react'

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-strong overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
      
      {/* App UI */}
      <div className="absolute inset-0 bg-white p-4 pt-10 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Zap size={16} fill="currentColor" />
            </div>
            <span className="font-bold text-xs">NeuralEdge</span>
          </div>
          <Bell size={16} className="text-gray-400" />
        </div>

        {/* Hero Card */}
        <div className="bg-linear-to-br from-primary to-primary-light rounded-2xl p-4 text-white space-y-2 shadow-lg">
          <p className="text-[10px] opacity-80 uppercase tracking-wider font-bold">Smart Insights</p>
          <h3 className="font-bold text-sm leading-tight">Your AI Assistant is ready.</h3>
          <p className="text-[10px] opacity-90">What can I do for you today, Mark?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
            <TrendingUp size={16} className="text-primary mb-1" />
            <p className="text-[10px] text-gray-500">Efficiency</p>
            <p className="font-bold text-xs">+120%</p>
          </div>
          <div className="bg-green-50 p-3 rounded-xl border border-green-100">
            <Zap size={16} className="text-mint mb-1" />
            <p className="text-[10px] text-gray-500">Savings</p>
            <p className="font-bold text-xs">$2.4k</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-2">Recent Activity</p>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-xl border border-gray-50 bg-gray-50/50">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <User size={14} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold truncate">Lead automated via AI</p>
                <p className="text-[8px] text-gray-400">2 mins ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements around phone (handled in HeroVisual) */}
    </div>
  )
}
