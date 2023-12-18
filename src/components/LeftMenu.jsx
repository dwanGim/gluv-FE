import React from 'react'
import Margin from './Margin'
import DynamicColorButton from './DynamicColorButton'

function LeftMenu() {
  return (
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-4 w-64 h-[500px] mx-4 border-[1px]  rounded-md bg-gray-100 flex flex-col items-center text-center'>

      {/* 상단 여백 적용 */}
      <Margin top="5" />

      {/* 프로필 정보 */}
      <div>
        <div className='relative overflow-hidden rounded-full bg-black h-28 w-28'>
          <img
            src='프로필사진의_이미지_경로.jpg'
            alt='프로필 사진'
            className='프로필_이미지_스타일 rounded-full'
          />
          asdasd
        </div>
        <Margin top="3" />


        <DynamicColorButton color="blue" text="프로필수정" />
        <Margin top="3" />
      </div>

      {/* 수평 선 */}
      <div className='w-full h-[1px] mt-2  bg-dark-600'></div>

      {/* 모집 정보 */}
      <div className='w-48'>
        <div className='text-lg font-bold'>모집명</div>
        <div className="flex flex-col"> 
          <div className='flex justify-between'>
            <div className='font-mono'>최대인원</div>
            <div className='font-mono'>6명</div>
          </div>
          <div className='flex justify-between'>
            <div  className='font-mono'>현재인원</div>
            <div  className='font-mono'>4명</div>
          </div>
          <div className='flex justify-between'>
            <div className='font-mono'>신청인원</div>
            <div className='font-mono'>1명</div>
          </div>
        </div>
      </div>

      {/* 리더 정보 */}
      <Margin top="2" />
      <div className='   font-mono '>내역할: 리더</div>
      <Margin top="1" />

      {/* 버튼 */}
     
      <Margin top="1" />
      <DynamicColorButton color="red" text="탈퇴하기" />
    </div>
  </div>
  )
}

export default LeftMenu