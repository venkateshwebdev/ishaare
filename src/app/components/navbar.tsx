import Image from "next/image";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-[4%] py-[2%] relative">
            <Image src={"/Ishaare.com.png"} height={100} width={100} alt='isharee' />
            <div className="flex ">
                {/* <Image src={"/Group.png"} className="" height={20} width={20} alt="" />
                <Image src={"/Icon.png"} className="" height={20} width={20} alt="" />
                <Image src={"/Notification.png"} className="" height={20} width={20} alt="" /> */}
            </div>
        </div>
    )
}

export default Navbar