import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - FoxBeep</title>
        <meta name="description" content="FoxBeep's terms and conditions - understand your rights and responsibilities when using our service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8">
          
          <h1 className="text-6xl font-bold text-center mb-8 py-8">
            Terms and Conditions
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-700">
              Welcome to FoxBeep - please read these terms carefully
            </p>
            <p className="text-xl mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-10">
            
            <section>
              <h2 className="text-4xl font-bold mb-6">Agreement to Terms</h2>
              <p className="text-xl leading-relaxed">
                By accessing or using FoxBeep, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not use our service. These terms apply to all users, visitors, and anyone who accesses or uses our platform.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Service Description</h2>
              <p className="text-xl leading-relaxed">
                FoxBeep provides digital communication and collaboration tools designed to enhance your productivity and connectivity. Our service may include messaging features, file sharing, notifications, and other communication functionalities. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">User Accounts</h2>
              <p className="text-xl leading-relaxed">
                To access certain features of FoxBeep, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any security breach.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Acceptable Use</h2>
              <p className="text-xl leading-relaxed">
                You agree to use FoxBeep only for lawful purposes and in accordance with these terms. You may not use our service to transmit harmful, offensive, or illegal content, engage in harassment or spam, attempt to gain unauthorized access to our systems, or interfere with other users' experience. We reserve the right to suspend or terminate accounts that violate these guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Content and Intellectual Property</h2>
              <p className="text-xl leading-relaxed">
                You retain ownership of any content you submit to FoxBeep, but you grant us a license to use, store, and display your content as necessary to provide our service. FoxBeep and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Subscription and Billing</h2>
              <p className="text-xl leading-relaxed">
                Some features of FoxBeep may require a paid subscription. Subscription fees are billed in advance and are non-refundable except as required by law or as specified in our refund policy. We may change our pricing with 30 days' notice to existing subscribers. Your subscription will automatically renew unless you cancel before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Cancellation and Termination</h2>
              <p className="text-xl leading-relaxed">
                You may cancel your account at any time through your account settings or by contacting our support team. We may terminate or suspend your account if you violate these terms or engage in activities that harm our service or other users. Upon termination, your right to use FoxBeep will cease immediately, though certain provisions of these terms will survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Data and Privacy</h2>
              <p className="text-xl leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using FoxBeep, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Disclaimers and Limitations</h2>
              <p className="text-xl leading-relaxed">
                FoxBeep is provided "as is" without warranties of any kind. We do not guarantee that our service will be uninterrupted, error-free, or completely secure. To the fullest extent permitted by law, we disclaim all warranties and limit our liability for any damages arising from your use of our service. Some jurisdictions may not allow these limitations.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Dispute Resolution</h2>
              <p className="text-xl leading-relaxed">
                If you have any concerns or disputes regarding our service, we encourage you to contact us first to seek a resolution. Any legal disputes will be resolved through binding arbitration rather than in court, except where prohibited by law. These terms are governed by the laws of the jurisdiction where FoxBeep operates.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6">Changes to Terms</h2>
              <p className="text-xl leading-relaxed">
                We may update these Terms and Conditions from time to time to reflect changes in our service, legal requirements, or business practices. We will notify you of significant changes by email or through our service. Your continued use of FoxBeep after changes take effect constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Questions About These Terms</h2>
              <p className="text-xl leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions or need clarification on any provision, please don't hesitate to reach out.
              </p>
              <div className="text-xl">
                <p className="mb-2">Support: support@foxbeep.com</p>
                <p className="mb-2">Website: www.foxbeep.com</p>
                <p>We typically respond to legal inquiries within 72 hours</p>
              </div>
            </section>

          </div>
          
        </div>
      </div>
    </>
  );
}