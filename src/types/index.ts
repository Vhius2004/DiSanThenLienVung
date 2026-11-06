export type ActiveTab = 'discovery' | 'detail' | 'assistant' | 'sources' | 'about';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  modelUsed?: string;
  citations?: string[];
}
