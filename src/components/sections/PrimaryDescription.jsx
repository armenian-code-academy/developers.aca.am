export default function PrimaryDescription({ header, content }) {
  return (
    <main>
      <div className="mt-8">
        <div className="mb-2">
          <div>
            <h1 className="text-4xl text-textLight py-5">{header}</h1>
          </div>
        </div>
        <div>
          <p className="text-base text-textLight">{content}</p>
        </div>
      </div>
    </main>
  );
}
