export const instruments = [
  { id: 1, tag: "PT-1001", type: "Pressure Transmitter", service: "Reactor Inlet Pressure", pid: "PID-001", rangeMin: 0, rangeMax: 500, units: "psig", manufacturer: "Rosemount", model: "3051S", jb: "JB-01", status: "Complete" },
  { id: 2, tag: "PT-1002", type: "Pressure Transmitter", service: "Reactor Outlet Pressure", pid: "PID-001", rangeMin: 0, rangeMax: 500, units: "psig", manufacturer: "Rosemount", model: "3051S", jb: "JB-01", status: "Complete" },
  { id: 3, tag: "TT-1001", type: "Temperature Transmitter", service: "Reactor Temperature", pid: "PID-001", rangeMin: -40, rangeMax: 800, units: "deg F", manufacturer: "Rosemount", model: "3144P", jb: "JB-02", status: "Complete" },
  { id: 4, tag: "TT-1002", type: "Temperature Transmitter", service: "Feed Temperature", pid: "PID-002", rangeMin: 0, rangeMax: 400, units: "deg F", manufacturer: "Rosemount", model: "3144P", jb: "JB-02", status: "In Progress" },
  { id: 5, tag: "FT-1001", type: "Flow Transmitter", service: "Feed Flow Rate", pid: "PID-002", rangeMin: 0, rangeMax: 1000, units: "GPM", manufacturer: "Micro Motion", model: "F200", jb: "JB-03", status: "Complete" },
  { id: 6, tag: "LT-1001", type: "Level Transmitter", service: "Reactor Level", pid: "PID-001", rangeMin: 0, rangeMax: 100, units: "%", manufacturer: "Rosemount", model: "5300", jb: "JB-01", status: "Complete" },
  { id: 7, tag: "LT-1002", type: "Level Transmitter", service: "Surge Drum Level", pid: "PID-003", rangeMin: 0, rangeMax: 100, units: "%", manufacturer: "Rosemount", model: "5300", jb: "JB-04", status: "Not Started" },
  { id: 8, tag: "PDT-1001", type: "DP Transmitter", service: "Filter DP", pid: "PID-002", rangeMin: 0, rangeMax: 50, units: "psid", manufacturer: "Rosemount", model: "3051CD", jb: "JB-03", status: "Complete" },
  { id: 9, tag: "AT-1001", type: "Analytical Transmitter", service: "O2 Analyzer", pid: "PID-004", rangeMin: 0, rangeMax: 25, units: "%O2", manufacturer: "Yokogawa", model: "ZR402G", jb: "JB-05", status: "In Progress" },
  { id: 10, tag: "ZS-1001", type: "Position Switch", service: "Valve Position", pid: "PID-001", rangeMin: 0, rangeMax: 1, units: "Open/Closed", manufacturer: "Topworx", model: "DXP", jb: "JB-01", status: "Complete" },
  { id: 11, tag: "XV-1001", type: "Solenoid Valve", service: "ESD Isolation", pid: "PID-001", rangeMin: 0, rangeMax: 1, units: "Open/Closed", manufacturer: "ASCO", model: "327", jb: "JB-01", status: "Complete" },
  { id: 12, tag: "PT-2001", type: "Pressure Transmitter", service: "Compressor Suction", pid: "PID-005", rangeMin: 0, rangeMax: 200, units: "psig", manufacturer: "Rosemount", model: "3051S", jb: "JB-06", status: "Not Started" },
  { id: 13, tag: "TT-2001", type: "Temperature Transmitter", service: "Compressor Discharge Temp", pid: "PID-005", rangeMin: 0, rangeMax: 600, units: "deg F", manufacturer: "Rosemount", model: "3144P", jb: "JB-06", status: "Not Started" },
  { id: 14, tag: "FT-2001", type: "Flow Transmitter", service: "Product Flow", pid: "PID-006", rangeMin: 0, rangeMax: 500, units: "GPM", manufacturer: "Micro Motion", model: "F100", jb: "JB-07", status: "In Progress" },
  { id: 15, tag: "PT-1003", type: "Pressure Transmitter", service: "Relief Header Pressure", pid: "PID-001", rangeMin: 0, rangeMax: 150, units: "psig", manufacturer: "Rosemount", model: "3051S", jb: "JB-01", status: "Complete" },
];

