import React, { useState } from 'react';
import { HERITAGE_DATA, HeritageRecord } from '../data/heritageData.ts';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ShieldAlert,
  MapPin,
  Bookmark,
  FileText,
  UserCheck,
  Share2,
  Lock
} from 'lucide-react';

interface DetailScreenProps {
  currentRecordId: string;
  onSelectRecord: (id: string) => void;
  onBackToDiscovery: () => void;
}

export const DetailScreen: React.FC<DetailScreenProps> = ({
  currentRecordId,
  onSelectRecord,
  onBackToDiscovery,
}) => {
  const [copied, setCopied] = useState(false);

  const currentIndex = HERITAGE_DATA.findIndex((r) => r.id === currentRecordId);
  const activeRecord: HeritageRecord =
    currentIndex !== -1 ? HERITAGE_DATA[currentIndex] : HERITAGE_DATA[0];

  const handlePrev = () => {
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : HERITAGE_DATA.length - 1;
    onSelectRecord(HERITAGE_DATA[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex < HERITAGE_DATA.length - 1 ? currentIndex + 1 : 0;
    onSelectRecord(HERITAGE_DATA[nextIndex].id);
  };

  const handleCopyCitation = () => {
    const citation = `[Trích dẫn đề tài J01] ${activeRecord.ten_tu_lieu} (${activeRecord.ten_goi_ban_dia}). Nguồn kiểm chứng: ${activeRecord.nguon_tu_lieu}. Địa bàn: ${activeRecord.dia_danh_hien_nay} (cũ: ${activeRecord.dia_danh_thoi_diem_tu_lieu}). Mã tư liệu: ${activeRecord.id}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Select appropriate featured visual for particular records
  let featuredImage: { src: string; caption: string } | null = null;
  if (activeRecord.id === 'J01-00012') {
    featuredImage = {
      src: '/src/assets/images/dan_tinh_instrument_1793970792266.jpg',
      caption: 'Ảnh hiện vật: Cần tính & Tính tẩu tại Bảo tàng Văn hóa các Dân tộc Việt Nam'
    };
  } else if (['J01-00004', 'J01-00006', 'J01-00009', 'J01-00011'].includes(activeRecord.id)) {
    featuredImage = {
      src: '/src/assets/images/bok_bau_flower_tree_1793970793821.jpg',
      caption: 'Ảnh tư liệu: Cây hoa Then (Bók bạu) trong đại lễ Kin Pang Then người Thái đen Chiềng Cọ'
    };
  } else if (['J01-00005', 'J01-00007', 'J01-00008', 'J01-00010'].includes(activeRecord.id)) {
    featuredImage = {
      src: '/src/assets/images/phe_then_boat_1793970793625.jpg',
      caption: 'Ảnh tư liệu: Pháp cụ Thuyền Then (Phè Then) và Dải cầu tơ ngũ sắc (Sai tơ) người Tày Đàm Thủy'
    };
  } else if (['J01-00001', 'J01-00002', 'J01-00003', 'J01-00014', 'J01-00015'].includes(activeRecord.id)) {
    featuredImage = {
      src: '/src/assets/images/hero_then_heritage_1793970791914.jpg',
      caption: 'Ảnh khảo cứu: Diễn xướng Then nghi lễ kết nối cõi trần với Mường Trời'
    };
  }

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto pb-10">
      {/* Top Navigation Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <button
          onClick={onBackToDiscovery}
          className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại không gian khám phá 15 bản ghi</span>
        </button>

        {/* Record Quick Selector & Prev/Next */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          <select
            value={activeRecord.id}
            onChange={(e) => onSelectRecord(e.target.value)}
            className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-md text-xs text-amber-400 font-mono focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            {HERITAGE_DATA.map((r, idx) => (
              <option key={r.id} value={r.id}>
                {r.id}: {idx + 1}. {r.ten_tu_lieu.slice(0, 38)}...
              </option>
            ))}
          </select>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              title="Bản ghi trước"
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-mono px-1.5">
              {currentIndex + 1}/15
            </span>
            <button
              onClick={handleNext}
              title="Bản ghi kế tiếp"
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Dossier Card */}
      <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-xl">
        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="px-2.5 py-1 bg-amber-950/60 border border-amber-800/80 rounded font-mono font-bold text-amber-400">
              MÃ TƯ LIỆU: {activeRecord.id}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300 font-medium">{activeRecord.vung_van_hoa}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300 font-medium">{activeRecord.dan_toc_cong_dong}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug font-heritage-serif">
            {activeRecord.ten_tu_lieu}
          </h1>

          {/* Official Inventory Name vs Indigenous Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-lg">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                Tên chính thức theo danh mục quốc gia / UNESCO:
              </span>
              <p className="text-sm font-semibold text-slate-200">
                {activeRecord.ten_theo_danh_muc}
              </p>
            </div>

            <div className="p-3.5 bg-rose-950/20 border border-rose-900/30 rounded-lg">
              <span className="text-[11px] uppercase tracking-wider text-rose-400 block mb-1">
                Tên gọi bản địa &amp; chú giải:
              </span>
              <p className="text-sm font-semibold text-rose-300">
                {activeRecord.ten_goi_ban_dia}
              </p>
            </div>
          </div>
        </div>

        {/* MANDATORY GEOGRAPHY SECTION: Modern 2-level place vs Old collection place */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-amber-900/40 relative overflow-hidden">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Địa Danh Thực Địa (Quy Định Đối Chiếu 2 Thời Điểm)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">
                1. Địa danh hiện nay (2 cấp sau 01/7/2025):
              </span>
              <p className="text-sm sm:text-base font-bold text-amber-300">
                {activeRecord.dia_danh_hien_nay}
              </p>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">
                2. Địa danh thời điểm tư liệu (cũ):
              </span>
              <p className="text-xs sm:text-sm text-slate-400">
                {activeRecord.dia_danh_thoi_diem_tu_lieu}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Visual Media (if available) */}
        {featuredImage && (
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <div className="relative aspect-video sm:aspect-21/9 max-h-[360px] overflow-hidden">
              <img
                src={featuredImage.src}
                alt={activeRecord.ten_tu_lieu}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="px-4 py-2.5 text-xs text-slate-400 italic bg-slate-950 border-t border-slate-800/80">
              {featuredImage.caption}
            </div>
          </div>
        )}

        {/* Detailed Survey Narrative (Nội dung khảo tả chi tiết) */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white font-heritage-serif flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Nội Dung Khảo Tả Chi Tiết Di Sản</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm sm:text-base text-slate-200 leading-relaxed space-y-3">
            <p>{activeRecord.mo_ta}</p>
          </div>
        </div>

        {/* Technical Heritage Classification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
            <span className="text-slate-400 uppercase tracking-wider block mb-1">
              Loại hình di sản (Theo Luật Di sản văn hóa 2024):
            </span>
            <p className="text-slate-200 font-medium">
              {activeRecord.loai_hinh_di_san}
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
            <span className="text-slate-400 uppercase tracking-wider block mb-1">
              Bối cảnh thu thập:
            </span>
            <p className="text-slate-200 font-medium">
              {activeRecord.boi_canh_thu_thap}
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
            <span className="text-slate-400 uppercase tracking-wider block mb-1">
              Cơ quan / Chủ thể cung cấp:
            </span>
            <p className="text-slate-200 font-medium">
              {activeRecord.nguoi_cung_cap}
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
            <span className="text-slate-400 uppercase tracking-wider block mb-1">
              Phạm vi sử dụng:
            </span>
            <p className="text-slate-200 font-medium">
              {activeRecord.pham_vi_su_dung}
            </p>
          </div>
        </div>

        {/* Verified Source Citation Box with Copy Action */}
        <div className="p-5 rounded-xl bg-slate-950 border-2 border-amber-600/60 shadow-lg space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Bookmark className="w-4 h-4 text-amber-400" />
              <span>Nguồn Tư Liệu Kiểm Chứng (Xác Thực Khoa Học)</span>
            </div>

            <button
              onClick={handleCopyCitation}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-900" />
                  <span>Đã sao chép trích dẫn!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép trích dẫn nguồn</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-200 bg-slate-900/90 p-3 rounded border border-slate-800">
            {activeRecord.nguon_tu_lieu}
          </p>
          <p className="text-[11px] text-slate-400">
            Mọi trích dẫn khoa học hoặc tham chiếu học tập cần ghi rõ mã bản ghi [{activeRecord.id}] và cơ quan lưu trữ theo đúng quy chuẩn đạo đức nghiên cứu.
          </p>
        </div>

        {/* Sacred Heritage Warning Box (Cảnh báo bảo vệ di sản) */}
        <div className="p-5 rounded-xl bg-rose-950/40 border border-rose-800/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Cảnh Báo Bảo Vệ Di Sản &amp; Phần Không Công Bố Theo Luật Tục</span>
          </div>

          <div className="text-xs sm:text-sm text-rose-200/90 leading-relaxed space-y-1.5">
            <p>
              <strong>Nội dung giới hạn / cấm phổ biến:</strong>{' '}
              {activeRecord.phan_khong_cong_bo === 'Không có' ? (
                <span>Bản ghi này thuộc danh mục mở, được phép công bố phục vụ nghiên cứu và giáo dục cộng đồng.</span>
              ) : (
                <span className="text-rose-300 font-semibold">{activeRecord.phan_khong_cong_bo}</span>
              )}
            </p>
            <p className="text-[11px] text-rose-300/70 italic">
              Lưu ý: Thực hành Then nghi lễ chứa đựng nhiều mật chú, bài cúng bí truyền và thông tin gia chủ được bảo vệ bởi luật tục dòng họ và Luật Bảo vệ dữ liệu cá nhân 2025. Người nghiên cứu tuyệt đối không xâm phạm không gian thiêng liêng này.
            </p>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Bản ghi trước</span>
          </button>

          <button
            onClick={onBackToDiscovery}
            className="text-xs text-amber-400 hover:underline cursor-pointer"
          >
            Xem danh sách 15 bản ghi
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Bản ghi tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
};
