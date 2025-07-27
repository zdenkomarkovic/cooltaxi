"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  
  const breadcrumbMap = {
    '/': 'Početna',
    '/cenovnik': 'Cenovnik',
    '/blog': 'Blog',
  };

  // Ne prikazuj breadcrumb na početnoj stranici
  if (pathname === '/') {
    return null;
  }

  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ path: '/', label: 'Početna' }];
    
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      if (breadcrumbMap[currentPath]) {
        breadcrumbs.push({
          path: currentPath,
          label: breadcrumbMap[currentPath]
        });
      }
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4 bg-white border-b mt-[80px] lg:mt-[100px]">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-cool-green font-medium" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.path}
                className="hover:text-cool-green transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 