'use client';
import link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarItem() {
   const genre = usePathname().split('/')[2]; 
  return (
    <div>
      <link className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
         href={'/top/${param}'}
        >
         {title}
      </link>
    </div>
  );
}
