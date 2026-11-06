export interface HeritageRecord {
  id: string;
  ten_tu_lieu: string;
  ten_theo_danh_muc: string;
  ten_goi_ban_dia: string;
  loai_tu_lieu: string;
  loai_hinh_di_san: string;
  vung_van_hoa: string;
  dan_toc_cong_dong: string;
  dia_danh_hien_nay: string;
  dia_danh_thoi_diem_tu_lieu: string;
  mo_ta: string;
  boi_canh_thu_thap: string;
  nguoi_cung_cap: string;
  pham_vi_su_dung: string;
  phan_khong_cong_bo: string;
  nguon_tu_lieu: string;
}

export const HERITAGE_DATA: HeritageRecord[] = [
  {
    id: "J01-00001",
    ten_tu_lieu: "Hồ sơ pháp lý ghi danh UNESCO di sản Thực hành Then liên vùng",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Then (Khắp Then / Hát Then - Diễn xướng kết nối con người với Mường Trời)",
    loai_tu_lieu: "Thông tin về di sản (Văn bản khảo tả)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Nghệ thuật trình diễn dân gian",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái (Sơn La) và Người Tày (Cao Bằng)",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Tỉnh Sơn La và tỉnh Cao Bằng (2019)",
    mo_ta: "Di sản Thực hành Then được UNESCO ghi danh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại ngày 12/12/2019. Đây là thực hành nghi lễ thiêng phản ánh vũ trụ quan, nhân sinh quan và bản sắc đoàn kết cộng đồng sâu sắc của các dân tộc Tày, Nùng, Thái miền núi phía Bắc.",
    boi_canh_thu_thap: "Tư liệu hồ sơ đệ trình UNESCO và kiểm kê di sản quốc gia",
    nguoi_cung_cap: "Cục Di sản văn hóa và Bộ Văn hóa, Thể thao và Du lịch",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận, có trích dẫn nguồn chuẩn mực",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Hồ sơ UNESCO 2019 (ich.unesco.org); Cục Di sản văn hóa (dsvh.gov.vn)"
  },
  {
    id: "J01-00002",
    ten_tu_lieu: "Khung đối chiếu tính chất nghi lễ Kin Pang Then (Thái) và Then Kỳ yên (Tày)",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Kin Pang Then (Lễ mừng Then - Thái) và Then Kỳ yên (Lễ cầu an - Tày)",
    loai_tu_lieu: "Thông tin về di sản (Khảo tả đối chiếu dân tộc học)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Lễ hội truyền thống",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái (Tây Bắc) và Người Tày (Việt Bắc)",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Thành phố Sơn La (Sơn La) và Huyện Trùng Khánh (Cao Bằng) (2017)",
    mo_ta: "Then Thái mang tính chất hội bản mường mùa xuân mở rộng, vui tươi với các trò múa xòe và té nước tạ ơn thầy Then. Trong khi đó, Then Tày tại Cao Bằng mang đậm tính nghi lễ tâm linh trang nghiêm trong gia đình, kéo dài thâu đêm cầu bình an, giải hạn và nối số sinh mệnh.",
    boi_canh_thu_thap: "Tư liệu nghiên cứu dân tộc học so sánh liên vùng",
    nguoi_cung_cap: "Viện Văn hóa Nghệ thuật quốc gia Việt Nam (VICAS)",
    pham_vi_su_dung: "Sử dụng cho nghiên cứu và học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Viện Văn hóa Nghệ thuật quốc gia Việt Nam (vicas.org.vn); NXB Văn hóa dân tộc"
  },
  {
    id: "J01-00003",
    ten_tu_lieu: "Quan niệm vũ trụ Mường Trời trong tri thức dân gian Then",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Mường Phạ (Cõi Trời tiếng Thái) và Mường Bôn (Cõi Tiên tiếng Tày)",
    loai_tu_lieu: "Thông tin về di sản (Tri thức dân gian & Tín ngưỡng)",
    loai_hinh_di_san: "Tri thức dân gian; Tập quán xã hội và tín ngưỡng",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái và Người Tày",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Tỉnh Sơn La và tỉnh Cao Bằng (2019)",
    mo_ta: "Tri thức dân gian quan niệm vũ trụ đa tầng. Thầy Then là nhân vật trung gian, mượn tiếng đàn Tính làm tuấn mã dẫn đường đưa lễ vật và sớ cầu an vượt qua các mường trời dâng lên đấng Then tối cao cầu phúc lộc cho con người.",
    boi_canh_thu_thap: "Tư liệu nghiên cứu vũ trụ luận dân gian trong hồ sơ UNESCO",
    nguoi_cung_cap: "Cục Di sản văn hóa",
    pham_vi_su_dung: "Sử dụng cho mục đích giáo dục truyền thống",
    phan_khong_cong_bo: "Không xuyên tạc quan niệm dân gian thành hiện tượng mê tín trục lợi",
    nguon_tu_lieu: "Hồ sơ di sản UNESCO (ich.unesco.org); Âm nhạc dân gian các DTTS - GS. Tô Ngọc Thanh"
  },
  {
    id: "J01-00004",
    ten_tu_lieu: "Không gian nhà sàn tổ chức Lễ Kin Pang Then tại xã Chiềng Cọ",
    ten_theo_danh_muc: "Lễ Kin Pang Then của người Thái",
    ten_goi_ban_dia: "Hươn Then (Gian chính nhà sàn Mo Then người Thái đen)",
    loai_tu_lieu: "Địa điểm sinh hoạt cộng đồng (Khảo tả & Bản đồ điểm)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Lễ hội truyền thống",
    vung_van_hoa: "Vùng văn hoá Tây Bắc",
    dan_toc_cong_dong: "Người Thái đen tại xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_thoi_diem_tu_lieu: "Xã Chiềng Cọ, thành phố Sơn La, tỉnh Sơn La (2012)",
    mo_ta: "Nghi lễ Kin Pang Then diễn ra tại gian chính nhà sàn của thầy Mo Then. Không gian mở rộng đón hàng trăm con nuôi (lục pang) và dân bản mường về dự hội; trung tâm gian nhà dựng cây hoa Then (Bók bạu) rực rỡ sắc màu.",
    boi_canh_thu_thap: "Nghi lễ cộng đồng thật ghi nhận theo Quyết định 3577/QĐ-BVHTTDL",
    nguoi_cung_cap: "Sở Văn hóa, Thể thao và Du lịch tỉnh Sơn La",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không công bố địa chỉ nhà riêng và thông tin cá nhân nhạy cảm của nghệ nhân Mo Then",
    nguon_tu_lieu: "Quyết định 3577/QĐ-BVHTTDL ngày 22/10/2012 (bvhttdl.gov.vn); Cục Di sản văn hóa"
  },
  {
    id: "J01-00005",
    ten_tu_lieu: "Bàn thờ Slương Then và không gian hành lễ Then tại xã Đàm Thủy",
    ten_theo_danh_muc: "Nghi lễ Then của người Tày",
    ten_goi_ban_dia: "Slương Then (Bàn thờ Then treo cao áp mái nhà)",
    loai_tu_lieu: "Địa điểm sinh hoạt cộng đồng (Khảo tả & Ảnh tư liệu)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng",
    vung_van_hoa: "Vùng văn hoá Việt Bắc",
    dan_toc_cong_dong: "Người Tày tại xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_hien_nay: "Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Xã Đàm Thủy, huyện Trùng Khánh, tỉnh Cao Bằng (2017)",
    mo_ta: "Không gian Then Tày mang tính tôn nghiêm khép kín trong gian thờ gia đình. Bàn thờ Slương Then treo sát mái nhà dán giấy hồng điều, đặt mô hình thuyền nan chở âm binh, hoa giấy ngũ sắc và các thẻ bài tướng lĩnh nhà Then.",
    boi_canh_thu_thap: "Tư liệu kiểm kê nghi lễ Then Tày tại gia đình",
    nguoi_cung_cap: "Cục Di sản văn hóa và Sở VHTTDL tỉnh Cao Bằng",
    pham_vi_su_dung: "Sử dụng cho nghiên cứu học thuật phi lợi nhuận",
    phan_khong_cong_bo: "Không chụp ảnh cự ly gần hoặc công bố hòm sắc lệnh gia truyền cất kín trên bàn thờ Slương",
    nguon_tu_lieu: "Quyết định 2459/QĐ-BVHTTDL ngày 20/6/2017 (dsvh.gov.vn); Bảo tàng VHCDT Việt Nam"
  },
  {
    id: "J01-00006",
    ten_tu_lieu: "Cây hoa Then (Bók bạu) trong Lễ Kin Pang Then người Thái",
    ten_theo_danh_muc: "Lễ Kin Pang Then của người Thái",
    ten_goi_ban_dia: "Bók bạu (Cây hoa Then kết từ thân chuối và cành tre ngũ sắc)",
    loai_tu_lieu: "Không gian & Hiện vật nghi lễ (Vật thiêng tâm điểm)",
    loai_hinh_di_san: "Tri thức dân gian; Nghề thủ công truyền thống",
    vung_van_hoa: "Vùng văn hoá Tây Bắc",
    dan_toc_cong_dong: "Người Thái tại xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_thoi_diem_tu_lieu: "Xã Chiềng Cọ, thành phố Sơn La, tỉnh Sơn La (2012)",
    mo_ta: "Bók bạu làm bằng thân cây chuối cắm các nan tre vót cong, đính hoa rừng, treo các hình nộm ve sầu (con tơng nơng), chim muông, cá, ếch đan bằng nứa nhuộm phẩm màu; biểu trưng cho sức sống mùa xuân và vạn vật sinh sôi.",
    boi_canh_thu_thap: "Tư liệu hiện vật lễ hội tại Bảo tàng tỉnh Sơn La",
    nguoi_cung_cap: "Bảo tàng tỉnh Sơn La",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Quyết định 3577/QĐ-BVHTTDL (bvhttdl.gov.vn); Bảo tàng Văn hóa các Dân tộc Việt Nam"
  },
  {
    id: "J01-00007",
    ten_tu_lieu: "Pháp khí Thuyền Then và Dải cầu tơ trong Then Kỳ yên người Tày",
    ten_theo_danh_muc: "Nghi lễ Then của người Tày",
    ten_goi_ban_dia: "Phè Then (Thuyền Then chở lễ) và Sai tơ (Dải cầu tơ ngũ sắc)",
    loai_tu_lieu: "Không gian & Hiện vật nghi lễ (Pháp cụ tâm linh)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Tri thức dân gian",
    vung_van_hoa: "Vùng văn hoá Việt Bắc",
    dan_toc_cong_dong: "Người Tày tại xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_hien_nay: "Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Xã Đàm Thủy, huyện Trùng Khánh, tỉnh Cao Bằng (2017)",
    mo_ta: "Thuyền Then đan bằng nứa dán giấy ngũ sắc chở lương thảo dâng Mường Trời. Dải cầu tơ (Sai tơ) bện từ chỉ ngũ sắc chăng nối từ bàn thờ xuống chiếu lễ làm 'con đường tâm linh' dẫn lối âm binh vượt ngàn ải hiểm trở.",
    boi_canh_thu_thap: "Hồ sơ tư liệu điền dã di sản Then Tày Cao Bằng",
    nguoi_cung_cap: "Viện Âm nhạc Quốc gia Việt Nam",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Quyết định 2459/QĐ-BVHTTDL (dsvh.gov.vn); Hồ sơ UNESCO 2019"
  },
  {
    id: "J01-00008",
    ten_tu_lieu: "Làn điệu trường ca 'Khảm hải' (Vượt biển) trong Then Tày",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Khảm hải (Chặng vượt biển lớn trong đường Then Tày)",
    loai_tu_lieu: "Hoạt động văn hoá - nghi lễ (Diễn xướng làn điệu cổ)",
    loai_hinh_di_san: "Nghệ thuật trình diễn dân gian; Tập quán xã hội và tín ngưỡng",
    vung_van_hoa: "Vùng văn hoá Việt Bắc",
    dan_toc_cong_dong: "Người Tày tại xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_hien_nay: "Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Xã Đàm Thủy, huyện Trùng Khánh, tỉnh Cao Bằng (2017)",
    mo_ta: "Đoạn trường ca Then bi tráng nhất mô tả đoàn quân Then chèo thuyền qua đại dương cõi âm bão tố. Thầy Then dập dồn dây đàn Tính, xóc lắc đồng dồn dập, tay vung quạt Then làm mái chèo thể hiện tinh thần kiên cường hộ mệnh nhân dân.",
    boi_canh_thu_thap: "Bản ghi âm diễn xướng trong nghi lễ thật tại Cao Bằng",
    nguoi_cung_cap: "Viện Âm nhạc Quốc gia Việt Nam",
    pham_vi_su_dung: "Công bố trích đoạn âm thanh diễn xướng nghệ thuật phi lợi nhuận",
    phan_khong_cong_bo: "Tuyệt đối không phổ biến các lời phù chú mật truyền trừ tà yểm bùa",
    nguon_tu_lieu: "Viện Âm nhạc Quốc gia Việt Nam; Văn hóa Then Tày - Thái (NXB Văn hóa dân tộc)"
  },
  {
    id: "J01-00009",
    ten_tu_lieu: "Nghi thức phát lộc hoa (Tỏn mả) và xòe Then trong Kin Pang Then Thái",
    ten_theo_danh_muc: "Lễ Kin Pang Then của người Thái",
    ten_goi_ban_dia: "Tỏn mả (Nghi thức đón lộc phúc quanh cây hoa Bók bạu)",
    loai_tu_lieu: "Hoạt động văn hoá - nghi lễ (Nghi thức hội bản mường)",
    loai_hinh_di_san: "Lễ hội truyền thống; Nghệ thuật trình diễn dân gian",
    vung_van_hoa: "Vùng văn hoá Tây Bắc",
    dan_toc_cong_dong: "Người Thái tại xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_thoi_diem_tu_lieu: "Xã Chiềng Cọ, thành phố Sơn La, tỉnh Sơn La (2012)",
    mo_ta: "Mo Then hái lộc hoa và các con thú đan trên cây Bók bạu tung phát cho dân bản lấy may mắn. Toàn thể cộng đồng nắm tay kết vòng xòe Then, xòe quạt, té nước thơm chúc nhau năm mới sức khỏe, mùa màng bội thu.",
    boi_canh_thu_thap: "Nghi lễ thật của cộng đồng tại xã Chiềng Cọ",
    nguoi_cung_cap: "Sở Văn hóa, Thể thao và Du lịch tỉnh Sơn La",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Quyết định 3577/QĐ-BVHTTDL (bvhttdl.gov.vn); Cục Di sản văn hóa"
  },
  {
    id: "J01-00010",
    ten_tu_lieu: "Tập quán bán khoán cầu mệnh cho trẻ nhỏ trong Then Tày",
    ten_theo_danh_muc: "Nghi lễ Then của người Tày",
    ten_goi_ban_dia: "Bán khoán / Cầu mụ (Lễ gửi con cho cửa Thần bảo vệ)",
    loai_tu_lieu: "Hoạt động văn hoá - nghi lễ (Nghi lễ vòng đời)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng",
    vung_van_hoa: "Vùng văn hoá Việt Bắc",
    dan_toc_cong_dong: "Người Tày tại xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_hien_nay: "Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Xã Đàm Thủy, huyện Trùng Khánh, tỉnh Cao Bằng (2017)",
    mo_ta: "Tập quán gia đình có con nhỏ khó nuôi nhờ thầy Then làm lễ bán khoán làm con nuôi của Mẹ Sinh (Bà Mụ cõi trời) xin ban vía khỏe mạnh. Đến năm 12 tuổi, gia đình sắm lễ vật chuộc con về đầy đủ danh phận với tông tộc.",
    boi_canh_thu_thap: "Tư liệu khảo tả phong tục tập quán vòng đời người Tày",
    nguoi_cung_cap: "Viện Dân tộc học - Viện Hàn lâm Khoa học xã hội Việt Nam",
    pham_vi_su_dung: "Sử dụng cho nghiên cứu học thuật phi lợi nhuận",
    phan_khong_cong_bo: "Không công bố danh tính, ngày sinh cụ thể của các gia đình làm lễ theo luật bảo vệ dữ liệu cá nhân",
    nguon_tu_lieu: "Cục Di sản văn hóa (dsvh.gov.vn); Viện Văn hóa Nghệ thuật quốc gia Việt Nam"
  },
  {
    id: "J01-00011",
    ten_tu_lieu: "Tục tri ân con nuôi tâm linh (Lục pang) trong Kin Pang Then Thái",
    ten_theo_danh_muc: "Lễ Kin Pang Then của người Thái",
    ten_goi_ban_dia: "Lục pang Then (Con nuôi tâm linh của Mo Then trong bản)",
    loai_tu_lieu: "Hoạt động văn hoá - nghi lễ (Tập quán gắn kết cộng đồng)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Lễ hội truyền thống",
    vung_van_hoa: "Vùng văn hoá Tây Bắc",
    dan_toc_cong_dong: "Người Thái tại xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La",
    dia_danh_thoi_diem_tu_lieu: "Xã Chiềng Cọ, thành phố Sơn La, tỉnh Sơn La (2012)",
    mo_ta: "Những người được Mo Then cúng chữa khỏi bệnh tự nguyện nhận làm con nuôi (lục pang). Hằng năm dịp lễ, lục pang mang rượu nếp, gà, vải vóc về nhà thầy Then cùng dọn dẹp, chuẩn bị đại lễ, thể hiện truyền thống đền ơn đáp nghĩa sâu đậm.",
    boi_canh_thu_thap: "Nghi lễ Kin Pang Then cộng đồng tại Sơn La",
    nguoi_cung_cap: "Cục Di sản văn hóa",
    pham_vi_su_dung: "Sử dụng công khai nhằm lan tỏa nét đẹp đạo lý truyền thống",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Quyết định 3577/QĐ-BVHTTDL (bvhttdl.gov.vn); Sách Văn hóa Then Tày - Thái"
  },
  {
    id: "J01-00012",
    ten_tu_lieu: "So sánh cấu tạo và âm sắc Đàn tính 2 dây (Thái) và Đàn tính 3 dây (Tày)",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Tính tẩu (Đàn bầu người Thái) và Cần tính (Đàn tính người Tày)",
    loai_tu_lieu: "Hình ảnh tư liệu & Hiện vật (Hồ sơ âm học và cấu tạo)",
    loai_hinh_di_san: "Nghệ thuật trình diễn dân gian; Tri thức dân gian",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái (Sơn La) và Người Tày (Cao Bằng)",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Tỉnh Sơn La và tỉnh Cao Bằng (2022)",
    mo_ta: "Đàn Tính tẩu người Thái cần ngắn (70-80cm), bầu nhỏ, 2 dây cước, âm thanh giòn giã dồn dập đệm cho múa xòe hội. Đàn Tính người Tày cần dài thanh mảnh (90-100cm), bầu to, 3 dây tơ (Cha - Mẹ - Đất trời), âm vang réo rắt dẫn lối trường ca vượt biển.",
    boi_canh_thu_thap: "Ảnh chụp hiện vật gốc tại Bảo tàng Văn hóa các Dân tộc Việt Nam (Thái Nguyên)",
    nguoi_cung_cap: "Bảo tàng Văn hóa các Dân tộc Việt Nam và Viện Âm nhạc Quốc gia",
    pham_vi_su_dung: "Sử dụng hình ảnh hiện vật bảo tàng có dẫn nguồn rõ ràng",
    phan_khong_cong_bo: "Không dùng ảnh do AI tự tạo làm sai lệch cấu tạo dây và phím đàn",
    nguon_tu_lieu: "Bảo tàng VHCDT Việt Nam; Viện Âm nhạc Quốc gia; Hồ sơ UNESCO 2019"
  },
  {
    id: "J01-00013",
    ten_tu_lieu: "Bộ chùm xóc nhạc và Pháp phục nghi lễ của hai cộng đồng",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Mák hắp tính (Xóc nhạc Thái), Sác nhạc (Lắc đồng Tày), Sửa Then (Áo Then)",
    loai_tu_lieu: "Hình ảnh tư liệu & Hiện vật (Hồ sơ pháp khí nghi lễ)",
    loai_hinh_di_san: "Nghệ thuật trình diễn dân gian; Nghề thủ công truyền thống",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái (Sơn La) và Người Tày (Cao Bằng)",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Tỉnh Sơn La và tỉnh Cao Bằng (2019)",
    mo_ta: "Mo Then Thái đeo chùm chuông đồng nhỏ ở chân rung nhịp bước đi, mặc áo chàm đen viền đỏ thắt đai lưng lụa. Thầy Then Tày cầm lắc đồng dứt khoát chỉ huy âm binh, đội mũ pháp nhiều tầng thêu hoa văn tướng Then, mặc áo tứ thân trang nghiêm.",
    boi_canh_thu_thap: "Tư liệu ảnh hiện vật bảo tàng và hồ sơ dân tộc học",
    nguoi_cung_cap: "Bảo tàng Dân tộc học Việt Nam và Viện Âm nhạc Quốc gia",
    pham_vi_su_dung: "Sử dụng trong sản phẩm học tập phi lợi nhuận",
    phan_khong_cong_bo: "Không có",
    nguon_tu_lieu: "Bảo tàng Dân tộc học Việt Nam; Âm nhạc dân gian các DTTS - GS. Tô Ngọc Thanh"
  },
  {
    id: "J01-00014",
    ten_tu_lieu: "Cơ chế trao truyền: Mạng lưới câu lạc bộ (Thái) và Căn số tâm linh (Tày)",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Căn Then (Mệnh trời định) và Câu lạc bộ Khắp Then bản mường",
    loai_tu_lieu: "Bài viết chuyên môn (Hồ sơ chủ thể di sản)",
    loai_hinh_di_san: "Tập quán xã hội và tín ngưỡng; Nghệ thuật trình diễn dân gian",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái (Sơn La) và Người Tày (Cao Bằng)",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Thành phố Sơn La (Sơn La) và Huyện Trùng Khánh (Cao Bằng) (2017)",
    mo_ta: "Then Thái chuyển dịch mạnh sang hình thức câu lạc bộ văn hóa văn nghệ quần chúng tại bản truyền dạy rộng rãi cho lớp trẻ. Then Tày tại Cao Bằng bảo lưu chặt chẽ cơ chế truyền nghề qua nghi lễ cấp sắc lẩu then truyền thống cho người có căn mệnh.",
    boi_canh_thu_thap: "Báo cáo điều tra điền dã thực trạng di sản sau ghi danh UNESCO",
    nguoi_cung_cap: "Viện Văn hóa Nghệ thuật quốc gia Việt Nam (VICAS)",
    pham_vi_su_dung: "Sử dụng cho nghiên cứu học thuật phi lợi nhuận",
    phan_khong_cong_bo: "Không đăng tải số điện thoại, căn cước, địa chỉ nhà riêng nghệ nhân theo Luật Bảo vệ dữ liệu cá nhân 2025",
    nguon_tu_lieu: "Viện Văn hóa Nghệ thuật quốc gia Việt Nam (vicas.org.vn); Luật Bảo vệ dữ liệu cá nhân 2025"
  },
  {
    id: "J01-00015",
    ten_tu_lieu: "Chuẩn mực bảo vệ bối cảnh: Phân biệt Then nghi lễ sống và Then sân khấu hóa",
    ten_theo_danh_muc: "Thực hành Then của người Tày, Nùng, Thái ở Việt Nam",
    ten_goi_ban_dia: "Then nghi lễ (Di sản sống trong bản) và Hát Then mới (Sân khấu hóa)",
    loai_tu_lieu: "Bài viết chuyên môn (Chuẩn mực bảo vệ bối cảnh di sản theo UNESCO)",
    loai_hinh_di_san: "Nghệ thuật trình diễn dân gian; Lễ hội truyền thống",
    vung_van_hoa: "Liên vùng Tây Bắc và Việt Bắc",
    dan_toc_cong_dong: "Người Thái và Người Tày",
    dia_danh_hien_nay: "Xã Chiềng Cọ, tỉnh Sơn La và Xã Đàm Thủy, tỉnh Cao Bằng",
    dia_danh_thoi_diem_tu_lieu: "Tỉnh Sơn La và tỉnh Cao Bằng (2019)",
    mo_ta: "Cần phân định rạch ròi giữa Then nghi lễ thật trong gia đình/bản làng với các tiết mục biểu diễn phục vụ du lịch. Khi sử dụng hình ảnh biểu diễn sân khấu hóa phục vụ du khách, bắt buộc phải chú thích rõ bối cảnh, tuyệt đối không đánh đồng với nghi lễ tâm linh thiêng của cộng đồng.",
    boi_canh_thu_thap: "Khảo cứu chuẩn mực đạo đức bảo tồn di sản của UNESCO 2015",
    nguoi_cung_cap: "Cục Di sản văn hóa",
    pham_vi_su_dung: "Hướng dẫn ứng xử văn hóa chuẩn mực trên không gian số",
    phan_khong_cong_bo: "Nghiêm cấm dùng ảnh biểu diễn du lịch để gán nhãn cho nghi thức thiêng trong nhà dân",
    nguon_tu_lieu: "Hồ sơ UNESCO di sản Thực hành Then (ich.unesco.org); Cục Di sản văn hóa"
  }
];

