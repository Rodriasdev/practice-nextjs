import './ui/global.css'
import { montserrat } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='text-center py-10 text-red-900'>
          <p>Hola</p>
        </footer>
      </body>
    </html>
  );
}
