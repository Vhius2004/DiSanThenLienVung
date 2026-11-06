import React from 'react';
import { User, Award, ShieldAlert, Heart, Info, BookOpen, CheckCircle } from 'lucide-react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto pb-10">
      {/* Author & Academic Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-800 to-amber-700 flex items-center justify-center text-white text-2xl font-bold font-heritage-serif shadow-md">
              VH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-amber-400 px-2 py-0.5 bg-amber-950/60 border border-amber-800/80 rounded">
                  MÃ SV: PH69927
                </span>
                <span className="text-xs text-slate-400">Nhóm 1 (STT 07)</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-heritage-serif mt-1">
                Lừ Văn Hiếu
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Thực tập sinh Nghiên cứu · Đợt 15 IMTA TECH x FPT Polytechnic
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 space-y-1">
            <div>Chương trình: <strong>Đợt 15 IMTA TECH</strong></div>
            <div>Đơn vị đào tạo: <strong>FPT Polytechnic</strong></div>
            <div>Thời điểm hoàn thiện: <strong>Năm 2026</strong></div>
          </div>
        </div>

        {/* Research Topic Overview */}
        <div className="pt-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-rose-400" />
            <span>Thông Tin Đề Tài Nghiên Cứu</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-100 font-heritage-serif">
            Đề tài J01: So sánh thực hành Then nghi lễ giữa người Thái (Sơn La) và người Tày (Cao Bằng)
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Đề tài tập trung khảo sát, số hoá và đối chiếu khoa học 15 bản ghi Then nghi lễ thực địa giữa hai không gian văn hóa tiêu biểu: Xã Chiềng Cọ, tỉnh Sơn La (người Thái đen Tây Bắc) và Xã Đàm Thủy, tỉnh Cao Bằng (người Tày Việt Bắc). Đề tài hướng tới việc cung cấp cơ sở dữ liệu tra cứu tin cậy cho thanh thiếu niên, sinh viên và các nhà nghiên cứu văn hóa dân gian.
          </p>
        </div>
      </div>

      {/* Non-Profit & Community Rights Declaration */}
      <div className="p-6 sm:p-8 rounded-2xl bg-amber-950/20 border border-amber-900/50 space-y-4">
        <div className="flex items-center gap-2.5 text-amber-400">
          <Heart className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold font-heritage-serif">
            Tuyên Bố Dự Án Xã Hội Phi Lợi Nhuận &amp; Tôn Trọng Bản Quyền Cộng Đồng
          </h3>
        </div>

        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            1. <strong>Mục tiêu phi thương mại:</strong> Ứng dụng là sản phẩm học tập và nghiên cứu văn hóa cộng đồng phi lợi nhuận 100%. Toàn bộ dữ liệu được sử dụng đúng mục đích giáo dục, tôn vinh và lan tỏa vẻ đẹp của di sản Thực hành Then đã được UNESCO ghi danh.
          </p>
          <p>
            2. <strong>Tôn trọng chủ thể di sản:</strong> Chúng tôi bày tỏ lòng tri ân sâu sắc tới cộng đồng đồng bào dân tộc Thái đen tại xã Chiềng Cọ (Sơn La) và đồng bào dân tộc Tày tại xã Đàm Thủy (Cao Bằng), cùng các thế hệ nghệ nhân Mo Then, Thầy Then đã gìn giữ di sản thiêng của tổ tiên qua bao thế hệ thăng trầm.
          </p>
          <p>
            3. <strong>Bảo vệ bí mật tín ngưỡng:</strong> Tuân thủ nghiêm ngặt chuẩn mực đạo đức của UNESCO và luật tục địa phương: Không công bố các câu khấn thiêng trừ tà yểm bùa, không đăng tải địa chỉ nhà riêng và thông tin nhân thân nghệ nhân, không thương mại hóa nghi lễ thành sản phẩm phục vụ trục lợi.
          </p>
        </div>
      </div>

      {/* Limitation Notice */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>Hạn Chế Của Đề Tài Nghiên Cứu</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong>Hạn chế ghi âm thực địa:</strong> Do giới hạn về thời gian điền dã và tôn trọng tính thiêng khép kín của các nghi lễ Then cổ kéo dài thâu đêm, hồ sơ hiện tại <em>chưa tích hợp bản ghi âm đầy đủ toàn bộ bài Then cổ</em>.
          </p>
          <p className="text-slate-400 text-xs">
            Trong các giai đoạn nghiên cứu tiếp theo, nhóm tác giả sẽ phối hợp chặt chẽ cùng Viện Âm nhạc Quốc gia Việt Nam và các nghệ nhân cao tuổi để số hóa âm thanh các đoạn trích trường ca tiêu biểu (như Khảm hải, Tỏn mả) khi được sự cho phép của cộng đồng chủ thể.
          </p>
        </div>
      </div>

      {/* Academic Integrity Sign-off */}
      <div className="text-center text-xs text-slate-500 pt-2">
        <p>Bản quyền dữ liệu thuộc về Cộng đồng chủ thể di sản &amp; Các cơ quan kiểm kê khoa học.</p>
        <p className="mt-1">Hồ sơ số hóa thực hiện bởi Lừ Văn Hiếu (PH69927) · FPT Polytechnic 2026.</p>
      </div>
    </div>
  );
};
