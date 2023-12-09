import { useState } from "react";
import { BottomTabbar, HeaderButton } from "../components";


const employees = [
  {
    id: 1,
    name: "Arjun",
    dob: "16-11-2000",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Mahesh",
    dob: "1-1-2000",
    role: "Designer",
  },
  {
    id: 3,
    name: "Suresh",
    dob: "8-10-2001",
    role: "Developer",
  },
  {
    id: 4,
    name: "",
    dob: "18-5-2001",
    role: "Junior Developer",
  },
]

export default function EmployeeListPage() {
  const [searchText, setSearchText] = useState<string>()
  
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center px-3 py-5 mt-5 overflow-auto" >
      <HeaderButton />

      <div className="flex flex-col flex-1 items-center justify-center w-full mb-20" >
        <div className="relative" >
          <img src="/images/moptro.png" alt="" style={{ background: "#13212147 0% 0% no-repeat padding-box", boxShadow: "inset 1px 2px 7px #C4C4C4", mixBlendMode: "normal" }} className="w-[71px] h-[70px] border-[1px] border-[#132121] rounded-full" />
          <div className="absolute -top-5 -right-6 border-[1px] border-[#FFFEFE00] rounded-full w-9 h-9 flex items-center justify-center text-[18px] text-primary-green"  >
            <div className="relative w-full h-full flex items-center justify-center" >
              <div className="absolute inset-0 rounded-full border-[1px] border-[#FFFEFE00] w-full h-full opacity-40" style={{ background: "#5E5E5EB5 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
              4
            </div>
          </div>
        </div>

        <div className="w-full mt-8 rounded-xl" >
          <div className="w-full flex items-center justify-between px-5 relative h-[55px] rounded-2xl" >
            <input onChange={e => setSearchText(e.target.value)} type="search" name="search-bar" id="search-bar" className="w-full h-full outline-none bg-transparent text-center z-10 font-bold text-[#FFFFFFB3]" placeholder="Search with name" />
            <img src="/images/search.png" alt="" className="w-[24px] h-[24px] object-contain" />
            <div className="absolute w-full h-full rounded-2xl inset-0 border-[1px] border-[#595959] opacity-40" style={{ background: "#5E5E5E82 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
          </div>

          <div className="w-full flex flex-col gap-2 mt-5" >
            {
              searchText && searchText.length > 0 ? (
                employees.filter(emp => emp.name.toLowerCase().includes(searchText.toLowerCase())).map(emp => (
                  <div key={emp.id.toString()} className="relative p-3 flex flex-col gap-3" >
                    <div className="absolute w-full h-full rounded-2xl inset-0 border-[1px] border-[#595959] opacity-40" style={{ background: "#5E5E5E82 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040, 0px 4px 4px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
                    <div style={{ background: "#222D2D63 0% 0% no-repeat padding-box" }} className="absolute top-3 right-3 rounded-full border-[1px] border-[#000000] w-6 h-6 flex items-center justify-center text-[12px] text-white text-center" >{emp.id}</div>
                    <p className="text-[14px] text-white opacity-70" >
                      EMP ID :{" "}
                      <span className="font-bold" >
                        {emp.id}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      Name :{" "}
                      <span className="font-bold" >
                        {emp.name}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      DOB :{" "}
                      <span className="font-bold text-[#B77420]" >
                        {emp.dob}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      DOB :{" "}
                      <span className="font-bold text-[#36A546]" >
                        {emp.dob}
                      </span>
                    </p>
                  </div>
                ))
              ): (
                employees.map(emp => (
                  <div key={emp.id.toString()} className="relative p-3 flex flex-col gap-3" >
                    <div className="absolute w-full h-full rounded-2xl inset-0 border-[1px] border-[#595959] opacity-40" style={{ background: "#5E5E5E82 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040, 0px 4px 4px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
                    <div style={{ background: "#222D2D63 0% 0% no-repeat padding-box" }} className="absolute top-3 right-3 rounded-full border-[1px] border-[#000000] w-6 h-6 flex items-center justify-center text-[12px] text-white text-center" >{emp.id}</div>
                    <p className="text-[14px] text-white opacity-70" >
                      EMP ID :{" "}
                      <span className="font-bold" >
                        {emp.id}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      Name :{" "}
                      <span className="font-bold" >
                        {emp.name}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      DOB :{" "}
                      <span className="font-bold text-[#B77420]" >
                        {emp.dob}
                      </span>
                    </p>
                    <p className="text-[14px] text-white opacity-70" >
                      DOB :{" "}
                      <span className="font-bold text-[#36A546]" >
                        {emp.dob}
                      </span>
                    </p>
                  </div>
                ))      
              )
            }
          </div>
        </div>
      </div>

      <BottomTabbar />
    </main>
  )
}
