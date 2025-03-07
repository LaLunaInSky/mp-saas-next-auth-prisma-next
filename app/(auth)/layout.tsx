import Logo from '@/components/logo';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center h-dvh">
      <Link href={'/'}>
        <Logo />
      </Link>
      {children}
    </section>
  );
}
