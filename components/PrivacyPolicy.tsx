
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-[#1A1A26] p-8 md:p-12 rounded-[32px] border border-white/10">
        <h1 className="text-4xl font-bold mb-2 text-gradient">Privacy Policy</h1>
        <p className="text-white/40 mb-10 text-sm">Last Updated: January 15, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          {/* Intro */}
          <div className="bg-[#886EF0]/10 border-l-4 border-[#886EF0] p-6 rounded-r-xl">
            <p className="text-white/90 font-medium">
              <strong>Better off: No contact tracker</strong> is designed with your privacy as a core principle. We understand that the journey of healing from a breakup involves deeply personal and sensitive information. This policy explains how we protect your data.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Better off: No contact tracker ("we," "our," or "the app") is a mental health and recovery support application that helps users maintain no-contact with a former romantic partner. This Privacy Policy describes how we collect, use, store, and protect your information when you use our mobile application.</p>
            <p>By using Better off, you agree to the practices described in this Privacy Policy.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>We collect information in different categories, each with specific privacy protections:</p>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">2.1 Data Stored Only on Your Device</h3>
            <p>The following information is stored <strong className="text-white">exclusively on your device</strong> and never transmitted to our servers:</p>

            <div className="flex flex-wrap gap-2 my-4">
              <span className="px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-400">Extremely Sensitive</span>
              <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">Device Only</span>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                { t: "Bad Stuff Log", d: "Personal notes and images you save as reminders", r: "Until you delete them" },
                { t: "Simulated Messages", d: "Draft messages you write but choose not to send", r: "Auto-deleted after 72 hours" },
                { t: "Journal Entries", d: "Your personal reflections and thoughts", r: "Until you delete them" },
                { t: "Mood Check-ins", d: "Daily emotional state recordings", r: "Until you delete them" },
                { t: "User Profile", d: "Display name, breakup date, notification preferences", r: "Until you delete the app" },
                { t: "No-Contact Streak", d: "Start date, current days, longest streak achieved", r: "Until you delete the app" },
                { t: "Recovery Progress", d: "Your progress through weekly coaching modules", r: "Until you delete the app" },
                { t: "Affirmation Interactions", d: "Which affirmations you've saved or favorited", r: "Until you delete the app" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="font-bold text-white">{item.t}</p>
                  <p className="text-sm opacity-60">{item.d}</p>
                  <p className="text-xs opacity-40 mt-1">Retention: {item.r}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">2.2 AI Chat Conversations</h3>
            <p>When you use the AI companion (Beto):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your conversation history is cached <strong className="text-white">locally on your device</strong></li>
              <li>Only the conversation context necessary for generating responses is sent to our AI service</li>
              <li><strong className="text-white">Your Bad Stuff Log and Simulated Messages are NEVER included</strong> in AI conversations</li>
              <li>AI conversations are processed through secure, encrypted connections</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
            <p>We use the following third-party services to provide and improve the app:</p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#886EF0]/20">
                    <th className="p-3 text-left text-white">Service</th>
                    <th className="p-3 text-left text-white">Purpose</th>
                    <th className="p-3 text-left text-white">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-semibold text-white">Supabase</td>
                    <td className="p-3">AI chat processing</td>
                    <td className="p-3">Chat context only (excludes sensitive data)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-semibold text-white">Firebase</td>
                    <td className="p-3">App analytics & config</td>
                    <td className="p-3">Anonymous usage statistics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">RevenueCat</td>
                    <td className="p-3">Subscription management</td>
                    <td className="p-3">Purchase history, subscription status</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">These services have their own privacy policies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#886EF0] hover:underline">Supabase Privacy Policy</a></li>
              <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#886EF0] hover:underline">Firebase Privacy Policy</a></li>
              <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#886EF0] hover:underline">RevenueCat Privacy Policy</a></li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide the core app functionality (tracking your no-contact journey)</li>
              <li>Generate AI companion responses to support your emotional wellbeing</li>
              <li>Process subscription payments and manage your account</li>
              <li>Improve app performance and fix bugs</li>
              <li>Send you notifications you've opted into (streak reminders, daily check-ins)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">5.1 Local-First Architecture</h3>
            <p>Better off is built with a <strong className="text-white">privacy-first, local-first</strong> approach:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All personal and emotional data is stored on your device only</li>
              <li>We do not have access to your journals, mood data, or personal notes</li>
              <li>Images in your Bad Stuff Log are stored in a private, app-only directory</li>
              <li>Uninstalling the app permanently deletes all local data</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">5.2 Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All network communications use HTTPS encryption</li>
              <li>Sensitive features may require device authentication (biometric or passcode)</li>
              <li>Simulated messages are automatically deleted after 72 hours</li>
              <li>No personal data is stored on external servers</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <p>You have the following rights regarding your data:</p>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">6.1 Access and Control</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">View your data:</strong> All your data is accessible within the app</li>
              <li><strong className="text-white">Edit your data:</strong> You can modify your profile and entries at any time</li>
              <li><strong className="text-white">Delete individual items:</strong> Remove specific journal entries, check-ins, or Bad Stuff Log items</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">6.2 Data Deletion</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Delete all data:</strong> Uninstalling the app removes all locally stored data</li>
              <li><strong className="text-white">Subscription data:</strong> Contact us to request deletion of subscription-related data from RevenueCat</li>
              <li><strong className="text-white">Analytics data:</strong> You can opt out of analytics in your device settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#886EF0] mt-6 mb-3">6.3 Notifications</h3>
            <p>You can manage notification preferences in the app settings at any time.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
            <p>Better off is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
            <p>If you use Better off from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using the app, you consent to this transfer.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the new Privacy Policy in the app</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Sending a notification through the app for material changes</li>
            </ul>
            <p className="mt-4">Your continued use of Better off after changes constitutes acceptance of the updated policy.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Local data:</strong> Retained until you delete it or uninstall the app</li>
              <li><strong className="text-white">Simulated messages:</strong> Automatically deleted after 72 hours</li>
              <li><strong className="text-white">Subscription data:</strong> Retained as required for billing purposes and legal compliance</li>
              <li><strong className="text-white">Analytics data:</strong> Retained according to Firebase's data retention policies</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. California Privacy Rights</h2>
            <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (Note: We do not sell your personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          {/* Section 12 - Contact */}
          <section className="bg-gradient-to-br from-[#886EF0]/10 to-transparent p-8 rounded-2xl border border-[#886EF0]/20">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
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
