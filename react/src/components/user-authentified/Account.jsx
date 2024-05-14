import { useSelector } from "react-redux";

const Account=()=>{
  
  const user = useSelector((state) => state.users.user);
  console.log("the user is "+JSON.stringify(user) )
   return(
    <>
    
    <div className="ml-[2%] lg:ml-[10%] lg:mt-[5%]">
   
    <h1 className=" text-5xl font-bold" >Account</h1>
    <h2 className="font-bold">Welcom mr {user.name} </h2>
    <div className=" flex flex-col gap-10  lg:flex lg:flex-row  lg:gap-5 mt-[5%]">
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
  <div className="px-6 py-4">
  <svg className="w-[10%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#5f6368"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>    <div className="font-bold text-xl mb-2">Personal info</div>
    <p className="text-gray-700 text-base">
    Provide personal details and how we can reach you    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    
  </div>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
  <svg className="w-[10%]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#5f6368"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>
   <div className="font-bold text-xl mb-2">Login & security</div>   
   <p className="text-gray-700 text-base">
   Update your password and secure your account   </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    
  </div>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
  <svg className="w-[10%]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#5f6368"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>   <div className="font-bold text-xl mb-2">Payments & payouts</div>   
   <p className="text-gray-700 text-base">
   Review payments, payouts, coupons, and gift cards  </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    
  </div>
</div>
</div>
</div>
    </>
   )
}
export default Account;