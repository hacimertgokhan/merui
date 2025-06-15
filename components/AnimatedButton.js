"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MotionLink = motion(Link);

const AnimatedButton = ({ href, label, icon, color = 'primary', variant = 'flat', className }) => {
    const colorStyles = {
        primary: {
            flat: 'bg-[#3b82f6]/90 text-[#f5f5f5] hover:bg-[#3b82f6]',
            ghost: 'bg-transparent text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/5',
            fade: 'bg-[#3b82f6]/20 text-[#3b82f6] hover:bg-[#3b82f6]/30',
            bordered: 'bg-transparent text-[#3b82f6] border border-[#3b82f6] hover:bg-[#3b82f6]/10',
        },
        danger: {
            flat: 'bg-[#ef4444]/90 text-[#f5f5f5] hover:bg-[#ef4444]',
            ghost: 'bg-transparent text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/5',
            fade: 'bg-[#ef4444]/20 text-[#ef4444] hover:bg-[#ef4444]/30',
            bordered: 'bg-transparent text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444]/10',
        },
        warning: {
            flat: 'bg-[#f59e0b]/90 text-[#f5f5f5] hover:bg-[#f59e0b]',
            ghost: 'bg-transparent text-[#f59e0b] border border-[#f59e0b]/50 hover:bg-[#f59e0b]/5',
            fade: 'bg-[#f59e0b]/20 text-[#f59e0b] hover:bg-[#f59e0b]/30',
            bordered: 'bg-transparent text-[#f59e0b] border border-[#f59e0b] hover:bg-[#f59e0b]/10',
        },
        success: {
            flat: 'bg-[#10b981]/90 text-[#f5f5f5] hover:bg-[#10b981]',
            ghost: 'bg-transparent text-[#10b981] border border-[#10b981]/50 hover:bg-[#10b981]/5',
            fade: 'bg-[#10b981]/20 text-[#10b981] hover:bg-[#10b981]/30',
            bordered: 'bg-transparent text-[#10b981] border border-[#10b981] hover:bg-[#10b981]/10',
        },
    };

    const iconVariants = {
        initial: { x: 0 },
        hover: { x: -2, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    const labelVariants = {
        initial: {
            opacity: 0,
            width: 0,
            x: 8,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
        hover: {
            opacity: 1,
            width: 'auto',
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                delay: 0.1,
            },
        },
    };

    return (
        <MotionLink
            href={href}
            className={cn(
                'flex flex-row w-fit items-center justify-start py-2 px-3 rounded-xl overflow-hidden',
                colorStyles[color][variant],
                className
            )}
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            <motion.div className={"translate-x-[3px]"} variants={iconVariants}>
                {icon ? icon : "M"}
            </motion.div>
            <motion.p
                variants={labelVariants}
                className="whitespace-nowrap text-sm leading-tight ml-1.5"
            >
                {label}
            </motion.p>
        </MotionLink>
    );
};

AnimatedButton.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'danger', 'warning', 'success']),
    variant: PropTypes.oneOf(['flat', 'ghost', 'fade', 'bordered']),
    className: PropTypes.string,
};

AnimatedButton.defaultProps = {
    color: 'primary',
    variant: 'flat',
    className: '',
    icon: null,
};

export default AnimatedButton;