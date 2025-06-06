"use client";

import type { Clip } from "@prisma/client";
import { Download, Loader2, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getClipPlayUrl } from "~/actions/generation";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

function ClipCard({ clip }: { clip: Clip }) {
  const [playUrl, setPlayUrl] = useState<string | null>(null);
  const [isLoadingUrl, setIsLoadingUrl] = useState(true);

  useEffect(() => {
    async function fetchPlayUrl() {
      try {
        const result = await getClipPlayUrl(clip.id);
        if (result.succes && result.url) {
          setPlayUrl(result.url);
        } else if (result.error) {
          console.error("Failed to get play url: " + result.error);
        }
      } catch (err) {
        console.error("Error playing clip:", err)
        toast.error("Failed to play clip")
      } finally {
        setIsLoadingUrl(false);
      }
    }

    void fetchPlayUrl();
  }, [clip.id]);

  const handleDownload = () => {
    if (playUrl) {
      const link = document.createElement("a");
      link.href = playUrl;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex max-w-52 flex-col gap-2 rounded-xl border-2 border-white/70 shadow-lg bg-gradient-to-br from-cyan-50/60 via-blue-50/60 to-purple-50/60 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
      <div className="bg-muted rounded-xl overflow-hidden">
        {isLoadingUrl ? (
          <div className="flex h-full w-full items-center justify-center aspect-[9/16]">
            <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
          </div>
        ) : playUrl ? (
          <video
            src={playUrl}
            controls
            preload="metadata"
            className="h-full w-full object-cover aspect-[9/16]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center aspect-[9/16]">
            <Play className="text-muted-foreground h-10 w-10 opacity-50" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <Button 
          onClick={handleDownload} 
          variant="outline" 
          size="sm"
          className="bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-md hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-1.5 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
}

export function ClipDisplay({ clips }: { clips: Clip[] }) {
  if (clips.length === 0) {
    return (
      <p className="text-muted-foreground p-4 text-center">
        No clips generated yet.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {clips.map((clip) => (
        <ClipCard key={clip.id} clip={clip} />
      ))}
    </div>
  );
}