import { Icon } from "@/components/ui/Icon";

const queueItems = [
  { name: "Global Assets Ltd.", lei: "LEI: 5493006...", docType: "Passport", docClass: "bg-secondary-fixed text-on-secondary-fixed-variant", date: "2023-10-24", active: true },
  { name: "Fintech Solutions", lei: "LEI: 1290483...", docType: "Proof of Addr.", docClass: "bg-surface-container text-on-surface-variant", date: "2023-10-24" },
  { name: "Alpha Hedge Fund", lei: "LEI: 9845721...", docType: "Cert. Incorp", docClass: "bg-secondary-fixed text-on-secondary-fixed-variant", date: "2023-10-23" },
  { name: "Morgan Ventures", lei: "LEI: 4432109...", docType: "Tax ID", docClass: "bg-surface-container text-on-surface-variant", date: "2023-10-23" },
];

export default function KYCCompliancePage() {
  return (
    <>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-headline-lg text-on-background">Compliance & KYC Center</h2>
          <p className="text-body-lg text-on-surface-variant">
            Manage institutional verification pipelines and regulatory adherence.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant flex items-center gap-3">
            <Icon name="verified" className="text-secondary" />
            <div>
              <p className="text-label-md text-on-surface-variant">Compliance Health</p>
              <p className="text-headline-md font-bold text-primary">98.4%</p>
            </div>
          </div>
          <div className="bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant flex items-center gap-3">
            <Icon name="warning" className="text-error" />
            <div>
              <p className="text-label-md text-on-surface-variant">Active Alerts</p>
              <p className="text-headline-md font-bold text-primary">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { icon: "hourglass_top", label: "Submitted", value: "42", sub: "8 entries pending triage", active: false, border: false, iconBg: "bg-surface-container text-on-surface-variant", badge: "bg-secondary-fixed text-on-secondary-fixed" },
          { icon: "visibility", label: "In Review", value: "15", sub: "Average TAT: 4.2 hours", active: true, border: true, iconBg: "bg-secondary-fixed text-secondary", badge: "bg-secondary-container text-on-secondary-container" },
          { icon: "check_circle", label: "Verified", value: "1,284", sub: "Last 30 days total", active: false, border: false, iconBg: "bg-green-50 text-green-600", badge: "bg-green-100 text-green-800" },
          { icon: "cancel", label: "Rejected", value: "08", sub: "3 flag escalations today", active: false, border: false, iconBg: "bg-error-container text-error", badge: "bg-slate-100 text-slate-600" },
        ].map((stage) => (
          <div key={stage.label} className={`bg-surface-container-lowest border ${stage.border ? "border-l-4 border-l-secondary" : "border-outline-variant"} p-3 rounded-xl stage-card`}>
            <div className="flex justify-between items-start mb-2">
              <span className={`${stage.iconBg} p-1 rounded`}>
                <Icon name={stage.icon} />
              </span>
              {stage.active && (
                <span className={`text-label-md px-2 rounded-full ${stage.badge}`}>
                  High Priority
                </span>
              )}
            </div>
            <h3 className="font-bold text-on-surface">{stage.label}</h3>
            <p className="text-display-lg text-primary font-mono">{stage.value}</p>
            <p className="text-label-md text-on-surface-variant">{stage.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6 h-[700px]">
        <div className="col-span-4 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-3 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
            <h4 className="font-bold text-on-surface">Pending Review Queue</h4>
            <span className="text-label-md text-on-surface-variant">15 Items</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant">
                <tr>
                  <th className="p-3 text-label-md font-semibold text-primary uppercase">Entity</th>
                  <th className="p-3 text-label-md font-semibold text-primary uppercase">Doc Type</th>
                  <th className="p-3 text-label-md font-semibold text-primary uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {queueItems.map((item) => (
                  <tr key={item.name} className={`hover:bg-surface-container-high cursor-pointer transition-colors ${
                    item.active ? "border-l-4 border-l-secondary bg-surface-container-high" : ""
                  }`}>
                    <td className="p-3">
                      <p className="text-body-md font-bold text-primary">{item.name}</p>
                      <p className="text-xs text-on-surface-variant">{item.lei}</p>
                    </td>
                    <td className="p-3">
                      <span className={`text-label-md px-2 py-0.5 rounded ${item.docClass}`}>
                        {item.docType}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[13px]">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 border-t border-outline-variant bg-surface-container-low text-center">
            <button className="text-secondary font-bold hover:underline">View All Queue</button>
          </div>
        </div>

        <div className="col-span-8 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-3 border-b border-outline-variant bg-primary-container text-on-primary-container flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Icon name="description" />
              <h4 className="font-bold">Global Assets Ltd. - Proof of Identity</h4>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-1 hover:bg-primary/20 rounded transition-colors"><Icon name="zoom_in" /></button>
              <button className="p-1 hover:bg-primary/20 rounded transition-colors"><Icon name="zoom_out" /></button>
              <button className="p-1 hover:bg-primary/20 rounded transition-colors"><Icon name="print" /></button>
            </div>
          </div>

          <div className="flex-1 bg-surface-dim overflow-hidden flex">
            <div className="w-64 bg-surface-container-lowest border-r border-outline-variant p-3 flex flex-col gap-3">
              <h5 className="text-label-md font-bold text-primary uppercase">Verification Steps</h5>
              <div className="space-y-2">
                {[
                  { tier: "Tier 1", items: [
                    { label: "BVN Submission", done: true },
                    { label: "Face Match (SmileID)", done: false },
                  ]},
                  { tier: "Tier 2", items: [
                    { label: "Passport Photo", done: true },
                    { label: "NIN Submission", done: true },
                    { label: "ID Card", done: false, pending: true },
                    { label: "Utility Bill", done: false },
                  ]},
                  { tier: "Tier 3", items: [
                    { label: "Address Certificate", done: false },
                  ]},
                ].map((group) => (
                  <div key={group.tier}>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">{group.tier}</p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <div key={item.label} className={`flex items-center gap-2 p-2 rounded ${
                          item.done ? "bg-green-50 text-green-800" :
                          item.pending ? "bg-secondary-fixed text-on-secondary-fixed-variant" :
                          "bg-surface-container text-on-surface-variant"
                        }`}>
                          <Icon name={item.done ? "check_circle" : item.pending ? "pending" : "circle"} className="text-body-md" />
                          <span className="text-body-sm font-semibold">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col items-center">
              <div className="w-full max-w-xl bg-white rounded-lg shadow-sm border border-outline-variant relative">
                <img
                  alt="Passport Document"
                  className="w-full h-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnCPSKzZCY9uW9yOHzf-O-eXQXeyDX0ENELdTHQpHhl7tx-UNAL53CQgayueXpr0GDxZIfJftUjsUvU0qwiJoDGw2iCXjRxHWp6BIiDVCzrrimjgDR3AORnzWnVkEtXljEiwO3rxN3u2CGFdxRu0j1W5IGmgSPcwZETHZaiIT08DJivhh7oW5omHY0fn-Xq03bKCDmFsStrdReP8ZyfW_kOlM7faG0MdO4Mhd2RgVQsYeqJlv9XydlNg"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded border border-outline-variant text-[10px] font-mono">
                  <p className="text-error font-bold">BLUR DETECTED 12%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-outline-variant bg-surface-container-low grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <h5 className="text-label-md font-bold mb-2 text-primary uppercase">Data Matching Results</h5>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Face Match (Smile ID)", value: "99.2%", ok: true },
                  { label: "NIN & BVN Match", value: "VERIFIED", ok: true },
                  { label: "Name Match", value: "100%", ok: true },
                  { label: "Address Match", value: "85%", ok: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center justify-between p-1 border rounded bg-white ${
                    item.ok ? "border-outline-variant" : "border-error/20 bg-error/5"
                  }`}>
                    <span className="text-label-md">{item.label}</span>
                    <span className={`text-label-md font-bold ${item.ok ? "text-green-600" : "text-error"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <label className="text-label-md text-on-surface-variant block mb-1">
                  Internal Review Notes (NIN/BVN Validated)
                </label>
                <textarea
                  className="w-full h-16 bg-white border border-outline-variant rounded-lg text-body-sm p-2"
                  placeholder="Add mandatory reviewer notes here..."
                />
              </div>
            </div>
            <div className="col-span-5 flex flex-col justify-end gap-3">
              <div className="mb-1">
                <h5 className="text-label-md font-bold mb-1 text-primary uppercase">Communication</h5>
                <div className="flex gap-1">
                  <select className="flex-1 border border-outline-variant rounded text-[10px] bg-white p-1">
                    <option>Request Clarification</option>
                    <option>Approved</option>
                    <option>Re-submission Required</option>
                  </select>
                  <button className="bg-primary text-on-primary px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                    <Icon name="mail" className="text-xs" />
                    Send Email
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 border border-error text-error font-bold py-3 rounded-lg hover:bg-error-container transition-all flex items-center justify-center gap-2">
                  <Icon name="cancel" className="text-xl" />
                  Reject
                </button>
                <button className="flex-1 bg-secondary text-on-secondary font-bold py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <Icon name="verified" className="text-xl" />
                  Approve
                </button>
              </div>
              <select className="w-full border border-outline-variant rounded-lg text-label-md text-on-surface-variant bg-white p-2">
                <option>Assign to Senior Compliance Lead</option>
                <option>Escalate for Legal Review</option>
                <option>Request Re-submission (Image Blur)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b border-outline-variant pb-3">
          <div className="flex items-center gap-3">
            <img
              alt="Jonathan Dexler"
              className="w-16 h-16 rounded-full border-2 border-secondary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJw63wgt7FpcxbQ9HZGN9w_rZZW7ebRBo8sDdbILQlJXwJYes8P-MWpz9G0ftU3prAsyfE04nxvaD_aqmWxWZjAwyPCMqcPmhfFOI1TuGvGxi3tow8G7GpFyhNrmjCFk8O8m81FWo0XvKTs3Qgt_dTJYetre7k4dDFae44H1M1kFTAS_gZkeLZkgFEVHydLt41nqmL38DGRu7iBsrAGAHJk5L-Q-wEfplsUbl3fFUpPkpqyykNROQ-jA"
            />
            <div>
              <h4 className="text-headline-md text-on-surface">Jonathan Dexler</h4>
              <div className="flex items-center gap-2">
                <span className="text-label-md bg-secondary-fixed text-on-secondary-fixed px-2 rounded-full">Tier 2 Verified</span>
                <span className="text-xs text-on-surface-variant">Registered: Oct 12, 2023</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-label-md text-on-surface-variant uppercase">Current Category</p>
            <p className="text-headline-md font-bold text-secondary">Tier 2 Status</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <h5 className="text-label-md font-bold text-primary uppercase">Identity Data Comparison</h5>
            <div className="space-y-2">
              <div className="p-2 bg-surface-container-low rounded border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant uppercase">Account Name</p>
                <p className="text-body-md font-bold">Jonathan Dexler</p>
              </div>
              <div className="p-2 bg-green-50 rounded border border-green-600/20">
                <p className="text-[10px] text-green-800 uppercase">Name on NIN</p>
                <p className="text-body-md font-bold text-green-800">JONATHAN DEXLER</p>
              </div>
              <div className="p-2 bg-green-50 rounded border border-green-600/20">
                <p className="text-[10px] text-green-800 uppercase">Name on BVN</p>
                <p className="text-body-md font-bold text-green-800">JONATHAN DEXLER</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-label-md font-bold text-primary uppercase">User Account Info</h5>
            <div className="space-y-2">
              <div className="p-2 bg-surface-container-low rounded border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant uppercase">Account Number</p>
                <p className="text-body-md font-bold font-mono">0092837411</p>
              </div>
              <div className="p-2 bg-surface-container-low rounded border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant uppercase">Bank Name</p>
                <p className="text-body-md font-bold">ES Payment Institutional Bank</p>
              </div>
              <div className="p-2 bg-surface-container-low rounded border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant uppercase">Registration Date</p>
                <p className="text-body-md font-bold">2023-10-12</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-l border-outline-variant pl-6">
            <Icon name="verified_user" className="text-display-lg text-secondary mb-2" filled />
            <p className="text-body-md font-bold text-center">Identity Cross-Referenced</p>
            <p className="text-xs text-on-surface-variant text-center">
              All biometric and database records match the provided documentation.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .stage-card { transition: all 0.2s ease; }
        .stage-card:hover { transform: translateY(-2px); }
      `}</style>
    </>
  );
}
