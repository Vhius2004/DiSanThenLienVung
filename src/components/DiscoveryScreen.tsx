import React, { useState, useMemo } from 'react';
import { HERITAGE_DATA, HeritageRecord } from '../data/heritageData.ts';
import { Search, Filter, Scale, ChevronRight, MapPin, Tag, RefreshCw } from 'lucide-react';

interface DiscoveryScreenProps {
  onSelectRecord: (recordId: string) => void;
  onOpenMatrix: () => void;
}

export const DiscoveryScreen: React.FC<DiscoveryScreenProps> = ({
  onSelectRecord,
  onOpenMatrix,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedEthnic, setSelectedEthnic] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter logic
  const filteredRecords = useMemo(() => {
    return HERITAGE_DATA.filter((item) => {
      // Search matching
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.ten_tu_lieu.toLowerCase().includes(q) ||
        item.ten_goi_ban_dia.toLowerCase().includes(q) ||
        item.mo_ta.toLowerCase().includes(q) ||
        item.dia_danh_hien_nay.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.loai_tu_lieu.toLowerCase().includes(q);

      // Region filter
      const matchRegion =
        selectedRegion === 'all' || item.vung_van_hoa === selectedRegion;

      // Ethnic filter
      let matchEthnic = true;
      if (selectedEthnic === 'thai') {
        matchEthnic = item.dan_toc_cong_dong.includes('Thái');
      } else if (selectedEthnic === 'tay') {
        matchEthnic = item.dan_toc_cong_dong.includes('Tày');
      } else if (selectedEthnic === 'lien_vung') {
        matchEthnic =
          item.dan_toc_cong_dong.includes('Thái') &&
          item.dan_toc_cong_dong.includes('Tày');
      }

      // Category filter
      let matchCat = true;
      if (selectedCategory !== 'all') {
        matchCat = item.loai_tu_lieu
          .toLowerCase()
          .includes(selectedCategory.toLowerCase());
      }

      return matchSearch && matchRegion && matchEthnic && matchCat;
    });
  }, [searchQuery, selectedRegion, selectedEthnic, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedEthnic('all');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Curatorial Showcase Section */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">
          {/* Left Text Zone */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
                <span>Đề Tài Nghiên Cứu J01</span>
                <span aria-hidden="true">·</span>
                <span>Hồ Sơ Số Hóa Khoa Học</span>
                <span aria-hidden="true">·</span>
                <span>15 Bản Ghi Thực Địa</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight font-heritage-serif">
                Hồ Sơ Đối Chiếu Diễn Xướng Then Nghi Lễ
                <span className="block text-amber-400 mt-1">
                  Thái (Sơn La) &amp; Tày (Cao Bằng)
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Hệ thống dữ liệu số hóa 15 bản ghi Then nghi lễ kiểm chứng theo
                chuẩn UNESCO và Luật Di sản 2024. Phân tích đối sánh âm nhạc Đàn
                tính, vũ trụ luận Mường Trời, pháp khí thiêng và tập quán trao
                truyền của hai cộng đồng chủ thể.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenMatrix}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Scale className="w-4 h-4" />
                <span>Mở Ma Trận Đối Chiếu Song Song</span>
              </button>

              <button
                onClick={() => onSelectRecord('J01-00012')}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Xem Hồ Sơ Đàn Tính (J01-00012)
              </button>
            </div>
          </div>

          {/* Right Image Zone with Measured Scrim */}
          <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full">
            <img
              src="/src/assets/images/hero_then_heritage_1793970791914.jpg"
              alt="Diễn xướng Then nghi lễ trong không gian nhà sàn truyền thống"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-3 right-4 text-[11px] text-slate-400 italic bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs">
              Diễn xướng Then nghi lễ miền núi phía Bắc
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Instant Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo từ khóa (đàn tính, kin pang then, bók bạu, khảm hải, chiềng cọ...)"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Reset Action */}
          {(searchQuery ||
            selectedRegion !== 'all' ||
            selectedEthnic !== 'all' ||
            selectedCategory !== 'all') && (
            <button
              onClick={resetFilters}
              className="px-3 py-2 text-xs text-slate-400 hover:text-amber-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-end md:self-center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Đặt lại bộ lọc</span>
            </button>
          )}
        </div>

        {/* 3 Structured Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/80">
          {/* Filter 1: Vùng văn hóa */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Vùng văn hóa
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">Tất cả vùng văn hóa (15)</option>
              <option value="Liên vùng Tây Bắc và Việt Bắc">
                Liên vùng Tây Bắc &amp; Việt Bắc
              </option>
              <option value="Vùng văn hoá Tây Bắc">Vùng văn hoá Tây Bắc</option>
              <option value="Vùng văn hoá Việt Bắc">Vùng văn hoá Việt Bắc</option>
            </select>
          </div>

          {/* Filter 2: Dân tộc */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Dân tộc chủ thể
            </label>
            <select
              value={selectedEthnic}
              onChange={(e) => setSelectedEthnic(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">Tất cả dân tộc</option>
              <option value="thai">Người Thái (Sơn La)</option>
              <option value="tay">Người Tày (Cao Bằng)</option>
              <option value="lien_vung">Liên vùng (Thái &amp; Tày)</option>
            </select>
          </div>

          {/* Filter 3: Nhóm nội dung */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Nhóm loại hình tư liệu
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">Tất cả nhóm nội dung</option>
              <option value="Hiện vật">Nhạc cụ &amp; Hiện vật</option>
              <option value="Địa điểm">Không gian sinh hoạt</option>
              <option value="Hoạt động">Hoạt động nghi lễ</option>
              <option value="Bài viết">Bài viết chuyên môn</option>
              <option value="Thông tin về di sản">Thông tin khảo tả di sản</option>
            </select>
          </div>
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span>
            Hiển thị{' '}
            <strong className="text-white font-mono">{filteredRecords.length}</strong>{' '}
            / 15 bản ghi thực địa
          </span>
          <span className="hidden sm:inline text-slate-500">
            Nhấp vào từng thẻ bản ghi để xem chi tiết đối chiếu và nguồn kiểm chứng
          </span>
        </div>
      </section>

      {/* Grid of Heritage Record Cards */}
      <section className="space-y-4">
        {filteredRecords.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-slate-900/50 border border-slate-800">
            <p className="text-base text-slate-300 font-medium mb-2">
              Không tìm thấy bản ghi nào phù hợp với điều kiện tìm kiếm.
            </p>
            <button
              onClick={resetFilters}
              className="text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Xóa bộ lọc để xem toàn bộ 15 bản ghi
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRecords.map((record: HeritageRecord) => {
              const isThai = record.dan_toc_cong_dong.includes('Thái') && !record.dan_toc_cong_dong.includes('Tày');
              const isTay = record.dan_toc_cong_dong.includes('Tày') && !record.dan_toc_cong_dong.includes('Thái');

              return (
                <div
                  key={record.id}
                  onClick={() => onSelectRecord(record.id)}
                  className="group bg-slate-900 border border-slate-800 hover:border-slate-700 hover:shadow-lg rounded-xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Card Top: Code and Cultural Region */}
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-amber-400 font-semibold px-2 py-0.5 bg-amber-950/40 border border-amber-900/40 rounded">
                        {record.id}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[160px]">
                        {record.vung_van_hoa}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors leading-snug font-heritage-serif">
                      {record.ten_tu_lieu}
                    </h3>

                    {/* Indigenous Name */}
                    <div className="text-xs text-rose-300/90 italic bg-rose-950/20 px-2.5 py-1.5 rounded border border-rose-900/20">
                      Tên bản địa: {record.ten_goi_ban_dia}
                    </div>

                    {/* Ethnic Label */}
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isThai
                            ? 'bg-amber-400'
                            : isTay
                            ? 'bg-rose-400'
                            : 'bg-emerald-400'
                        }`}
                      ></span>
                      <span className="text-slate-300 font-medium">
                        {record.dan_toc_cong_dong}
                      </span>
                    </div>

                    {/* Summary Description snippet */}
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {record.mo_ta}
                    </p>
                  </div>

                  {/* Mandatory Geography Section (Bold current vs small gray old) */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                    <div className="flex items-start gap-1.5 text-xs text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-100">
                          {record.dia_danh_hien_nay}
                        </span>
                        <div className="text-[11px] text-slate-500">
                          Thời điểm tư liệu: {record.dia_danh_thoi_diem_tu_lieu}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400 group-hover:text-amber-400 transition-colors">
                      <span className="truncate max-w-[200px]">
                        {record.loai_tu_lieu}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
