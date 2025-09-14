export function Tarjeta({item}){
  

  return(
  <div className="flex flex-col items-center w-[200px] h-[320px] border-2 rounded border-neutral-300">
    <h3>{item?.name}</h3>
    <div className="w-[200px]">
      <img className="w-[200px] h-[290px] object-contain" src={item?.image}/>
    </div>
    <p>{item?.ki}</p>
  </div>
  )
}