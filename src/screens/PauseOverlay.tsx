// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type PauseOverlayActionId = "resume-operation-1" | "restart-sequence-2" | "abort-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Background Simulated Game Board (Dimmed) */}
      <div className="absolute inset-0 z-0 opacity-20 wireframe-grid flex justify-center items-center">
      {/* Mock Tetrominoes in background */}
      <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-secondary border border-surface-container-highest"></div>
      <div className="absolute bottom-20 left-[calc(33.333%+40px)] w-10 h-10 bg-secondary border border-surface-container-highest"></div>
      <div className="absolute bottom-[calc(5rem+40px)] left-1/3 w-10 h-10 bg-secondary border border-surface-container-highest"></div>
      <div className="absolute bottom-[calc(5rem+40px)] left-[calc(33.333%+40px)] w-10 h-10 bg-secondary border border-surface-container-highest"></div>
      </div>
      {/* Pause Overlay Canvas */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center p-container_padding bg-surface-dim/80 backdrop-blur-sm">
      {/* Central Modal Card */}
      <div className="bg-surface border border-outline-variant w-full max-w-md shadow-[0_0_20px_rgba(34,211,238,0.05)]">
      {/* Modal Header */}
      <div className="border-b border-outline-variant p-container_padding bg-surface-container-low flex items-center justify-between">
      <div className="flex items-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">SESSION PAUSED</h2>
      </div>
      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_#5de6ff]"></div>
      </div>
      {/* Modal Content - Stats */}
      <div className="p-container_padding flex flex-col gap-panel_gap">
      <div className="grid grid-cols-2 gap-4">
      {/* Score Panel */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Current Score</span>
      <span className="font-label-data text-label-data text-secondary">042,850</span>
      </div>
      {/* Level Panel */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Target Level</span>
      <span className="font-label-data text-label-data text-primary">12</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant p-3 flex flex-col gap-1 mt-2">
      <div className="flex justify-between items-center mb-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Line Progress</span>
      <span className="font-label-data text-label-data text-on-surface text-sm">45/50</span>
      </div>
      <div className="w-full h-[4px] bg-surface-variant">
      <div className="h-full bg-secondary w-[90%] shadow-[0_0_5px_#5de6ff]"></div>
      </div>
      </div>
      </div>
      {/* Modal Actions */}
      <div className="p-container_padding pt-0 flex flex-col gap-3 mt-4">
      <button className="w-full h-touch_target bg-secondary-container/10 border-2 border-secondary text-secondary font-label-caps text-label-caps flex justify-center items-center hover:bg-secondary hover:text-surface-container-lowest transition-colors duration-200 uppercase tracking-[0.15em] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-surface" type="button" data-action-id="resume-operation-1" onClick={actions?.["resume-operation-1"]}>
                          RESUME OPERATION
                      </button>
      <button className="w-full h-touch_target bg-surface-container border border-outline-variant text-primary font-label-caps text-label-caps flex justify-center items-center hover:bg-surface-container-high transition-colors duration-200 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-surface" type="button" data-action-id="restart-sequence-2" onClick={actions?.["restart-sequence-2"]}>
                          RESTART SEQUENCE
                      </button>
      <button className="w-full h-touch_target mt-2 text-error font-label-caps text-label-caps flex justify-center items-center hover:bg-error/10 transition-colors duration-200 uppercase tracking-widest focus:outline-none border border-transparent hover:border-error/30" type="button" data-action-id="abort-to-menu-3" onClick={actions?.["abort-to-menu-3"]}>
                          ABORT TO MENU
                      </button>
      </div>
      {/* Terminal Decor */}
      <div className="border-t border-outline-variant/50 p-2 bg-surface-container-lowest flex justify-between items-center opacity-60">
      <span className="font-label-data text-label-data text-[10px] text-on-surface-variant">&gt; SYS_HALT_ACTIVE</span>
      <span className="font-label-data text-label-data text-[10px] text-on-surface-variant">0x00A4F</span>
      </div>
      </div>
      </div>
    </>
  );
}
