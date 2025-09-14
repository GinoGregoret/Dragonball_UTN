export function Tarjeta({item}){
  return(
  <div className="flex flex-col items-center w-[200px] h-[320px] border-2 rounded border-neutral-300 bg-gradient-to-b bg-white">
    <h3>{item?.name}</h3>
    <div className="w-[200px]">
      <img className="w-[200px] h-[290px] object-contain justify-center" src={item?.image}/>
    </div>
    <p>{item?.ki}</p>
  </div>
  )
}