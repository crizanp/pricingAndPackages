import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - FoxBeep</title>
        <meta name="description" content="FoxBeep's privacy policy - how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto  py-8 px-4 md:px-6 xl:px-8">
          
          <h1 className="text-6xl font-bold text-center mb-8 py-8">
            Privacy Policy
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-700">
              At FoxBeep, your privacy matters to us
            </p>
            <p className="text-xl mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-10">
            
            <section>
              <h2 className="text-4xl font-bold mb-6">What We Collect</h2>
              <p className="text-xl leading-relaxed">
                When you use FoxBeep, we may collect information you provide directly, such as your name, email address, and account preferences. We also automatically collect technical information like your IP address, browser type, and how you interact with our service to improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">How We Use Your Information</h2>
              <p className="text-xl leading-relaxed">
                We use your information to provide and improve our services, communicate with you about updates and features, and ensure the security of your account. We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Information Sharing</h2>
              <p className="text-xl leading-relaxed">
                We only share your information when necessary to provide our services (like with trusted service providers), comply with legal requirements, or protect our users&apos; safety. Any third parties we work with are required to protect your information with the same care we do.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Cookies &amp; Tracking</h2>
              <p className="text-xl leading-relaxed">
                We use cookies and similar technologies to remember your preferences, analyze how our service is used, and provide personalized features. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Data Security</h2>
              <p className="text-xl leading-relaxed">
                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, so we encourage you to use strong passwords and keep your account information safe.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Your Rights</h2>
              <p className="text-xl leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. You can also opt out of certain communications or request a copy of the data we have about you. Simply contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Children&apos;s Privacy</h2>
              <p className="text-xl leading-relaxed">
                FoxBeep is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Policy Updates</h2>
              <p className="text-xl leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We&apos;ll notify you of significant changes by email or through our service. Your continued use of FoxBeep after changes take effect means you accept the updated policy.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-xl leading-relaxed mb-4">
                Have questions about this privacy policy or how we handle your information? We&apos;re here to help.
              </p>
              <div className="text-xl">
                <p className="mb-2">Email: support@foxbeep.com</p>
                <p className="mb-2">Website: www.foxbeep.com</p>
                <p>Response time: We&apos;ll get back to you within 48 hours</p>
              </div>
            </section>

          </div>
          
          
          
        </div>
      </div>
    </>
  );
}