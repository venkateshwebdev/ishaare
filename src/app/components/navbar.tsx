import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";
import { VscBellDot } from "react-icons/vsc";
import { TiInfoLarge } from "react-icons/ti";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-[4%] py-[2%] relative">
            <Image src={"/Ishaare.com.png"} height={48} width={173} alt='isharee' />
            <div className="flex items-center justify-between gap-6 max-md:gap-3">
                <GiSettingsKnobs className="rotate-90 max-md:text-[24px] text-[32px] font-bold " />
                
                <TiInfoLarge className="text-[32px] max-md:text-[24px] font-bold" />
                <VscBellDot className="text-[32px] max-md:text-[24px] font-bold" />
                <div className="p-2 rounded-full border-[1px] border-[#EE9813] bg-[#FAF3DC]">NV</div>
            </div>
        </div>
    )
}

export default Navbar