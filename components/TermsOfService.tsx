
import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-[#1A1A26] p-8 md:p-12 rounded-[32px] border border-white/10">
        <h1 className="text-4xl font-bold mb-2 text-gradient">Terms of Service</h1>
        <p className="text-white/40 mb-10 text-sm">Last Updated: June 7, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          {/* Intro */}
          <div className="bg-[#886EF0]/10 border-l-4 border-[#886EF0] p-6 rounded-r-xl">
            <p className="text-white/90 font-medium">
              Welcome to <strong>Better off: No contact tracker</strong>. These Terms of Service ("Terms") govern your use of the Better off mobile application (the "App") provided by Liti Labs ("we," "our," or "us"). Please read them carefully before using the App.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By downloading, accessing, or using Better off, you agree to be bound by these Terms and our <a href="#privacy" className="text-[#886EF0] hover:underline">Privacy Policy</a>. If you do not agree to these Terms, please do not use the App.</p>
            <p>We may update these Terms from time to time. Your continued use of the App after changes take effect constitutes acceptance of the updated Terms.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>Better off is a self-help and emotional support application designed to help users maintain no-contact with a former romantic partner and support their recovery journey. The App provides tools such as a no-contact streak tracker, journaling, mood check-ins, breathing exercises, and an AI companion ("Beto").</p>
            <div className="bg-red-500/10 border-l-4 border-red-400 p-6 rounded-r-xl mt-4">
              <p className="text-white/90">
                <strong className="text-white">Better off is not a medical device, and it is not a substitute for professional medical, psychological, or therapeutic care.</strong> The AI companion is a supportive tool, not a licensed therapist or counselor, and does not provide medical advice, diagnosis, or treatment.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
            <p>You must be at least 13 years old to use Better off. If you are under the age of majority in your jurisdiction, you may only use the App with the involvement and consent of a parent or legal guardian. By using the App, you represent that you meet these requirements.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscriptions and Billing</h2>
            <p>Better off offers core safety and tracking features for free. Certain premium features are available through an auto-renewing subscription.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscriptions are billed through your <strong className="text-white">Apple App Store</strong> or <strong className="text-white">Google Play</strong> account and are managed by our payments provider, RevenueCat.</li>
              <li>Payment is charged to your store account at confirmation of purchase.</li>
              <li>Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period.</li>
              <li>Your account is charged for renewal within 24 hours prior to the end of the current period, at the rate of your selected plan.</li>
              <li>You can manage or cancel your subscription at any time in your App Store or Google Play account settings. Cancellation takes effect at the end of the current billing period.</li>
              <li>Where a free trial is offered, any unused portion is forfeited when you purchase a subscription, where applicable.</li>
            </ul>
            <p className="mt-4">Refunds are handled according to the policies of the App Store or Google Play through which you made your purchase.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
            <p>You agree to use Better off only for its intended purpose and in a lawful manner. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
              <li>Use the App to harass, harm, or threaten any other person</li>
              <li>Interfere with or disrupt the App or its supporting services</li>
              <li>Attempt to gain unauthorized access to any part of the App or its systems</li>
              <li>Use the App in any way that violates applicable laws or regulations</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Content</h2>
            <p>You retain ownership of the content you create within the App, such as journal entries, notes, and check-ins. As described in our <a href="#privacy" className="text-[#886EF0] hover:underline">Privacy Policy</a>, this personal content is stored locally on your device and is not uploaded to our servers. You are responsible for the content you create.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p>The App, including its design, text, graphics, logos, the "Beto" companion, and software, is owned by Liti Labs and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of the App.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers and No Medical Advice</h2>
            <p>Better off is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the App will be uninterrupted, error-free, or secure.</p>
            <div className="bg-[#886EF0]/10 border border-[#886EF0]/20 p-6 rounded-2xl mt-4">
              <p className="text-white/90 font-medium mb-3">If you are in crisis or experiencing thoughts of self-harm, please reach out to a professional or a crisis line immediately:</p>
              <ul className="list-none space-y-1 text-white/80">
                <li><strong className="text-white">US:</strong> 988 Suicide &amp; Crisis Lifeline</li>
                <li><strong className="text-white">UK:</strong> Samaritans 116 123</li>
                <li><strong className="text-white">Canada:</strong> 988</li>
                <li><strong className="text-white">Australia:</strong> Lifeline 13 11 14</li>
              </ul>
              <p className="text-white/60 text-sm mt-3">In an emergency, contact your local emergency services.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Liti Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, arising out of or related to your use of, or inability to use, the App. The App is a self-help tool and you use it at your own discretion and risk.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p>You may stop using the App at any time by uninstalling it, which permanently deletes all locally stored data. We may suspend or terminate your access to the App if you violate these Terms. Provisions that by their nature should survive termination will continue to apply.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to These Terms</h2>
            <p>We may modify these Terms from time to time. When we do, we will update the "Last Updated" date above and, for material changes, may provide additional notice within the App. Your continued use of Better off after changes take effect constitutes acceptance of the revised Terms.</p>
          </section>

          {/* Section 12 - Contact */}
          <section className="bg-gradient-to-br from-[#886EF0]/10 to-transparent p-8 rounded-2xl border border-[#886EF0]/20">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <p className="font-bold text-white">Liti Labs</p>
            <p>Email: <a href="mailto:litilabs@outlook.com" className="text-[#886EF0] hover:underline">litilabs@outlook.com</a></p>
          </section>

          <p className="text-center text-white/30 text-sm pt-8">&copy; 2026 Liti Labs. All rights reserved.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => window.location.hash = ''}
            className="bg-[#886EF0] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
