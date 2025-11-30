import React from 'react';

export const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
        <div className="w-full mx-auto">{children}</div>
    </section>
);