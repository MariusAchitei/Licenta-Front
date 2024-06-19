export default function Container({ children }) {
  return (
    <div className="my-4 flex h-fit flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-md">
      {children}
    </div>
  );
}
