"use client";

import React, { useState } from "react";
import { 
  X, 
  Zap, 
  ShieldAlert, 
  Power, 
  Activity, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  Radio,
  RefreshCw
} from "lucide-react";
import { SmartMeterNode } from "@/src/types/meter";

interface NodeInspectionDrawerProps {
  meter: SmartMeterNode | null;
  onClose: () => void;
  onToggleRelay: (meterId: string, currentStatus: string) => void;
}

export default function NodeInspectionDrawer({
  meter,
  onClose,
  onToggleRelay,
}: NodeInspectionDrawerProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!meter) return null;

  const handleRelayClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onToggleRelay(meter.id, meter.relayState);
      setIsProcessing(false);
    }, 800); // Simulates network delay to ESP32
  };

  const isRelayConnected = meter.relayState === "CLOSED";

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-[#111622] border-l border-slate-800 h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-mono">{meter.id}</h2>
                <p className="text-xs text-slate-400">{meter.customerName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Location & Connectivity Status */}
          <div className="grid grid-cols-2 gap-3 my-5 text-xs font-mono">
            <div className="bg-[#182030] border border-slate-800 p-3 rounded-lg">
              <span className="text-slate-500 block text-[10px] mb-1">LOCATION / SECTOR</span>
              <span className="text-slate-200 font-medium">{meter.location}</span>
            </div>
            <div className="bg-[#182030] border border-slate-800 p-3 rounded-lg">
              <span className="text-slate-500 block text-[10px] mb-1">MESH RSSI SIGNAL</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>{meter.rssiSignal} dBm</span>
              </div>
            </div>
          </div>

          {/* Remote Relay Override Control */}
          <div className="bg-[#182030] border border-slate-800 p-4 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-semibold text-white block">Latching Relay Control</span>
                <span className="text-[11px] text-slate-400">Remote 60A / 90A Physical Cutoff</span>
              </div>
              <span className={`text-[10px] px-2.5 py-0.5 rounded font-mono font-bold ${
                isRelayConnected 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                  : "bg-red-500/10 text-red-400 border border-red-500/30"
              }`}>
                {isRelayConnected ? "POWER ACTIVE" : "DISCONNECTED"}
              </span>
            </div>

            <button
              onClick={handleRelayClick}
              disabled={isProcessing}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition ${
                isRelayConnected
                  ? "bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/40"
                  : "bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40"
              }`}
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Transmitting Command to ESP32...</span>
                </>
              ) : (
                <>
                  <Power className="w-4 h-4" />
                  <span>{isRelayConnected ? "FORCE TRIP RELAY (CUT POWER)" : "RE-ENGAGE RELAY (RESTORE POWER)"}</span>
                </>
              )}
            </button>
          </div>

          {/* Section 1: Electrical Sensor Metrics */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>PZEM-004T Electrical Readouts</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">RMS VOLTAGE</span>
                <span className="text-lg font-bold text-white">{meter.readings.voltageRMS} V</span>
              </div>
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">ACTIVE POWER</span>
                <span className="text-lg font-bold text-blue-400">{meter.readings.activePower} W</span>
              </div>
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">PHASE CURRENT ($I_P$)</span>
                <span className="text-lg font-bold text-emerald-400">{meter.readings.phaseCurrent} A</span>
              </div>
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">NEUTRAL CURRENT ($I_N$)</span>
                <span className="text-lg font-bold text-purple-400">{meter.readings.neutralCurrent} A</span>
              </div>
            </div>
          </div>

          {/* Section 2: Physical Hardware Tamper Sensors */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span>Anti-Tamper Sensor Matrix</span>
            </h3>

            <div className="space-y-2 text-xs font-mono">
              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Phase-Shunt Current Delta</span>
                <span className={`font-bold ${meter.tamperSensors.currentDeltaAmps > 1.0 ? "text-red-400" : "text-emerald-400"}`}>
                  {meter.tamperSensors.currentDeltaAmps.toFixed(1)} A
                </span>
              </div>

              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Enclosure Terminal Switch</span>
                {meter.tamperSensors.terminalCoverClosed ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SECURE
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center gap-1 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5" /> BREACHED
                  </span>
                )}
              </div>

              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Chassis Housing Switch</span>
                {meter.tamperSensors.chassisSwitchClosed ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> CLOSED
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center gap-1 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5" /> OPENED
                  </span>
                )}
              </div>

              <div className="bg-[#0B0F17] p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">MPU6050 Shock Vibration</span>
                <span className="text-slate-200">{meter.tamperSensors.accelerometerGForce} G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Timestamp */}
        <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono text-center">
          Last Telemetry Pulse: {meter.lastSeenTimestamp}
        </div>
      </div>
    </div>
  );
}