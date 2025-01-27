import { random128String, generatePrng } from "@/lib/random";
import Link from "next/link";

const id = random128String(generatePrng(Date.now() / 8640000))

export function RandomEntry({ className = "" }) {
    return <div className={className}>
        <p>Today's Random Entry</p>
        <Link
          href={`/entry/${id}`}>
            {id}
        </Link>
    </div>;
}