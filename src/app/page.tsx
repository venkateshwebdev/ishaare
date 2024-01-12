import Image from 'next/image'
export default function Home() {
  return (
    <main className="h-screen  bg-gray-100 w-full flex items-center justify-center">
      <Image src={"/Ishaare.png"} height={200} width={200} alt='isharee'/>
      <Image src={"/Mask group.svg"}  fill={true} alt="flowers" className="w-screen"/>
    </main>
  )
}
