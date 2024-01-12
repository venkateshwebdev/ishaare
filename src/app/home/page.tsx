"use client";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import MainCard from "../components/MainCard";
import MatchCard from "../components/MatchCard";
import SectionsBar from "../components/SectionsBar";
import { useSearchParams } from "next/navigation";
import MobileDec from "../components/MobileDec";
const Home = () => {
    const searchparams = useSearchParams()
    const params = searchparams.get("s")
    return (
        <div className="h-screen w-full relative bg-[#FDFDFD] pt-[3%] pb-[7%] overflow-hidden">
            <div className="flex flex-col max-md:flex-col-reverse">
                <SectionsBar />
                <Navbar />
                <MobileDec />
            </div>
            <Image src="/HATHI.png" className="absolute z-30 bottom-0 left-0 max-md:hidden" height={217} width={248} alt="" />
            <MainCard>
                <div className="text-[18px] max-md:text-[12px] text-[#7c3838]">{params ? "Woohoo! You’ve sparked someone’s heartfelt interest. " : "We have some amazing prospects for you today."}</div>
                <div className="flex items-center justify-between w-full ">
                    <div className="p-1"></div>
                    <div className="border-[1px] border-[#FECBB5] self-center flex rounded-[200px] overflow-hidden h-auto my-6 text-[#a0a0a0] text-[14px]">
                        <div className="bg-[#FF6A2B] rounded-[200px] relative px-3.5 py-1 text-white">New <div className="h-[5px] w-[5px] absolute top-1 right-2.5 rounded-full bg-white"></div></div>
                        <div className=" relative px-3.5 py-1">Sent <div className="h-[5px] w-[5px] absolute top-1 right-2.5  rounded-full bg-[#FF6A2B]"></div></div>
                    </div>
                    <div className="">{"(3)"}</div>
                </div>
                <div className="flex flex-col gap-[20px] w-full h-full overflow-y-auto pb-[24px]">
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />     
                </div>
            </MainCard>
        </div>
    )
}

export default Home;