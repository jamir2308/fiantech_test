import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Header from '@/components/Header';
import './../styles/globals.css';

const inter = Roboto({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "FinanTech - Soluciones Financieras",
  description: "Explora nuestros productos financieros: cuentas, tarjetas, fondos y seguros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <StyledComponentsRegistry>
          <Header />
          <main className="container mx-auto px-4 py-8 lg:py-12 bg-white">
            {children}
          </main>
          <footer className="text-center py-6 mt-10 border-t border-gray-200 text-sm text-gray-500 bg-white">
            © {new Date().getFullYear()} FinanTech. Todos los derechos reservados.
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}