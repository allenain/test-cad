import styled from 'styled-components';
import Link from 'next/link';

const ContactButton = styled(Link)`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 177px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.3s ease-out;
        pointer-events: none;
    }

    &::before {
        left: 0;
        width: 100%;
        background-color: var(--dark);
        border-radius: 10px;
        z-index: -1;
        transform: scale(1, 1);
        transform-origin: center;
    }

    &::after {
        left: 50%;
        width: 0;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        transform: translateX(-50%);
        z-index: 1;
    }

    &:hover {
        color: var(--dark);

        &::before {
            transform: scale(0, 1);
        }

        &::after {
            width: 100%;
            border-color: var(--dark);
            transition-delay: 0.3s ;
        }
    }
`;

export default ContactButton;
