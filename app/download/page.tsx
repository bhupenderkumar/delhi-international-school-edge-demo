export default function Download() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function DownloadPage() {
  return (
    <>
      <Head>
        <title>Download | Delhi International School Edge</title>
        <meta name="description" content="Download important documents and resources from Delhi International School Edge." />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Download</h1>
            <p className="page-subtitle">Download important documents and resources from Delhi International School Edge.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 download-card">
            <h3>Admission Form</h3>
            <p>Download the admission form for new students.</p>
            <Link href="/download/admission-form.pdf">
              <a className="btn btn-primary">Download Now</a>
            </Link>
          </div>
          <div className="col-md-3 download-card">
            <h3>Syllabus</h3>
            <p>Download the latest syllabus for all classes.</p>
            <Link href="/download/syllabus.pdf">
              <a className="btn btn-primary">Download Now</a>
            </Link>
          </div>
          <div className="col-md-3 download-card">
            <h3>Timetable</h3>
            <p>Download the latest timetable for all classes.</p>
            <Link href="/download/timetable.pdf">
              <a className="btn btn-primary">Download Now</a>
            </Link>
          </div>
          <div className="col-md-3 download-card">
            <h3>Results</h3>
            <p>Download the latest results for all classes.</p>
            <Link href="/download/results.pdf">
              <a className="btn btn-primary">Download Now</a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>Contact Us</h2>
            <p>Phone: +91 95999 64446</p>
            <p>Address: Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
```
    </section>
  );
}
