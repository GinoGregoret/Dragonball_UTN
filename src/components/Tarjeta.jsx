export function Tarjeta({item}){
  return(
  <div className="flex flex-col items-center w-[200px] h-[320px] border-2 rounded border-neutral-300 bg-gradient-to-b bg-white">
    <h3>{item?.name}</h3>
    <div className="w-[200px]">
      <div className="">
      <img className="w-[200px] h-[270px] object-contain" src={item?.image}/>
      </div>
    </div>
    <p>{item?.ki}</p>
  </div>
  )
}