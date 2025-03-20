const Icons = ({ icon, className }) => {
    const ICONS_LIST = {
        menuToggel: (
            <svg
                className="cursor-pointer"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 17.5V15H22V17.5H4ZM4 11.25V8.75H22V11.25H4ZM4 5V2.5H22V5H4Z"
                    fill="white"
                />
            </svg>
        ),
        facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="9D7F19" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
        )

    };
    return icon && ICONS_LIST[icon];
};

export default Icons;
