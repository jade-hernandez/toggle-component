"use client";

import { ToggleSwitch } from "@/ui/toggle-button";
import { useState } from "react";


export default function Toggle() {
  const [inactive, setInactive] = useState(false);
  const [active, setActive] = useState(true);
  const handleInactiveChange = (checked: boolean) => {
    setInactive(checked);
  };
  const handleActiveChange = (checked: boolean) => {
    setActive(checked);
  };

  return (
    <div className="flex justify-center items-center gap-6 h-screen">
      {/* Inactive Column */}
      <div className="flex flex-col items-center gap-6">
        <ToggleSwitch
          checked={inactive}
          onCheckedChange={handleInactiveChange}
          size="sm"
        />
        <ToggleSwitch
          checked={inactive}
          onCheckedChange={handleInactiveChange}
          size="md"
        />
      </div>
      {/* Active Column */}
      <div className="flex flex-col items-center gap-6">
        <ToggleSwitch
          checked={active}
          onCheckedChange={handleActiveChange}
          size="sm"
        />
        <ToggleSwitch
          checked={active}
          onCheckedChange={handleActiveChange}
          size="md"
        />
      </div>
    </div>
  );
}