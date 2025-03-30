"use client"
import { handleSubmit } from "@/action/form";
import { useRef } from "react";

export default function Home() {

  const ref = useRef();
  return (
    <div className="w-[50%] mx-auto h-screen flex justify-center items-center">
      <form ref={ref} className="flex flex-col gap-2" action={(e)=>{
        handleSubmit(e); 
        ref.current.reset()
        }}>
        <div>
          <label htmlFor="name" >name</label>
          <input className="border border-white rounded-2xl ml-2 text-white" type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="add" >Address</label>
          <input className="border border-white rounded-2xl ml-2 text-white" type="text" name="add" id="add" />
        </div>
        <input type="submit" className="border border-white rounded-2xl w-fit px-2" value="Submit" />
      </form>
    </div>
  );
}
