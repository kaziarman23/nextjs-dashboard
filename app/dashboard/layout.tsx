import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </div>
  );
}