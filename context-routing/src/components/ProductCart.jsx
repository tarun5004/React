import React from 'react'

const ProductCart = () => {
  return (
    <div className='w-fit rounded-xl bg-white p-3 m-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)]'>
      <div className='w-[200px] rounded-lg bg-[#fbfbfb] p-3'>
        <span className='inline-block rounded-sm bg-[#edd4ff] px-2 py-1 text-[11px] font-medium text-[#7b2cbf]'>
          Nearest Seller
        </span>

        <div className='flex h-[150px] items-center justify-center'>
          <div className='relative h-[118px] w-[130px]'>
            <div className='absolute left-1/2 top-0 h-[56px] w-[82px] -translate-x-1/2 rounded-t-full border-[10px] border-b-0 border-[#1d1e22]'></div>
            <div className='absolute left-[6px] top-[44px] h-[54px] w-[30px] rounded-[18px] bg-gradient-to-b from-[#2d2f35] to-[#111216] shadow-[inset_2px_0_5px_rgba(255,255,255,0.08)]'></div>
            <div className='absolute right-[6px] top-[44px] h-[54px] w-[30px] rounded-[18px] bg-gradient-to-b from-[#2d2f35] to-[#111216] shadow-[inset_-2px_0_5px_rgba(255,255,255,0.08)]'></div>
            <div className='absolute left-[18px] top-[38px] h-[44px] w-[16px] rounded-full bg-[#191a1f]'></div>
            <div className='absolute right-[18px] top-[38px] h-[44px] w-[16px] rounded-full bg-[#191a1f]'></div>
            <div className='absolute left-[3px] top-[53px] h-[28px] w-[26px] rounded-full bg-[#0d0e12]'></div>
            <div className='absolute right-[3px] top-[53px] h-[28px] w-[26px] rounded-full bg-[#0d0e12]'></div>
          </div>
        </div>

        <div className='space-y-1.5'>
          <h2 className='text-[14px] font-semibold leading-5 text-stone-800'>
            Wireless bluetooth headset
          </h2>
          <p className='text-[12px] text-stone-500'>Shipped in 3-4 days</p>
          <p className='text-[28px] font-bold leading-none text-stone-900'>$35.99</p>
        </div>

        <div className='mt-4 flex gap-2'>
          <button className='flex-1 rounded-md bg-[#efefef] px-3 py-2 text-[14px] font-medium leading-4 text-stone-500 transition hover:bg-[#e7e7e7]'>
            Add Cart
          </button>
          <button className='flex-1 rounded-md bg-gradient-to-r from-[#c160ff] to-[#a53ef4] px-3 py-2 text-[14px] font-medium text-white transition hover:from-[#b751fb] hover:to-[#9332e8]'>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
