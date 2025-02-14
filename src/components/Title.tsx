import React from 'react';

interface TitleProps {
    children: React.ReactNode
}

export const Title = ({children}: TitleProps) => (
    <h3 className="text-lg font-bold">{children}</h3>
)