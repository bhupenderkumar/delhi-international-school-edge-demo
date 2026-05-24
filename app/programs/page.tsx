export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Delhi International School Edge | Programs</title>
        <meta name="description" content="Delhi International School Edge Programs" />
      </Head>
      <div className="container">
        <h1>Programs</h1>
        <p>Explore our range of programs designed to unlock the full potential of our students.</p>

        <h2>Curriculum</h2>
        <p>Our curriculum is designed to foster a love of learning, and to equip students with the skills and knowledge they need to succeed in an ever-changing world.</p>

        <h2>Subjects</h2>
        <ul>
          <li>
            <Link href="/program/subject/mathematics">
              <a>Mathematics</a>
            </Link>
          </li>
          <li>
            <Link href="/program/subject/science">
              <a>Science</a>
            </Link>
          </li>
          <li>
            <Link href="/program/subject/english">
              <a>English</a>
            </Link>
          </li>
          <li>
            <Link href="/program/subject/hindi">
              <a>Hindi</a>
            </Link>
          </li>
        </ul>

        <h2>Extracurricular Activities</h2>
        <ul>
          <li>
            <Link href="/program/activity/sports">
              <a>Sports</a>
            </Link>
          </li>
          <li>
            <Link href="/program/activity/music">
              <a>Music</a>
            </Link>
          </li>
          <li>
            <Link href="/program/activity/arts">
              <a>Arts</a>
            </Link>
          </li>
          <li>
            <Link href="/program/activity/debating">
              <a>Debating</a>
            </Link>
          </li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For more information about our programs, please contact us at:
          <br />
          Phone: +91 95999 64446
          <br />
          Address: Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India
        </p>
      </div>
    </>
  );
}

export default ProgramsPage;
```

This JSX code generates a basic page component for the Programs page of the Delhi International School Edge website. It includes a title, meta description, and a content section with headers, paragraphs, and links to other pages.

You can customize this code to fit your specific needs and add more features as required.
    </section>
  );
}
