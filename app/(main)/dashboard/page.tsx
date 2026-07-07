import Link from "next/link";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const kycSubmissions = [
  { name: "Marcus Holloway", type: "NIN Verification", status: "pending" as const },
  { name: "Elena Rodriguez", type: "Intl. Passport", status: "verified" as const },
  { name: "Zhang Wei", type: "Govt ID Card", status: "flagged" as const },
  { name: "Sarah Jenkins", type: "NIN Verification", status: "verified" as const },
];

const webhooks = [
  { user: "John Doe", amount: 23.45,event: "payment.success", timestamp: "2023-10-28 14:22:05", code: "200 OK", ok: true },
  { user: "Jane Smith", amount: 150.00, event: "kyc.verified", timestamp: "2023-10-28 14:21:40", code: "200 OK", ok: true },
  { user: "Bob Johnson", amount: 50.00, event: "transfer.failed", timestamp: "2023-10-28 14:18:12", code: "400 Error", ok: false },
  { user: "Alice Williams", amount: 100.00, event: "payout.created", timestamp: "2023-10-28 14:15:33", code: "201 Created", ok: true },
];

const transactions = [
  { date: "2023-10-28", entity: "Goldman Sachs Int.", ref: "SWIFT #TRX-99210", status: "Settled", amount: "-$2,400,000.00", positive: false },
  { date: "2023-10-27", entity: "AWS Cloud Infrastructure", ref: "INV-2023-09", status: "Settled", amount: "-$42,150.00", positive: false },
  { date: "2023-10-27", entity: "Inbound WIRE - Oracle Corp", ref: "REF: LICENSE_FY24", status: "Processing", amount: "+$850,000.00", positive: true },
];

function TableCard({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest bento-card rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center">
        <h4 className="text-headline-md text-lg text-primary">{title}</h4>
        {action}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-2">
        <div>
          <h2 className="text-headline-lg text-primary">Operational Monitoring</h2>
          <p className="text-body-lg text-on-surface-variant">
            Real-time tracking of KYC submissions and system webhook events.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-3 rounded-lg font-bold hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">person_add</span>
            Add User
          </button>
          <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-3 rounded-lg font-bold hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">receipt_long</span>
            Pay Bill
          </button>
          <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-sm">
            <span className="material-symbols-outlined">add_circle</span>
            New Transaction
          </button>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-4">
        <MetricCard
          label="Daily Transaction Inflow"
          value="₦4,250,000.00"
          icon="trending_up"
          trend={{ direction: "up", text: "+12.4% vs yesterday" }}
        />
        <MetricCard
          label="Daily Transaction Outflow"
          value="₦1,820,000.00"
          icon="trending_down"
          trend={{ direction: "down", text: "-5.2% vs yesterday" }}
        />

        <TableCard
          title="Recent KYC Submissions"
          action={<Link className="text-secondary font-bold text-label-md hover:underline" href="/kyc">View Queue</Link>}
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">User Name</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {kycSubmissions.map((item) => (
                <tr key={item.name} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-4 py-3 text-body-sm font-bold text-primary">{item.name}</td>
                  <td className="px-4 py-3 text-body-sm text-on-surface-variant">{item.type}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>

        <TableCard
          title="Latest Webhook History"
          action={
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-bold">LIVE</span>
              <a className="text-secondary font-bold text-label-md hover:underline" href="#">Debug Console</a>
            </div>
          }
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Event Type</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Timestamp</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {webhooks.map((item) => (
                <tr key={item.event + item.timestamp} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-4 py-3 data-font text-body-sm font-bold text-primary">{item.user}</td>
                  <td className="px-4 py-3 text-body-sm text-on-surface-variant ">{item.event}</td>
                  <td className="px-4 py-3 text-body-sm text-on-surface-variant">{item.timestamp}</td>
                  <td className="px-4 py-3 text-body-sm text-on-surface-variant">${item.amount.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-lg text-[11px] font-bold data-font border ${
                      item.ok
                        ? "bg-surface-container text-[#2E7D32] border-[#2E7D32]/20"
                        : "bg-error-container text-error border-error/20"
                    }`}>
                      {item.code}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      </div>

      <div className="bg-surface-container-lowest bento-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex justify-between items-center">
          <h4 className="text-headline-md text-lg text-primary">Recent Transactions</h4>
          <div className="flex items-center gap-3">
            <button className="text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <a className="text-secondary font-bold text-label-md hover:underline" href="#">Export CSV</a>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Entity / Reference</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {transactions.map((tx) => (
                <tr key={tx.ref} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-4 py-3 data-font text-body-sm text-on-surface-variant">{tx.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-body-sm text-primary">{tx.entity}</span>
                      <span className="text-label-md text-on-surface-variant">{tx.ref}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={tx.status.toLowerCase() as "settled" | "processing"} />
                  </td>
                  <td className={`px-4 py-3 text-right data-font font-bold ${tx.positive ? "text-green-600" : "text-primary"}`}>
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-surface-container-low text-center">
          <button className="text-secondary font-bold text-body-sm hover:underline">
            View All Transactions
          </button>
        </div>
      </div>
    </>
  );
}
