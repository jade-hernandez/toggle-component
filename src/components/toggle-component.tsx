"use client";

import { ToggleSwitch } from "@/ui/toggle-button";
import { useState } from "react";


export default function Toggle() {
  const [inactiveSm, setInactiveSm] = useState(false);
  const [inactiveMd, setInactiveMd] = useState(false);
  const [activeSm, setActiveSm] = useState(true);
  const [activeMd, setActiveMd] = useState(true);

  return (
    <div className="flex justify-center items-center gap-6 h-screen">
      {/* Inactive Column */}
      <div className="flex flex-col items-center gap-6">
        <ToggleSwitch
          checked={inactiveSm}
          onCheckedChange={setInactiveSm}
          size="sm"
        />
        <ToggleSwitch
          checked={inactiveMd}
          onCheckedChange={setInactiveMd}
          size="md"
        />
      </div>
      {/* Active Column */}
      <div className="flex flex-col items-center gap-6">
        <ToggleSwitch
          checked={activeSm}
          onCheckedChange={setActiveSm}
          size="sm"
        />
        <ToggleSwitch
          checked={activeMd}
          onCheckedChange={setActiveMd}
          size="md"
        />
      </div>
    </div>
  );
}