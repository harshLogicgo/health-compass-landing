import React from "react";

const TermOfUse = () => {
  return (
    <div className="min-h-screen bg-spring-wood py-6 sm:py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center text-white py-6 sm:py-8 font-mackinac bg-primary">
          Terms of Use
        </h1>

        {/* Content Box */}
        <div className="bg-white border border-gray-300 rounded-b-xl overflow-hidden p-5 sm:p-8 lg:p-10">
          {/* Section */}
          <section className="mb-10">
            <p className="text-sm sm:text-lg text-gray-600 font-medium mb-4 leading-relaxed">
              <strong className="text-black">Effective Date:</strong> June 3,
              2025
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
              Welcome to Health Compass, LLC. By accessing or using our
              services, you agree to be bound by the terms outlined in this
              document. Please read them carefully. If you do not agree with
              these terms, please do not use our platform.
            </p>
          </section>

          {/* Reusable Section Template */}
          {[
            {
              title: "1. Overview",
              description:
                "These Terms of Use (“Terms”) govern your use of the Health Compass web and mobile applications, associated content, and services (collectively, the “Services”).",
            },
            {
              title: "2. Eligibility",
              description:
                "You must be at least 18 years old to create an account unless you are under the care of a legal guardian who manages your account. By using our services, you affirm that you are legally capable of entering into this agreement.",
            },
            {
              title: "3. User Responsibilities",
              description: (
                <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-600 font-medium space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Keep your login credentials secure</li>
                  <li>
                    Use the platform only for lawful, personal wellness and
                    caregiving purposes
                  </li>
                  <li>Respect the privacy and rights of others</li>
                </ul>
              ),
            },
            {
              title: "4. Acceptable Use",
              description: (
                <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-600 font-medium space-y-2">
                  <li>
                    Impersonate another person or misrepresent your identity
                  </li>
                  <li>Attempt to reverse-engineer or disrupt the platform</li>
                  <li>Upload harmful, false, or abusive content</li>
                  <li>
                    Use the Services in a way that infringes upon the rights of
                    others
                  </li>
                </ul>
              ),
            },
            {
              title: "5. Medical Disclaimer",
              description:
                "Health Compass does not provide medical advice. Our tools and coaching are for informational and wellness support only. They do not replace medical treatment, diagnosis, or professional care. You should always consult a qualified healthcare provider for medical advice or concerns.",
            },
            {
              title: "6. Termination",
              description:
                "We reserve the right to suspend or terminate your access to our Services at our discretion, especially in cases of misuse or violation of these Terms.",
            },
            {
              title: "7. Intellectual Property",
              description:
                "All content, design, and software associated with Health Compass is the property of Health Compass, LLC. You may not copy, distribute, or reuse any part of the Services without written permission.",
            },
            {
              title: "8. Modifications to These Terms",
              description:
                "We may update these Terms as our platform evolves. We will notify users of major changes and post the updated version with a new effective date.",
            },
            {
              title: "9. Governing Law",
              description:
                "These Terms are governed by the laws of the State of [Insert State], without regard to conflict of laws principles.",
            },
          ].map(({ title, description }, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
                {title}
              </h2>
              {typeof description === "string" ? (
                <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              ) : (
                description
              )}
            </section>
          ))}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              8. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              For questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium font-inter leading-relaxed mt-2">
              Health Compass, LLC
              <br />
              1968 S Coast Hwy PMB 2604
              <br />
              Laguna Beach, CA 92651-3681
              <br />
              USA
              <br />
              <br />
              Email:{" "}
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

export default TermOfUse;
