import React from 'react';

/**
 * Common color resolution helper
 */
function getArtColors(isDark, color, solarColor) {
  return {
    stroke: isDark ? '#34d399' : (color || '#059669'),
    accent: isDark ? '#6ee7b7' : '#0d9488',
    fill: isDark ? '#10b981' : (solarColor || '#10b981'),
    fillOpacity: isDark ? 0.35 : 0.25,
    lightFill: isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(16, 185, 129, 0.12)',
  };
}

/**
 * 1. Wind Turbine + Tilted Solar Panel Pair (Original Reference)
 * Ideal for: GreenEnergyLandscape / Metrics
 */
export function WindAndSolarArt({ 
  className = '', 
  color = '#059669', 
  solarColor = '#10b981', 
  isDark = false 
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg 
      viewBox="0 0 240 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground baseline */}
      <path 
        d="M 10,136 Q 100,133 180,135 T 235,135" 
        stroke={c.stroke} 
        strokeWidth="1.2" 
        strokeDasharray="4 3" 
        opacity="0.6" 
      />

      {/* Wind Turbine 1 (Tall Left) */}
      <line x1="70" y1="26" x2="70" y2="135" stroke={c.stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="70" cy="26" r="4" fill={c.stroke} />
      <line x1="70" y1="26" x2="52" y2="2" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="26" x2="90" y2="16" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="26" x2="62" y2="48" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Wind Turbine 2 (Medium Right) */}
      <line x1="130" y1="42" x2="130" y2="135" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="130" cy="42" r="3.2" fill={c.stroke} />
      <line x1="130" y1="42" x2="116" y2="22" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="130" y1="42" x2="146" y2="35" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="130" y1="42" x2="124" y2="60" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />

      {/* Tilted Ground Solar Panel */}
      <polygon 
        points="155,114 215,98 226,128 166,134" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="185" y1="106" x2="196" y2="131" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="160" y1="124" x2="220" y2="113" stroke={c.stroke} strokeWidth="1.2" />

      {/* Solar Panel Legs */}
      <line x1="185" y1="120" x2="185" y2="135" stroke={c.stroke} strokeWidth="1.4" />
      <line x1="215" y1="113" x2="215" y2="133" stroke={c.stroke} strokeWidth="1.4" />
    </svg>
  );
}

/**
 * 2. Solar Farm PV Array
 * Multiple tilted ground-mount panels with stand legs
 */
