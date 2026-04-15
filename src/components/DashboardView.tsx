import { Card, Col, Row, Statistic, Progress, Typography, Tag, Table } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { projectStats } from '../data/mockData';

const { Title, Text } = Typography;

const statusColor = (pct: number) => pct >= 80 ? '#52c41a' : pct >= 50 ? '#faad14' : '#ff4d4f';

const recentActivity = [
  { key: 1, action: "Datasheet generated", item: "PT-1001 Pressure Transmitter", user: "G. Pajak", time: "2 min ago" },
  { key: 2, action: "Drawing issued", item: "20220148-E-001 Rev A", user: "G. Pajak", time: "15 min ago" },
  { key: 3, action: "IO assigned", item: "AT-1001 to PLC-01 R1/S5/P1", user: "G. Pajak", time: "1 hr ago" },
  { key: 4, action: "Cable routed", item: "C-1005 FT-1001 to JB-03", user: "G. Pajak", time: "2 hr ago" },
  { key: 5, action: "Revision updated", item: "Cable Schedule Rev B", user: "G. Pajak", time: "3 hr ago" },
];

export default function DashboardView() {
  const s = projectStats;
  const instPct = Math.round((s.instruments.complete / s.instruments.total) * 100);
  const dwgPct = Math.round((s.drawings.issued / s.drawings.total) * 100);
  const cblPct = Math.round((s.cables.routed / s.cables.total) * 100);
  const ioPct = Math.round((s.ioSignals.assigned / s.ioSignals.total) * 100);

  return (
    <div style={{ padding: 0 }}>
      <div style={{ marginBottom: 24 }}>
        <Title level={4} style={{ margin: 0 }}>{s.name}</Title>
        <Text type="secondary">Project {s.number} | {s.client}</Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card size="small" hoverable>
            <Statistic title="Instruments" value={s.instruments.total} prefix={<ToolOutlined />} />
            <Progress percent={instPct} strokeColor={statusColor(instPct)} size="small" style={{ marginTop: 8 }} />
            <div style={{ marginTop: 8, fontSize: 12 }}>
              <Tag color="green">{s.instruments.complete} Complete</Tag>
              <Tag color="orange">{s.instruments.inProgress} In Progress</Tag>
              <Tag color="default">{s.instruments.notStarted} Not Started</Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" hoverable>
            <Statistic title="Drawings" value={s.drawings.total} prefix={<FileTextOutlined />} />
            <Progress percent={dwgPct} strokeColor={statusColor(dwgPct)} size="small" style={{ marginTop: 8 }} />
            <div style={{ marginTop: 8, fontSize: 12 }}>
              <Tag color="green">{s.drawings.issued} Issued</Tag>
              <Tag color="orange">{s.drawings.draft} Draft</Tag>
              <Tag color="default">{s.drawings.notStarted} Not Started</Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" hoverable>
            <Statistic title="Cables" value={s.cables.total} prefix={<ThunderboltOutlined />} />
            <Progress percent={cblPct} strokeColor={statusColor(cblPct)} size="small" style={{ marginTop: 8 }} />
            <div style={{ marginTop: 8, fontSize: 12 }}>
              <Tag color="green">{s.cables.routed} Routed</Tag>
              <Tag color="orange">{s.cables.pending} Pending</Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" hoverable>
            <Statistic title="IO Signals" value={s.ioSignals.total} prefix={<DashboardOutlined />} />
            <Progress percent={ioPct} strokeColor={statusColor(ioPct)} size="small" style={{ marginTop: 8 }} />
            <div style={{ marginTop: 8, fontSize: 12 }}>
              <Tag color="green">{s.ioSignals.assigned} Assigned</Tag>
              <Tag color="red">{s.ioSignals.unassigned} Unassigned</Tag>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={14}>
          <Card title="Recent Activity" size="small">
            <Table
              dataSource={recentActivity}
              pagination={false}
              size="small"
              columns={[
                { title: 'Action', dataIndex: 'action', key: 'action', render: (text: string) => (
                  <span>
                    {text.includes('generated') && <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 6 }} />}
                    {text.includes('issued') && <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 6 }} />}
                    {text.includes('assigned') && <ClockCircleOutlined style={{ color: '#1677ff', marginRight: 6 }} />}
                    {text.includes('routed') && <ThunderboltOutlined style={{ color: '#faad14', marginRight: 6 }} />}
                    {text.includes('updated') && <ExclamationCircleOutlined style={{ color: '#faad14', marginRight: 6 }} />}
                    {text}
                  </span>
                )},
                { title: 'Item', dataIndex: 'item', key: 'item' },
                { title: 'User', dataIndex: 'user', key: 'user' },
                { title: 'Time', dataIndex: 'time', key: 'time', width: 100 },
              ]}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Completion Summary" size="small">
            <div style={{ padding: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <Text>Instruments</Text>
                <Text strong>{instPct}%</Text>
              </div>
              <Progress percent={instPct} strokeColor={statusColor(instPct)} />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, marginTop: 16 }}>
                <Text>Drawings</Text>
                <Text strong>{dwgPct}%</Text>
              </div>
              <Progress percent={dwgPct} strokeColor={statusColor(dwgPct)} />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, marginTop: 16 }}>
                <Text>Cables</Text>
                <Text strong>{cblPct}%</Text>
              </div>
              <Progress percent={cblPct} strokeColor={statusColor(cblPct)} />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, marginTop: 16 }}>
                <Text>IO Signals</Text>
                <Text strong>{ioPct}%</Text>
              </div>
              <Progress percent={ioPct} strokeColor={statusColor(ioPct)} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
