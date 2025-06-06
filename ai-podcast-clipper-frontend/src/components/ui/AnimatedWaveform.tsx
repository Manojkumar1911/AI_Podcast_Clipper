"use client";

/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useRef, useState } from "react";

interface AnimatedWaveformProps {
  filename: string;
  audioUrl?: string;
}

export function AnimatedWaveform({ filename, audioUrl }: AnimatedWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const frameRef = useRef<number | undefined>(undefined);
  const animationRef = useRef<boolean>(true);

  useEffect(() => {
    if (!audioUrl) {
      setIsLoading(false);
      return;
    }

    const audio = new Audio(audioUrl);
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const animate = () => {
      if (!animationRef.current || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray?.[i] ?? 0) / 2;
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = async () => {
      try {
        await audio.play();
        setIsLoading(false);
        animationRef.current = true;
        frameRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsLoading(false);
      }
    };

    startAnimation().catch(console.error);

    return () => {
      animationRef.current = false;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      audio.pause();
      audioContext.close();
    };
  }, [audioUrl]);

  if (!audioUrl) {
  return (
      <div className="flex items-center justify-center">
        <p className="text-sm text-muted-foreground">No audio file &quot;{filename}&quot; found</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={300}
        height={100}
        className="w-full rounded-lg bg-background"
      />
    </div>
  );
}
