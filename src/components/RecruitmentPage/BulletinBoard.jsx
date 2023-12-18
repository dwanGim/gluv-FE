// BulletinBoard.js
import React from 'react';
import Margin from '../Margin';

function BulletinBoard({ data }) {
  return (
    <div>
      <div className='flex flex-col'>
        <div className="flex items-center justify-start border p-2 rounded-md">
          <span className="font-bold w-[15vw]">게시판</span>
          <span className="font-semibold w-[23vw]">제목</span>
          <span className=" w-[10vw] font-lato">작성자</span>
          <span className=" w-[15vw] font-lato">날짜</span>
          <span className=" w-[5vw] font-lato">조회수</span>
        </div>
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-start border p-2 rounded-md w-full hover:bg-gray-100">
            <span className='font-semibold text-sm w-[15vw]'>{item.title}</span>
            <span className='font-lato text-sm w-[23vw]'>{item.content}</span>
            <span className='font-lato text-sm w-[10vw]'>{item.author}</span>
            <span className="text-sm w-[15vw] font-lato">{item.date}</span>
            <span className="text-sm w-[5vw] font-lato">{item.views}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BulletinBoard;