export function SolarArrayArt({ 
  className = '', 
  color = '#059669', 
  solarColor = '#10b981', 
  isDark = false 
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg 
      viewBox="0 0 220 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <line x1="10" y1="115" x2="210" y2="115" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />

      {/* Panel 1 */}
      <polygon 
        points="20,85 85,72 98,105 32,112" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="52" y1="78" x2="65" y2="108" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="26" y1="98" x2="91" y2="88" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="55" y1="93" x2="55" y2="114" stroke={c.stroke} strokeWidth="1.4" />

      {/* Panel 2 */}
      <polygon 
        points="105,74 175,60 188,94 118,102" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="140" y1="67" x2="153" y2="98" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="112" y1="88" x2="181" y2="77" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="145" y1="82" x2="145" y2="105" stroke={c.stroke} strokeWidth="1.4" />

      {/* Distance Turbine */}
      <line x1="188" y1="28" x2="188" y2="90" stroke={c.stroke} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="188" cy="28" r="2.8" fill={c.stroke} />
      <line x1="188" y1="28" x2="178" y2="10" stroke={c.stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="188" y1="28" x2="200" y2="22" stroke={c.stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="188" y1="28" x2="184" y2="44" stroke={c.stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 3. EV Charging Station & Electric Mobility Art
 * EV fast charger dispenser with charging gun, lightning bolt, electric vehicle profile
 * Ideal for: ServicesGrid / EV Infrastructure Workforce
 */
export function EVChargingStationArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 250 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground road line */}
      <line x1="10" y1="135" x2="240" y2="135" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* EV Charging Station Dispenser Box */}
      <rect 
        x="45" 
        y="45" 
        width="38" 
        height="90" 
        rx="6" 
        fill={c.lightFill} 
        stroke={c.stroke} 
        strokeWidth="2" 
      />
      {/* Top status indicator light */}
      <rect x="53" y="52" width="22" height="4" rx="2" fill={c.accent} />
      
      {/* Dispenser Digital Screen */}
      <rect x="51" y="62" width="26" height="18" rx="2" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1.2" />
      {/* Screen Lightning Bolt */}
      <path 
        d="M 65 65 L 61 72 L 64 72 L 63 77 L 68 70 L 65 70 Z" 
        fill={c.stroke} 
      />

      {/* RFID / Card Tap & Plug Holster */}
      <line x1="53" y1="88" x2="75" y2="88" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="58" cy="98" r="3" stroke={c.stroke} strokeWidth="1.2" />
      <circle cx="70" cy="98" r="3" stroke={c.stroke} strokeWidth="1.2" />

      {/* Flexible Charging Cable hanging down */}
      <path 
        d="M 83 75 C 105 75 102 120 115 120 C 122 120 126 112 130 102" 
        stroke={c.stroke} 
        strokeWidth="2" 
        strokeLinecap="round" 
      />

      {/* Charging Nozzle / Gun plugged into EV */}
      <rect 
        x="128" 
        y="96" 
        width="14" 
        height="8" 
        rx="2" 
        transform="rotate(-15 128 96)" 
        fill={c.accent} 
        stroke={c.stroke} 
        strokeWidth="1.4" 
      />

      {/* Electric Car Silhouette (Charging) */}
      <path 
        d="M 136 100 
           C 142 92 152 82 170 82 
           L 198 82 
           C 208 82 220 92 228 102 
           L 236 105 
           C 240 107 242 112 242 118 
           L 242 124 
           L 134 124 
           C 134 116 135 106 136 100 Z" 
        fill={c.lightFill} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      {/* Car Window */}
      <path 
        d="M 166 86 L 194 86 C 202 86 210 93 216 100 L 155 100 C 158 92 162 86 166 86 Z" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.2" 
      />
      {/* Car Wheels */}
      <circle cx="156" cy="125" r="9" stroke={c.stroke} strokeWidth="2" fill="#fff" />
      <circle cx="156" cy="125" r="3.5" fill={c.stroke} />
      <circle cx="218" cy="125" r="9" stroke={c.stroke} strokeWidth="2" fill="#fff" />
      <circle cx="218" cy="125" r="3.5" fill={c.stroke} />

      {/* Clean Energy Leaf above car */}
      <path 
        d="M 180 68 C 180 60 190 56 195 56 C 195 65 188 69 180 68 Z" 
        fill={c.fill} 
        fillOpacity="0.8" 
        stroke={c.stroke} 
        strokeWidth="1" 
      />
    </svg>
  );
}

/**
 * 4. High-Voltage Transmission Tower & Grid Infrastructure Art
 * Slender electric pylon with catenary power lines & substation unit
 * Ideal for: Talent Matrix / Renewable & Electrical Engineering
 */
export function TransmissionGridPylonArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 240 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground horizon */}
      <line x1="10" y1="145" x2="235" y2="145" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* Main Transmission Tower (Lattice Pylon) */}
      {/* Tower legs */}
      <line x1="95" y1="15" x2="65" y2="145" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="15" x2="125" y2="145" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Tower top tip */}
      <line x1="95" y1="5" x2="95" y2="15" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="95" cy="5" r="2" fill={c.stroke} />

      {/* Upper Cross Arm */}
      <line x1="68" y1="38" x2="122" y2="38" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="68" y1="38" x2="72" y2="46" stroke={c.stroke} strokeWidth="1.4" />
      <line x1="122" y1="38" x2="118" y2="46" stroke={c.stroke} strokeWidth="1.4" />

      {/* Middle Cross Arm (Wider) */}
      <line x1="58" y1="62" x2="132" y2="62" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="58" y1="62" x2="63" y2="72" stroke={c.stroke} strokeWidth="1.4" />
      <line x1="132" y1="62" x2="127" y2="72" stroke={c.stroke} strokeWidth="1.4" />

      {/* Lower Cross Arm */}
      <line x1="64" y1="88" x2="126" y2="88" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Cross Bracings (X shapes) */}
      <line x1="90" y1="38" x2="100" y2="62" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />
      <line x1="100" y1="38" x2="90" y2="62" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />

      <line x1="84" y1="62" x2="106" y2="88" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />
      <line x1="106" y1="62" x2="84" y2="88" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />

      <line x1="78" y1="88" x2="112" y2="116" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />
      <line x1="112" y1="88" x2="78" y2="116" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />

      <line x1="72" y1="116" x2="118" y2="145" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />
      <line x1="118" y1="116" x2="72" y2="145" stroke={c.stroke} strokeWidth="1.2" opacity="0.85" />

      {/* Suspended Power Lines (Catenary Curves) */}
      <path d="M 10 50 Q 38 65 68 38" stroke={c.stroke} strokeWidth="1.4" fill="none" opacity="0.75" />
      <path d="M 122 38 Q 165 72 235 48" stroke={c.stroke} strokeWidth="1.4" fill="none" opacity="0.75" />

      <path d="M 10 75 Q 35 90 58 62" stroke={c.stroke} strokeWidth="1.4" fill="none" opacity="0.75" />
      <path d="M 132 62 Q 175 98 235 72" stroke={c.stroke} strokeWidth="1.4" fill="none" opacity="0.75" />

      {/* Substation Transformer Box on ground */}
      <rect x="175" y="112" width="42" height="33" rx="3" fill={c.lightFill} stroke={c.stroke} strokeWidth="1.6" />
      <rect x="183" y="118" width="10" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="198" y="118" width="10" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <line x1="180" y1="133" x2="212" y2="133" stroke={c.stroke} strokeWidth="1" strokeDasharray="3 2" />

      {/* Substation Bushing Terminals on top */}
      <line x1="185" y1="105" x2="185" y2="112" stroke={c.stroke} strokeWidth="1.5" />
      <circle cx="185" cy="105" r="1.8" fill={c.stroke} />
      <line x1="196" y1="103" x2="196" y2="112" stroke={c.stroke} strokeWidth="1.5" />
      <circle cx="196" cy="103" r="1.8" fill={c.stroke} />
      <line x1="207" y1="105" x2="207" y2="112" stroke={c.stroke} strokeWidth="1.5" />
      <circle cx="207" cy="105" r="1.8" fill={c.stroke} />
    </svg>
  );
}

