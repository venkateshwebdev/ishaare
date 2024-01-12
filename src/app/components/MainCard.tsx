import Image from "next/image";
import { kurle } from "../fonts";

const MainCard = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-[67vh] max-md:h-full relative w-full flex items-center justify-center bg-[#FFECE4] max-md:bg-transparent">
            <div className="justify-self-end absolute right-[80px] flex flex-col text-center justify-center max-md:hidden">
                <Image src="/pinkCard.svg" height={238} width={190} alt="" className="" />
                <div className="absolute h-full px-5 py-6 pt-[38px] top-0 flex items-center justify-between flex-col">
                    <div className={`${kurle.className} text-[17px] text-white`} >
                        Click uncover
                        button to explore your prospect</div>
                    <Image src="/cardflowers.svg" className="h-full w-full" height={56} width={148} alt="" />
                </div>
            </div>

            <div className="h-[80vh] max-md:h-full  max-md:relative absolute rounded-[80px] w-[48%] max-md:w-full  border-[6px] border-[#DED9D3] max-md:border-none max-w-[729px] bg-[#ffffff] overflow-hidden">
                <Image src="/flowers.svg" className="w-full max-md:hidden"  height={100} width={100} alt=""  />
                <div className="absolute h-full w-full flex top-0 flex-col text-center items-center px-[79px] max-md:px-5">
                    <Image src="/top.svg" className="max-md:hidden" height={200} width={140} alt="" />
                    <div className="font-bold pt-3 z-40 text-[24px] max-md:pt-6 text-transparent bg-gradient-to-r from-rose-500 to-amber-400 bg-clip-text" >Namaste Nandip</div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainCard;