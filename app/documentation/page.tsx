import Link from "next/link";
import {
  QrCode,
  ShoppingCart,
  Store,
  Clock,
  ShieldCheck,
  Sparkles,
  Database,
  ArrowRight,
  ScanLine,
  CheckCircle2,
  Receipt,
  Wallet,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <ScanLine className="w-6 h-6 text-indigo-600" />,
    title: "Store QR Discovery",
    desc: "Scan a single store QR code upon entry to instantly unlock and browse the store's full digital catalog.",
  },
  {
    icon: <QrCode className="w-6 h-6 text-indigo-600" />,
    title: "Instant Product Lookup",
    desc: "Scan individual items to check specs, prices, and stock—no need to hunt down store staff for help.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-indigo-600" />,
    title: "Live Smart Cart",
    desc: "Track your running total in real time as you shop, keeping full control over your budget before checkout.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-indigo-600" />,
    title: "Flexible Payments",
    desc: "Pay instantly via UPI on your phone or choose counter cash pay—whichever fits your flow.",
  },
  {
    icon: <Receipt className="w-6 h-6 text-indigo-600" />,
    title: "Instant Physical Receipts",
    desc: "Orders instantly reach the cashier workstation to spit out a printed bill for quick item verification.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    title: "Protected Inventory",
    desc: "Secure staff portal ensures product details, inventory counts, and price tags stay completely up to date.",
  },
];

const benefits = [
  { title: "Zero Wait Time", desc: "Skip traditional queue headaches and browse instantly." },
  { title: "No Chasing Staff", desc: "Get accurate product info right on your phone screen." },
  { title: "Reduces Payroll Costs", desc: "Allows stores to operate smoothly with a leaner sales floor team." },
  { title: "100% Price Transparency", desc: "No hidden costs or price confusion at the counter." },
  { title: "Frictionless Billing", desc: "Fast-track verification saves minutes per customer." },
  { title: "Smart Budgeting", desc: "Know your exact cart total before reaching the cashier." },
];

const steps = [
  {
    num: "01",
    title: "Scan Store QR",
    desc: "Walk into your local store and scan the entry QR code to load the digital store shelf on your phone.",
  },
  {
    num: "02",
    title: "Scan & Add Items",
    desc: "Scan product barcodes to view specifications, compare options, and add items directly into your smart cart.",
  },
  {
    num: "03",
    title: "Review & Checkout",
    desc: "See your total calculated live. Pay digitally via instant UPI or select counter cash payment.",
  },
  {
    num: "04",
    title: "Instant Verification",
    desc: "The cashier gets your order signal, generates your physical bill, checks off items, and you're on your way!",
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/40 to-pink-200/20 blur-3xl rounded-full" />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-200">
              <ScanLine className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              ScanbyBuy<span className="text-indigo-600">.</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Open Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          The Future of In-Store Shopping
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Walk In, Scan the Store, <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Checkout Instantly.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Eliminate long checkout lines and staff dependency. Customers scan local store QR codes, access real-time product details, build live carts, and pay via UPI or cash—getting instant physical receipts at exit.
        </p>

      </section>

      {/* PROBLEM & SOLUTION HIGHLIGHT */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Problem */}
            <div className="p-8 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-rose-600 text-xs font-bold tracking-wider uppercase">The Traditional Pain Point</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Slow Stores & High Overhead Costs</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-rose-100 text-rose-600 rounded mt-0.5">✕</div>
                  <span>Customers constantly searching for store helpers to get price or specs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-rose-100 text-rose-600 rounded mt-0.5">✕</div>
                  <span>Long bottlenecks at cashier counters causing customer frustration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-rose-100 text-rose-600 rounded mt-0.5">✕</div>
                  <span>Surprise bill amounts at checkout due to lack of running totals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-rose-100 text-rose-600 rounded mt-0.5">✕</div>
                  <span>High staff labor expenditure just to answer repetitive questions.</span>
                </li>
              </ul>
            </div>

            {/* Right: Solution */}
            <div className="p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <span className="text-emerald-600 text-xs font-bold tracking-wider uppercase">The Smart Solution</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Self-Serve Digital Shopping</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Scan store QR code to unlock all product inventory instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Know exact live totals before paying—no surprises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pay with phone UPI or counter cash; cashier auto-prints physical bill.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cuts payroll costs while speeding up store turnover dramatically.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">How The Smart Flow Works</h2>
          <p className="mt-3 text-slate-600">A seamless 4-step process designed for physical retail store efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-lg flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Platform Features</h2>
            <p className="mt-3 text-slate-600">Everything needed to transform local stores into smart self-checkout spaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-indigo-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE & BENEFITS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Merchants & Customers Love It</h2>
          <p className="mt-3 text-slate-600">Built to resolve conflicts, save time, and cut store operational expenses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION / CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Ready to Upgrade Your In-Store Shopping Experience?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
            Say goodbye to cashier bottlenecks and customer confusion. Experience the seamless combination of online ease with physical retail store speed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admin"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-900"
            >
              Get Started as Store Admin
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} ScanBeforeYouBuy Smart Retail Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

