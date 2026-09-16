import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-32 text-center">
      <p className="font-heading text-7xl font-bold text-navy">404</p>
      <h1 className="text-2xl font-semibold text-navy-dark">
        Page not found
      </h1>
      <p className="max-w-md text-navy-dark/70">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Button to="/" variant="primary">
        <ArrowLeft size={16} /> Back to Home
      </Button>
    </section>
  );
}
