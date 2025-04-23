'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import { ButtonProps, StyledButtonTransientProps } from '@/types/componetsProps';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const sizeStyles = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  `,
};

const variantStyles = {
  primary: css`
    background-color: #3b82f6;
    color: white;
    border: 1px solid transparent;
    &:hover {
      background-color: #1d4ed8;
    }
    &:focus {
       box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  `,
  secondary: css`
    background-color: #e5e7eb;
    color: #1f2937;
    border: 1px solid transparent;
     &:hover {
      background-color: #d1d5db;
    }
     &:focus {
       box-shadow: 0 0 0 3px rgba(209, 213, 219, 0.5);
    }
  `,
  outline: css`
    background-color: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
    &:hover {
      background-color: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
     &:focus {
       box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  `,
};

const StyledButton = styled.button<StyledButtonTransientProps>`
  ${baseStyles}
  ${({ $size = 'medium' }) => sizeStyles[$size]}
  ${({ $variant = 'primary' }) => variantStyles[$variant]}
`;

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', ...props }) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;