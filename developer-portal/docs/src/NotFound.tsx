import { Button, Head, Link } from "zudoku/components";

export const NotFound = () => {
  return (
    <section className="flex items-center justify-center py-20 px-4">
      <Head>
        <title>Page Not Found - 404 | Mojaloop</title>
      </Head>
      <div className="text-center max-w-lg mx-auto">
        <p className="text-7xl font-extrabold text-primary mb-3 tracking-tight">404</p>
        <h1 className="text-3xl font-bold mb-4 tracking-tight">
          Looks like you&apos;re out of the loop!
        </h1>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild>
            <Link to="/introduction">Back to Introduction</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/technical-overview">Explore Architecture</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
