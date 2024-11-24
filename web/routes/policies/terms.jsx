export default function Terms() {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="container max-w-screen-md mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mb-3">
            By accessing and using this Bingo app, you accept and agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">2. User Responsibilities</h2>
          <p className="mb-3">You agree to:</p>
          <ul className="mb-3 ml-6 list-disc">
            <li>Provide accurate information</li>
            <li>Use the service for lawful purposes only</li>
            <li>Not submit inappropriate or offensive content</li>
            <li>Respect other users' rights</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">3. Content Guidelines</h2>
          <p className="mb-3">
            All buzzword submissions must be appropriate and relevant. We reserve the right to remove
            any content that violates these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">4. Modifications</h2>
          <p className="mb-3">
            We reserve the right to modify these terms at any time. Continued use of the service
            constitutes acceptance of modified terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold">5. Limitation of Liability</h2>
          <p className="mb-3">
            The Bingo app is provided "as is" without warranties of any kind, either express or implied.
          </p>
        </section>

        <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
