import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak } from 'docx';
import fs from 'fs';

const border = { style: BorderStyle.SINGLE, size: 1, color: "BBBBBB" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };
const headerShading = { fill: "1a3a5c", type: ShadingType.CLEAR };
const altShading = { fill: "F2F7FB", type: ShadingType.CLEAR };
const whiteText = { font: "Arial", size: 20, bold: true, color: "FFFFFF" };
const bodyText = { font: "Arial", size: 20 };
const boldText = { font: "Arial", size: 20, bold: true };

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: headerShading, margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ ...whiteText, text })] })],
  });
}

function cell(text, width, shading) {
  const opts = { borders, width: { size: width, type: WidthType.DXA }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ ...bodyText, text })] })] };
  if (shading) opts.shading = shading;
  return new TableCell(opts);
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "1a3a5c" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1a3a5c" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "ae Solutions  |  Autodraw Platform Modernization", font: "Arial", size: 16, color: "999999", italics: true })],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1a3a5c", space: 4 } },
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Confidential  |  Page ", font: "Arial", size: 16, color: "999999" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "999999" }),
          ],
        })]
      })
    },
    children: [
      // TITLE PAGE
      new Paragraph({ spacing: { before: 3000 }, children: [] }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "Autodraw Platform Modernization", font: "Arial", size: 56, bold: true, color: "1a3a5c" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "Engineering Platform Implementation Overview", font: "Arial", size: 32, color: "555555" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1a3a5c", space: 20 } },
        children: [],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "Prepared by: Greg L. Pajak", font: "Arial", size: 24, color: "333333" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "ae Solutions  |  Engineering Department", font: "Arial", size: 22, color: "666666" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "April 2026", font: "Arial", size: 22, color: "666666" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 800 },
        children: [new TextRun({ text: "CONFIDENTIAL", font: "Arial", size: 20, bold: true, color: "CC0000" })],
      }),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 1. EXECUTIVE SUMMARY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "This document presents the implementation plan for modernizing the Autodraw system, AES's proprietary engineering data management and automated drawing generation platform. The modernization replaces aging Microsoft Access databases and VB6 code with a modern web-based platform that any engineer can use from a web browser." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "The platform manages instrument data, I/O signal assignments, cable routing, wiring configurations, and generates 23 types of AutoCAD drawings, instrument datasheets, cable schedules, and engineering reports. This is the same work Autodraw does today, but faster, more reliable, multi-user, and accessible from anywhere on the network." }),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Key Benefits")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Eliminate single points of failure. " }),
        new TextRun({ ...bodyText, text: "The current Access databases can only be opened by one person at a time, live on a single machine, and depend on VB6 code that no one else at AES can maintain. The new platform runs on a server, supports multiple simultaneous users, and uses standard modern technology." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Reduce project setup time from days to hours. " }),
        new TextRun({ ...bodyText, text: "Setting up a new project in the current system requires manually configuring Access databases, copying template files, and coordinating file paths. The new platform lets you create a new project, import data, and start generating documents in a single session." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Per-client customization without code changes. " }),
        new TextRun({ ...bodyText, text: "Different clients use different datasheet templates, report formats, and drawing standards. The new platform includes a visual template mapper and report designer so engineers can configure client-specific outputs through the UI, not by editing code." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Cross-reference everything instantly. " }),
        new TextRun({ ...bodyText, text: "Select any instrument tag and immediately see every drawing, cable, wire, IO signal, and document that references it. Change a tag name and see exactly what documents are affected before you regenerate." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...boldText, text: "No additional software licenses required. " }),
        new TextRun({ ...bodyText, text: "The platform is built entirely on open-source technology that AES controls. There are no per-seat licenses, annual renewals, or vendor dependencies. The only external dependency remains AutoCAD for final drawing production, which AES already licenses." }),
      ]}),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 2. WHAT IT REPLACES
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. What It Replaces")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "The current Autodraw system consists of two Microsoft Access databases, a VB6 preprocessor, AutoLISP routines, and 151 AutoCAD master block drawings. It has been in production use for over 20 years and generates all electrical and instrumentation drawings for capital projects." }),
      ]}),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 3430, 3430],
        rows: [
          new TableRow({ children: [
            headerCell("Component", 2500),
            headerCell("Current System", 3430),
            headerCell("New Platform", 3430),
          ]}),
          new TableRow({ children: [
            cell("Database", 2500), cell("Microsoft Access (.accdb), single-user, local files", 3430), cell("PostgreSQL, multi-user, server-hosted, full audit trail", 3430),
          ]}),
          new TableRow({ children: [
            cell("Application", 2500, altShading), cell("Access forms + VB6 macros", 3430, altShading), cell("Web browser (React), accessible from any networked computer", 3430, altShading),
          ]}),
          new TableRow({ children: [
            cell("Drawing Engine", 2500), cell("VB6 generates .SCR scripts for AutoCAD", 3430), cell("Python generates identical .SCR scripts (same output)", 3430),
          ]}),
          new TableRow({ children: [
            cell("Datasheets", 2500, altShading), cell("Access populates Excel cells via VBA", 3430, altShading), cell("Python populates Excel cells via openpyxl (same templates)", 3430, altShading),
          ]}),
          new TableRow({ children: [
            cell("User Access", 2500), cell("One user at a time per database file", 3430), cell("Multiple engineers simultaneously with role-based access", 3430),
          ]}),
          new TableRow({ children: [
            cell("Client Config", 2500, altShading), cell("Manual file copying and database edits", 3430, altShading), cell("Visual UI for templates, reports, and block libraries", 3430, altShading),
          ]}),
        ]
      }),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 3. WHAT IT LOOKS LIKE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. What It Looks Like")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "The platform is designed to look and feel like a modern Microsoft Office application. Engineers open it in a web browser and immediately recognize the layout: a ribbon toolbar across the top, a project navigation tree on the left, a tabbed data workspace in the center (behaving like Excel), and a properties panel on the right." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "A working interactive mockup has been built and is available for demonstration. The mockup uses the actual technology stack (React, Ant Design, AG Grid) so what you see is what the final product will look like. Screenshots are included in the appendix." }),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Platform Screens")] }),

      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Dashboard: " }),
        new TextRun({ ...bodyText, text: "Project overview showing instrument count, drawing count, cable count, IO signal count with completion percentages and recent activity." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Instrument Index: " }),
        new TextRun({ ...bodyText, text: "Excel-like editable grid showing all 495+ instruments with sorting, filtering, multi-select. Contextual toolbar for importing CSV, exporting Excel, generating datasheets." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "IO Signals: " }),
        new TextRun({ ...bodyText, text: "Full PLC I/O signal list with rack/slot/point assignments, cable numbers, terminal blocks, wire numbers. Color-coded by signal type (AI, AO, DI, DO)." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Drawing Register: " }),
        new TextRun({ ...bodyText, text: "All 62+ drawings with revision tracking, status (Issued/Draft), and one-click SCR generation for AutoCAD." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Cable Schedule: " }),
        new TextRun({ ...bodyText, text: "Complete cable list with from/to equipment, cable type, length, and conduit assignments." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...boldText, text: "Properties Panel: " }),
        new TextRun({ ...bodyText, text: "Select any instrument tag and instantly see cross-references to every drawing, cable, wire, and document that references it." }),
      ]}),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 4. HOW IT GETS BUILT
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. How It Gets Built")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "The platform is built in 6 phases, each producing a working, testable product. Each phase has clear entry and exit criteria. No phase begins until the previous phase is validated. This approach eliminates the risk of a large failed build by delivering incremental value at every stage." }),
      ]}),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [800, 3280, 1640, 3640],
        rows: [
          new TableRow({ children: [
            headerCell("Phase", 800),
            headerCell("Goal", 3280),
            headerCell("Timeline", 1640),
            headerCell("Deliverables", 3640),
          ]}),
          new TableRow({ children: [
            cell("0", 800), cell("Infrastructure and data migration", 3280), cell("Weeks 1-2", 1640),
            cell("PostgreSQL database with all data migrated from Access. All tables, relationships, and data validated.", 3640),
          ]}),
          new TableRow({ children: [
            cell("1", 800, altShading), cell("Core web platform", 3280, altShading), cell("Weeks 3-8", 1640, altShading),
            cell("Web-based data grids for instruments, IO signals, drawings, cables. Import/export. Authentication. This is where engineers start using the tool daily.", 3640, altShading),
          ]}),
          new TableRow({ children: [
            cell("2", 800), cell("Document generation", 3280), cell("Weeks 9-14", 1640),
            cell("Instrument datasheets (all 9 types), cable schedules, wire lists, reports, PHA-Pro integration. Visual template mapper for client-specific formats.", 3640),
          ]}),
          new TableRow({ children: [
            cell("3", 800, altShading), cell("AutoCAD integration", 3280, altShading), cell("Weeks 15-22", 1640, altShading),
            cell("All 23 drawing types generated from the web platform. Replaces the VB6/.SCR pipeline entirely. Master block library management.", 3640, altShading),
          ]}),
          new TableRow({ children: [
            cell("4", 800), cell("Intelligence layer", 3280), cell("Weeks 23-30", 1640),
            cell("Cross-reference engine, change propagation, validation rules, project dashboards, workflow approvals.", 3640),
          ]}),
          new TableRow({ children: [
            cell("5", 800, altShading), cell("Scale and optimize", 3280, altShading), cell("Weeks 31-38", 1640, altShading),
            cell("Multi-project support, client portal, API for Power BI/SharePoint, performance optimization for large projects.", 3640, altShading),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 200 }, children: [
        new TextRun({ ...bodyText, text: "Each phase is independently valuable. Phase 1 alone replaces the daily data management workflow. Phase 2 eliminates manual datasheet creation. Phase 3 completes the AutoCAD pipeline replacement. Phases 4 and 5 add capabilities that the current system cannot provide at all." }),
      ]}),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 5. TECHNOLOGY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Technology and Infrastructure")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "The platform uses industry-standard, open-source technology. All components are free, well-documented, and widely used in production systems. There are no proprietary dependencies, vendor lock-in, or licensing costs beyond what AES already pays for AutoCAD." }),
      ]}),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 4680],
        rows: [
          new TableRow({ children: [
            headerCell("Layer", 2340),
            headerCell("Technology", 2340),
            headerCell("Why This Choice", 4680),
          ]}),
          new TableRow({ children: [
            cell("User Interface", 2340), cell("React + Ant Design", 2340),
            cell("Same technology as the P&ID Extraction Tool. Ant Design provides Office-like components. AG Grid provides Excel-like data editing.", 4680),
          ]}),
          new TableRow({ children: [
            cell("Backend Server", 2340, altShading), cell("Python / FastAPI", 2340, altShading),
            cell("Proven in the P&ID Tool. Fast, automatic API documentation, full async support.", 4680, altShading),
          ]}),
          new TableRow({ children: [
            cell("Database", 2340), cell("PostgreSQL 16", 2340),
            cell("Enterprise-grade, replaces Access. Handles millions of rows, multiple users, full audit trail.", 4680),
          ]}),
          new TableRow({ children: [
            cell("Document Gen", 2340, altShading), cell("openpyxl / python-docx", 2340, altShading),
            cell("Fills existing Excel and Word templates. Client templates continue to work with zero modifications.", 4680, altShading),
          ]}),
          new TableRow({ children: [
            cell("Drawing Gen", 2340), cell("Python .SCR engine", 2340),
            cell("Direct port of the existing VB6 logic. Produces identical AutoCAD script files.", 4680),
          ]}),
          new TableRow({ children: [
            cell("Hosting", 2340, altShading), cell("AES VM (Docker)", 2340, altShading),
            cell("Same infrastructure pattern as the P&ID Tool. IT is already provisioning VMs for this.", 4680, altShading),
          ]}),
        ]
      }),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 6. RESOURCE REQUIREMENTS
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. Resource Requirements")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Personnel")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...bodyText, text: "Primary developer: Greg Pajak, using AI-assisted development tools (Claude Code) to accelerate implementation. This approach has been proven on the P&ID Data Extraction Tool and the Alarm Rationalization Platform." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "Engineering team involvement: periodic usability reviews at phase gates (30-minute demos at the end of each phase). No additional development staff required." }),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Infrastructure")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Development VM: " }),
        new TextRun({ ...bodyText, text: "Windows VM with admin access, 16GB RAM, 100GB storage. IT is already provisioning this for the P&ID Tool." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "Production deployment: " }),
        new TextRun({ ...bodyText, text: "Same VM or a dedicated server. Docker Compose handles all service orchestration." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...boldText, text: "Software licenses: " }),
        new TextRun({ ...bodyText, text: "None required. All platform technology is open-source. AutoCAD (existing license) remains needed for final drawing production only." }),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Existing Assets Required")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...bodyText, text: "1. The 9 Excel datasheet templates currently used by Autodraw" }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...bodyText, text: "2. The 151 AutoCAD master block DWG files" }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...bodyText, text: "3. A pilot project dataset (50-100 instruments) for Phase 1 validation" }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "4. Access to the Westlake Oxy Access databases as reference data" }),
      ]}),

      // 7. RISK AND MITIGATION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Risk Mitigation")] }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({ children: [
            headerCell("Risk", 3120),
            headerCell("Impact", 3120),
            headerCell("Mitigation", 3120),
          ]}),
          new TableRow({ children: [
            cell("Drawing output differs from current system", 3120),
            cell("Client receives incorrect drawings", 3120),
            cell("Byte-for-byte comparison testing against VB6 output using real Westlake project data", 3120),
          ]}),
          new TableRow({ children: [
            cell("Scope grows beyond timeline", 3120, altShading),
            cell("Delays to production use", 3120, altShading),
            cell("Phased delivery with exit criteria. Phase 1 alone is production-useful.", 3120, altShading),
          ]}),
          new TableRow({ children: [
            cell("Platform goes down during active project", 3120),
            cell("Engineers cannot access data", 3120),
            cell("Original Access databases remain functional as fallback. Docker auto-restarts services.", 3120),
          ]}),
          new TableRow({ children: [
            cell("Only one developer", 3120, altShading),
            cell("Bus factor risk", 3120, altShading),
            cell("All code is in standard Python/React. AI-generated documentation. Any competent developer can maintain it.", 3120, altShading),
          ]}),
        ]
      }),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // 8. NEXT STEPS
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. Next Steps")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...bodyText, text: "To proceed from this proposal to active development:" }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "1. " }),
        new TextRun({ ...bodyText, text: "Management approval of time allocation for Phase 0 and Phase 1 (foundation build, approximately 8 weeks of development time)." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "2. " }),
        new TextRun({ ...bodyText, text: "VM access for the development environment (IT is already provisioning this for the P&ID Tool)." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "3. " }),
        new TextRun({ ...bodyText, text: "Autodraw template files: the 9 Excel datasheet templates and the 151 master block DWG files, needed to validate that the web platform produces identical outputs." }),
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ ...boldText, text: "4. " }),
        new TextRun({ ...bodyText, text: "A pilot project: select one recent project (50-100 instruments) as the validation dataset for Phase 1." }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ ...boldText, text: "5. " }),
        new TextRun({ ...bodyText, text: "Stakeholder demo: once Phase 1 is functional, schedule a walkthrough with the engineering team for usability feedback." }),
      ]}),

      new Paragraph({ spacing: { before: 400 }, children: [
        new TextRun({ ...bodyText, text: "An interactive mockup of the platform is available for live demonstration. Contact Greg Pajak to schedule a walkthrough.", italics: true }),
      ]}),
    ]
  }]
});

const buffer = await Packer.toBuffer(doc);
const outputPath = "C:/Claude Code/AutoDraw Modernization Package/Autodraw_Platform_Implementation_Overview.docx";
fs.writeFileSync(outputPath, buffer);
console.log("Document generated: " + outputPath);
