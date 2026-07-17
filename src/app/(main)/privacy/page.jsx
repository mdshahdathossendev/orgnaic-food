import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Organic Meadow',
  description: 'Read the Organic Meadow Privacy Policy to understand how we collect, use, and protect your personal information.',
};

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `Organic Meadow Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. By accessing our platform, you consent to the practices described in this policy. If you disagree, please discontinue using our services.`,
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, place an order, or contact us — including name, email address, phone number, postal address, and payment information. We also automatically collect certain usage data such as IP address, browser type, device identifiers, pages visited, and clickstream data through cookies and similar tracking technologies. We may receive additional information about you from third-party partners such as social login providers (e.g., Google).`,
  },
  {
    id: 'use-of-information',
    title: '3. How We Use Your Information',
    content: `We use the information we collect to: process and fulfill your orders; communicate with you about your account and orders; send promotional emails and newsletters (with your consent); personalize your shopping experience; improve our products, services, and website; detect and prevent fraud and abuse; comply with legal obligations; and respond to your inquiries and support requests. We will never sell your personal information to third parties for their own marketing purposes.`,
  },
  {
    id: 'sharing',
    title: '4. Sharing of Information',
    content: `We may share your information with: (a) trusted service providers who assist us in operating our business (e.g., payment processors, shipping carriers, email providers), subject to strict confidentiality obligations; (b) law enforcement or regulatory authorities when required by law or to protect our legal rights; (c) business successors in the event of a merger, acquisition, or sale of assets, with appropriate notice to you; and (d) other parties with your explicit consent. We do not sell or rent your personal data.`,
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking Technologies',
    content: `We use cookies, web beacons, and similar technologies to enhance your experience, analyze site traffic, remember your preferences, and deliver targeted advertising. Essential cookies are required for the platform to function. Analytics and marketing cookies can be controlled through your browser settings or our cookie preference center. By using our site, you consent to our use of cookies as described in this policy.`,
  },
  {
    id: 'data-security',
    title: '6. Data Security',
    content: `We implement industry-standard security measures including SSL/TLS encryption, PCI DSS-compliant payment processing, firewalls, and regular security audits to protect your information. However, no method of internet transmission or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.`,
  },
  {
    id: 'retention',
    title: '7. Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements. When you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law (e.g., financial records retained for 7 years for tax purposes).`,
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: `Depending on your jurisdiction, you may have rights to: access the personal data we hold about you; correct inaccurate or incomplete data; request deletion of your personal data ("right to be forgotten"); object to or restrict our processing of your data; request data portability; and withdraw consent at any time. To exercise these rights, email us at privacy@organicmeadow.com. We will respond within 30 days.`,
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    content: `Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such data immediately. If you believe we have inadvertently collected information from a child, please contact us immediately.`,
  },
  {
    id: 'third-party',
    title: '10. Third-Party Links',
    content: `Our website may contain links to third-party websites or services not operated by us. This Privacy Policy does not apply to those sites. We encourage you to review the privacy policies of any third-party sites you visit. We have no control over and accept no responsibility for third-party content or privacy practices.`,
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting a notice on our website or sending you an email. The "Last Updated" date at the top of this page reflects the most recent revision. Your continued use of our Service after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact-privacy',
    title: '12. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team at: privacy@organicmeadow.com | Organic Meadow Inc., 120 Sweetgrass Farm Rd, Oregon, USA. For EU/EEA residents, you may also lodge a complaint with your local Data Protection Authority.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <Shield className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Privacy Policy
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
          <span className="text-[#123517] font-semibold">Privacy Policy</span>
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
          <div className="bg-[#F0F9E8] border border-[#D4EDDA] rounded-xl px-5 py-4 text-xs text-gray-700 leading-relaxed">
            <strong>Your privacy matters.</strong> At Organic Meadow, we believe in full transparency about how we handle your data. This policy explains everything clearly — no legal jargon.
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
