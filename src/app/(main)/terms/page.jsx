import { ScrollText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Organic Meadow',
  description: 'Read the Terms of Service for Organic Meadow. Understand your rights and responsibilities when using our platform.',
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Organic Meadow website, mobile application, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.`,
  },
  {
    id: 'eligibility',
    title: '2. Eligibility',
    content: `You must be at least 18 years of age to use our Service. By using the Service, you represent and warrant that you are 18 years of age or older, and that you have the full authority to enter into this agreement. If you are using the Service on behalf of a business or organization, you further represent that you have the authority to bind that entity to these Terms.`,
  },
  {
    id: 'account',
    title: '3. Account Registration',
    content: `To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update your information to keep it accurate. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    id: 'products',
    title: '4. Products & Orders',
    content: `All product descriptions, images, and pricing are provided in good faith and are subject to change without notice. We reserve the right to limit the quantity of items purchased per person or per order, to refuse orders at our sole discretion, and to discontinue any product at any time. Placing an order constitutes an offer to purchase, which is not accepted until we send an order confirmation email.`,
  },
  {
    id: 'pricing',
    title: '5. Pricing & Payment',
    content: `Prices are listed in US Dollars and are exclusive of applicable taxes. We accept major credit/debit cards, PayPal, and other listed payment methods. All payments are processed through secure, PCI-compliant third-party processors. We are not responsible for any fees charged by your bank or payment provider. In the event of a pricing error, we reserve the right to cancel and refund orders placed at the incorrect price.`,
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    content: `All content on the Organic Meadow platform — including but not limited to text, graphics, logos, images, product descriptions, and software — is the exclusive property of Organic Meadow Inc. or its content suppliers and is protected by US and international intellectual property laws. You may not reproduce, modify, distribute, transmit, or exploit any content without our prior written consent.`,
  },
  {
    id: 'prohibited',
    title: '7. Prohibited Activities',
    content: `You agree not to: (a) use the Service for any unlawful purpose or in violation of any regulations; (b) submit false or misleading information; (c) interfere with or disrupt the security or performance of the Service; (d) attempt to gain unauthorized access to any part of our systems; (e) use automated tools to scrape, index, or harvest data from our platform; or (f) engage in any conduct that restricts or inhibits another user's experience.`,
  },
  {
    id: 'disclaimers',
    title: '8. Disclaimers',
    content: `The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. To the fullest extent permitted by law, Organic Meadow disclaims all warranties including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses.`,
  },
  {
    id: 'limitation',
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Organic Meadow Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages. Our total liability in any matter arising out of these Terms shall not exceed the amount you paid us in the 12 months preceding the claim.`,
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Oregon, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Multnomah County, Oregon.`,
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: `If you have questions or concerns about these Terms of Service, please contact us at: legal@organicmeadow.com | Organic Meadow Inc., 120 Sweetgrass Farm Rd, Oregon, USA. We aim to respond to all inquiries within 2 business days.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <ScrollText className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Last updated: July 1, 2026 &nbsp;·&nbsp; Effective Date: July 1, 2026
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">Terms of Service</span>
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 lg:flex lg:gap-10">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-[#123517] uppercase tracking-wider mb-3">Contents</p>
            <ul className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-xs text-gray-500 hover:text-[#123517] transition-colors leading-snug block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-xs text-amber-800 leading-relaxed">
            Please read these Terms of Service carefully before using our platform. These Terms constitute a legally binding agreement between you and Organic Meadow Inc.
          </div>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-base font-bold text-[#123517] mb-2">{s.title}</h2>
              <p className="text-sm text-gray-700 leading-relaxed bg-white border border-gray-100 rounded-xl p-5">
                {s.content}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
