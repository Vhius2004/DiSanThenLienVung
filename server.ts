import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { HERITAGE_DATA } from './src/data/heritageData.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Prepare the grounded knowledge base string for Gemini
const HERITAGE_CONTEXT_STRING = JSON.stringify(HERITAGE_DATA, null, 2);

const SYSTEM_INSTRUCTION = `Bạn là Trợ lý AI Chuyên gia Nghiên cứu Di Sản Then Liên Vùng (Thái - Sơn La & Tày - Cao Bằng), thuộc đề tài nghiên cứu J01.

RÀNG BUỘC SỐNG CÒN CỦA HỆ THỐNG:
1. Bạn CHỈ ĐƯỢC PHÉP trả lời dựa 100% trên dữ liệu 15 bản ghi HERITAGE_DATA được cung cấp dưới đây.
2. Tuyệt đối KHÔNG tự suy đoán, KHÔNG bịa đặt thông tin, KHÔNG thêm thắt dữ liệu ngoài danh mục.
3. Nếu người dùng hỏi bất kỳ nội dung nào KHÔNG có trong 15 bản ghi hoặc vượt quá phạm vi dữ liệu kiểm chứng, bạn BẮT BUỘC phải trả lời chính xác câu:
"Hệ thống chưa có dữ liệu chính thống đã xác thực về nội dung này, vui lòng tham khảo thêm từ Cục Di sản văn hóa".
4. MỖI CÂU TRẢ LỜI BẮT BUỘC phải dẫn kèm:
   - [Mã bản ghi: J01-xxxxx] (ví dụ: [Mã bản ghi: J01-00012])
   - [Nguồn kiểm chứng: ...] (ví dụ: [Nguồn kiểm chứng: Quyết định 3577/QĐ-BVHTTDL; Cục Di sản văn hóa])
5. Ngôn phong học thuật, tôn kính di sản thiêng, chuẩn mực văn hóa, trình bày mạch lạc rõ ràng bằng tiếng Việt có dấu chuẩn xác.

DANH MỤC 15 BẢN GHI DỮ LIỆU GỐC (HERITAGE_DATA):
${HERITAGE_CONTEXT_STRING}
`;

