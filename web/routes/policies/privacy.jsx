export default function Privacy() {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="container max-w-screen-md mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">1. Information We Collect</h2>
          <p className="mb-3">We collect information that you provide directly to us when using the Bingo app, including:</p>
          <ul className="mb-3 ml-6 list-disc">
            <li>Account information (email, name)</li>
            <li>Buzzword submissions</li>
            <li>Usage data and interactions with the app</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="mb-3">We use the collected information to:</p>
          <ul className="mb-3 ml-6 list-disc">
            <li>Provide and maintain the Bingo app</li>
            <li>Track and display buzzword submissions</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">3. Data Security</h2>
          <p className="mb-3">
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">4. Contact Us</h2>
          <p className="mb-3">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>

        <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
