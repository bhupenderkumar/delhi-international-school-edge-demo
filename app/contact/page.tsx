export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Delhi International School Edge | Contact Us</title>
        <meta name="description" content="Get in touch with Delhi International School Edge" />
        <meta name="keywords" content="Delhi International School Edge, Contact Us, School in New Delhi" />
      </Head>

      <main className="container mx-auto p-4 pt-6 mt-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <h2 className="text-2xl font-bold mb-2">Address:</h2>
        <p>Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India</p>

        <h2 className="text-2xl font-bold mb-2">Phone:</h2>
        <p>+91 95999 64446</p>

        {/* Email is not available, so we'll leave it out for now */}

        <h2 className="text-2xl font-bold mb-2">Get in Touch:</h2>
        <p>If you have any questions or would like to schedule a tour, please don't hesitate to reach out to us.</p>

        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Map:</h2>
          <div className="aspect-w-16 aspect-h-9">
            <Image src="/map.jpg" alt="Map of Delhi International School Edge" width={800} height={400} />
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
```

This is a basic Next.js page component for the contact page of Delhi International School Edge. The page includes the school's address, phone number, and a map. The email is not available, so it's left out for now. You can customize the design and layout as per your requirements.
    </section>
  );
}
