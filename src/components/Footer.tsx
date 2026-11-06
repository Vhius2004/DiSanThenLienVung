import React from 'react';
import { ActiveTab } from '../types/index.ts';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenMatrix: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenMatrix }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 mt-16 text-slate-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-slate-200 font-heritage-serif text-sm">
              Di Sản Then Liên Vùng · Đề Tài J01
            </div>
            <p className="text-slate-400 text-[11px]">
              Hồ sơ số đối chiếu khoa học diễn xướng Then nghi lễ Thái (Sơn La) &amp; Tày (Cao Bằng)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => setActiveTab('discovery')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              15 Bản ghi
            </button>
            <button
              onClick={onOpenMatrix}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Ma trận đối chiếu
            </button>
            <button
              onClick={() => setActiveTab('assistant')}
              className="hover:text-rose-400 transition-colors cursor-pointer"
            >
              Trợ lý AI (Gemini)
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Nguồn tư liệu
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Lừ Văn Hiếu (PH69927)
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>
            Dự án nghiên cứu phi lợi nhuận · Tôn trọng bản quyền cộng đồng chủ thể di sản.
          </span>
          <span className="font-mono">
            FPT Polytechnic · Đợt 15 IMTA TECH
          </span>
        </div>
      </div>
    </footer>
  );
};
