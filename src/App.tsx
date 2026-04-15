import { useState } from 'react';
import { ConfigProvider, Layout, Menu, Tree, Typography, Tabs, Card, Descriptions, Tag, Badge, Button, Space, Tooltip, Divider } from 'antd';
import {
  DashboardOutlined,
  ToolOutlined,
  ThunderboltOutlined,
  FileTextOutlined,
  SettingOutlined,
  ExportOutlined,
  ImportOutlined,
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
  PrinterOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  AppstoreOutlined,
  BranchesOutlined,
  ApartmentOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import DashboardView from './components/DashboardView';
import InstrumentGrid from './components/InstrumentGrid';
import IOSignalGrid from './components/IOSignalGrid';
import DrawingGrid from './components/DrawingGrid';
import CableGrid from './components/CableGrid';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

const treeData = [
  {
    title: 'Westlake Oxy SIS Upgrades',
    key: 'project',
    icon: <FolderOpenOutlined />,
    children: [
      {
        title: 'Reactor Area',
        key: 'area-1',
        icon: <FolderOutlined />,
        children: [
          { title: 'PT-1001 Reactor Inlet Press', key: 'PT-1001', icon: <ToolOutlined /> },
          { title: 'PT-1002 Reactor Outlet Press', key: 'PT-1002', icon: <ToolOutlined /> },
          { title: 'TT-1001 Reactor Temperature', key: 'TT-1001', icon: <ToolOutlined /> },
          { title: 'LT-1001 Reactor Level', key: 'LT-1001', icon: <ToolOutlined /> },
          { title: 'ZS-1001 Valve Position', key: 'ZS-1001', icon: <ToolOutlined /> },
          { title: 'XV-1001 ESD Isolation', key: 'XV-1001', icon: <ToolOutlined /> },
        ],
      },
      {
        title: 'Feed System',
        key: 'area-2',
        icon: <FolderOutlined />,
        children: [
          { title: 'TT-1002 Feed Temperature', key: 'TT-1002', icon: <ToolOutlined /> },
          { title: 'FT-1001 Feed Flow Rate', key: 'FT-1001', icon: <ToolOutlined /> },
          { title: 'PDT-1001 Filter DP', key: 'PDT-1001', icon: <ToolOutlined /> },
        ],
      },
      {
        title: 'Compressor',
        key: 'area-3',
        icon: <FolderOutlined />,
        children: [
          { title: 'PT-2001 Comp Suction', key: 'PT-2001', icon: <ToolOutlined /> },
          { title: 'TT-2001 Comp Discharge', key: 'TT-2001', icon: <ToolOutlined /> },
        ],
      },
    ],
  },
];

const ribbonTabs = [
  { key: 'home', label: 'Home' },
  { key: 'instruments', label: 'Instruments' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'drawings', label: 'Drawings' },
  { key: 'reports', label: 'Reports' },
  { key: 'settings', label: 'Project Settings' },
];

function RibbonBar({ activeRibbon }: { activeRibbon: string }) {
  if (activeRibbon === 'instruments') {
    return (
      <div style={{ padding: '6px 16px', background: '#fafafa', borderBottom: '1px solid #e8e8e8', display: 'flex', gap: 8 }}>
        <Button icon={<PlusOutlined />} type="primary" size="small">Add Instrument</Button>
        <Button icon={<ImportOutlined />} size="small">Import CSV</Button>
        <Button icon={<ExportOutlined />} size="small">Export Excel</Button>
        <Divider type="vertical" />
        <Button icon={<PrinterOutlined />} size="small">Generate Datasheets</Button>
        <Button icon={<FileTextOutlined />} size="small">Generate Index</Button>
        <Divider type="vertical" />
        <Button icon={<SearchOutlined />} size="small">Find Tag</Button>
        <Button icon={<FilterOutlined />} size="small">Filter by Type</Button>
      </div>
    );
  }
  if (activeRibbon === 'electrical') {
    return (
      <div style={{ padding: '6px 16px', background: '#fafafa', borderBottom: '1px solid #e8e8e8', display: 'flex', gap: 8 }}>
        <Button icon={<PlusOutlined />} type="primary" size="small">Add Cable</Button>
        <Button icon={<BranchesOutlined />} size="small">Wire List</Button>
        <Button icon={<ExportOutlined />} size="small">Export Cable Schedule</Button>
        <Divider type="vertical" />
        <Button icon={<ApartmentOutlined />} size="small">IO Assignment</Button>
        <Button icon={<DatabaseOutlined />} size="small">PLC Configuration</Button>
      </div>
    );
  }
  if (activeRibbon === 'drawings') {
    return (
      <div style={{ padding: '6px 16px', background: '#fafafa', borderBottom: '1px solid #e8e8e8', display: 'flex', gap: 8 }}>
        <Button icon={<PlusOutlined />} type="primary" size="small">New Drawing</Button>
        <Button icon={<AppstoreOutlined />} size="small">Master Blocks</Button>
        <Button icon={<ExportOutlined />} size="small">Generate SCR</Button>
        <Divider type="vertical" />
        <Button icon={<PrinterOutlined />} size="small">Batch Generate All</Button>
        <Button icon={<FileTextOutlined />} size="small">Drawing Index</Button>
      </div>
    );
  }
  if (activeRibbon === 'reports') {
    return (
      <div style={{ padding: '6px 16px', background: '#fafafa', borderBottom: '1px solid #e8e8e8', display: 'flex', gap: 8 }}>
        <Button icon={<FileTextOutlined />} type="primary" size="small">Instrument Index</Button>
        <Button icon={<FileTextOutlined />} size="small">Cable Schedule</Button>
        <Button icon={<FileTextOutlined />} size="small">Wire List</Button>
        <Button icon={<FileTextOutlined />} size="small">IO List</Button>
        <Divider type="vertical" />
        <Button icon={<PrinterOutlined />} size="small">Batch Generate All Reports</Button>
        <Button icon={<ExportOutlined />} size="small">PHA-Pro Export</Button>
      </div>
    );
  }
  return (
    <div style={{ padding: '6px 16px', background: '#fafafa', borderBottom: '1px solid #e8e8e8', display: 'flex', gap: 8 }}>
      <Button icon={<DashboardOutlined />} type="primary" size="small">Dashboard</Button>
      <Button icon={<ImportOutlined />} size="small">Import Data</Button>
      <Button icon={<ExportOutlined />} size="small">Export All</Button>
      <Divider type="vertical" />
      <Button icon={<PrinterOutlined />} size="small">Generate All Documents</Button>
    </div>
  );
}

function PropertiesPanel({ selectedTag }: { selectedTag: string | null }) {
  if (!selectedTag || selectedTag.includes('area') || selectedTag === 'project') {
    return (
      <div style={{ padding: 16, color: '#999' }}>
        <Text type="secondary">Select an instrument to view details</Text>
      </div>
    );
  }

  return (
    <div style={{ padding: 12 }}>
      <Title level={5} style={{ marginTop: 0 }}>{selectedTag}</Title>
      <Descriptions column={1} size="small" bordered>
        <Descriptions.Item label="Tag">{selectedTag}</Descriptions.Item>
        <Descriptions.Item label="Type">Pressure Transmitter</Descriptions.Item>
        <Descriptions.Item label="Service">Reactor Inlet Pressure</Descriptions.Item>
        <Descriptions.Item label="Range">0 - 500 psig</Descriptions.Item>
        <Descriptions.Item label="Manufacturer">Rosemount</Descriptions.Item>
        <Descriptions.Item label="Model">3051S</Descriptions.Item>
        <Descriptions.Item label="Status"><Tag color="green">Complete</Tag></Descriptions.Item>
      </Descriptions>

      <Title level={5} style={{ marginTop: 16 }}>Cross References</Title>
      <Card size="small" style={{ marginBottom: 8 }}>
        <Text strong>IO Signal: </Text>
        <Tag color="blue">AI</Tag> PLC-01 R1/S3/P1
      </Card>
      <Card size="small" style={{ marginBottom: 8 }}>
        <Text strong>Cable: </Text>C-1001 (2PR-18AWG-SH)
      </Card>
      <Card size="small" style={{ marginBottom: 8 }}>
        <Text strong>Drawing: </Text>20220148-E-001 Rev A
      </Card>
      <Card size="small">
        <Text strong>Datasheet: </Text>
        <a>View / Generate</a>
      </Card>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeRibbon, setActiveRibbon] = useState('home');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [propertiesVisible, setPropertiesVisible] = useState(true);

  const tabItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'instruments', label: 'Instrument Index' },
    { key: 'io-signals', label: 'IO Signals' },
    { key: 'drawings', label: 'Drawing Register' },
    { key: 'cables', label: 'Cable Schedule' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'instruments': return <InstrumentGrid />;
      case 'io-signals': return <IOSignalGrid />;
      case 'drawings': return <DrawingGrid />;
      case 'cables': return <CableGrid />;
      default: return <DashboardView />;
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1a3a5c',
          borderRadius: 4,
          fontSize: 13,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        {/* Top Header */}
        <Header style={{
          background: '#1a3a5c',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 48,
          lineHeight: '48px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ToolOutlined style={{ color: '#fff', fontSize: 20 }} />
            <Title level={4} style={{ color: '#fff', margin: 0, fontSize: 16 }}>
              Autodraw Platform
            </Title>
          </div>
          <Space>
            <Text style={{ color: '#ccc', fontSize: 12 }}>Westlake Oxy SIS Upgrades</Text>
            <Badge status="success" />
            <Text style={{ color: '#8cb4d8', fontSize: 12 }}>G. Pajak</Text>
          </Space>
        </Header>

        {/* Ribbon Tabs */}
        <div style={{ background: '#fff', borderBottom: '1px solid #d9d9d9' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[activeRibbon]}
            onClick={(e) => setActiveRibbon(e.key)}
            items={ribbonTabs.map(t => ({ key: t.key, label: t.label }))}
            style={{ borderBottom: 'none', fontSize: 13 }}
          />
        </div>

        {/* Ribbon Toolbar */}
        <RibbonBar activeRibbon={activeRibbon} />

        <Layout>
          {/* Left Sidebar - Project Explorer */}
          <Sider
            width={260}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            theme="light"
            style={{ borderRight: '1px solid #e8e8e8' }}
          >
            {!collapsed && (
              <div style={{ padding: '12px 8px' }}>
                <Text strong style={{ fontSize: 12, textTransform: 'uppercase', color: '#666', letterSpacing: 1 }}>
                  Project Explorer
                </Text>
                <Tree
                  showIcon
                  defaultExpandAll
                  treeData={treeData}
                  style={{ marginTop: 8 }}
                  onSelect={(keys) => {
                    if (keys.length > 0) setSelectedTag(keys[0] as string);
                  }}
                />
              </div>
            )}
          </Sider>

          {/* Center Content */}
          <Content style={{ background: '#fff' }}>
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              type="card"
              items={tabItems}
              style={{ padding: '0 8px' }}
              tabBarStyle={{ marginBottom: 0 }}
            />
            <div style={{ padding: '8px 16px' }}>
              {renderContent()}
            </div>
          </Content>

          {/* Right Sidebar - Properties */}
          {propertiesVisible && (
            <Sider width={280} theme="light" style={{ borderLeft: '1px solid #e8e8e8' }}>
              <div style={{ padding: '12px 8px', borderBottom: '1px solid #e8e8e8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text strong style={{ fontSize: 12, textTransform: 'uppercase', color: '#666', letterSpacing: 1 }}>
                  Properties
                </Text>
                <Tooltip title="Close panel">
                  <Button size="small" type="text" onClick={() => setPropertiesVisible(false)}>X</Button>
                </Tooltip>
              </div>
              <PropertiesPanel selectedTag={selectedTag} />
            </Sider>
          )}
        </Layout>

        {/* Status Bar */}
        <Footer style={{
          padding: '4px 20px',
          background: '#1a3a5c',
          color: '#8cb4d8',
          fontSize: 11,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Space separator={<Divider orientation="vertical" style={{ borderColor: '#3a5a7c' }} />}>
            <span>Instruments: 495</span>
            <span>IO Signals: 628</span>
            <span>Drawings: 62</span>
            <span>Cables: 156</span>
          </Space>
          <Space separator={<Divider orientation="vertical" style={{ borderColor: '#3a5a7c' }} />}>
            <span>Project: 20220148</span>
            <span>Last sync: just now</span>
            <Badge status="success" /><span>Connected</span>
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
