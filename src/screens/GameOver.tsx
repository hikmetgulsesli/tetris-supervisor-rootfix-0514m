// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "replay-session-1" | "submit-score-2" | "main-menu-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Top Navigation Hidden as per guidelines for transactional/dead-end screens */}
      <main className="flex-grow flex items-center justify-center relative p-container_padding">
      {/* Background Game State Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[400px] h-full max-h-[800px] wireframe-grid relative">
      {/* Mock blocks scattered for background */}
      <div className="absolute bottom-0 left-[20%] w-[10%] h-[5%] bg-secondary/50 border-t-2 border-secondary"></div>
      <div className="absolute bottom-[5%] left-[20%] w-[10%] h-[5%] bg-secondary/50 border-t-2 border-secondary"></div>
      <div className="absolute bottom-0 left-[30%] w-[10%] h-[5%] bg-error/50 border-t-2 border-error"></div>
      <div className="absolute bottom-[10%] left-[50%] w-[30%] h-[5%] bg-tertiary/50 border-t-2 border-tertiary"></div>
      <div className="absolute bottom-[15%] left-[40%] w-[10%] h-[15%] bg-primary/50 border-t-2 border-primary"></div>
      </div>
      </div>
      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-panel_gap">
      {/* Header Section */}
      <div className="text-center mb-8">
      <h1 className="font-headline-lg text-headline-lg text-error neon-text-error tracking-widest uppercase mb-2">SESSION TERMINATED</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant uppercase tracking-widest">Supervisor System Halt</p>
      </div>
      {/* Report Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-panel_gap">
      {/* Main Score Block */}
      <div className="md:col-span-2 bg-surface-container border border-outline-variant rounded-DEFAULT p-container_padding flex flex-col items-center justify-center relative overflow-hidden group hover:border-secondary transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Final Score</span>
      <div className="font-label-data text-label-data text-5xl md:text-7xl text-secondary font-bold tracking-tighter">
                              845,200
                          </div>
      </div>
      {/* Stats Blocks */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-container_padding flex flex-col justify-between hover:border-primary transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Level Reached</span>
      <Circle  data-icon="leaderboard" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-data text-label-data text-4xl text-on-surface">
                              24
                          </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-container_padding flex flex-col justify-between hover:border-tertiary transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Lines Cleared</span>
      <Circle  data-icon="clear_all" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-tertiary text-xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-data text-label-data text-4xl text-on-surface">
                              189
                          </div>
      </div>
      {/* Secondary Stats */}
      <div className="md:col-span-2 grid grid-cols-3 gap-panel_gap mt-4">
      <div className="flex flex-col items-center p-4 bg-surface-container-low border border-outline-variant/50 rounded-DEFAULT">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">Tetrises</span>
      <span className="font-label-data text-label-data text-secondary">32</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-surface-container-low border border-outline-variant/50 rounded-DEFAULT">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">T-Spins</span>
      <span className="font-label-data text-label-data text-primary">14</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-surface-container-low border border-outline-variant/50 rounded-DEFAULT">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">Time</span>
      <span className="font-label-data text-label-data text-tertiary">14:22</span>
      </div>
      </div>
      </div>
      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
      <button className="flex items-center justify-center gap-2 bg-secondary text-on-secondary hover:bg-secondary-fixed-dim transition-colors h-touch_target px-8 py-3 rounded-DEFAULT font-label-caps text-label-caps border border-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="replay-session-1" onClick={actions?.["replay-session-1"]}>
      <Circle  data-icon="replay" className="text-lg group-hover:rotate-180 transition-transform duration-500" aria-hidden={true} focusable="false" />
                          REPLAY SESSION
                      </button>
      <button className="flex items-center justify-center gap-2 bg-surface-container border border-outline hover:bg-surface-container-high hover:border-primary transition-colors h-touch_target px-8 py-3 rounded-DEFAULT font-label-caps text-label-caps text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="submit-score-2" onClick={actions?.["submit-score-2"]}>
      <Circle  data-icon="publish" className="text-lg" aria-hidden={true} focusable="false" />
                          SUBMIT SCORE
                      </button>
      <button className="flex items-center justify-center gap-2 bg-transparent border border-outline-variant hover:bg-surface-container hover:border-outline transition-colors h-touch_target px-8 py-3 rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-on-surface-variant focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Home  data-icon="home" className="text-lg" aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-dim dark:bg-surface-dim border-t border-outline-variant flex justify-between items-center w-full px-container_padding py-base docked full-width bottom-0 z-20 relative">
      <div className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant">
                  © 2024 SUPERVISOR_OS. TECHNICAL EXECUTION SECURED.
              </div>
      <div className="flex gap-4">
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface opacity-80 hover:opacity-100 transition-colors" href="#">TERMINAL_LOGS</a>
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface opacity-80 hover:opacity-100 transition-colors" href="#">SYSTEM_STATUS</a>
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface opacity-80 hover:opacity-100 transition-colors" href="#">LEGAL_DECRYPT</a>
      </div>
      </footer>
    </>
  );
}