export interface ComparisonPair {
  criterion: string;
  thai: {
    title: string;
    description: string;
    sourceId: string;
    details: string;
  };
  tay: {
    title: string;
    description: string;
    sourceId: string;
    details: string;
  };
}

export const COMPARISON_MATRIX: ComparisonPair[] = [
  {
    criterion: "Đàn Tính & Âm sắc diễn xướng",
    thai: {
      title: "Tính tẩu 2 dây cước",
      description: "Cần ngắn 70-80cm, bầu nhỏ, tiết tấu rộn ràng, dồn dập giòn giã đệm cho các điệu múa xòe bản mường.",
      sourceId: "J01-00012",
      details: "Đàn tính tẩu Thái Chiềng Cọ thường dùng dây cước, âm sắc đanh sáng, nhịp điệu kích hoạt không khí lễ hội tưng bừng."
    },
    tay: {
      title: "Cần tính 3 dây tơ",
      description: "Cần dài thanh mảnh 90-100cm, bầu to, 3 dây (Cha - Mẹ - Đất trời), âm vang réo rắt sâu thẳm dẫn đường âm binh.",
      sourceId: "J01-00012",
      details: "Đàn tính Tày Đàm Thủy làm từ quả bầu già phơi khô, cần gỗ dâu hoặc dẻ gai, đóng vai trò tuấn mã vượt biển cõi trời."
    }
  },
  {
    criterion: "Tính chất & Quy mô nghi lễ",
    thai: {
      title: "Lễ Kin Pang Then (Hội mừng)",
      description: "Hội bản mường mở rộng vào mùa xuân, đón hàng trăm con nuôi (lục pang) và bà con về dự lễ, tạ ơn và vui hội.",
      sourceId: "J01-00002",
      details: "Tính cộng đồng rất cao, mở cửa đón khách thập phương, kết hợp nghi lễ chữa lành với sinh hoạt văn nghệ dân gian."
    },
    tay: {
      title: "Then Kỳ yên (Lễ cầu an nối số)",
      description: "Mang đậm tính nghi lễ tâm linh trang nghiêm, tổ chức thâu đêm tại tư gia để giải hạn, nối số sinh mệnh.",
      sourceId: "J01-00002",
      details: "Nghi lễ khép kín trong nội bộ tông tộc gia đình, không gian trang trọng, tập trung vào hành trình tâm linh của thầy Then."
    }
  },
  {
    criterion: "Bộ xóc nhạc & Pháp phục",
    thai: {
      title: "Mák hắp tính (Chùm chuông chân)",
      description: "Đeo chùm chuông đồng nhỏ ở cổ chân, rung nhịp theo bước đi và động tác xoay múa; áo chàm đen viền đỏ son, đai lụa.",
      sourceId: "J01-00013",
      details: "Tạo nhịp đập cơ thể linh hoạt trong lúc Mo Then vừa đàn, vừa hát, vừa di chuyển quanh cây hoa."
    },
    tay: {
      title: "Sác nhạc (Lắc đồng cầm tay)",
      description: "Cầm xóc nhạc lắc tay dứt khoát chỉ huy đoàn quân âm binh; đội mũ pháp nhiều tầng thêu hoa văn tướng, áo tứ thân nghiêm cẩn.",
      sourceId: "J01-00013",
      details: "Tiếng xóc đồng tay vang rền giả định vó ngựa quân Then dặm trường vượt ải hiểm trở."
    }
  },
  {
    criterion: "Không gian & Bàn thờ thiêng",
    thai: {
      title: "Hươn Then (Gian chính nhà sàn)",
      description: "Gian giữa rộng lớn của nhà sàn Mo Then, dựng cây hoa Bók bạu rực rỡ ở vị trí trung tâm để vạn vật tụ hội.",
      sourceId: "J01-00004",
      details: "Không gian mở kết nối mọi người xung quanh cây hoa biểu tượng cho sức sống và sự hồi sinh của mùa xuân."
    },
    tay: {
      title: "Slương Then (Bàn thờ áp mái)",
      description: "Bàn thờ treo sát mái nhà dán giấy hồng điều, đặt mô hình thuyền nan dâng lễ, hoa ngũ sắc và thẻ bài tướng lĩnh.",
      sourceId: "J01-00005",
      details: "Khu vực thiêng liêng tuyệt đối, bảo mật các hòm sắc lệnh tổ truyền được gia đình kính cẩn trông coi."
    }
  },
  {
    criterion: "Vật thiêng biểu tượng tâm điểm",
    thai: {
      title: "Cây hoa Then (Bók bạu)",
      description: "Thân chuối cắm nan tre uốn cong, gắn hoa rừng, hình nộm chim thú, ve sầu đan nứa nhuộm ngũ sắc rực rỡ.",
      sourceId: "J01-00006",
      details: "Biểu trưng cho vũ trụ thu nhỏ, nơi linh hồn tổ tiên và thần linh giáng ngự ban phúc lành mùa màng bội thu."
    },
    tay: {
      title: "Phè Then & Dải cầu tơ (Sai tơ)",
      description: "Thuyền nan đan nứa chở quân lương và dải chỉ ngũ sắc chăng nối bàn thờ xuống chiếu làm cầu nối cõi âm - dương.",
      sourceId: "J01-00007",
      details: "Cỗ xe pháp thuật đưa đoàn quân Then vượt qua đại dương bão tố trong chặng Khảm hải."
    }
  },
  {
    criterion: "Nghi thức diễn xướng đặc trưng",
    thai: {
      title: "Tỏn mả (Hái hoa) & Xòe Then",
      description: "Mo Then hái hoa và thú đan tung phát lộc may mắn cho bà con; toàn bản nắm tay kết vòng xòe Then, té nước thơm chúc phúc.",
      sourceId: "J01-00009",
      details: "Kết thúc bằng niềm hân hoan rộn rã, thắt chặt tình đoàn kết láng giềng giữa người Thái đen Chiềng Cọ."
    },
    tay: {
      title: "Trường ca 'Khảm hải' (Vượt biển)",
      description: "Đoạn trường ca bi tráng mô tả đoàn quân Then chèo thuyền qua biển cõi âm; vung quạt làm mái chèo, đàn rung dồn dập.",
      sourceId: "J01-00008",
      details: "Đỉnh cao âm nhạc và kịch nghệ tâm linh Tày, phô diễn tài năng xướng tụng và điều binh khiển tướng của thầy Then."
    }
  },
  {
    criterion: "Cơ chế trao truyền & Bảo tồn",
    thai: {
      title: "Mạng lưới Câu lạc bộ Quần chúng",
      description: "Chuyển dịch mạnh sang các CLB văn nghệ bản mường, dạy đàn Tính, hát Then rộng rãi cho thiếu nhi và thanh niên.",
      sourceId: "J01-00014",
      details: "Tạo sức sống mới ngoài không gian nghi lễ, bảo tồn nghệ thuật đàn Tính và hát Khắp trong đời sống văn hóa đương đại."
    },
    tay: {
      title: "Căn số & Đại lễ Lẩu Then",
      description: "Bảo lưu nghiêm ngặt cơ chế truyền nghề qua căn số mệnh trời và đại lễ cấp sắc 'Lẩu Then' truyền thống nhiều bậc.",
      sourceId: "J01-00014",
      details: "Người học Then phải có linh căn được tổ nghiệp thừa nhận, trải qua các kỳ sát hạch đạo hạnh và nghi lễ nghiêm cẩn."
    }
  }
];

