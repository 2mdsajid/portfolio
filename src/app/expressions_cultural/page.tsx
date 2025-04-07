import Image from "next/image";

export default function CulturalFestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-pink-700 drop-shadow-md">
          Cultural Fest 2025
        </h1>
        <p className="text-lg text-pink-600 mt-2">
          Organized by Nepal Manipal College of Medical Sciences
        </p>
      </div>

      <div className="max-w-4xl w-full rounded-2xl shadow-lg border-2 border-pink-300 bg-white">
        <div className="p-4 md:p-8">
          <div className="rounded-xl overflow-hidden mb-6">
            <Image
              src="/cultural.jpeg"
              alt="Cultural Fest Banner"
              width={1200}
              height={800}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          <div className="space-y-4 text-pink-800">
            <h2 className="text-2xl font-bold mb-2">Events:</h2>
            <div className="h-1 bg-pink-400 w-full rounded-full mb-4"></div>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Solo Dance</li>
              <li>Group Dance</li>
              <li>Solo Singing</li>
              <li>Group Singing / Band Performance</li>
              <li>Fashion Show / Skit / Drama</li>
              <li>Standup Comedy</li>
            </ul>

            <div className="mt-6 text-center">
              <a
                href="https://chat.whatsapp.com/IkARZaNuTsUD57esev4uVF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 text-lg rounded-full shadow-md">
                  Join Now
                </button>
              </a>
              <a href="https://www.instagram.com/expressions_2025/">
                  <p className="text-sm text-pink-700 mt-1">
                    Follow for more: <span className="font-semibold">@expressions_2025</span>
                  </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
