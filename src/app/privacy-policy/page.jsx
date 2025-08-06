import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-spring-wood py-6 sm:py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* Back Button */}

        {/* Page Title */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center text-white py-6 sm:py-8 font-mackinac bg-primary">
          Privacy Policy
        </h1>

        {/* Content Section */}
        <div className="border border-gray-300 rounded-b-xl p-5 sm:p-8 lg:p-10 space-y-10 bg-white">
          {/* Effective Date */}
          <section>
            <p className="text-sm sm:text-lg text-gray-600 font-medium mb-4 leading-relaxed">
              <strong className="text-black">Effective Date:</strong> June 3,
              2025
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed mt-3">
              Health Compass, LLC (“we,” “our,” or “us”) respects your privacy.
              This Privacy Policy explains how we collect, use, store, and share
              your personal information, and the choices you have about that
              data when you use our platform.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-800 font-inter space-y-2">
              <li>
                <strong className="text-[15px]">Personal Information:</strong>{" "}
                <span className="text-gray-600 font-medium">
                  Name, email, date of birth, contact info
                </span>
              </li>
              <li>
                <strong className="text-[15px]">Health Information:</strong>{" "}
                <span className="text-gray-600 font-medium">
                  Self-reported symptoms, wellness goals, check-in responses,
                  and data entered by you or a caregiver
                </span>
              </li>
              <li>
                <strong className="text-[15px]">Usage Data:</strong>{" "}
                <span className="text-gray-600 font-medium">
                  Log data, device type, browser, session duration, and click
                  actions
                </span>
              </li>
              <li>
                <strong className="text-[15px]">Caregiver-Linked Info:</strong>{" "}
                <span className="text-gray-600 font-medium">
                  If you invite a caregiver or are linked as one, limited
                  profile and access details may be shared as permitted
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-600 font-medium font-inter space-y-2">
              <li>Provide and improve our services</li>
              <li>Personalize your dashboard and suggestions</li>
              <li>Support communication between users and caregivers</li>
              <li>
                Deliver wellness insights and AI-driven coaching (if enabled)
              </li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              3. How We Share Your Information
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter mb-3 leading-relaxed">
              We do not sell your personal data. We may share your information:
            </p>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-600 font-medium font-inter space-y-2">
              <li>With caregivers or linked users, if you consent</li>
              <li>
                With service providers (e.g., analytics, hosting) under strict
                confidentiality agreements
              </li>
              <li>As required by law (e.g., subpoenas, legal requests)</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed mt-3">
              You are always in control of who has access to your account and
              what level of visibility they have.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              4. Data Retention and Security
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed">
              We retain your information for as long as necessary to provide
              services and meet our legal obligations. All data is encrypted and
              access is restricted to authorized personnel.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              5. Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-600 font-medium font-inter space-y-2">
              <li>View, update, or delete your information</li>
              <li>Change caregiver access or unlink from shared dashboards</li>
              <li>Opt out of AI-based coaching (if available)</li>
              <li>Request a copy of your data by contacting us</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              6. Children’s Privacy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed">
              Our services are not directed to children under 13 without
              verified parental or guardian consent. If we learn that personal
              information has been collected from a child without proper
              authorization, we will take steps to delete it.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              7. Updates to This Policy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed">
              We may update this policy from time to time. We will notify you of
              any significant changes and update the effective date above.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              8. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed">
              For questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed mt-2">
              <strong className="text-gray-600 font-medium">
                Health Compass, LLC
              </strong>
              <br />
              1968 S Coast Hwy PMB 2604
              <br />
              Laguna Beach, CA 92651-3681
              <br />
              USA
              <br />
              <br />
              <span className="text-gray-600 font-medium">Email:</span>{" "}
              <a
                href="mailto:ovi@gohealthcompass.com"
                className="text-teal-700 hover:underline"
              >
                ovi@gohealthcompass.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
