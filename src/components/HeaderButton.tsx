
export default function HeaderButton() {
  return (
    <div className="w-full flex justify-end absolute top-4 right-4" >
      <button type="button"  className="relative w-14 h-14 rounded-full" >
        <div className="w-full h-full absolute inset-0 rounded-full opacity-40" style={{ background: "#5E5E5EB5 0% 0% no-repeat padding-box", boxShadow: "inset 0px 4px 0px #00000040", mixBlendMode: "normal", filter: "blur(2px)" }} />
        <img src="/images/cta.png" alt="" className="object-contain" />
      </button>
    </div>
  )
}