/**
 * 5. Battery Storage (BESS) & Renewable Inverter Unit
 * Modular industrial battery storage unit with LED charge meter + solar panel & power flow
 * Ideal for: WorkforceUpskillingSection / Technical training & transitions
 */
export function BatteryStorageBESSArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground line */}
      <line x1="10" y1="135" x2="235" y2="135" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* BESS Industrial Storage Container */}
      <rect x="25" y="45" width="85" height="90" rx="5" fill={c.lightFill} stroke={c.stroke} strokeWidth="2" />
      
      {/* Container Doors Divider */}
      <line x1="67" y1="45" x2="67" y2="135" stroke={c.stroke} strokeWidth="1.4" />
      
      {/* Ventilation Louvers (Left Door) */}
      <line x1="33" y1="58" x2="59" y2="58" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="33" y1="64" x2="59" y2="64" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="33" y1="70" x2="59" y2="70" stroke={c.stroke} strokeWidth="1.2" />

      {/* Digital Battery Gauge Bar (Right Door) */}
      <rect x="75" y="56" width="26" height="38" rx="3" stroke={c.stroke} strokeWidth="1.4" fill="none" />
      {/* Battery Top Terminal */}
      <rect x="83" y="52" width="10" height="4" rx="1" fill={c.stroke} />
      {/* Battery Level Indicators */}
      <rect x="78" y="82" width="20" height="8" rx="1.5" fill={c.fill} fillOpacity="0.9" />
      <rect x="78" y="72" width="20" height="8" rx="1.5" fill={c.fill} fillOpacity="0.9" />
      <rect x="78" y="62" width="20" height="8" rx="1.5" fill={c.fill} fillOpacity="0.75" />

      {/* Inverter Control Unit */}
      <rect x="33" y="88" width="26" height="36" rx="2" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1.2" />
      {/* Wave / Inverter conversion symbol (AC/DC) */}
      <path d="M 37 100 Q 43 94 49 100 T 61 100" stroke={c.stroke} strokeWidth="1.3" fill="none" />
      <line x1="37" y1="112" x2="61" y2="112" stroke={c.stroke} strokeWidth="1.3" />

      {/* Energy Conduit Cable to Solar Panel */}
      <path 
        d="M 110 100 C 130 100 135 125 150 125" 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeDasharray="4 3" 
      />

      {/* Tilted Solar PV Panel connected */}
      <polygon 
        points="145,95 210,80 225,116 160,128" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="178" y1="88" x2="192" y2="122" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="152" y1="111" x2="218" y2="98" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="180" y1="108" x2="180" y2="135" stroke={c.stroke} strokeWidth="1.4" />
    </svg>
  );
}

