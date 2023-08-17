import Image from "next/image";
import picMobile from '@/assets/images/illustration-sign-up-mobile.svg'

export default function Home() {
  return (
    <section className="place-items-start grid grid-cols-1 h-screen">
      <Image src={picMobile} alt="mobile picture" className="w-full max-w-full" />
      <h1 className="font-bold text-4xl">Stay updated!</h1>
      <p>Join 60,000+ product managers receving monthly updates on:
      </p>
      <ul>
        <li>
          Product discovery and building what matters
        </li>
        <li>
          Measuring to ensure updates are a success
        </li>
        <li>
          And much more
        </li>
      </ul>
      <form>
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </form>
    </section>
  )
}
