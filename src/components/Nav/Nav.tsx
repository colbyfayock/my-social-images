import Link from 'next/link';
import Container from '@/components/Container';

const Nav = () => {
  return (
    <nav>
      <Container className="py-16">
        <p>
          <Link href="/" className="text-4xl font-bold text-slate-900 dark:text-white hover:text-slate-900 dark:hover:text-gray-100">
            My Products
          </Link>
        </p>
      </Container>
    </nav>
  )
}

export default Nav;