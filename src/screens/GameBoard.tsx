// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, Circle, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "initiate-session-4" | "pause-5" | "button-6-6" | "button-7-7" | "button-8-8" | "hold-9" | "button-10-10";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-container_padding py-base max-w-full bg-surface dark:bg-surface border-b border-outline-variant docked full-width top-0 z-50">
      <div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary dark:text-primary">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex gap-4 items-center">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-DEFAULT" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-DEFAULT" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-DEFAULT" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant docked left-0 h-full w-64 z-40">
      <div className="px-container_padding pb-panel_gap border-b border-outline-variant mb-4">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">SUPERVISOR_OS</div>
      <div className="font-headline-md text-headline-md text-secondary">v4.0.2-STABLE</div>
      </div>
      <ul className="flex-1 flex flex-col">
      <li>
      <a className="flex items-center gap-3 px-container_padding py-3 text-secondary border-r-2 border-secondary bg-surface-container-high transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#">
      <Circle aria-hidden={true} focusable="false" />
                              Command
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-container_padding py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#">
      <Circle aria-hidden={true} focusable="false" />
                              Training
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-container_padding py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#">
      <Circle aria-hidden={true} focusable="false" />
                              Archives
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-container_padding py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#">
      <Circle aria-hidden={true} focusable="false" />
                              Telemetry
                          </a>
      </li>
      </ul>
      <div className="p-container_padding border-t border-outline-variant">
      <button className="w-full py-3 bg-secondary text-on-secondary font-label-caps text-label-caps rounded-DEFAULT uppercase tracking-widest hover:bg-secondary-fixed transition-colors" type="button" data-action-id="initiate-session-4" onClick={actions?.["initiate-session-4"]}>
                          INITIATE SESSION
                      </button>
      </div>
      </nav>
      {/* Main Gameplay Canvas */}
      <main className="flex-1 lg:ml-64 flex flex-col md:flex-row items-center justify-center p-container_padding gap-panel_gap min-h-full">
      {/* Left Panel (High Score & Controls) */}
      <div className="flex flex-col gap-panel_gap order-2 md:order-1 w-full md:w-48 h-full justify-start pt-8">
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">High Score</span>
      <span className="font-label-data text-label-data text-secondary">0459200</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col mt-auto md:mt-0">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4 text-center">System Override</span>
      <button className="w-full h-touch_target border border-error text-error font-label-caps text-label-caps rounded-DEFAULT hover:bg-error hover:text-on-error transition-colors flex items-center justify-center gap-2" type="button" data-action-id="pause-5" onClick={actions?.["pause-5"]}>
      <Circle aria-hidden={true} focusable="false" /> PAUSE
                          </button>
      </div>
      </div>
      {/* Playfield (10x20 Grid) */}
      <div className="order-1 md:order-2 flex-shrink-0 bg-primary-container p-2 border border-outline-variant rounded-lg relative overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.1)]">
      {/* Grid Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:calc((100%-18px)/10)_calc((100%-38px)/20)] opacity-20 pointer-events-none" style={{margin: "2px"}}></div>
      {/* Actual Grid container */}
      <div className="grid grid-cols-10 grid-rows-20 gap-[2px] w-[280px] h-[560px] md:w-[320px] md:h-[640px] relative z-10">
      {/* Example blocks (T-piece, L-piece, etc.) */}
      {/* Active I piece falling */}
      <div className="col-start-4 row-start-3 bg-secondary border border-[#0d94a8] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-5 row-start-3 bg-secondary border border-[#0d94a8] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-6 row-start-3 bg-secondary border border-[#0d94a8] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-7 row-start-3 bg-secondary border border-[#0d94a8] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      {/* Ghost I piece */}
      <div className="col-start-4 row-start-19 border border-dashed border-secondary opacity-30 bg-secondary/10 rounded-sm"></div>
      <div className="col-start-5 row-start-19 border border-dashed border-secondary opacity-30 bg-secondary/10 rounded-sm"></div>
      <div className="col-start-6 row-start-19 border border-dashed border-secondary opacity-30 bg-secondary/10 rounded-sm"></div>
      <div className="col-start-7 row-start-19 border border-dashed border-secondary opacity-30 bg-secondary/10 rounded-sm"></div>
      {/* Placed blocks (Random bottom stack) */}
      <div className="col-start-1 row-start-20 bg-[#F43F5E] border border-[#9f1239] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-2 row-start-20 bg-[#F43F5E] border border-[#9f1239] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-3 row-start-20 bg-[#F43F5E] border border-[#9f1239] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-2 row-start-19 bg-[#F43F5E] border border-[#9f1239] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-9 row-start-20 bg-[#FBBF24] border border-[#b45309] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-10 row-start-20 bg-[#FBBF24] border border-[#b45309] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-9 row-start-19 bg-[#FBBF24] border border-[#b45309] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      <div className="col-start-10 row-start-19 bg-[#FBBF24] border border-[#b45309] rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      </div>
      </div>
      {/* Right Panel (Stats & HUD) */}
      <div className="flex flex-col gap-panel_gap order-3 w-full md:w-48 h-full justify-start pt-8">
      {/* Next Piece */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase w-full text-left mb-4 border-b border-outline-variant pb-2">Next Buffer</span>
      <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-[80px] h-[40px] my-2">
      {/* L Piece */}
      <div className="col-start-2 row-start-1 bg-[#F97316] border border-[#c2410c] rounded-sm"></div>
      <div className="col-start-2 row-start-2 bg-[#F97316] border border-[#c2410c] rounded-sm"></div>
      <div className="col-start-3 row-start-2 bg-[#F97316] border border-[#c2410c] rounded-sm"></div>
      <div className="col-start-4 row-start-2 bg-[#F97316] border border-[#c2410c] rounded-sm"></div>
      </div>
      </div>
      {/* Hold Piece */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase w-full text-left mb-4 border-b border-outline-variant pb-2">Hold Bay</span>
      <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-[80px] h-[40px] my-2">
      {/* Square Piece */}
      <div className="col-start-2 row-start-1 bg-[#FBBF24] border border-[#b45309] rounded-sm"></div>
      <div className="col-start-3 row-start-1 bg-[#FBBF24] border border-[#b45309] rounded-sm"></div>
      <div className="col-start-2 row-start-2 bg-[#FBBF24] border border-[#b45309] rounded-sm"></div>
      <div className="col-start-3 row-start-2 bg-[#FBBF24] border border-[#b45309] rounded-sm"></div>
      </div>
      </div>
      {/* Telemetry Stats */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col gap-4">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Current Score</span>
      <span className="font-label-data text-label-data text-on-surface">0124800</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Clearance Level</span>
      <span className="font-label-data text-label-data text-on-surface">12</span>
      {/* Progress bar */}
      <div className="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
      <div className="h-full bg-secondary w-3/4"></div>
      </div>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Lines Decrypted</span>
      <span className="font-label-data text-label-data text-on-surface">114</span>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Mobile Touch Controls (Visible only on small screens) */}
      <div className="md:hidden flex justify-between p-container_padding bg-surface border-t border-outline-variant mt-auto">
      <div className="flex gap-2">
      <button className="w-touch_target h-touch_target bg-surface-container-high border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-secondary active:text-on-secondary" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch_target h-touch_target bg-surface-container-high border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-secondary active:text-on-secondary" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <ArrowDown aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch_target h-touch_target bg-surface-container-high border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-secondary active:text-on-secondary" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <ArrowRight aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex gap-2">
      <button className="w-touch_target h-touch_target bg-surface-container-high border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-secondary active:text-on-secondary font-label-caps text-label-caps" type="button" data-action-id="hold-9" onClick={actions?.["hold-9"]}>
                      HOLD
                  </button>
      <button className="w-touch_target h-touch_target bg-surface-container-high border border-secondary text-secondary rounded-full flex items-center justify-center active:bg-secondary active:text-on-secondary" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}>
      <RotateCw aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Desktop Keyboard Guide (Visible only on larger screens) */}
      <div className="hidden md:flex justify-center p-4 text-on-surface-variant font-label-caps text-label-caps opacity-50 bg-background lg:ml-64 border-t border-outline-variant z-10 relative">
              [ \u2190 \u2192 \u2193 : NAVIGATE ]   |   [ \u2191 : ROTATE ]   |   [ SPACE : HARD DROP ]   |   [ C : HOLD ]
          </div>
    </>
  );
}