export const ioSignals = [
  { id: 1, tag: "PT-1001", signalType: "AI", plc: "PLC-01", rack: 1, slot: 3, point: 1, cable: "C-1001", tb: "TB-01", wire: "W-1001-1" },
  { id: 2, tag: "PT-1002", signalType: "AI", plc: "PLC-01", rack: 1, slot: 3, point: 2, cable: "C-1002", tb: "TB-01", wire: "W-1002-1" },
  { id: 3, tag: "TT-1001", signalType: "AI", plc: "PLC-01", rack: 1, slot: 3, point: 3, cable: "C-1003", tb: "TB-02", wire: "W-1003-1" },
  { id: 4, tag: "TT-1002", signalType: "AI", plc: "PLC-01", rack: 1, slot: 3, point: 4, cable: "C-1004", tb: "TB-02", wire: "W-1004-1" },
  { id: 5, tag: "FT-1001", signalType: "AI", plc: "PLC-01", rack: 1, slot: 4, point: 1, cable: "C-1005", tb: "TB-03", wire: "W-1005-1" },
  { id: 6, tag: "LT-1001", signalType: "AI", plc: "PLC-01", rack: 1, slot: 4, point: 2, cable: "C-1006", tb: "TB-01", wire: "W-1006-1" },
  { id: 7, tag: "ZS-1001", signalType: "DI", plc: "PLC-01", rack: 2, slot: 1, point: 1, cable: "C-1010", tb: "TB-01", wire: "W-1010-1" },
  { id: 8, tag: "XV-1001", signalType: "DO", plc: "PLC-01", rack: 2, slot: 2, point: 1, cable: "C-1011", tb: "TB-01", wire: "W-1011-1" },
];

export const drawings = [
  { id: 1, number: "20220148-E-001", title: "PLC-01 Rack 1 AI Wiring", type: "IO Wiring", revision: "A", status: "Issued" },
  { id: 2, number: "20220148-E-002", title: "PLC-01 Rack 2 DI/DO Wiring", type: "IO Wiring", revision: "A", status: "Issued" },
  { id: 3, number: "20220148-E-010", title: "PT-1001 Loop Diagram", type: "Loop Diagram", revision: "0", status: "Draft" },
  { id: 4, number: "20220148-E-011", title: "TT-1001 Loop Diagram", type: "Loop Diagram", revision: "0", status: "Draft" },
  { id: 5, number: "20220148-E-020", title: "MCC-01 Single Line", type: "MCC Single Line", revision: "B", status: "Issued" },
  { id: 6, number: "20220148-E-030", title: "Cable Schedule", type: "Cable Schedule", revision: "A", status: "Issued" },
  { id: 7, number: "20220148-E-031", title: "Wire List", type: "Wire List", revision: "A", status: "Issued" },
  { id: 8, number: "20220148-E-040", title: "Instrument Index", type: "Instrument Index", revision: "C", status: "Issued" },
];

export const cables = [
  { id: 1, number: "C-1001", type: "2PR-18AWG-SH", from: "PT-1001", to: "JB-01", length: 150, conduit: "CD-101" },
  { id: 2, number: "C-1002", type: "2PR-18AWG-SH", from: "PT-1002", to: "JB-01", length: 200, conduit: "CD-101" },
  { id: 3, number: "C-1003", type: "2PR-18AWG-SH", from: "TT-1001", to: "JB-02", length: 75, conduit: "CD-102" },
  { id: 4, number: "C-1004", type: "2PR-18AWG-SH", from: "TT-1002", to: "JB-02", length: 120, conduit: "CD-102" },
  { id: 5, number: "C-1005", type: "2PR-18AWG-SH", from: "FT-1001", to: "JB-03", length: 300, conduit: "CD-103" },
  { id: 6, number: "C-1006", type: "2PR-18AWG-SH", from: "LT-1001", to: "JB-01", length: 90, conduit: "CD-101" },
  { id: 7, number: "MC-01", type: "24PR-18AWG", from: "JB-01", to: "PLC-01", length: 500, conduit: "CD-201" },
  { id: 8, number: "MC-02", type: "12PR-18AWG", from: "JB-02", to: "PLC-01", length: 450, conduit: "CD-202" },
];

export const projectStats = {
  name: "Westlake Oxy SIS System PLC Upgrades",
  number: "20220148",
  client: "Westlake Chemical",
  instruments: { total: 495, complete: 342, inProgress: 89, notStarted: 64 },
  drawings: { total: 62, issued: 45, draft: 12, notStarted: 5 },
  cables: { total: 156, routed: 130, pending: 26 },
  ioSignals: { total: 628, assigned: 580, unassigned: 48 },
};
