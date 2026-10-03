"use client";

import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const DEFAULT_HEADLINE = "we wanna be where the people are";

const SCATTER_PRESETS = [
  { x: 260, y: -90, rotate: -16, scale: 0.92 },
  { x: 310, y: 80, rotate: 12, scale: 1.03 },
  { x: 340, y: -70, rotate: -9, scale: 0.95 },
  { x: 290, y: 100, rotate: 15, scale: 1.05 },
  { x: 370, y: -50, rotate: -11, scale: 0.94 },
  { x: 320, y: 75, rotate: 8, scale: 1.01 },
] as const;

function getScatter(index: number) {
  const preset = SCATTER_PRESETS[index % SCATTER_PRESETS.length];
  const wave = Math.floor(index / SCATTER_PRESETS.length);

  return {
    x: preset.x + wave * 30,
    y: preset.y + (wave % 2 === 0 ? wave * 10 : -wave * 12),
    rotate: preset.rotate + wave * 1.2,
    scale: Math.max(0.88, preset.scale - wave * 0.01),
  };
}

export function LetterSpan({
  char,
  index,
  totalChars,
  reducedMotion,
  scrollYProgress,
  scatterIntensity = 1,
  startWindow = 0,
  endWindow = 0.45,
}: {
  char: string;
  index: number;
  totalChars: number;
  reducedMotion: boolean;
  scrollYProgress: MotionValue<number>;
  scatterIntensity?: number;
  startWindow?: number;
  endWindow?: number;
}) {
  const windowSpan = endWindow - startWindow;
  const start = startWindow + Math.min((index / Math.max(totalChars, 1)) * (windowSpan * 0.6), windowSpan * 0.6);
  const end = Math.min(start + windowSpan * 0.4, endWindow);
  const fadeIn = Math.min(start + windowSpan * 0.15, end);
  const scatter = getScatter(index);

  const x = useTransform(scrollYProgress, [start, end], [scatter.x * scatterIntensity, 0]);
  const y = useTransform(scrollYProgress, [start, end], [scatter.y * scatterIntensity, 0]);
  const rotate = useTransform(scrollYProgress, [start, end], [scatter.rotate * scatterIntensity, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [scatter.scale, 1]);
  const opacity = useTransform(scrollYProgress, [start, fadeIn, end], [0, 0.8, 1]);

  if (reducedMotion) {
    return <span className="inline-block">{char}</span>;
  }

  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{ x, y, rotate, scale, opacity }}
    >
      {char}
    </motion.span>
  );
}

export function WordSpan({
  word,
  index,
  totalWords,
  scrollYProgress,
  reducedMotion,
  startWindow = 0.3,
  endWindow = 0.85,
}: {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
  reducedMotion: boolean;
  startWindow?: number;
  endWindow?: number;
}) {
  const windowSpan = endWindow - startWindow;
  const wordStart = startWindow + (index / Math.max(totalWords, 1)) * (windowSpan * 0.7);
  const wordEnd = Math.min(wordStart + windowSpan * 0.3, endWindow);

  const opacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0.25, 1]);
  const y = useTransform(scrollYProgress, [wordStart, wordEnd], [4, 0]);

  if (reducedMotion) {
    return <span className="inline-block mr-[0.28em]">{word}</span>;
  }

  return (
    <span className="inline-block mr-[0.28em] overflow-visible">
      <motion.span
        className="inline-block will-change-[opacity,transform]"
        style={{ opacity, y }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export interface ScrollTextRevealProps {
  headline?: string;
  paragraph?: string;
  className?: string;
  headlineClassName?: string;
  paragraphClassName?: string;
  scatterIntensity?: number;
  externalProgress?: MotionValue<number>;
  targetRef?: React.RefObject<HTMLDivElement>;
  variant?: "inline" | "fullpage";
}

export function ScrollTextReveal({
  headline = DEFAULT_HEADLINE,
  paragraph,
  className = "",
  headlineClassName = "",
  paragraphClassName = "",
  scatterIntensity = 0.8,
  externalProgress,
  targetRef,
  variant = "inline",
}: ScrollTextRevealProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const activeRef = targetRef || localRef;
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress: internalScrollProgress } = useScroll({
    target: activeRef,
    offset: variant === "fullpage" ? ["start start", "end end"] : ["start 0.88", "center 0.45"],
  });

  const scrollYProgress = externalProgress || internalScrollProgress;

  const chars = headline.split("");
  const words = paragraph ? paragraph.split(" ") : [];

  if (variant === "fullpage") {
    return (
      <div ref={localRef} className={reducedMotion ? "h-screen" : "h-[460vh]"}>
        <section className="sticky top-0 h-screen overflow-hidden bg-[#EEEAE3]">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center text-center text-[clamp(72px,16vw,260px)] leading-[0.86] font-black text-[rgba(10,10,10,0.08)] uppercase select-none"
          >
            Scroll Down
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center px-[clamp(20px,4vw,72px)]">
            <div className="w-full overflow-visible">
              <div
                aria-label={headline}
                className="flex w-full justify-end whitespace-nowrap select-none"
              >
                <div
                  aria-hidden="true"
                  className="inline-flex items-baseline pr-[clamp(6px,1vw,24px)] text-[clamp(54px,10.5vw,168px)] leading-[0.88] font-black tracking-[-0.04em] text-[#0A0A0A]"
                >
                  {chars.map((char, index) =>
                    char === " " ? (
                      <span key={index} className="inline-block w-[0.28em]" />
                    ) : (
                      <LetterSpan
                        key={index}
                        char={char}
                        index={index}
                        totalChars={chars.length}
                        reducedMotion={reducedMotion}
                        scrollYProgress={scrollYProgress}
                        scatterIntensity={2.5}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>

            {paragraph && (
              <p className="mx-auto mt-20 max-w-[34rem] px-6 text-center text-[clamp(20px,1.2vw,26px)] leading-[1.4] text-[#0A0A0A]">
                {words.map((word, index) => (
                  <WordSpan
                    key={index}
                    word={word}
                    index={index}
                    totalWords={words.length}
                    scrollYProgress={scrollYProgress}
                    reducedMotion={reducedMotion}
                  />
                ))}
              </p>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Inline mode: perfect for sections & cards like WhoIAm
  return (
    <div ref={localRef} className={`relative ${className}`}>
      {headline && (
        <h2 className={`font-editorial italic font-normal tracking-tight ${headlineClassName}`}>
          <span className="sr-only">{headline}</span>
          <span aria-hidden="true" className="inline-block overflow-visible">
            {chars.map((char, index) =>
              char === " " ? (
                <span key={index} className="inline-block w-[0.25em]" />
              ) : (
                <LetterSpan
                  key={index}
                  char={char}
                  index={index}
                  totalChars={chars.length}
                  reducedMotion={reducedMotion}
                  scrollYProgress={scrollYProgress}
                  scatterIntensity={scatterIntensity}
                  startWindow={0}
                  endWindow={0.5}
                />
              ),
            )}
          </span>
        </h2>
      )}

      {paragraph && (
        <p className={`leading-relaxed font-light ${paragraphClassName}`}>
          <span className="sr-only">{paragraph}</span>
          <span aria-hidden="true">
            {words.map((word, index) => (
              <WordSpan
                key={index}
                word={word}
                index={index}
                totalWords={words.length}
                scrollYProgress={scrollYProgress}
                reducedMotion={reducedMotion}
                startWindow={0.25}
                endWindow={0.85}
              />
            ))}
          </span>
        </p>
      )}
    </div>
  );
}

export default ScrollTextReveal;
