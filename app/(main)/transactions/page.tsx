import { StatusBadge } from "@/components/ui/StatusBadge";
import { Pagination } from "@/components/ui/Pagination";

const transactions = [
  { date: "2023-10-27 14:32:05", id: "#TX-9482710", counterparty: "North Star Logistics", short: "NS", type: "Payment", amount: "-$12,450.00", status: "settled" as const },
  { date: "2023-10-27 12:15:44", id: "#TX-9482688", counterparty: "Amazon Web Services", short: "AZ", type: "Payment", amount: "-$4,210.88", status: "pending" as const },
  { date: "2023-10-26 18:02:11", id: "#TX-9482402", counterparty: "Global Holdings Corp", short: "GH", type: "ACH Deposit", amount: "+$250,000.00", status: "settled" as const },
  { date: "2023-10-26 10:44:59", id: "#TX-9482315", counterparty: "EuroTrade Partners", short: "ET", type: "Transfer", amount: "-$89,000.00", status: "failed" as const },
  { date: "2023-10-25 09:22:11", id: "#TX-9481992", counterparty: "Shell Corp. Liquidities", short: "SC", type: "Transfer", amount: "+$12,000.00", status: "settled" as const },
];

const insights = [
  { label: "Total Volume (30d)", value: "$4,129,050.22", trend: "12.4% vs last period", border: "secondary" },
  { label: "Settled Transactions", value: "8,442", sub: "Average settlement: 1.2s", border: "primary" },
  { label: "Failed Auth", value: "14", sub: "Requires investigation", border: "error", negative: true },
  { label: "Pending Approval", value: "1,029", sub: "Estimated: $128,400.00", border: "outline" },
];

export default function TransactionsPage() {
  return (
    <>
      <div className="mb-4 flex justify-between items-end">
        <div>
          <nav className="flex gap-1 text-[10px] text-outline mb-1 uppercase tracking-widest font-semibold">
            <span>Terminal</span>
            <span>/</span>
            <span className="text-secondary">Transaction Ledger</span>
          </nav>
          <h2 className="text-headline-lg text-on-surface">Institutional Ledger</h2>
          <p className="text-on-surface-variant text-body-md">Real-time settlement and activity audit trail.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 bg-white border border-outline-variant text-body-md text-on-surface-variant hover:bg-slate-50 transition-all rounded">
            <span className="material-symbols-outlined text-sm">download</span>
            Export CSV
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-white border border-outline-variant text-body-md text-on-surface-variant hover:bg-slate-50 transition-all rounded">
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Ledger PDF
          </button>
        </div>
      </div>

      <div className="bg-white p-4 mb-4 flex flex-wrap items-center gap-3 rounded-xl border border-outline-variant shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[10px] font-bold text-outline uppercase mb-1">Date Range</label>
          <div className="relative">
            <input className="w-full px-2 py-1 text-body-md border border-outline-variant rounded" type="text" defaultValue="Oct 01, 2023 - Oct 31, 2023" />
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-sm text-outline">calendar_today</span>
          </div>
        </div>
        <div className="w-48">
          <label className="block text-[10px] font-bold text-outline uppercase mb-1">Transaction Type</label>
          <select className="w-full px-2 py-1 text-body-md border border-outline-variant bg-white rounded">
            <option>All Types</option>
            <option>Internal Transfer</option>
            <option>External Payment</option>
          </select>
        </div>
        <div className="w-48">
          <label className="block text-[10px] font-bold text-outline uppercase mb-1">Status</label>
          <select className="w-full px-2 py-1 text-body-md border border-outline-variant bg-white rounded">
            <option>Any Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
        <div className="w-48">
          <label className="block text-[10px] font-bold text-outline uppercase mb-1">Amount Range</label>
          <div className="flex items-center gap-1">
            <input className="w-full px-2 py-1 text-body-md border border-outline-variant rounded" placeholder="Min" type="text" />
            <span className="text-outline">-</span>
            <input className="w-full px-2 py-1 text-body-md border border-outline-variant rounded" placeholder="Max" type="text" />
          </div>
        </div>
        <div className="self-end pb-[2px]">
          <button className="bg-secondary text-on-secondary px-4 py-1 font-semibold text-body-md rounded-full hover:opacity-90 transition-all flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Apply Filters
          </button>
        </div>
      </div>

      <div className="bg-white overflow-hidden rounded-xl border border-outline-variant shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary border-b border-outline-variant">
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider">Date / Time</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider">ID</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider">Counterparty</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider">Type</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider text-right">Amount</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider">Status</th>
                <th className="px-3 py-3 font-semibold text-[12px] text-on-primary uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#f0f4ff] transition-colors cursor-pointer">
                  <td className="px-3 py-3 font-mono text-[13px]">{tx.date}</td>
                  <td className="px-3 py-3 font-mono text-[13px] text-primary font-bold">{tx.id}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-primary">
                        {tx.short}
                      </div>
                      <span className="font-medium text-on-surface">{tx.counterparty}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-[2px] rounded-full font-bold uppercase">
                      {tx.type}
                    </span>
                  </td>
                  <td className={`px-3 py-3 font-mono text-[13px] text-right font-bold ${tx.amount.startsWith("+") ? "text-green-600" : ""}`}>
                    {tx.amount}
                  </td>
                  <td className="px-3 py-3">
                    <StatusBadge status={tx.status} />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button className="text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {insights.map((i) => (
          <div key={i.label} className={`bg-white p-4 border-l-4 border-l-${i.border} rounded-lg border border-outline-variant shadow-sm`}>
            <p className="text-[10px] font-bold text-outline uppercase">{i.label}</p>
            <p className="text-[24px] text-primary mt-1 font-bold">{i.value}</p>
            {i.trend && (
              <div className={`flex items-center gap-1 text-xs mt-1 ${i.negative ? "text-error" : "text-green-600"}`}>
                <span className="material-symbols-outlined text-sm">{i.negative ? "warning" : "trending_up"}</span>
                <span>{i.trend}</span>
              </div>
            )}
            {i.sub && <p className="text-outline text-xs mt-1">{i.sub}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
