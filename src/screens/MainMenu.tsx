// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "button-1-1" | "button-2-2" | "button-3-3" | "start-new-session-4" | "resume-5" | "controls-6" | "leaderboard-7";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Matrix Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant via-background to-background">
      {/* Abstract grid representation */}
      <div className="w-full h-full" style={{backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)", backgroundSize: "40px 40px", backgroundPosition: "center"}}></div>
      </div>
      {/* SideNavBar (Suppressed as this is a high-level destination, but if it were visible, it would go here. Hiding based on instructions for focus screens, but keeping header elements for brand) */}
      <header className="flex justify-between items-center w-full px-container_padding py-base max-w-full bg-surface dark:bg-surface border-b border-outline-variant z-10 relative">
      <div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary dark:text-primary">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex items-center gap-panel_gap">
      <button aria-label="settings" className="hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors p-2 text-on-surface-variant dark:text-on-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help_outline" className="hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors p-2 text-on-surface-variant dark:text-on-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="leaderboard" className="hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors p-2 text-on-surface-variant dark:text-on-surface-variant" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <main className="flex-grow flex items-center justify-center relative z-10 p-container_padding">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
      {/* Left Info Panel */}
      <div className="hidden md:flex flex-col justify-end w-1/3 pb-8">
      <div className="bg-surface-container border border-outline-variant rounded p-6">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">SYSTEM STATUS</p>
      <p className="font-label-data text-label-data text-secondary">ONLINE / STABLE</p>
      <div className="mt-4 h-1 w-full bg-surface-variant">
      <div className="h-full bg-secondary w-full"></div>
      </div>
      </div>
      </div>
      {/* Central Menu Canvas */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/3">
      <div className="mb-12 text-center">
      <h1 className="font-headline-lg text-headline-lg text-secondary mb-2" style={{fontSize: "3rem", lineHeight: "1.1"}}>SUPERVISOR_OS</h1>
      <p className="font-label-data text-label-data text-on-surface-variant tracking-widest">v4.0.2-STABLE</p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
      {/* Menu Options */}
      <button className="group relative overflow-hidden bg-primary text-on-primary font-label-caps text-label-caps h-touch_target flex items-center justify-center border-2 border-primary hover:bg-surface hover:text-primary transition-colors duration-200" type="button" data-action-id="start-new-session-4" onClick={actions?.["start-new-session-4"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                                  START NEW SESSION
                              </span>
      </button>
      <button className="group relative overflow-hidden bg-surface-container-high text-secondary font-label-caps text-label-caps h-touch_target flex items-center justify-center border border-outline-variant hover:border-secondary hover:bg-surface transition-colors duration-200" type="button" data-action-id="resume-5" onClick={actions?.["resume-5"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  RESUME
                              </span>
      </button>
      <button className="group relative overflow-hidden bg-surface-container text-on-surface font-label-caps text-label-caps h-touch_target flex items-center justify-center border border-outline-variant hover:border-primary hover:bg-surface-variant transition-colors duration-200 mt-4" type="button" data-action-id="controls-6" onClick={actions?.["controls-6"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  CONTROLS
                              </span>
      </button>
      <button className="group relative overflow-hidden bg-surface-container text-on-surface font-label-caps text-label-caps h-touch_target flex items-center justify-center border border-outline-variant hover:border-primary hover:bg-surface-variant transition-colors duration-200" type="button" data-action-id="leaderboard-7" onClick={actions?.["leaderboard-7"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  LEADERBOARD
                              </span>
      </button>
      </div>
      </div>
      {/* Right Info Panel */}
      <div className="hidden md:flex flex-col justify-end w-1/3 pb-8 items-end">
      <div className="bg-surface-container border border-outline-variant rounded p-6 text-right">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">LAST SESSION</p>
      <p className="font-label-data text-label-data text-on-surface">SCORE: 142,050</p>
      <p className="font-label-data text-label-data text-on-surface-variant text-sm mt-1">LVL 12 - 04:22 PM</p>
      </div>
      </div>
      </div>
      </main>
      <footer className="flex justify-between items-center w-full px-container_padding py-base bg-surface-dim dark:bg-surface-dim border-t border-outline-variant z-10 relative">
      <div className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant">
                  © 2024 SUPERVISOR_OS. TECHNICAL EXECUTION SECURED.
              </div>
      <div className="flex gap-6">
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">TERMINAL_LOGS</a>
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">SYSTEM_STATUS</a>
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">LEGAL_DECRYPT</a>
      </div>
      </footer>
    </>
  );
}
