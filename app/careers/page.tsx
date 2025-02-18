export default function CareersPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Join Our Team</h1>
        <p className="font-vietnam text-lg text-gray-600 max-w-2xl mx-auto">
          Be part of a passionate team dedicated to sharing authentic Vietnamese cuisine.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="font-playfair text-2xl">Why Work With Us</h2>
            <ul className="space-y-4 text-gray-600">
              <li>Competitive compensation</li>
              <li>Flexible scheduling</li>
              <li>Health benefits</li>
              <li>Career growth opportunities</li>
              <li>Staff meals</li>
              <li>Professional development</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-playfair text-2xl">Current Openings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-vietnam font-medium">Line Cook</h3>
                <p className="text-gray-600">Full-time, Evening shifts</p>
              </div>
              <div>
                <h3 className="font-vietnam font-medium">Server</h3>
                <p className="text-gray-600">Part-time & Full-time positions</p>
              </div>
              <div>
                <h3 className="font-vietnam font-medium">Host/Hostess</h3>
                <p className="text-gray-600">Part-time, Weekend availability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-[--color-primary]/5 rounded-lg">
          <h2 className="font-playfair text-2xl mb-4">Apply Now</h2>
          <p className="text-gray-600 mb-6">
            Send your resume and cover letter to:
          </p>
          <p className="font-vietnam">careers@nha-hang-viet.com</p>
        </div>
      </div>
    </div>
  );
} 