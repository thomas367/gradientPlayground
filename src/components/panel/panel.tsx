import React from 'react';
import * as Styled from './styles';

interface PanelProps {
    title: string;
    children: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
}

export function Panel({ title, children, action, className }: PanelProps): React.JSX.Element {
    return (
        <Styled.Wrapper className={className}>
            <Styled.Header>
                <Styled.Title>{title}</Styled.Title>
                {action}
            </Styled.Header>

            {children}
        </Styled.Wrapper>
    );
}
