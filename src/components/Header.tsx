import React from 'react';
import { ActiveTab } from '../types/index.ts';
import { BookOpen, Compass, Sparkles, ShieldCheck, UserCheck, Scale } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenMatrix: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenMatrix }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <button
            onClick={() => setActiveTab('discovery')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="text-lg sm:text-xl font-bold tracking-tight text-white font-heritage-serif flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-600 inline-block"></span>
              <span>Di Sản Then Liên Vùng</span>
            </div>
          </button>

          {/* Zone 2: Desktop Nav Links (Clean single-line prose without pill enclosures) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('discovery')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 ${
                activeTab === 'discovery'
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              Khám Phá
            </button>

            <button
              onClick={onOpenMatrix}
              className="text-slate-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-slate-500 flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>Ma Trận Đối Chiếu</span>
            </button>

            <button
              onClick={() => setActiveTab('detail')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 ${
                activeTab === 'detail'
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              Chi Tiết Bản Ghi
            </button>

            <button
              onClick={() => setActiveTab('assistant')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'assistant'
                  ? 'border-rose-500 text-rose-400 font-semibold'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Trợ Lý AI (Gemini)</span>
            </button>

            <button
              onClick={() => setActiveTab('sources')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 ${
                activeTab === 'sources'
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              Nguồn Tư Liệu
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 ${
                activeTab === 'about'
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              Giới Thiệu & Bản Quyền
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenMatrix}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-md transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Đối Chiếu Thái - Tày</span>
            </button>
            <span className="text-xs text-amber-400/90 font-mono hidden sm:inline-block px-2 py-1 bg-amber-950/40 border border-amber-800/60 rounded">
              Đề tài J01
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Secondary Tab Navigation Strip */}
      <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 overflow-x-auto no-scrollbar py-2 px-3">
        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => setActiveTab('discovery')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'discovery'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Khám phá</span>
          </button>

          <button
            onClick={onOpenMatrix}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap text-amber-400 bg-amber-950/40 border border-amber-800/40"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Ma trận</span>
          </button>

          <button
            onClick={() => setActiveTab('detail')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'detail'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Hồ sơ (15)</span>
          </button>

          <button
            onClick={() => setActiveTab('assistant')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'assistant'
                ? 'bg-rose-950/70 text-rose-300 border border-rose-800/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>AI Gemini</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'sources'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>7 Nguồn</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'about'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Tác giả & Đề tài</span>
          </button>
        </div>
      </div>
    </header>
  );
};
