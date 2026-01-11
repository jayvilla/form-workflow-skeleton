import RequestForm from "@/components/RequestForm";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Create Request
        </h1>
        <div className="rounded-lg bg-white p-8 shadow">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}

