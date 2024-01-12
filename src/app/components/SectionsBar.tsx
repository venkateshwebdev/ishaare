"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const SectionsBar = () => {
    const searchParams = useSearchParams()
    const params = searchParams.get("s")
    return (
        <div className="w-full  text-[#959595] px-[35%] max-md:px-5 text-[14px] max-md:pt-[26px]">
            <div className="items-center flex justify-between max-md:border-2 max-md:border-[#FFD2E1] max-md:rounded-[200px]">
            <Link href="/home" className={`${!params&&"bg-[#FF709D] text-white"} rounded-[200px] relative px-3 py-1 `}>New Profiles<div className="h-[20px] text-white w-[20px] absolute -top-2 border-[1px] right-0 rounded-full bg-[#efc325] flex items-center justify-center text-sm">1</div></Link>
            <Link  href="/home?s=received" className={`${params==="received"&&"bg-[#FF709D] text-white"} rounded-[200px] relative px-3 py-1 `}>Received<div className="h-[20px] text-white w-[20px] absolute -top-2 border-[1px] right-0 rounded-full bg-[#efc325] flex items-center justify-center text-sm">2</div></Link>
            <Link  href="/home" className=" rounded-[200px] relative px-3 py-1 ">Matches<div className="h-[20px] text-white w-[20px] absolute -top-2 border-[1px] right-0 rounded-full bg-[#efc325] flex items-center justify-center text-sm">3</div></Link>
            <Link   href="/home" className=" rounded-[200px] relative px-3 py-1 ">Chat<div className="h-[20px] text-white w-[20px] absolute -top-2 border-[1px] right-0 rounded-full bg-[#efc325] flex items-center justify-center text-sm">4</div></Link>
            </div>

        </div>
    );
}

export default SectionsBar;