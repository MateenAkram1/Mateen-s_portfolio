export function Preloader({ load }: { load: boolean }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}
