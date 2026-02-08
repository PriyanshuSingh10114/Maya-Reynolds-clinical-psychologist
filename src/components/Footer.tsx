import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#223614]/10">

      {/* TOP FOOTER (WHITE) */}
      <div className="bg-white py-16 md:pt-24 md:pb-24">
        <div className="max-w-[var(--spacing-container)] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* Column 1 */}
          <div className="md:col-span-2 space-y-6 md:space-y-8">
            <h3 className="font-display text-[24px] md:text-[28px] font-[400] text-[#223614]">
              Dr. Maya Reynolds, PsyD
            </h3>

            <div className="font-sans text-[14px] md:text-[15px] font-[400] leading-[1.7] text-[#223614]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>

            <div className="font-sans text-[14px] md:text-[15px] font-[500] text-[#223614] underline decoration-[#223614]/30 underline-offset-4 space-y-1">
              <p>
                <a href="mailto:email@example.com">email@example.com</a>
              </p>
              <p>(555) 555-5555</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-display text-[24px] md:text-[28px] font-[400] text-[#223614]">
              Hours
            </h4>
            <div className="font-sans text-[14px] md:text-[15px] font-[400] leading-[1.7] text-[#223614]">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-display text-[24px] md:text-[28px] font-[400] text-[#223614]">
              Find
            </h4>
            <div className="flex flex-col md:items-end gap-2 font-sans text-[14px] md:text-[15px] font-[400] text-[#223614] underline decoration-[#223614]/30 underline-offset-4">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER (ORIGINAL COLOR) */}
      <div className="bg-[#EFE9E1]">
        <div className="max-w-[var(--spacing-container)] mx-auto px-6 pt-8 pb-12 border-t border-[#223614]/10 text-center space-y-4">

          <div className="flex flex-wrap justify-center gap-6 font-sans text-[14px] font-[400] text-[#223614] underline decoration-[#223614]/30 underline-offset-4">
            <Link href="/privacy-policy">Privacy & Cookies Policy</Link>
            <Link href="/good-faith-estimate">Good Faith Estimate</Link>
            <Link href="/terms-and-conditions">Website Terms & Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>

          <p className="font-sans text-[14px] font-[400] text-[#223614]">
            Website Template Credits:{" "}
            <span className="underline">Go Bloom Creative</span>
          </p>

          <p className="font-sans text-[14px] font-[400] text-[#223614] mt-8">
            All Rights Reserved © {new Date().getFullYear()} Your Business Name Here, LLC.
          </p>

        </div>
      </div>

    </footer>
  );
}
