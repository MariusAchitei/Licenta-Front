import DetailTabs from "./DetailTabs";

export default function DetailLayout({
  title,
  tabs,
  cardComponent,
  data,
  props = {},
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-lg">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-[80vw] px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-[80vw] py-6">
        {cardComponent}

        <DetailTabs tabs={tabs} data={data} />
      </main>
    </div>
  );
}