/**
 * 6. Smart Connected Grid & Synergy Ecosystem Art
 * Interlinked nodes: Solar array + wind turbine + connected data/smart grid lines
 * Ideal for: StrategicPartnershipsSection
 */
export function SmartGridEcosystemArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 250 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground baseline */}
      <line x1="10" y1="135" x2="240" y2="135" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* Central Smart Eco-Hub / Building */}
      <rect x="105" y="60" width="40" height="75" rx="3" fill={c.lightFill} stroke={c.stroke} strokeWidth="1.8" />
      {/* Grid Windows */}
      <rect x="112" y="70" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="127" y="70" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="112" y="85" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="127" y="85" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="112" y="100" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      <rect x="127" y="100" width="8" height="8" rx="1" fill={c.fill} fillOpacity={c.fillOpacity} stroke={c.stroke} strokeWidth="1" />
      
      {/* Rooftop Solar Installation */}
      <polygon 
        points="102,60 148,60 142,50 108,50" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.4" 
      />
      {/* Antenna / IoT Connectivity Waves */}
      <line x1="125" y1="50" x2="125" y2="35" stroke={c.stroke} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="125" cy="35" r="2.5" fill={c.accent} />
      <path d="M 117 28 C 122 24 128 24 133 28" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M 112 22 C 120 16 130 16 138 22" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Wind Turbine on Left */}
      <line x1="45" y1="40" x2="45" y2="135" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="45" cy="40" r="3.5" fill={c.stroke} />
      <line x1="45" y1="40" x2="30" y2="18" stroke={c.stroke} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="45" y1="40" x2="62" y2="32" stroke={c.stroke} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="45" y1="40" x2="40" y2="62" stroke={c.stroke} strokeWidth="1.8" strokeLinecap="round" />

      {/* Smart Grid Linking Data Stream Lines (Left Turbine to Hub) */}
      <path d="M 45 65 C 65 65 80 85 105 85" stroke={c.accent} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

      {/* Solar Panel on Right */}
      <polygon 
        points="175,98 225,85 235,118 185,128" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="200" y1="92" x2="210" y2="123" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="180" y1="113" x2="230" y2="102" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="202" y1="110" x2="202" y2="135" stroke={c.stroke} strokeWidth="1.4" />

      {/* Smart Grid Linking Data Stream (Right Solar to Hub) */}
      <path d="M 145 95 C 160 95 165 110 175 110" stroke={c.accent} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
    </svg>
  );
}

/**
 * 7. Safety, Quality & Compliance Inspection Art
 * Inspection drone hovering over solar panels + certified quality shield badge
 * Ideal for: ComplianceSection
 */
