"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
    const params = useParams()
    const router = useRouter()
    return (
        <div className='flex-col'>
            {params.slug}
            <button onClick={()=>{router.push('/dashboard')}} className='bg-red-500 text-white rounded-2xl p-2'>
                click me
            </button>
        </div>
    )
}

export default page
