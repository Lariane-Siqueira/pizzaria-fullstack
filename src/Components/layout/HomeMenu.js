import React from 'react'
import Image from "next/image"
import MenuItem from './menu/MenuItem'
import SectionHeaders from './SectionHeaders'

export default function HomeMenu() {
    return (
        <>
            <section>
                <div className='absolute left-0 right-0 w-full justify-start'>
                    <div className='absolute left-0 -top-[140px] text-left -z-10'>
                        <Image src={"/sallad1.png"} width={109} height={109} alt={"salad"} />
                    </div>
                    <div className='h-48 absolute -top-[140px] right-0 -z-10'>
                        <Image src={"/sallad2.png"} width={107} height={195} alt={"salad"} />
                    </div>
                </div>
                <div className='text-center mb-4'>
                    <SectionHeaders
                        subHeader={"Check out"}
                        mainHeader={"Menu"}
                    />
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </section>
        </>
    )
}
