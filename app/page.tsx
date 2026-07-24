import HomeQRCode from "@/components/HomeQRCode";
import Link from "next/link";
import { ScanLine, CheckCircle2, ArrowRight, FileText, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="h-svh w-full overflow-hidden bg-slate-900 text-slate-800 flex items-center justify-center p-3 sm:p-6 relative selection:bg-indigo-500 selection:text-white">
      
      {/* GLOW DECORATION */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <section className="w-full max-w-4xl rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-indigo-950/50 border border-white/20 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
        
        {/* HEADER BRANDING */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Smart Self-Checkout Experience
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="p-2.5 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
              <ScanLine className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              ScanbyBuy<span className="text-indigo-600">.</span>
            </h1>
          </div>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto">
            Scan the in-store QR code to start browsing products, managing your cart, and checking out instantly.
          </p>
        </div>

        {/* MAIN INTERACTIVE SECTION */}
        <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* QR CODE CARD */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer p-4 bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:border-indigo-500 hover:shadow-indigo-100 transition-all duration-300">
              <HomeQRCode />
            </div>
            <p className="mt-2 text-xs text-slate-500 font-medium text-center">
              Tap or scan QR code to enter store
            </p>
          </div>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-7 flex flex-col justify-between text-center lg:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Welcome to Local Self-Serve
              </h2>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                Skip searching for floor staff or waiting in long cashier queues. Access live pricing, specs, running cart total, and quick UPI/cash payment options right on your phone.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center justify-center lg:justify-start gap-3 my-4">
              <div className="h-px w-12 bg-slate-200" />
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Store Perks</span>
              <div className="h-px w-12 bg-slate-200" />
            </div>

            {/* FEATURE CHECKLIST */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Live Cart Total</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Product Transparency</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fast UPI / Cash</span>
              </div>
            </div>

            {/* DOCUMENTATION LINK */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center lg:justify-start">
              <Link
                href="/documentation"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
              >
                <FileText className="w-4 h-4" />
                <span>Read Full Documentation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 font-bold uppercase">
            Shop Smarter • Skip Queues • Save Time
          </p>
        </div>

      </section>
    </main>
  );
}

