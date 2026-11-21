"use client";

import React, { useState } from "react";
import { 
  ShieldAlert, 
  Zap, 
  Activity, 
  Radio, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin
} from "lucide-react";
import { LOCATION_PRESETS, ZoneConfig } from "@/src/lib/constants";
import { SmartMeterNode } from "@/src/types/meter";
import NodeInspectionDrawer from "@/src/components/meters/NodeInspectionDrawer";

export default function MasterDashboardPage() {
  const [selectedZoneKey, setSelectedZoneKey] = useState<string>("buea_molyko");
  const [zones, setZones] = useState<Record<string, ZoneConfig>>(LOCATION_PRESETS);
  const [selectedMeter, setSelectedMeter] = useState<SmartMeterNode | null>(null);

  const currentZone = zones[selectedZoneKey];

  // Handler for toggling relay remotely
  const handleToggleRelay = (meterId: string, currentStatus: string) => {
    const newRelayState = currentStatus === "CLOSED" ? "OPEN_TAMPER_LOCKOUT" : "CLOSED";

    setZones((prev) => {
      const updatedMeters = prev[selectedZoneKey].meters.map((m) => {
        if (m.id === meterId) {
          return { ...m, relayState: newRelayState as any };
        }
        return m;
      });

      return {
        ...prev,
        [selectedZoneKey]: {
          ...prev[selectedZoneKey],
          meters: updatedMeters,
        },
      };
    });

    // Update state inside drawer if currently open
    if (selectedMeter && selectedMeter.id === meterId) {
      setSelectedMeter((prev) =>
        prev ? { ...prev, relayState: newRelayState as any } : null
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 p-6 font-sans">
      {/* Top Header / Location Selection Bar */}
      <header className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              CHADASH <span className="text-blue-500 font-normal">| Project Nexus NOC</span>
            </h1>
            
            <div className="flex items-center gap-2 bg-[#141A26] border border-blue-500/40 rounded-lg px-3 py-1.5 text-xs text-blue-400">
              <MapPin className="w-4 h-4 text-blue-400" />
              <label htmlFor="location-select" className="sr-only">Select Monitoring Location</label>
              <select
                id="location-select"
                value={selectedZoneKey}
                onChange={(e) => setSelectedZoneKey(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="buea_molyko" className="bg-[#141A26] text-white">Buea - Molyko Zone 1</option>
                <option value="kumba_central" className="bg-[#141A26] text-white">Kumba - Commercial Ave / Fiango</option>
                <option value="douala_akwa" className="bg-[#141A26] text-white">Douala - Akwa Commercial</option>
              </select>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-Time Revenue Protection & Automated Managed Grid Framework
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="bg-[#141A26] border border-slate-800 px-3 py-2 rounded-lg flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Mesh: <strong className="text-emerald-400">{currentZone.activeNodes}/{currentZone.totalNodes} Active</strong></span>
          </div>
          <div className="bg-[#141A26] border border-slate-800 px-3 py-2 rounded-lg flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Tariff: <strong className="text-white">{currentZone.currentTariffCFA} CFA / kWh</strong></span>
          </div>
        </div>
      </header>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#141A26] border border-slate-800 p-4 rounded-xl">
          <div className="flex justify-between items-center text-slate-400 text-xs mb-1">
            <span>UNACCOUNTED THEFT LEAKAGE</span>
            <AlertTriangle className="w-4 h-4 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-red-500 font-mono">
            {currentZone.audit.unaccountedLeakageAmps.toFixed(1)} Amps
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {currentZone.audit.leakagePercentage}% Pole-Line Tapping Detected
          </p>
        </div>

        <div className="bg-[#141A26] border border-slate-800 p-4 rounded-xl">
          <div className="flex justify-between items-center text-slate-400 text-xs mb-1">
            <span>TRANSFORMER SUPPLY vs DRAW</span>
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {currentZone.audit.transformerTotalSupplyAmps}A / {currentZone.audit.aggregateMetersDrawAmps}A
          </div>
          <p className="text-[11px] text-emerald-400 mt-1">
            Cap: {currentZone.transformerCapacityAmps}A Load Margin
          </p>
        </div>

        <div className="bg-[#141A26] border border-slate-800 p-4 rounded-xl">
          <div className="flex justify-between items-center text-slate-400 text-xs mb-1">
            <span>ACTIVE TAMPER LOCKOUTS</span>
            <ShieldAlert className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">
            {currentZone.meters.filter((m) => m.relayState !== "CLOSED").length} Meters
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Latching Relays Tripped (Pending RFID)
          </p>
        </div>

        <div className="bg-[#141A26] border border-slate-800 p-4 rounded-xl">
          <div className="flex justify-between items-center text-slate-400 text-xs mb-1">
            <span>TARIFF LAG REVENUE SAVED</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">4.65B CFA</div>
          <p className="text-[11px] text-slate-500 mt-1">100% OTA Mesh Synchronization</p>
        </div>
      </div>

      {/* Central Visual Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-[#141A26] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-sm font-semibold text-white">Geospatial Smart Mesh Topology</h2>
              <p className="text-xs text-slate-400">{currentZone.name} • Real-time RSSI Signal Hop Links</p>
            </div>
            <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-xs text-slate-300 font-mono">
              Mapbox GL Canvas
            </span>
          </div>

          <div className="flex-1 bg-[#0B0F17] rounded-lg border border-slate-800/80 p-6 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <Radio className="w-12 h-12 text-blue-500/40 animate-ping mb-3" />
            <p className="text-slate-400 text-xs text-center z-10 max-w-sm font-mono">
              Monitoring <span className="text-blue-400">{currentZone.name}</span>: Displaying {currentZone.totalNodes} smart meter nodes, gateway hops, and active phase-shunt leak zones.
            </p>
          </div>
        </div>

        {/* Differential Current Audit Panel */}
        <div className="bg-[#141A26] border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-semibold text-white">Differential Current Audit (DCA)</h2>
            <p className="text-xs text-slate-400 mb-4">Pole Transformer vs Sum of Consumer Meters</p>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[11px] mb-0.5">TRANSFORMER MAIN OUTPUT (I_TOTAL)</div>
                <div className="text-lg font-bold text-blue-400">{currentZone.audit.transformerTotalSupplyAmps.toFixed(1)} A</div>
              </div>

              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[11px] mb-0.5">AGGREGATE CONSUMER DRAW (Σ I_N)</div>
                <div className="text-lg font-bold text-emerald-400">{currentZone.audit.aggregateMetersDrawAmps.toFixed(1)} A</div>
              </div>

              <div className={`p-3 rounded-lg border ${currentZone.audit.isTheftAlertActive ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
                <div className={`text-[11px] font-sans font-bold mb-1 flex items-center justify-between ${currentZone.audit.isTheftAlertActive ? 'text-red-400' : 'text-emerald-400'}`}>
                  <span>UNACCOUNTED POLE LEAKAGE</span>
                  <span className={`text-white text-[9px] px-1.5 py-0.5 rounded ${currentZone.audit.isTheftAlertActive ? 'bg-red-500' : 'bg-emerald-500'}`}>
                    {currentZone.audit.isTheftAlertActive ? 'THEFT ALERT' : 'NORMAL'}
                  </span>
                </div>
                <div className={`text-xl font-bold ${currentZone.audit.isTheftAlertActive ? 'text-red-500' : 'text-emerald-400'}`}>
                  {currentZone.audit.unaccountedLeakageAmps.toFixed(1)} A ({currentZone.audit.leakagePercentage}%)
                </div>
                <p className="text-[10px] text-slate-400 font-sans mt-1">
                  {currentZone.audit.isTheftAlertActive 
                    ? `Direct line bypass detected in ${currentZone.name}.`
                    : `Grid currents within normal operating tolerances.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Telemetry Table */}
      <div className="bg-[#141A26] border border-slate-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-3">Live Node Telemetry & Security Alerts — {currentZone.name}</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-2">METER ID</th>
                <th className="pb-2">LOCATION</th>
                <th className="pb-2">VOLTAGE (RMS)</th>
                <th className="pb-2">PHASE / NEUTRAL</th>
                <th className="pb-2">TAMPER FLAG</th>
                <th className="pb-2">RELAY STATE</th>
                <th className="pb-2 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {currentZone.meters.map((meter) => (
                <tr key={meter.id}>
                  <td className="py-3 text-blue-400 font-bold">{meter.id}</td>
                  <td className="text-slate-300">{meter.location}</td>
                  <td className="text-slate-300">{meter.readings.voltageRMS} V</td>
                  <td className="text-slate-300">
                    {meter.readings.phaseCurrent}A / {meter.readings.neutralCurrent}A
                  </td>
                  <td>
                    {meter.tamperFlag !== "NONE" ? (
                      <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded text-[10px]">
                        {meter.tamperFlag}
                      </span>
                    ) : (
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px]">
                        CLEAR
                      </span>
                    )}
                  </td>
                  <td>
                    {meter.relayState === "CLOSED" ? (
                      <span className="text-emerald-400">CONNECTED (ON)</span>
                    ) : (
                      <span className="text-red-400 font-bold">TRIPPED (OFF)</span>
                    )}
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => setSelectedMeter(meter)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-2.5 py-1 rounded text-[11px] transition"
                    >
                      Inspect Node
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Node Inspection Slide-over Drawer */}
      <NodeInspectionDrawer
        meter={selectedMeter}
        onClose={() => setSelectedMeter(null)}
        onToggleRelay={handleToggleRelay}
      />
    </div>
  );
}