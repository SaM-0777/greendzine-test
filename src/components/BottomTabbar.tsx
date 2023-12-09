import { Link, useLocation } from "react-router-dom";

export default function BottomTabbar() {
  const { pathname } = useLocation()
  return (
    <div className="w-full fixed bottom-2 border-[1px] border-[#0F2323] h-[63px] rounded-full flex items-center" style={{ background: "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box", boxShadow: "inset 8px 4px 4px #00000040", mixBlendMode: "normal" }} >
      <Link to="/dashboard" className="relative rounded-full w-1/2 px-6 flex justify-end items-center h-full"  >
        <img src="/images/home.png" alt="" className="w-[28px] h-[28px]" />
        {pathname.startsWith("/dashboard") && <div className="absolute rounded-full border-[1px] inset-0 border-[#000000] w-full h-[61px]" style={{ background: "#38383880 0% 0% no-repeat padding-box", filter: "blur(7px)", mixBlendMode: "normal",  }} />}
      </Link>
      <Link to="/employees" className="relative rounded-full w-1/2 px-6 flex justify-start items-center h-full"  >
        <img src="/images/user.png" alt="" className="w-[28px] h-[28px]" />
        {pathname.startsWith("/employees") && <div className="absolute rounded-full border-[1px] inset-0 border-[#000000] w-full h-[61px]" style={{ background: "#38383880 0% 0% no-repeat padding-box", filter: "blur(7px)", mixBlendMode: "normal",  }} />}
      </Link>
    </div>
  )
}
