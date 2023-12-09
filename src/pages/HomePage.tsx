import { BottomTabbar, HeaderButton } from "../components";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen flex flex-col flex-1 overflow-hidden items-center px-3 py-5" >
      <HeaderButton />

      <div className="flex flex-col flex-1 items-center justify-center w-full" >
        <div className="relative" >
          <img src="/images/moptro.png" alt="" style={{ background: "#13212147 0% 0% no-repeat padding-box", boxShadow: "inset 1px 2px 7px #C4C4C4", mixBlendMode: "normal" }} className="w-[71px] h-[70px] border-[1px] border-[#132121] rounded-full" />
          <div className="absolute -top-5 -right-6 border-[1px] border-[#FFFEFE00] rounded-full w-9 h-9 flex items-center justify-center text-[18px] text-primary-green"  >
            <div className="relative w-full h-full flex items-center justify-center" >
              <div className="absolute inset-0 rounded-full border-[1px] border-[#FFFEFE00] w-full h-full opacity-40" style={{ background: "#5E5E5EB5 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
              4
            </div>
          </div>
        </div>

        <div className="w-full mt-8 bg-opacity-40 rounded-xl" style={{ background: "#5E5E5E82 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040", mixBlendMode: "normal", }}  >
          <div style={{ background: "#1A2C2C99 0% 0% no-repeat padding-box", mixBlendMode: "normal" }} className="text-center rounded-full w-full font-normal py-3 text-[18px] text-[#FFFFFFB3] opacity-[0.84]" >
            Employer Productivity Dashboard
          </div>

          <div className="flex flex-col gap-5 px-5 my-10" >
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[2%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[46%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[61%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[46.5%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[44.5%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
            <div className="" >
              <div className="flex items-center justify-between mb-3" >
                <p className="font-normal text-white" >Productivity on Monday</p>
                <p className="text-[14px] text-primary-green" >4%</p>
              </div>
              <div style={{ background: "#36A54680 0% 0% no-repeat padding-box" }} className="w-[49%] h-[11px] rounded-full border-[1px] border-[#36A546]" />
            </div>
          </div>
        </div>
      </div>

      <BottomTabbar />
    </main>
  )
}
