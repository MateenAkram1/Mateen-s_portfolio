import Typewriter from "typewriter-effect";

export function Type({ strings }: { strings: string[] }) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
