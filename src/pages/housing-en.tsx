import { Button } from "@/components/ui/button";
import { Home, Users, Check, X } from "lucide-react";
import Link from "next/link";

export default function HousingEn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header */}
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/housing-kr">한글</Link>
        </Button>
      </div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <Home className="text-3xl text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Housing Guide</h1>
        <p className="text-lg text-gray-600">
          Links to official UVA housing website and organized list of pros and
          cons
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Housing Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a
            href="https://housing.virginia.edu/incoming-undergraduates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                First-Year Students
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Housing options and resources for incoming First-Year Students
            </p>
          </a>

          <a
            href="https://housing.virginia.edu/incoming-transfers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                Transfer Students
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Housing options and resources for incoming Transfer Students
            </p>
          </a>

          <a
            href="https://housing.virginia.edu/returning-undergraduates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                Returning Students
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Housing options and resources for returning Students
            </p>
          </a>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            On-Grounds vs Off-Grounds Housing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dorms */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                On Grounds Housing
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  Pros
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Built-in community and social connections</li>
                  <li>• Various Dorm events</li>
                  <li>• Walking distance to campus</li>
                  <li>• Better Safety</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <X className="w-4 h-4" />
                  Cons
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Less privacy</li>
                  <li>• Shared bathrooms and kitchen (depending on dorms)</li>
                  <li>• Paid Laundry</li>
                  <li>• Limited storage space</li>
                </ul>
              </div>
            </div>

            {/* Off-Campus */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Off Grounds Housing
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  Pros
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• More independence and privacy</li>
                  <li>• Larger living spaces</li>
                  <li>• Cook your own meals</li>
                  <li>• Choose your roommates</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <X className="w-4 h-4" />
                  Cons
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Commute to campus (distance varies)</li>
                  <li>• Handle utilities and maintenance</li>
                  <li>• Need to furnish space</li>
                  <li>• Lease commitments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
