import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Sparkles, X } from "lucide-react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import {
  detectChatLanguage,
  getLocalPortfolioResponse,
  type ChatLanguage,
  type ChatHistoryItem,
} from "../../lib/portfolioContext";

interface Message extends ChatHistoryItem {
  id: number;
}

let nextMessageId = 2;

const translations = {
  id: {
    title: "AI Portfolio Assistant",
    greeting:
      "Halo! Saya AI Portfolio Assistant milik Fa'iq. Saya bisa membantu menjelaskan pengalaman, project, skill, pendidikan, dan sertifikasi.",
    placeholder: "Tanyakan tentang portfolio...",
    suggested: "Pertanyaan lainnya",
    about: "Ceritakan tentang Fa'iq",
    projects: "Project apa saja?",
    skills: "Apa saja skill teknisnya?",
    experience: "Ceritakan pengalamannya",
    education: "Pendidikannya apa?",
    certification: "Apa saja sertifikasinya?",
  },

  en: {
    title: "AI Portfolio Assistant",
    greeting:
      "Hi! I'm Fa'iq's AI Portfolio Assistant. I can help you explore his experience, projects, skills, education, and certifications.",
    placeholder: "Ask about the portfolio...",
    suggested: "Suggested questions",
    about: "Tell me about Fa'iq",
    projects: "What projects has he worked on?",
    skills: "What are his technical skills?",
    experience: "Tell me about his experience",
    education: "What is his educational background?",
    certification: "What certifications does he have?",
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<ChatLanguage>("en");

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: translations.en.greeting,
    },
  ]);

  const t = translations[language];

  const getSuggestions = (): string[] => {
    if (language === "id") {
      return [
        t.about,
        t.projects,
        t.skills,
        t.experience,
        t.education,
        t.certification,
      ];
    }

    return [
      t.about,
      t.projects,
      t.skills,
      t.experience,
      t.education,
      t.certification,
    ];
  };
  const typeMessage = (fullText: string) => {
    const messageId = nextMessageId++;

    setMessages((previous) => [
      ...previous,
      {
        id: messageId,
        role: "assistant",
        content: "",
      },
    ]);

    let currentIndex = 0;

    const typingSpeed = 20;

    const interval = setInterval(() => {
      currentIndex++;

      setMessages((previous) =>
        previous.map((message) =>
          message.id === messageId
            ? {
                ...message,
                content: fullText.slice(0, currentIndex),
              }
            : message,
        ),
      );

      if (currentIndex >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, typingSpeed);
  };

  const sendMessage = (text?: string) => {
    const message = (text ?? input).trim();

    if (!message || isTyping) return;

    const detectedLanguage = detectChatLanguage(message);

    setLanguage(detectedLanguage);

    const userMessage: Message = {
      id: nextMessageId++,
      role: "user",
      content: message,
    };

    setMessages((previous) => [...previous, userMessage]);

    setInput("");
    setIsTyping(true);

    // Delay sebelum AI mulai mengetik
    setTimeout(() => {
      const response = getLocalPortfolioResponse(
        message,
        detectedLanguage,
        [...messages, userMessage].map(({ role, content }) => ({
          role,
          content,
        })),
      );

      // Mulai efek mengetik
      typeMessage(response);
    }, 1200);
  };

  const suggestions = getSuggestions();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 25,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed bottom-24 right-5 z-50 flex h-150 w-[calc(100vw-40px)] max-w-100 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-subtle bg-surface-container px-4 py-3">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-white"
                >
                  <Sparkles size={18} />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {t.title}
                  </h3>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <motion.span
                      animate={{
                        opacity: [1, 0.35, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-green-500"
                    />

                    <span className="text-xs text-text-secondary">Online</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-text-secondary transition hover:bg-surface-container-high hover:text-text-primary"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <ChatMessage role={message.role} content={message.content} />
                </motion.div>
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 5,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles size={15} />
                    </div>

                    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface-container px-4 py-3">
                      {[0, 1, 2].map((index) => (
                        <motion.span
                          key={index}
                          animate={{
                            y: [0, -4, 0],
                            opacity: [0.35, 1, 0.35],
                          }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: index * 0.15,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-text-secondary"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Suggested Questions */}
              {!isTyping && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15,
                  }}
                  className="pt-2"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                    {t.suggested}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((question) => (
                      <motion.button
                        key={question}
                        type="button"
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        onClick={() => sendMessage(question)}
                        className="rounded-full border border-border-subtle bg-surface-container px-3 py-2 text-xs text-text-secondary transition hover:border-primary hover:text-primary"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={() => sendMessage()}
              disabled={isTyping}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container/20 text-white shadow-lg transition hover:shadow-xl"
        aria-label="Open AI Portfolio Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{
                rotate: -90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
            >
              <ChevronDown size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
