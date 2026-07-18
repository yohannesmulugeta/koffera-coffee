export default function DemoNotice({ children }) {
  return (
    <aside className="demo-notice" aria-label="Demo content notice">
      <span aria-hidden="true">i</span>
      <p>{children}</p>
    </aside>
  );
}
