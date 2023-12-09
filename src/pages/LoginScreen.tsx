import { Link, useNavigate } from "react-router-dom";


export default function LoginScreen() {
  const navigate = useNavigate()

  function onClickSubmit() {
    navigate("/dashboard")
  }

  return (
    <main className="w-full h-screen flex flex-col flex-1 overflow-hidden items-center justify-center" >
      <img src="/images/logo.png" alt="" className="w-[90px] h-[90px] rounded-full" />
      <p className="text-center text-[#36A546CC] font-normal text-[21px] mt-4" >We are Electric</p>
      <div className="mt-14" >
        <form action="mb-10">
          <div style={{ boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", mixBlendMode: "normal" }} className="form-control relative min-w-[240px] min-h-[42px] rounded-full bg-[#1F191966] bg-no-repeat group" >
            <input type="email" name="email" id="email" className="outline-none form-input bg-transparent w-full min-h-[42px] text-white" />
            <label htmlFor="email" className="form-label absolute text-[14px] top-[10px] left-[15px] font-bold text-white duration-200" >E-mail</label>
          </div>
          <div style={{ boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", mixBlendMode: "normal" }} className="form-control mt-8 mb-12 relative min-w-[240px] min-h-[42px] rounded-full bg-[#1F191966] bg-no-repeat" >
            <input type="password" name="password" id="password" className="form-input outline-none bg-transparent w-full min-h-[42px] rounded-full text-white" />
            <label htmlFor="password" className="form-label absolute text-[14px] top-[10px] left-[15px] font-bold text-white duration-200" >Password</label>
          </div>
          <div style={{ background: "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box", mixBlendMode: "normal" }} className="w-full h-[42px] border-[2px] border-[#8CFF0026] rounded-full" >
            <button onClick={onClickSubmit} type="submit" className="w-full h-full text-center text-[#FFFFFF8C] font-bold text-[21px]" >Login</button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-8" >
          <Link to="/forgot-password" className="text-center text-[#36A546]" >
            Forgot Password?
          </Link>
        </div>
      </div>
    </main>
  )
}
