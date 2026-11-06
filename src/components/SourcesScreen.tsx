import React from 'react';
import { VERIFIED_SOURCES, VerifiedSource } from '../data/heritageData.ts';
import { ExternalLink, ShieldCheck, CheckCircle2, Scale, BookOpen, Landmark, Award } from 'lucide-react';

export const SourcesScreen: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-10">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Thẩm Định Khoa Học &amp; Pháp Lý</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-heritage-serif">
            Hệ Thống 7 Nguồn Tư Liệu Kiểm Chứng Mở
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Hồ sơ số đề tài J01 được xây dựng dựa trên 7 nguồn tư liệu chính thống được công bố bởi các tổ chức quốc tế, cơ quan quản lý nhà nước và viện nghiên cứu đầu ngành. Người dùng có thể bấm vào liên kết ngoài để tra cứu toàn văn văn bản gốc.
          </p>
        </div>
      </div>

      {/* Grid of 7 Verified Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {VERIFIED_SOURCES.map((source: VerifiedSource, index: number) => (
          <div
            key={source.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-amber-400 font-semibold px-2 py-0.5 bg-amber-950/40 border border-amber-900/40 rounded">
                  {source.badge}
                </span>
                <span className="text-[11px] text-slate-400">
                  {source.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-heritage-serif leading-snug">
                {source.name}
              </h3>

              <div className="text-xs text-rose-300 font-medium">
                Cơ quan ban hành: {source.agency}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {source.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono truncate max-w-[180px]">
                {source.url.replace('https://', '').replace('http://', '')}
              </span>

              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 hover:text-amber-400 border border-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Mở link gốc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Analytical Rigor Section */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white font-heritage-serif flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          <span>Nguyên Tắc Trích Dẫn &amp; Bảo Vệ Dữ Liệu Thực Địa</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
            <h4 className="font-semibold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Giá Trị Công Nhận Quốc Tế</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Hồ sơ UNESCO 2019 khẳng định tính liên kết văn hóa chặt chẽ giữa các nhánh Then Tày, Nùng, Thái, tôn vinh tinh thần hòa hợp dân tộc và lòng bao dung trong tín ngưỡng thờ Then.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
            <h4 className="font-semibold text-white flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-rose-400" />
              <span>Khung Pháp Lý Quốc Gia 2024</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Căn cứ Luật Di sản văn hóa số 45/2024/QH15, các bản ghi bảo đảm phân loại chuẩn mực: Tập quán xã hội và tín ngưỡng, Nghệ thuật trình diễn dân gian và Tri thức dân gian.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
            <h4 className="font-semibold text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Khảo Cứu Dân Tộc Nhạc Học</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Các mô tả về thang âm, số dây đàn tính (2 dây vs 3 dây), phong cách hát Khắp Then và cấu tạo xóc nhạc đều được chuẩn hóa theo công trình điền dã của GS. Tô Ngọc Thanh và Viện Âm nhạc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
