interface BannerProps {
  type: "error" | "success";
  message: string;
}

export default function Banner({ type, message }: BannerProps) {
  const styles =
    type === "error"
      ? "bg-red-50 border-red-200 text-red-800"
      : "bg-green-50 border-green-200 text-green-800";

  return (
    <div
      className={`rounded-md border p-4 ${styles}`}
      role={type === "error" ? "alert" : "status"}
    >
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

