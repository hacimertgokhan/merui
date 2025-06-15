import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const Button = ({ label, color = 'primary', variant = 'flat', className, ...props }) => {
    const colorStyles = {
        primary: {
            flat: 'bg-[#3b82f6]/80 text-[#f5f5f5] hover:bg-[#3b82f6] active:bg-[#2563eb] shadow-sm hover:shadow-md',
            ghost: 'bg-transparent text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/5 active:bg-[#3b82f6]/10',
            fade: 'bg-[#3b82f6]/20 text-[#3b82f6] hover:bg-[#3b82f6]/30 active:bg-[#3b82f6]/40',
            bordered: 'bg-transparent text-[#3b82f6] border border-[#3b82f6] hover:bg-[#3b82f6]/10 active:bg-[#3b82f6]/20 shadow-sm hover:shadow-md',
        },
        danger: {
            flat: 'bg-[#ef4444]/80 text-[#f5f5f5] hover:bg-[#ef4444] active:bg-[#dc2626] shadow-sm hover:shadow-md',
            ghost: 'bg-transparent text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/5 active:bg-[#ef4444]/10',
            fade: 'bg-[#ef4444]/20 text-[#ef4444] hover:bg-[#ef4444]/30 active:bg-[#ef4444]/40',
            bordered: 'bg-transparent text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444]/10 active:bg-[#ef4444]/20 shadow-sm hover:shadow-md',
        },
        warning: {
            flat: 'bg-[#f59e0b]/80 text-[#f5f5f5] hover:bg-[#f59e0b] active:bg-[#d97706] shadow-sm hover:shadow-md',
            ghost: 'bg-transparent text-[#f59e0b] border border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 active:bg-[#f59e0b]/10',
            fade: 'bg-[#f59e0b]/20 text-[#f59e0b] hover:bg-[#f59e0b]/30 active:bg-[#f59e0b]/40',
            bordered: 'bg-transparent text-[#f59e0b] border border-[#f59e0b] hover:bg-[#f59e0b]/10 active:bg-[#f59e0b]/20 shadow-sm hover:shadow-md',
        },
        success: {
            flat: 'bg-[#10b981]/80 text-[#f5f5f5] hover:bg-[#10b981] active:bg-[#059669] shadow-sm hover:shadow-md',
            ghost: 'bg-transparent text-[#10b981] border border-[#10b981]/50 hover:bg-[#10b981]/5 active:bg-[#10b981]/10',
            fade: 'bg-[#10b981]/20 text-[#10b981] hover:bg-[#10b981]/30 active:bg-[#10b981]/40',
            bordered: 'bg-transparent text-[#10b981] border border-[#10b981] hover:bg-[#10b981]/10 active:bg-[#10b981]/20 shadow-sm hover:shadow-md',
        },
    };

    const baseStyles = 'text-sm rounded-lg cursor-pointer py-1.5 px-4 transition-all duration-300 ease-in-out';

    return (
        <button
            className={cn(className, baseStyles, colorStyles[color][variant])}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['primary', 'danger', 'warning', 'success']),
    variant: PropTypes.oneOf(['flat', 'ghost', 'fade', 'bordered']),
    className: PropTypes.string,
};

Button.defaultProps = {
    color: 'primary',
    variant: 'flat',
    className: '',
};

export default Button;