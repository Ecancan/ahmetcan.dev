import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import MainHeader from '@/components/header/main-header/MainHeader';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
