"use client"

import {GrSend} from 'react-icons/gr';
export default function Email(){
    return(
        <div className='my-14 w-full flex justify-center flex-col text-center'>
            <div>
                <h1 className='text-5xl px-3 sm:text-7xl font-bold'>Don&apos;t miss anything!</h1>
            </div>
            <div className='my-16'>
                <div>
                    <input type="email" required placeholder='Your email' className='w-[350px] placeholder:text-black px-6 py-2 rounded-3xl border-2 transition-all hover:border-black outline-none bg-transparent'/>
                    <button className='relative -left-10 text-2xl top-1'><GrSend/></button>
                </div>
                <div>
                    <p className='px-5 my-4 text-xl'>Sign up to get the latest on new releases and more.</p>
                </div>
            </div>
        </div>
    )
}