// Helper fallback answering function based directly on HERITAGE_DATA if API key is not configured
function answerLocally(query: string): string {
  const q = query.toLowerCase();

  // Question 1: Đàn tính
  if (q.includes('đàn tính') || q.includes('tính tẩu') || q.includes('dây')) {
    const r = HERITAGE_DATA.find(x => x.id === 'J01-00012');
    return `So sánh cấu tạo và âm sắc Đàn tính giữa người Thái (Sơn La) và người Tày (Cao Bằng):
- Đàn Tính tẩu người Thái: Cần ngắn (70-80cm), bầu nhỏ, 2 dây cước, âm thanh giòn giã dồn dập đệm cho múa xòe hội.
- Đàn Tính người Tày: Cần dài thanh mảnh (90-100cm), bầu to, 3 dây tơ (Cha - Mẹ - Đất trời), âm vang réo rắt dẫn lối trường ca vượt biển.

[Mã bản ghi: ${r?.id}]
[Nguồn kiểm chứng: ${r?.nguon_tu_lieu}]`;
  }

  // Question 2: Kin Pang Then vs Then Kỳ yên
  if (q.includes('kin pang then') || q.includes('kỳ yên') || q.includes('tính chất') || q.includes('mừng then')) {
    const r = HERITAGE_DATA.find(x => x.id === 'J01-00002');
    return `Khung đối chiếu tính chất nghi lễ Kin Pang Then (Thái) và Then Kỳ yên (Tày):
- Then Thái (Kin Pang Then): Mang tính chất hội bản mường mùa xuân mở rộng, vui tươi với các trò múa xòe và té nước tạ ơn thầy Then. Không gian đón hàng trăm con nuôi (lục pang) và bà con về dự hội quanh cây hoa Bók bạu.
- Then Tày (Then Kỳ yên): Mang đậm tính nghi lễ tâm linh trang nghiêm trong gia đình, kéo dài thâu đêm cầu bình an, giải hạn và nối số sinh mệnh cho gia chủ và tông tộc.

[Mã bản ghi: ${r?.id}]
[Nguồn kiểm chứng: ${r?.nguon_tu_lieu}]`;
  }

  // Question 3: Quay chụp / bí mật cấm
  if (q.includes('quay chụp') || q.includes('ghi âm') || q.includes('bảo vệ di sản') || q.includes('cấm')) {
    return `Lý do không được quay chụp và phổ biến một số phần nghi lễ Then:
- Đối với Then Tày: Không chụp ảnh cự ly gần hoặc công bố hòm sắc lệnh gia truyền cất kín trên bàn thờ Slương ([Mã bản ghi: J01-00005]). Tuyệt đối không phổ biến các lời phù chú mật truyền trừ tà yểm bùa theo luật tục ([Mã bản ghi: J01-00008]).
- Đối với các gia đình làm lễ bán khoán: Không công bố danh tính, ngày sinh cụ thể của các gia đình làm lễ theo luật bảo vệ dữ liệu cá nhân ([Mã bản ghi: J01-00010]).
- Đối với Mo Then Thái: Không công bố địa chỉ nhà riêng và thông tin cá nhân nhạy cảm của nghệ nhân Mo Then ([Mã bản ghi: J01-00004]).
- Đồng thời, UNESCO và Luật Di sản văn hóa 2024 yêu cầu bảo vệ bối cảnh thiêng, nghiêm cấm xuyên tạc hoặc thương mại hóa nghi lễ thành hiện tượng mê tín trục lợi.

[Mã bản ghi: J01-00003, J01-00005, J01-00008, J01-00015]
[Nguồn kiểm chứng: Hồ sơ di sản UNESCO 2019; Quyết định 2459/QĐ-BVHTTDL; Luật Di sản văn hóa 45/2024/QH15]`;
  }

  // General search in the 15 records
  const matches = HERITAGE_DATA.filter(item => {
    return (
      item.ten_tu_lieu.toLowerCase().includes(q) ||
      item.ten_goi_ban_dia.toLowerCase().includes(q) ||
      item.mo_ta.toLowerCase().includes(q) ||
      item.loai_tu_lieu.toLowerCase().includes(q)
    );
  });

  if (matches.length > 0) {
    const item = matches[0];
    return `${item.ten_tu_lieu} (${item.ten_goi_ban_dia}):
${item.mo_ta}

- Dân tộc & Vùng văn hóa: ${item.dan_toc_cong_dong} - ${item.vung_van_hoa}
- Địa danh hiện nay: ${item.dia_danh_hien_nay}
- Bối cảnh thu thập: ${item.boi_canh_thu_thap}

[Mã bản ghi: ${item.id}]
[Nguồn kiểm chứng: ${item.nguon_tu_lieu}]`;
  }

  return "Hệ thống chưa có dữ liệu chính thống đã xác thực về nội dung này, vui lòng tham khảo thêm từ Cục Di sản văn hóa";
}

// AI Assistant Endpoint
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const isPlaceholder = !apiKey || apiKey.startsWith('MY_') || apiKey === 'undefined';

    if (isPlaceholder) {
      // Graceful strictly-grounded local responder
      const reply = answerLocally(message);
      return res.json({
        reply,
        modelUsed: 'local-heritage-grounded'
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    // Format chat context if provided
    let conversationPrompt = '';
    if (Array.isArray(history) && history.length > 0) {
      const recent = history.slice(-4);
      conversationPrompt += 'Lịch sử trao đổi gần nhất:\n';
      recent.forEach((item: { sender: string; text: string }) => {
        conversationPrompt += `${item.sender === 'user' ? 'Người dùng' : 'Trợ lý'}: ${item.text}\n`;
      });
      conversationPrompt += `\nCâu hỏi hiện tại của người dùng: ${message}`;
    } else {
      conversationPrompt = message;
    }

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: conversationPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });

    const timeoutPromise = new Promise<{ text?: string }>((_, reject) => {
      setTimeout(() => reject(new Error('Timeout waiting for Gemini API response')), 4500);
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const replyText = response.text || "Hệ thống chưa có dữ liệu chính thống đã xác thực về nội dung này, vui lòng tham khảo thêm từ Cục Di sản văn hóa";

    return res.json({
      reply: replyText,
      modelUsed: 'gemini-3.8-flash'
    });
  } catch (err: unknown) {
    console.error('Gemini API Error:', err);
    // On API quota / network failure, fall back to our grounded answerLocally rather than crashing
    const message = req.body?.message || '';
    const fallbackReply = answerLocally(message);
    return res.json({
      reply: fallbackReply,
      modelUsed: 'local-heritage-grounded-fallback'
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
