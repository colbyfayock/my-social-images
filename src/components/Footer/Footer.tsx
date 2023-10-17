import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 mt-20">
      <Container className="p-6">
        <p className="text-center text-slate-400">
          Built by <a className="underline font-medium text-inherit" href="https://twitter.com/colbyfayock">Colby Fayock</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;