export function ComplianceInspectionArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground horizon */}
      <line x1="10" y1="135" x2="230" y2="135" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* Inspection Drone in Upper Center/Left */}
      {/* Drone Body */}
      <ellipse cx="75" cy="35" rx="16" ry="7" fill={c.lightFill} stroke={c.stroke} strokeWidth="1.6" />
      {/* Drone Camera Gimbal */}
      <circle cx="75" cy="43" r="3.5" fill={c.stroke} />
      {/* Sensor beam targeting ground/panel */}
      <path d="M 75 46 L 60 95 L 90 95 Z" fill={c.fill} fillOpacity="0.1" stroke={c.stroke} strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Drone Rotor Arms */}
      <line x1="59" y1="35" x2="42" y2="28" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="91" y1="35" x2="108" y2="28" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      {/* Rotor Propellers */}
      <ellipse cx="40" cy="27" rx="14" ry="2.5" stroke={c.stroke} strokeWidth="1.2" />
      <ellipse cx="110" cy="27" rx="14" ry="2.5" stroke={c.stroke} strokeWidth="1.2" />

      {/* Certified Safety Shield Symbol (Right side) */}
      <path 
        d="M 180 32 
           C 192 32 202 26 206 20 
           C 210 26 220 32 232 32 
           C 232 55 218 78 206 88 
           C 194 78 180 55 180 32 Z" 
        fill={c.lightFill} 
        stroke={c.stroke} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      {/* Shield Checkmark */}
      <path 
        d="M 196 52 L 203 59 L 217 44" 
        stroke={c.accent} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Tested Solar PV Panel on ground */}
      <polygon 
        points="40,105 110,92 122,125 52,132" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="75" y1="98" x2="87" y2="128" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="46" y1="119" x2="116" y2="108" stroke={c.stroke} strokeWidth="1.2" />
    </svg>
  );
}

/**
 * 8. Clean Energy Futuristic Skyline & Horizon Art
 * Modern green energy city with high-efficiency wind generators & solar terraces
 * Ideal for: FutureCollaborationSection ("Let's Build the Future Together")
 */
export function CleanEnergyCityHorizonArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground horizon */}
      <line x1="10" y1="135" x2="270" y2="135" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />

      {/* Tower 1 (Left curved green architecture) */}
      <path 
        d="M 25 135 L 25 75 C 25 50 45 42 58 42 C 71 42 75 60 75 135 Z" 
        fill={c.lightFill} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
      />
      {/* Balcony / Terraces */}
      <line x1="28" y1="80" x2="68" y2="80" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="32" y1="95" x2="72" y2="95" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="26" y1="110" x2="74" y2="110" stroke={c.stroke} strokeWidth="1.2" />

      {/* Central Aerodynamic Wind Spire */}
      <line x1="110" y1="20" x2="110" y2="135" stroke={c.stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="110" cy="20" r="4" fill={c.stroke} />
      <line x1="110" y1="20" x2="88" y2="-2" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="20" x2="132" y2="8" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="20" x2="102" y2="44" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Tower 2 (Modern Geometric High-rise) */}
      <rect x="140" y="55" width="45" height="80" rx="3" fill={c.lightFill} stroke={c.stroke} strokeWidth="1.8" />
      <line x1="140" y1="75" x2="185" y2="75" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="140" y1="95" x2="185" y2="95" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="140" y1="115" x2="185" y2="115" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="162" y1="55" x2="162" y2="135" stroke={c.stroke} strokeWidth="1.2" />

      {/* Rooftop Solar Array on Tower 2 */}
      <polygon 
        points="143,55 182,45 184,55 143,55" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.4" 
      />

      {/* Medium Wind Turbine (Right) */}
      <line x1="220" y1="42" x2="220" y2="135" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="220" cy="42" r="3" fill={c.stroke} />
      <line x1="220" y1="42" x2="206" y2="24" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="220" y1="42" x2="236" y2="35" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="220" y1="42" x2="214" y2="60" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />

      {/* Sun / Renewable Energy Crest in sky */}
      <circle cx="170" cy="24" r="12" stroke={c.accent} strokeWidth="1.4" strokeDasharray="3 3" />
      <circle cx="170" cy="24" r="6" fill={c.fill} fillOpacity="0.4" />
    </svg>
  );
}

