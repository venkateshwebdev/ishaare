"use client";
import Image from "next/image";
import { abhaya } from "../fonts";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
const MatchCard = () => {
    const searchParams = useSearchParams()
    const params = searchParams.get("s")
    const [uncover, setUncover] = useState(true)
    return (
        <div className={`max-h-[250px] max-md:h-[149px] flex relative w-full rounded-[20px] border-[1.5px] border-[#EE9813] shadow-md transition-all duration-200 ${uncover ? "bg-[#FAF3DC]" : "bg-[#FFdfd1]"}`}  >
            {params == "received" && <div className="after:content-[''] absolute right-0 -top-[32px] rounded-[12px] rounded-b-none bg-[#4cbebe] h-[48px] w-[197px] after:text-red-500 text-white text-[14px] flex items-center justify-center"> <Image src="/heart-fill.svg" alt="" height={20} width={20} /> Vidhi loved your profile</div>
            }            <div className={`h-full w-[38%] max-md:w-[47%] rounded-[20px]  ${uncover ? "bg-[#fffcf1]" : "bg-[#ffeee7]"} relative overflow-hidden`}>
                <Image className="object-cover h-full w-[202px] max-md:w-[127px] absolute" src="/Golden Farem 1.svg" alt="" width={202} height={240} />
                <div className="h-full p-4 max-md:p-1 relative flex  flex-col items-center justify-center">
                    <Image className="h-full p-3 max-md:p-2" src="/Vector.png" alt="" fill={true} />
                    <div className="z-30  text-center text-[12px] max-md:text-[8px] flex flex-col items-center justify-center">
                        <div className={`text-[20px] max-md:text-[14px] text-[#6b4500] font-semibold ${abhaya.className}`}>Vidhi S.</div>
                        <div className="flex items-center justify-center gap-2 text-[14px] max-md:text-[10px]">
                            <div className="flex items-center gap-1 "><Image src="/Group 427322305.svg" alt="" height={12} width={12} />28</div>
                            <div className="flex items-center gap-1"> <Image src="/Group 427322304.svg" alt="" height={12} width={12} />Hindu</div>
                        </div>
                        <div className="flex items-center justify-center gap-1 w-full text-[14px] max-md:text-[10px]"> <Image src="/people.svg" alt="" height={12} width={12} />Punjabi</div>
                        <Image src="/Ellipse 302.svg" alt="" className="py-[3px] max-md:w-[83px] " height={0.5} width={132} />
                        <div>

                            <div className="flex items-center justify-center gap-1 w-full font-semibold"> <Image src="/Icon.svg" alt="" height={12} width={12} />Profession</div>
                            <div>
                                Software Developer
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-1 w-full font-semibold pt-1"> <Image src="/Group 427322330.svg" alt="" height={12} width={12} />Settling Down</div>
                            <div>
                                Within a year
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-[17px] px-[19px] z-30 flex flex-col gap-3 rounded-[20px]  ${uncover ? "bg-[#FAF3DC]" : "bg-[#FFdfd1]"}`}>
                <div className="flex w-full gap-[6px] text-xs max-md:text-[8px] items-end justify-end "><span>New Jersy</span>  <Image src="/usa.png" alt="" className="max-md:h-4 w-5" width={30} height={20} /> </div>
                <div className="bg-[#fff] border-[0.5px] rounded-[20px] border-[#c4a204] w-full px-3 flex flex-col py-1 gap-1">
                    <div className="text-[15px] max-md:text-[10px] text-[#6b4500] text-left">What matters to you the most in a partner?</div>
                    <div className="text-xs max-md:text-[8px] font-light text-[#626262] text-left">Honesty and long drives</div>
                </div>
                {!uncover && <div className="flex items-center justify-between px-2 text-[10px]" >
                    <div className="bg-[#FBC4AC20] border-2 border-[#DD9D81]  cursor-pointer self-center w-fit  px-[15px] max-md:px-[5px]  py-[5px] max-md:py-[2.5px] rounded-[50px] text-[#DD9D81] shadow-md" onClick={() => setUncover(true)}>Politely Deny</div>
                    <div className="bg-[#FF9061] border-2 border-[#FF9061] cursor-pointer self-center w-fit  px-[15px]   max-md:px-[5px]  py-[5px] max-md:py-[2.5px] rounded-[50px] text-white shadow-md">Send Interest</div>
                </div>}
                {uncover && <div className="bg-[#EFC325] cursor-pointer text-[10px] self-center w-fit  px-[15px]  py-[5px] max-md:py-[2.5px]  rounded-[50px] text-white shadow-md" onClick={() => setUncover(prev => !prev)}>Uncover</div>
                } </div>
        </div>
    );
}

export default MatchCard; 