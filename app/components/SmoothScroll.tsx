"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import React, { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}