/**
 * 9. Biomass & Clean Tech Hydro/Solar Ecosystem
 * Ideal for: StakeholdersSection / Ecosystem
 */
export function EcoCleanTechEcosystemArt({
  className = '',
  color = '#059669',
  solarColor = '#10b981',
  isDark = false
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Flowing Water / Clean Hydro waves at base */}
      <path 
        d="M 10 132 C 40 128 60 136 90 132 C 120 128 140 136 170 132 C 200 128 220 136 235 132" 
        stroke={c.stroke} 
        strokeWidth="1.4" 
        fill="none" 
      />
      <path 
        d="M 10 138 C 40 134 60 142 90 138 C 120 134 140 142 170 138 C 200 134 220 142 235 138" 
        stroke={c.stroke} 
        strokeWidth="1" 
        strokeDasharray="4 3" 
        opacity="0.6" 
        fill="none" 
      />

      {/* Green Plant / Biomass Sprout with Sun */}
      <path 
        d="M 60 130 C 60 100 80 85 95 85 C 95 105 80 125 60 130 Z" 
        fill={c.fill} 
        fillOpacity="0.6" 
        stroke={c.stroke} 
        strokeWidth="1.6" 
      />
      <path 
        d="M 60 115 C 60 95 45 85 35 85 C 35 102 48 115 60 115 Z" 
        fill={c.fill} 
        fillOpacity="0.5" 
        stroke={c.stroke} 
        strokeWidth="1.4" 
      />

      {/* Sun Rays over Biomass */}
      <circle cx="65" cy="55" r="9" stroke={c.stroke} strokeWidth="1.5" fill={c.lightFill} />
      <line x1="65" y1="40" x2="65" y2="44" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="65" y1="66" x2="65" y2="70" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="50" y1="55" x2="54" y2="55" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="76" y1="55" x2="80" y2="55" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />

      {/* Solar Panel on right */}
      <polygon 
        points="140,105 205,92 218,124 152,132" 
        fill={c.fill} 
        fillOpacity={c.fillOpacity} 
        stroke={c.stroke} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <line x1="172" y1="98" x2="185" y2="128" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="146" y1="118" x2="211" y2="108" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="174" y1="113" x2="174" y2="132" stroke={c.stroke} strokeWidth="1.4" />

      {/* Distance Wind Turbine behind panel */}
      <line x1="195" y1="48" x2="195" y2="92" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="195" cy="48" r="2.5" fill={c.stroke} />
      <line x1="195" y1="48" x2="184" y2="34" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="195" y1="48" x2="206" y2="42" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="195" y1="48" x2="190" y2="62" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 10. Triple Wind Turbine Cluster (Slender, architectural perspective)
 */
export function WindTurbinesClusterArt({ 
  className = '', 
  color = '#059669', 
  solarColor = '#10b981',
  isDark = false 
}) {
  const c = getArtColors(isDark, color, solarColor);

  return (
    <svg 
      viewBox="0 0 200 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Ground horizon */}
      <line x1="10" y1="145" x2="190" y2="145" stroke={c.stroke} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.5" />

      {/* Turbine 1 (Tall Center) */}
      <line x1="95" y1="25" x2="95" y2="145" stroke={c.stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="95" cy="25" r="4" fill={c.stroke} />
      <line x1="95" y1="25" x2="78" y2="2" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="25" x2="115" y2="15" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="25" x2="88" y2="48" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Turbine 2 (Left Medium) */}
      <line x1="45" y1="52" x2="45" y2="145" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="52" r="3" fill={c.stroke} />
      <line x1="45" y1="52" x2="33" y2="34" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="45" y1="52" x2="60" y2="45" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="45" y1="52" x2="40" y2="70" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />

      {/* Turbine 3 (Right Distance) */}
      <line x1="150" y1="65" x2="150" y2="145" stroke={c.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="150" cy="65" r="2.5" fill={c.stroke} />
      <line x1="150" y1="65" x2="140" y2="50" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="150" y1="65" x2="163" y2="60" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="150" y1="65" x2="147" y2="80" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
