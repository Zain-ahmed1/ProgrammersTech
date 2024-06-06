import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../../../Data/styles';

const CustomSelect = ({ options, placeholder, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option.value);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFocus = () => {
        setTimeout(() => setIsOpen(true), 0);
    };

    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 200);
    };

    return (
        <div
            className={`css relative text-sm rounded-lg block w-full bg-gray-700 border placeholder-gray-400 text-white outline-none hover:border-gray-500 ${isOpen ? "border-gray-500" : "border-transparent"}`}
            ref={dropdownRef}
        >
            <div
                className={`${selectedOption ? "text-white" : "text-gray-400"} flex justify-between items-center outline-none focus:border-gray-500 px-6 h-full w-full py-4`}
                tabIndex={0}
                onMouseDown={() => setIsOpen(!isOpen)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" className={`${styles.transition_nomral} text-gray-400 ${isOpen ? "-rotate-90" : "rotate-90"}`}>
                    <path fill="currentColor" d="M8 5.14v14l11-7z"></path>
                </svg>
            </div>
            <div className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} ${styles.transition_nomral} absolute border border-gray-500 px-3 py-2 left-0 top-[115%] rounded-md w-full bg-gray-700`}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`w-full py-3 text-sm hover:bg-gray-500 px-3 rounded-md cursor-pointer ${styles.transition_nomral}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelect(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomSelect;
