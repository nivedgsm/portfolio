export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">

        {/* LOGO */}
        <a
          href="#"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
          "
        >
          
        </a>

        {/* CTA */}
    <button
  data-cal-link="nived-gsm-gi1ag2/30-minute-discovery-call"
  data-cal-config='{"theme":"dark"}'
  className="
    rounded-full
    bg-lime-400
    px-6
    py-3
    text-sm
    font-medium
    text-black
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(163,230,53,0.35)]
    md:px-8
    md:py-4
    md:text-base
  "
>
  Book a Call
</button>

      </div>

    </header>
  );
}