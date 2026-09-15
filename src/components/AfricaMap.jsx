export default function AfricaMap() {
    return (
        <div className="relative w-full h-[380px] bg-[#0A1931] rounded-2xl overflow-hidden border border-[#C5A880]/20 flex items-center justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A880 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* Africa SVG */}
            <svg viewBox="0 0 400 500" className="w-[85%] h-[85%]">
                {/* Africa continent silhouette - simplified */}
                <path
                    d="M190 20 L210 22 L230 30 L250 45 L265 70 L275 100 L280 130 L278 160 L270 185 L260 210 L255 240 L250 270 L245 300 L235 330 L220 360 L205 385 L190 400 L175 385 L165 360 L150 330 L140 300 L135 270 L130 240 L125 210 L120 180 L125 150 L135 120 L150 90 L165 60 L180 35 Z"
                    fill="#102542"
                    stroke="#C5A880"
                    strokeWidth="1.5"
                    opacity="0.8"
                />
                {/* Highlighted Countries - Gold dots with pulse */}
                {/* Kenya - Main */}
                <g>
                    <circle cx="235" cy="245" r="14" fill="#C5A880" opacity="0.2" className="animate-ping" />
                    <circle cx="235" cy="245" r="6" fill="#C5A880" stroke="white" strokeWidth="2" />
                    <text x="252" y="250" fill="#C5A880" fontSize="10" fontWeight="900">KENYA</text>
                </g>
                {/* Tanzania */}
                <circle cx="232" cy="280" r="4" fill="#E6C99E" stroke="#0A1931" strokeWidth="1" />
                <text x="242" y="283" fill="white" fontSize="8">Tanzania</text>
                {/* Uganda */}
                <circle cx="222" cy="235" r="3.5" fill="#8B6F47" />
                <text x="180" y="233" fill="#9AA5B1" fontSize="7">Uganda</text>
                {/* Rwanda */}
                <circle cx="215" cy="250" r="3" fill="#8B6F47" />
                {/* Ethiopia */}
                <circle cx="250" cy="210" r="3.5" fill="#8B6F47" />
                <text x="260" y="208" fill="#9AA5B1" fontSize="7">Ethiopia</text>
                {/* DRC */}
                <circle cx="195" cy="270" r="3.5" fill="#8B6F47" />
                <text x="135" y="273" fill="#9AA5B1" fontSize="7">DRC</text>
                {/* Zambia */}
                <circle cx="210" cy="315" r="3" fill="#8B6F47" />
                {/* South Africa */}
                <circle cx="210" cy="380" r="3.5" fill="#8B6F47" />
                <text x="215" y="395" fill="#9AA5B1" fontSize="7">S. Africa</text>
                {/* Nigeria */}
                <circle cx="150" cy="210" r="3" fill="#8B6F47" />
                {/* Ghana */}
                <circle cx="130" cy="220" r="3" fill="#8B6F47" />
            </svg>

            {/* Stats overlay bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-between bg-[#060D1F]/90 backdrop-blur rounded-xl p-3 border border-[#C5A880]/20">
                <div><p className="text-[#C5A880] font-black text-sm">10+</p><p className="text-white text-[9px]">COUNTRIES</p></div>
                <div className="w-px bg-white/10"></div>
                <div><p className="text-[#C5A880] font-black text-sm">200+</p><p className="text-white text-[9px]">PARTNERS</p></div>
                <div className="w-px bg-white/10"></div>
                <div><p className="text-[#C5A880] font-black text-sm">24/7</p><p className="text-white text-[9px]">SUPPORT</p></div>
            </div>
        </div>
    );
}