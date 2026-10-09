export default function BlogLoading() {
  return (
    <div className="bg-cream pt-16 pb-24">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-5 w-40 rounded bg-border" />
          <div className="mx-auto h-10 w-56 rounded bg-border" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-2xl border border-border bg-white">
              <div className="aspect-[16/10] bg-border" />
              <div className="space-y-3 p-6">
                <div className="h-3 w-24 rounded bg-border" />
                <div className="h-5 w-4/5 rounded bg-border" />
                <div className="h-3 w-full rounded bg-border" />
                <div className="h-3 w-2/3 rounded bg-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}