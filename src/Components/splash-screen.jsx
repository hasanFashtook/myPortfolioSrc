function SplashScreen() {
    return (
        <div className=' h-screen w-screen bg-white flex justify-center items-center'>
            <div className=' animate-pulse flex items-center justify-center flex-col gap-2'>
                <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#7d11f9" strokeWidth="2.4" strokeLinecap="round"></path>
                        <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="#7d11f9" strokeWidth="2.4" strokeLinecap="round"></path>
                        <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#7d11f9" strokeWidth="2.4" strokeLinecap="round"></path>
                    </g>
                </svg>
                <h1 className=' text-[#7d11f9] font-bold text-2xl'>
                   Hasan Fashtouk
                </h1>
            </div>
        </div>
    )
}

export default SplashScreen