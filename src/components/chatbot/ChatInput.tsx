// src/components/chatbot/ChatInput.tsx

import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled = false,
}: ChatInputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-2 border-t border-border-subtle p-3">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about my portfolio..."
        disabled={disabled}
        className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-text-primary outline-none placeholder:text-text-secondary"
      />

      <button
        type="button"
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Send message"
      >
        <ArrowUp size={17} />
      </button>
    </div>
  );
}
