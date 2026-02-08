'use client';

import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className="bg-[#FAF6F1] min-h-screen font-sans text-[#223614]">
            {/* MAIN CONTENT */}
            <main id="main-content" className="max-w-[1280px] mx-auto px-6 pt-[150px] pb-32 border-b border-[#223614]/10">
                <div className="max-w-4xl space-y-8">
                    <p className="text-[18px] leading-[1.6]">
                        We couldn&apos;t find the page you were looking for. This is either because:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-[18px] leading-[1.6]">
                        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                        <li>The page you are looking for has been moved or deleted.</li>
                    </ul>
                    <p className="text-[18px] leading-[1.6]">
                        You can return to our homepage by clicking <Link href="/" className="underline decoration-[#223614]/30 underline-offset-4">here</Link>, or you can try searching for the content you are seeking by clicking <Link href="/" className="underline decoration-[#223614]/30 underline-offset-4">here</Link>.
                    </p>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="max-w-[1280px] mx-auto px-6 pt-24 pb-12">
                <div className="grid md:grid-cols-4 gap-12 mb-24">
                    <div className="md:col-span-2 space-y-8">
                        <h3 className="text-[28px] font-[400] font-display">
                            Dr. Maya Reynolds, PsyD
                        </h3>
                        <div className="text-[15px] leading-[1.7]">
                            <p>123 Example Road</p>
                            <p>Minneapolis, MN</p>
                        </div>
                        <div className="text-[15px] font-[500] underline decoration-[#223614]/30 underline-offset-4 space-y-1">
                            <p><a href="mailto:email@example.com">email@example.com</a></p>
                            <p>(555) 555-5555</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[28px] font-[400] font-display">
                            Hours
                        </h4>
                        <div className="text-[15px] leading-[1.7]">
                            <p>Monday – Friday</p>
                            <p>10am – 6pm</p>
                        </div>
                    </div>
                    <div className="space-y-6 md:text-right">
                        <h4 className="text-[28px] font-[400] font-display text-right">
                            Find
                        </h4>
                        <div className="flex flex-col md:items-end gap-2 text-[15px] underline decoration-[#223614]/30 underline-offset-4">
                            <Link href="/">Home</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/blog">Blog</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center space-y-6 border-t border-[#223614]/10 pt-12">
                    <div className="flex flex-wrap justify-center gap-6 text-[14px] underline decoration-[#223614]/30 underline-offset-4">
                        <Link href="/privacy-policy">Privacy & Cookies Policy</Link>
                        <Link href="/good-faith-estimate">Good Faith Estimate</Link>
                        <Link href="/terms-and-conditions">Website Terms & Conditions</Link>
                        <Link href="/disclaimer">Disclaimer</Link>
                    </div>
                    <p className="text-[14px]">
                        Website Template Credits: <span className="underline decoration-[#223614]/30">Go Bloom Creative</span>
                    </p>
                    <p className="text-[14px] mt-8 opacity-70">
                        All Rights Reserved © 2024 Your Business Name Here, LLC.
                    </p>
                </div>
            </footer>
        </div>
    );
}
