import React from 'react';
import { COMPARISON_MATRIX, ComparisonPair } from '../data/heritageData.ts';
import { X, Scale, ExternalLink, ArrowRight, ShieldAlert } from 'lucide-react';

interface ComparisonMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecord: (recordId: string) => void;
}

export const ComparisonMatrixModal: React.FC<ComparisonMatrixModalProps> = ({
  isOpen,
  onClose,
  onSelectRecord
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-950/60 border border-rose-800/60 rounded-lg text-rose-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-heritage-serif">
                Bảng Ma Trận So Sánh Song Song Then Nghi Lễ
              </h2>
              <p className="text-xs text-slate-400">
                Đối chiếu khoa học giữa Then Thái (Xã Chiềng Cọ, Sơn La) &amp; Then Tày (Xã Đàm Thủy, Cao Bằng)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Đóng ma trận"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-300">
          <div className="px-5 py-3 bg-amber-950/20">
            <span className="font-semibold text-amber-400 uppercase tracking-wide block">
              Khối 1: Then Thái Sơn La (Tây Bắc)
            </span>
            <span className="text-slate-400">
              Địa bàn khảo tả: Xã Chiềng Cọ, tỉnh Sơn La (trước 2025: TP Sơn La) · Lễ hội Kin Pang Then
            </span>
          </div>
          <div className="px-5 py-3 bg-rose-950/20">
            <span className="font-semibold text-rose-400 uppercase tracking-wide block">
              Khối 2: Then Tày Cao Bằng (Việt Bắc)
            </span>
            <span className="text-slate-400">
              Địa bàn khảo tả: Xã Đàm Thủy, tỉnh Cao Bằng (trước 2025: H. Trùng Khánh) · Nghi lễ Then Kỳ yên
            </span>
          </div>
        </div>

        {/* Scrollable Matrix Table / Rows */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {COMPARISON_MATRIX.map((item: ComparisonPair, index: number) => (
            <div
              key={index}
              className="bg-slate-950/70 border border-slate-800 rounded-lg p-4 transition-all hover:border-slate-700"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Tiêu chí đối chiếu #{index + 1}
                </span>
                <span className="text-sm font-bold text-white font-heritage-serif">
                  {item.criterion}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Thái Side */}
                <div className="p-3.5 rounded-lg bg-slate-900/90 border border-amber-900/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-amber-400">Người Thái (Sơn La)</span>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectRecord(item.thai.sourceId);
                        }}
                        className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>{item.thai.sourceId}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-100 mb-1.5">
                      {item.thai.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      {item.thai.description}
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      Chi tiết: {item.thai.details}
                    </p>
                  </div>
                </div>

                {/* Tày Side */}
                <div className="p-3.5 rounded-lg bg-slate-900/90 border border-rose-900/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-rose-400">Người Tày (Cao Bằng)</span>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectRecord(item.tay.sourceId);
                        }}
                        className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>{item.tay.sourceId}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-100 mb-1.5">
                      {item.tay.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      {item.tay.description}
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      Chi tiết: {item.tay.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Ethical Warning Banner */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              Ghi chú đạo đức nghiên cứu: Sự khác biệt trong thực hành Then giữa hai vùng phản ánh môi trường sinh thái, lịch sử cư trú và tính chất cộng đồng bản địa. Cả hai luồng văn hóa đều bình đẳng về mặt giá trị nhân văn và cùng được UNESCO vinh danh trong Hồ sơ Thực hành Then liên vùng năm 2019.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Đóng bảng đối chiếu
          </button>
        </div>
      </div>
    </div>
  );
};
