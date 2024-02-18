import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'ahmetcan.dev',
  description: 'you can start anywhere',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