export interface VerifiedSource {
  id: string;
  name: string;
  agency: string;
  type: "Pháp lý quốc tế" | "Cơ quan quản lý nhà nước" | "Văn bản quy phạm" | "Viện nghiên cứu đầu ngành" | "Ấn phẩm học thuật kinh điển";
  url: string;
  description: string;
  badge: string;
}

export const VERIFIED_SOURCES: VerifiedSource[] = [
  {
    id: "SRC-01",
    name: "UNESCO Intangible Cultural Heritage",
    agency: "Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc (UNESCO)",
    type: "Pháp lý quốc tế",
    url: "https://ich.unesco.org/en/RL/practices-of-then-by-tay-nung-and-thai-ethnic-groups-in-viet-nam-01375",
    description: "Hồ sơ chính thức ghi danh 'Thực hành Then của người Tày, Nùng, Thái ở Việt Nam' vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại ngày 12/12/2019.",
    badge: "UNESCO 2019"
  },
  {
    id: "SRC-02",
    name: "Cục Di sản văn hóa",
    agency: "Bộ Văn hóa, Thể thao và Du lịch Việt Nam",
    type: "Cơ quan quản lý nhà nước",
    url: "http://dsvh.gov.vn",
    description: "Cơ quan quản lý nhà nước phụ trách toàn diện công tác kiểm kê, quản lý khoa học và xây dựng hồ sơ di sản văn hóa phi vật thể cấp quốc gia và quốc tế.",
    badge: "dsvh.gov.vn"
  },
  {
    id: "SRC-03",
    name: "Quyết định số 3577/QĐ-BVHTTDL (22/10/2012)",
    agency: "Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch",
    type: "Văn bản quy phạm",
    url: "https://bvhttdl.gov.vn/van-ban-quan-ly/3577-qd-bvhttdl.htm",
    description: "Quyết định công bố Danh mục di sản văn hóa phi vật thể quốc gia đợt 1, công nhận chính thức Lễ Kin Pang Then của người Thái tỉnh Sơn La.",
    badge: "QĐ 3577 Thái"
  },
  {
    id: "SRC-04",
    name: "Quyết định số 2459/QĐ-BVHTTDL (20/6/2017)",
    agency: "Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch",
    type: "Văn bản quy phạm",
    url: "http://dsvh.gov.vn/danh-muc-di-san-van-hoa-phi-vat-the-quoc-gia-1755",
    description: "Quyết định đưa Nghi lễ Then của người Tày tỉnh Cao Bằng vào Danh mục di sản văn hóa phi vật thể quốc gia, xác định giá trị nhân văn và tập quán cộng đồng.",
    badge: "QĐ 2459 Tày"
  },
  {
    id: "SRC-05",
    name: "Luật Di sản văn hóa số 45/2024/QH15",
    agency: "Quốc hội Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
    type: "Văn bản quy phạm",
    url: "https://thuvienphapluat.vn/van-ban/Van-hoa-Xa-hoi/Luat-Di-san-van-hoa-2024-45-2024-QH15-564998.aspx",
    description: "Luật mới được Quốc hội khóa XV thông qua năm 2024 (hiệu lực từ 01/7/2025), quy định cụ thể việc phân loại di sản phi vật thể và bảo vệ quyền tác quyền văn hóa cộng đồng.",
    badge: "Luật 45/2024/QH15"
  },
  {
    id: "SRC-06",
    name: "Viện Âm nhạc Quốc gia Việt Nam",
    agency: "Học viện Âm nhạc Quốc gia Việt Nam",
    type: "Viện nghiên cứu đầu ngành",
    url: "http://vniam.org.vn",
    description: "Trung tâm lưu trữ, điền dã và giải mã âm học hàng đầu về các làn điệu Then cổ, cấu tạo đàn Tính tẩu, và bản ghi âm diễn xướng trường ca của các nghệ nhân cao tuổi.",
    badge: "Viện Âm nhạc"
  },
  {
    id: "SRC-07",
    name: "Âm nhạc dân gian các DTTS & Văn hóa Then Tày - Thái",
    agency: "GS. Tô Ngọc Thanh & Viện Văn hóa Dân tộc học (NXB Văn hóa Dân tộc)",
    type: "Ấn phẩm học thuật kinh điển",
    url: "https://vicas.org.vn",
    description: "Công trình khảo cứu kinh điển của Giáo sư Tô Ngọc Thanh và các nhà nghiên cứu dân tộc học về cấu trúc thang âm Then, vũ trụ luận người Thái và nghi lễ Then Tày.",
    badge: "GS. Tô Ngọc Thanh"
  }
];
