import Image from 'next/image';
import Link from 'next/link';

export function Logo({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}`} className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/92 p-2.5 shadow-soft backdrop-blur">
      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
        <Image src="/logo-karpan.png" alt="Karpan Climate Service" fill className="object-contain" priority />
      </div>
    </Link>
  );
}
