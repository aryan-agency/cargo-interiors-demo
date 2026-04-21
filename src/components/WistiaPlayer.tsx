import { useEffect } from "react";

interface WistiaPlayerProps {
  mediaId: string;
  aspect?: number;
}

let scriptsLoaded = false;
const loadedMedias = new Set<string>();

function ensureScripts(mediaId: string) {
  if (typeof document === "undefined") return;
  if (!scriptsLoaded) {
    const player = document.createElement("script");
    player.src = "https://fast.wistia.com/player.js";
    player.async = true;
    document.head.appendChild(player);
    scriptsLoaded = true;
  }
  if (!loadedMedias.has(mediaId)) {
    const media = document.createElement("script");
    media.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    media.async = true;
    media.type = "module";
    document.head.appendChild(media);
    loadedMedias.add(mediaId);
  }
}

export default function WistiaPlayer({ mediaId, aspect = 0.5625 }: WistiaPlayerProps) {
  useEffect(() => {
    ensureScripts(mediaId);
  }, [mediaId]);

  // Vertical videos (9:16) — constrain max width so they don't dominate the layout
  const paddingTop = `${(1 / aspect) * 100}%`;

  return (
    <div className="mx-auto w-full max-w-[360px] rounded-xl overflow-hidden border border-border bg-black/40 shadow-lg">
      <div className="relative w-full" style={{ paddingTop }}>
        <div className="absolute inset-0">
          {/* @ts-ignore custom element */}
          <wistia-player media-id={mediaId} aspect={String(aspect)} style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
