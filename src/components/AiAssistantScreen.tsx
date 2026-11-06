import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types/index.ts';
import {
  Sparkles,
  Send,
  HelpCircle,
  Copy,
  Check,
  ShieldCheck,
  RotateCcw,
  AlertCircle
} from 'lucide-react';

export const AiAssistantScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: `Xin chào bạn! Tôi là Trợ Lý AI Chuyên gia Nghiên cứu Di Sản Then Liên Vùng (Thái - Sơn La & Tày - Cao Bằng), thuộc đề tài J01.

Tôi sẵn sàng hỗ trợ bạn đối chiếu khoa học 15 bản ghi thực hành Then nghi lễ. Mọi câu trả lời của tôi đều tuân thủ nguyên tắc sống còn: dựa 100% trên dữ liệu kiểm chứng và trích dẫn chuẩn mực mã bản ghi cùng cơ quan cung cấp.

Bạn có thể bấm vào một trong các câu hỏi gợi ý nhanh bên dưới hoặc nhập câu hỏi của mình.`,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.8-flash'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_QUESTIONS = [
    'Đàn tính người Thái khác đàn tính người Tày như thế nào?',
    'Lễ Kin Pang Then khác gì Then Kỳ yên?',
    'Tại sao không được quay chụp một số phần nghi lễ Then?',
    'Cây hoa Then (Bók bạu) của người Thái có cấu tạo và biểu trưng gì?',
    'Pháp khí Thuyền Then và Dải cầu tơ trong Then Tày mang ý nghĩa gì?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ sender: m.sender, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error(`Lỗi máy chủ (${response.status})`);
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "Hệ thống chưa có dữ liệu chính thống đã xác thực về nội dung này, vui lòng tham khảo thêm từ Cục Di sản văn hóa",
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.modelUsed || 'gemini-3.8-flash'
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      console.error('Chat error:', err);
      // Fallback message
      const errorMsg: ChatMessage = {
        id: `assistant-err-${Date.now()}`,
        sender: 'assistant',
        text: 'Hệ thống chưa có dữ liệu chính thống đã xác thực về nội dung này, vui lòng tham khảo thêm từ Cục Di sản văn hóa',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'grounded-fallback'
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        sender: 'assistant',
        text: 'Hội thoại đã được đặt lại. Vui lòng đặt câu hỏi về 15 bản ghi di sản Then liên vùng (Thái - Tày).',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'gemini-3.8-flash'
      }
    ]);
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto pb-10">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-950/70 border border-rose-800/80 rounded-xl text-rose-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white font-heritage-serif flex items-center gap-2">
                <span>Trợ Lý AI Liên Vùng (Gemini)</span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-amber-950/60 border border-amber-800/80 text-amber-300 rounded">
                  Kiểm chứng 100%
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Chuyên sâu giải đáp &amp; đối chiếu Then nghi lễ dựa trên 15 bản ghi đề tài J01
              </p>
            </div>
          </div>

          <button
            onClick={handleClearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/70 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm mới hội thoại</span>
          </button>
        </div>

        {/* Strict Grounding Constraint Notice */}
        <div className="mt-4 p-3 bg-slate-950/80 border border-amber-900/50 rounded-lg text-xs text-slate-300 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-400 font-semibold">Ràng buộc sống còn:</strong>{' '}
            Mô hình AI chỉ trả lời dựa trên dữ liệu 15 bản ghi HERITAGE_DATA được nạp. Tuyệt đối không tự suy đoán, không bịa đặt thông tin. Mọi câu trả lời bắt buộc dẫn kèm Mã bản ghi và Tên nguồn kiểm chứng.
          </div>
        </div>
      </div>

      {/* Suggested Quick Questions */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>3 Câu hỏi gợi ý nhanh chuẩn mực:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="text-xs text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-600/50 px-3 py-2 rounded-lg text-left transition-colors cursor-pointer disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Conversation Area */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col h-[520px]">
        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-400">
                  <span>{isUser ? 'Bạn' : 'Trợ lý AI J01'}</span>
                  <span>·</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div
                  className={`relative group max-w-[92%] sm:max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-rose-900/40 text-slate-100 border border-rose-800/50 rounded-tr-xs'
                      : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {!isUser && (
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono text-amber-400/90">
                        {msg.modelUsed || 'gemini-3.8-flash'}
                      </span>
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                        title="Sao chép nội dung"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Đã chép</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Sao chép</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-400">
                <span>Trợ lý AI J01</span>
                <span>·</span>
                <span>Đang tra cứu dữ liệu...</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl rounded-tl-xs p-4 text-xs text-slate-400 flex items-center gap-3">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                <span>Đang đối chiếu 15 bản ghi thực địa...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputPrompt);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Đặt câu hỏi về Then Thái Sơn La & Then Tày Cao Bằng..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="px-4 py-2.5 bg-rose-700 hover:bg-rose-600 disabled:opacity-40 text-white rounded-xl transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-semibold cursor-pointer shrink-0 shadow-sm"
            >
              <span>Gửi</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="mt-2 text-[11px] text-slate-400 text-center">
            Mọi câu trả lời được kiểm duyệt chặt chẽ, không thương mại hóa, tôn kính di sản thiêng cộng đồng.
          </div>
        </div>
      </div>
    </div>
  );
};
