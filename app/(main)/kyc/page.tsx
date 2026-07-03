import { Icon } from "@/components/ui/Icon";

const kycRows = [
  { initials: "JD", name: "Jonathan Dexler", id: "#KYC-90821", date: "Oct 24, 2023 | 14:22", type: "Passport (Intl)", typeIcon: "badge", status: "Pending", statusClass: "bg-secondary-container text-on-secondary-container", risk: "Low", riskWidth: "w-1/4", riskColor: "bg-tertiary" },
  { initials: "SM", name: "Sarah Montague", id: "#KYC-90744", date: "Oct 24, 2023 | 11:05", type: "NIN (National)", typeIcon: "identity_platform", status: "Verified", statusClass: "bg-tertiary-fixed text-on-tertiary-fixed", risk: "Minimal", riskWidth: "w-[15%]", riskColor: "bg-tertiary" },
  { initials: "", name: "CryptoVanguard LLC", id: "#KYC-90612", date: "Oct 23, 2023 | 16:50", type: "Articles of Inc.", typeIcon: "corporate_fare", status: "Flagged", statusClass: "bg-error text-on-error", risk: "High", riskWidth: "w-[85%]", riskColor: "bg-error", flagged: true },
  { initials: "AW", name: "Aisha Williams", id: "#KYC-90555", date: "Oct 23, 2023 | 09:12", type: "Driver's License", typeIcon: "credit_card", status: "Verified", statusClass: "bg-tertiary-fixed text-on-tertiary-fixed", risk: "Medium", riskWidth: "w-[45%]", riskColor: "bg-secondary" },
];

export default function KYCListPage() {
  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-headline-lg text-primary">KYC Individual Verification</h2>
          <p className="text-body-md text-on-surface-variant">
            Review and manage institutional-grade identity submissions.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-primary text-primary rounded font-label-md hover:bg-surface-container-low transition-colors">
            Export Report
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded font-label-md hover:opacity-90 transition-opacity">
            Batch Approve
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant">
          <p className="font-label-md text-outline uppercase tracking-wider mb-1">Pending Review</p>
          <p className="text-display-lg text-primary">142</p>
          <div className="flex items-center gap-1 text-secondary mt-1">
            <Icon name="trending_up" className="text-sm" />
            <span className="font-label-md">+12% from yesterday</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant">
          <p className="font-label-md text-outline uppercase tracking-wider mb-1">Verified Today</p>
          <p className="text-display-lg text-primary">89</p>
          <div className="flex items-center gap-1 text-tertiary mt-1">
            <Icon name="check_circle" className="text-sm" />
            <span className="font-label-md">94% Success Rate</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant border-l-4 border-l-error">
          <p className="font-label-md text-outline uppercase tracking-wider mb-1">Flagged Issues</p>
          <p className="text-display-lg text-error">12</p>
          <div className="flex items-center gap-1 text-error mt-1">
            <Icon name="warning" className="text-sm" />
            <span className="font-label-md">Requires Senior Review</span>
          </div>
        </div>
        <div className="bg-primary text-on-primary p-4 rounded-xl flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-label-md text-primary-fixed opacity-70 uppercase tracking-wider mb-1">Risk Distribution</p>
            <p className="text-headline-md font-bold text-secondary-fixed">Global Health: Stable</p>
            <p className="font-label-md mt-1">Institutional compliance at 99.8%</p>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
        <div className="px-4 py-3 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
          <div className="flex gap-3">
            <button className="flex items-center gap-1 font-label-md text-primary border-b-2 border-secondary pb-1">
              All Submissions
            </button>
            <button className="flex items-center gap-1 font-label-md text-outline hover:text-primary transition-colors pb-1">
              Critical Risk
            </button>
            <button className="flex items-center gap-1 font-label-md text-outline hover:text-primary transition-colors pb-1">
              Expiring Docs
            </button>
          </div>
          <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-outline">
            <Icon name="filter_list" />
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-primary text-on-primary">
            <tr>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px]">User Name</th>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px]">Submission Date</th>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px]">Type</th>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px]">Status</th>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px]">Risk Level</th>
              <th className="px-4 py-3 font-label-md uppercase tracking-widest text-[10px] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {kycRows.map((row) => (
              <tr key={row.id} className={`hover:bg-surface-container transition-colors group ${row.flagged ? "hover:bg-error-container" : ""}`}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {row.flagged ? (
                      <div className="w-8 h-8 rounded bg-error text-on-error flex items-center justify-center text-xs">
                        <span className="material-symbols-outlined text-sm">priority_high</span>
                      </div>
                    ) : (
                      <div className={`w-8 h-8 rounded ${row.initials === "SM" ? "bg-surface-container-highest" : "bg-primary-fixed"} flex items-center justify-center text-primary font-bold text-xs`}>
                        {row.initials}
                      </div>
                    )}
                    <div>
                      <p className="text-body-md font-semibold text-primary">{row.name}</p>
                      <p className="text-[11px] text-outline">{row.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-body-sm text-on-surface-variant">{row.date}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Icon name={row.typeIcon} className="text-sm" />
                    <span className="text-body-sm">{row.type}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 text-[11px] font-bold rounded-full uppercase tracking-tighter ${row.statusClass}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className={`${row.riskWidth} h-full ${row.riskColor}`} />
                    </div>
                    <span className="font-label-md text-tertiary">{row.risk}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className={`p-2 rounded-full transition-colors ${row.flagged ? "text-error hover:bg-white" : "text-primary hover:bg-primary-fixed"}`}>
                    <Icon name={row.flagged ? "gavel" : "visibility"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-4 py-3 bg-surface-container-lowest flex justify-between items-center border-t border-outline-variant">
          <p className="font-label-md text-outline">Showing 1 to 4 of 1,432 entries</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container transition-colors">
              <Icon name="chevron_left" className="text-sm" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary font-label-md">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container transition-colors font-label-md">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container transition-colors font-label-md">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container transition-colors">
              <Icon name="chevron_right" className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="md:col-span-2 glass-panel rounded-xl p-4 flex items-center gap-4">
          <div className="w-24 h-24 rounded-lg bg-surface-container flex flex-col items-center justify-center border border-outline-variant">
            <Icon name="verified_user" className="text-4xl text-primary" />
          </div>
          <div>
            <h4 className="text-headline-md text-primary mb-1">Automated Fraud Engine</h4>
            <p className="text-body-sm text-on-surface-variant max-w-lg mb-3">
              Our neural network has analyzed 4,200 data points across the current batch. No significant cross-user anomalies detected in the last 24 hours.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="font-label-md">Biometric Match: 99.1%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-md">IP Geolocation: Consistent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-on-primary p-4 rounded-xl flex flex-col relative">
          <h4 className="font-label-md uppercase tracking-widest text-primary-fixed mb-3">Compliance News</h4>
          <div className="space-y-3 relative z-10">
            <div className="pb-2 border-b border-on-primary-fixed-variant">
              <p className="text-[11px] text-secondary-fixed">2 hours ago</p>
              <p className="text-body-sm font-semibold">New AML guidelines published for EU markets.</p>
            </div>
            <div className="pb-2">
              <p className="text-[11px] text-secondary-fixed">Yesterday</p>
              <p className="text-body-sm font-semibold">Passport forgery alert: Series 88J-Alpha.</p>
            </div>
          </div>
          <button className="mt-auto text-secondary-fixed font-label-md flex items-center gap-1">
            View Portal <Icon name="arrow_forward" className="text-sm" />
          </button>
        </div>
      </div>
    </>
  );
}
