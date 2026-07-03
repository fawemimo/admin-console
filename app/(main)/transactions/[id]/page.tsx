import { Icon } from "@/components/ui/Icon";

const steps = [
  { time: "14:20:01", title: "Initiation & KYC Screening", desc: "Automated compliance checks cleared via ES Payment Core." },
  { time: "14:21:45", title: "Counterparty Handshake", desc: "Secure peer-to-peer verification and liquidity lock." },
  { time: "14:22:09", title: "Ledger Finalization", desc: "Blocks committed to private institutional chain." },
];

export default function TransactionDetailPage() {
  return (
    <>
      <header className="flex items-center gap-4 mb-4">
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h2 className="text-headline-md font-bold text-primary">Transaction Details</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[128px] text-secondary">verified_user</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-label-md text-[10px] uppercase tracking-widest">Settled</span>
              <span className="text-on-surface-variant font-label-md">TXN ID: 884-2933-XPL-09</span>
            </div>
            <h3 className="text-display-lg text-primary mb-1">
              $4,250,000.00 <span className="text-headline-md font-normal text-on-surface-variant">USD</span>
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Institutional Bulk Equity Transfer • <span className="text-secondary font-semibold">Gold Tier Priority</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="bg-primary text-on-primary px-4 py-3 rounded-lg font-label-md flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95 shadow-lg shadow-primary/10">
              <Icon name="download" />
              Download Receipt
            </button>
            <button className="border border-primary text-primary px-4 py-3 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors">
              <Icon name="share" />
              Share Trace
            </button>
          </div>
        </div>

        <div className="bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-between border border-primary relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-label-md text-on-primary-container opacity-70 uppercase mb-3">Counterparty</p>
            <h4 className="text-headline-md text-secondary-fixed mb-2">Loomis-Faraday Holdings</h4>
            <p className="text-body-sm mb-4">
              LEI: 549300H2P7U38L8B9143<br />London Branch, UK
            </p>
          </div>
          <div className="flex items-center gap-2 relative z-10 pt-3 border-t border-white/10">
            <Icon name="shield_lock" className="text-secondary-fixed" />
            <span className="font-label-md">Vetted Counterparty (Level 3)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm">
          <h4 className="font-label-md text-primary mb-4 border-b border-outline-variant pb-2">Transaction Metadata</h4>
          <div className="grid grid-cols-2 gap-y-4">
            <div>
              <p className="font-label-md text-on-surface-variant opacity-60 uppercase mb-1">Payment Method</p>
              <div className="flex items-center gap-2 text-on-surface font-semibold">
                <Icon name="account_balance" className="text-secondary" />
                SWIFT gpi (High-Value)
              </div>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant opacity-60 uppercase mb-1">Settlement Mode</p>
              <p className="text-on-surface font-semibold">Real-Time Gross (RTGS)</p>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant opacity-60 uppercase mb-1">Execution Time</p>
              <p className="text-on-surface font-semibold">Oct 24, 2023 | 14:22:09 GMT</p>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant opacity-60 uppercase mb-1">Fee Structure</p>
              <p className="text-on-surface font-semibold">Tier-1 Institutional (0.002%)</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm relative overflow-hidden">
          <h4 className="font-label-md text-primary mb-4 border-b border-outline-variant pb-2">Settlement Lifecycle</h4>
          <div className="relative pl-8 space-y-4 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-white z-10" />
                {i === steps.length - 1 && (
                  <div className="absolute -left-[29px] top-0 w-6 h-6 bg-secondary/20 rounded-full animate-ping" />
                )}
                <p className="font-label-md text-on-surface-variant opacity-60">{step.time}</p>
                <p className="text-body-md text-on-surface font-semibold">{step.title}</p>
                <p className="text-body-sm text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 h-80 bg-surface-container rounded-xl border border-outline-variant relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4 text-white">
            <p className="font-label-md uppercase tracking-widest text-secondary-fixed mb-1">Geographic Trace</p>
            <h5 className="text-headline-md">Originating Node: NYC Hub → Destination: London Central</h5>
            <p className="text-body-sm opacity-80 max-w-md mt-1">
              This transaction traversed through secure dedicated fiber channels between the NY-4 and LD-5 data centers with sub-millisecond latency.
            </p>
          </div>
        </div>

        <div className="bg-primary text-secondary-fixed rounded-xl border border-primary p-4 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-display-lg mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
            <h5 className="text-headline-md mb-1">Immutable Record</h5>
            <p className="text-body-sm text-on-primary-fixed-variant">
              This entry is secured by SHA-256 encryption and is viewable on the shared private ledger for authorized nodes only.
            </p>
          </div>
          <div className="mt-4 font-label-md bg-white/10 p-2 rounded border border-white/10 font-mono text-[10px] break-all">
            BLOCK_HASH: 0x93f...b829e
          </div>
        </div>
      </div>

      <footer className="mt-6 border-t border-outline-variant pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-on-surface-variant text-body-sm">
          Audit Log Reference: <span className="font-mono bg-surface-container px-1">#LOG-A9921-2023</span>
        </p>
        <div className="flex items-center gap-4">
          <a className="text-primary font-label-md flex items-center gap-1 hover:underline" href="#">
            <Icon name="support_agent" className="text-sm" />
            Request Trade Reconciliation
          </a>
          <a className="text-primary font-label-md flex items-center gap-1 hover:underline" href="#">
            <Icon name="policy" className="text-sm" />
            View Compliance Certifications
          </a>
        </div>
      </footer>
    </>
  );
}
