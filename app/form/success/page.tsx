export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-white p-8 shadow text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Request Submitted Successfully!
          </h1>
          <p className="mb-6 text-gray-600">
            Thank you for your submission. We'll get back to you soon.
          </p>
          <a
            href="/form"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Submit Another Request
          </a>
        </div>
      </div>
    </div>
  );
}

