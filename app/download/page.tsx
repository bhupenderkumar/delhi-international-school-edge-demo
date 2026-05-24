export default function Download() {
  return (
    <section className="section">
      ```jsx
// pages/download.js

import Head from 'next/head';

function Download() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Delhi International School Edge - Download</title>
        <meta name="description" content="Download resources from Delhi International School Edge" />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-4">Downloads</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-4">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Curriculum</h2>
          <p>
            Click on the link below to download our curriculum.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Curriculum
          </a>
        </div>

        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Timetable</h2>
          <p>
            Click on the link below to download our timetable.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Timetable
          </a>
        </div>

        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Results</h2>
          <p>
            Click on the link below to download our results.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Results
          </a>
        </div>
      </div>

      <h2 className="text-lg font-bold mt-8">Contact Us</h2>
      <p>
        For any queries related to downloads, please contact us at +91 95999 64446.
      </p>
      <p>
        Address: Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India.
      </p>
    </div>
  );
}

export default Download;
```

This is a basic Next.js page component for the download page of Delhi International School Edge. The page includes a header with metadata, a grid of downloadable resources, and a contact section at the bottom. You can customize the content and styles according to your needs.
    </section>
  );
}
