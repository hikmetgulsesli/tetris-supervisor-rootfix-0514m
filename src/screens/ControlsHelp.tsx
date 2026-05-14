// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, TriangleAlert } from "lucide-react";


export type ControlsHelpActionId = "button-1-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Top App Bar (Suppressed Navigation logic, kept for Title & Return) */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-container_padding py-base max-w-full min-h-[64px]">
      <div className="flex items-center gap-4">
      <button aria-label="Return" className="text-primary hover:bg-surface-container-highest transition-colors rounded-full p-2 neon-focus flex items-center justify-center min-w-[44px] min-h-[44px]" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft  data-icon="arrow_back" aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tighter">COMMAND INTERFACE</h1>
      </div>
      </header>
      <main className="flex-grow p-container_padding max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-panel_gap mt-8">
      {/* Keyboard Controls Bento Card */}
      <section className="lg:col-span-8 bg-surface-container-low neon-border rounded-lg p-6 flex flex-col">
      <h2 className="font-headline-md text-headline-md text-secondary mb-6 border-b border-outline-variant pb-2">KEYBOARD PROTOCOLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <ArrowLeft  data-icon="arrow_left" className="text-secondary text-3xl" aria-hidden={true} focusable="false" />
      <ArrowRight  data-icon="arrow_right" className="text-secondary text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-data text-label-data text-on-surface">MOVE HORIZONTAL</span>
      </div>
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <Circle  data-icon="arrow_drop_up" className="text-secondary text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-data text-label-data text-on-surface">ROTATE (CW)</span>
      </div>
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <span className="font-label-caps text-label-caps bg-surface-variant text-on-surface px-2 py-1 rounded">C</span>
      </div>
      <span className="font-label-data text-label-data text-on-surface">HOLD PIECE</span>
      </div>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <Circle  data-icon="arrow_drop_down" className="text-secondary text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-data text-label-data text-on-surface">SOFT DROP</span>
      </div>
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <span className="font-label-caps text-label-caps bg-surface-variant text-on-surface px-8 py-1 rounded">SPACE</span>
      </div>
      <span className="font-label-data text-label-data text-on-surface text-error">HARD DROP</span>
      </div>
      <div className="flex items-center justify-between bg-surface p-4 rounded neon-border">
      <div className="flex items-center gap-3">
      <span className="font-label-caps text-label-caps bg-surface-variant text-on-surface px-2 py-1 rounded">P</span>
      </div>
      <span className="font-label-data text-label-data text-on-surface">PAUSE MISSION</span>
      </div>
      </div>
      </div>
      </section>
      {/* Touch Controls Diagram */}
      <section className="lg:col-span-4 bg-surface-container-low neon-border rounded-lg p-6 flex flex-col">
      <h2 className="font-headline-md text-headline-md text-secondary mb-6 border-b border-outline-variant pb-2">TOUCH ZONES</h2>
      <div className="relative w-full aspect-[9/16] bg-surface rounded border border-outline-variant overflow-hidden mt-2 flex flex-col">
      {/* Mockup Grid Background */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-10 gap-grid_gutter opacity-10 pointer-events-none p-1">
      <div className="bg-primary"></div><div className="bg-primary"></div><div className="bg-primary"></div><div className="bg-primary"></div><div className="bg-primary"></div>
      </div>
      {/* Touch Zones Overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-2/3 border-r border-b border-dashed border-secondary/50 flex items-center justify-center bg-secondary/5">
      <span className="font-label-caps text-label-caps text-secondary/70 rotate-[-90deg]">TAP: LEFT</span>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-2/3 border-b border-dashed border-secondary/50 flex items-center justify-center bg-secondary/5">
      <span className="font-label-caps text-label-caps text-secondary/70 rotate-[90deg]">TAP: RIGHT</span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 flex flex-col">
      <div className="w-full h-1/2 border-b border-dashed border-error/50 flex items-center justify-center bg-error/5">
      <span className="font-label-caps text-label-caps text-error/70">SWIPE DOWN: HARD DROP</span>
      </div>
      <div className="w-full h-1/2 flex items-center justify-center bg-secondary/10">
      <span className="font-label-caps text-label-caps text-secondary/70">SWIPE UP: ROTATE</span>
      </div>
      </div>
      </div>
      </section>
      {/* Gameplay Rules */}
      <section className="lg:col-span-12 bg-surface-container-low neon-border rounded-lg p-6">
      <h2 className="font-headline-md text-headline-md text-secondary mb-6 border-b border-outline-variant pb-2">EXECUTION PARAMETERS</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <li className="bg-surface p-4 rounded neon-border flex items-start gap-3">
      <Circle  data-icon="grid_on" className="text-secondary mt-1" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-label-caps text-label-caps text-primary mb-1">MATRIX CLEARANCE</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Complete horizontal lines to remove blocks and score points. Multiple lines simultaneously yield exponential rewards.</p>
      </div>
      </li>
      <li className="bg-surface p-4 rounded neon-border flex items-start gap-3">
      <Circle  data-icon="speed" className="text-secondary mt-1" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-label-caps text-label-caps text-primary mb-1">GRAVITY ACCELERATION</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">As clearance quotas are met, level increases. Descent speed of active entities accelerates accordingly.</p>
      </div>
      </li>
      <li className="bg-surface p-4 rounded neon-border flex items-start gap-3">
      <TriangleAlert  data-icon="warning" className="text-error mt-1" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-label-caps text-label-caps text-primary mb-1">TOP OUT FAILURE</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">If stacked blocks exceed the top boundary of the matrix, the session is immediately terminated.</p>
      </div>
      </li>
      </ul>
      </section>
      </main>
      {/* Footer Component */}
      <footer className="bg-surface-dim border-t border-outline-variant flex justify-between items-center w-full px-container_padding py-base mt-auto">
      <span className="font-label-caps text-label-caps text-on-surface-variant">© 2024 SUPERVISOR_OS. TECHNICAL EXECUTION SECURED.</span>
      <div className="flex gap-4">
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface hover:text-primary transition-colors opacity-80 hover:opacity-100 neon-focus p-1" href="#">TERMINAL_LOGS</a>
      <a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-on-surface hover:text-primary transition-colors opacity-80 hover:opacity-100 neon-focus p-1" href="#">SYSTEM_STATUS</a>
      </div>
      </footer>
    </>
  );
}
