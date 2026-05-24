export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

const ProgramsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Programs | Delhi International School Edge</title>
        <meta name="description" content="Delhi International School Edge Programs" />
      </Head>

      <header className="bg-gray-800 text-white p-4 mb-4">
        <h1 className="text-3xl font-bold">Programs</h1>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <section className="bg-gray-100 p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">Curriculum Overview</h2>
          <p>
            Delhi International School Edge follows the IB PYP, MYP, and IBDP curricula to provide a well-rounded education to our students.
          </p>
        </section>

        <section className="bg-gray-100 p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">Programs Offered</h2>
          <ul>
            <li>IB PYP (Primary Years Programme)</li>
            <li>IB MYP (Middle Years Programme)</li>
            <li>IBDP (International Baccalaureate Diploma Programme)</li>
            <li>Co-Curricular Activities (CCA)</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">Extracurricular Activities</h2>
          <ul>
            <li>Sports (Cricket, Football, Basketball, etc.)</li>
            <li>Cultural Events (Music, Dance, Art, etc.)</li>
            <li>Debating and Public Speaking</li>
            <li>School Clubs (Robotics, Coding, etc.)</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2023 Delhi International School Edge</p>
        <p>Phone: +91 95999 64446</p>
        <p>Address: Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India</p>
      </footer>
    </div>
  );
};

export default ProgramsPage;
```

This JSX code generates a simple webpage for the programs page of Delhi International School Edge. It includes a header with a title, a main section with three sub-sections for curriculum overview, programs offered, and extracurricular activities, and a footer with contact information.
    </section>
  );
}
