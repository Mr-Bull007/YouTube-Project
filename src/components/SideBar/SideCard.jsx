import { useSelector } from "react-redux"


const SideCard = ({name, imgIconURL}) => {
  const navOpen = useSelector(store => store.header.isMenuOpen);

  return (
    <div className="hover:bg-slate-200 transition duration-150 ease-in-out h-12 ml-2 rounded-lg">
        <div className={`${navOpen ? "flex mt-2 pt-2" : "mt-4"}`}>
            <div className="mx-6 pt-[2px] size-5">
            <img className="object-cover mix-blend-multiply" alt={name} src={imgIconURL} />
            </div>
            <div className={`${navOpen ? "font-medium text-sm mr-1 pr-1" : "text-[10px] text-center"}`}>
            <h2>{name}</h2>
            </div>
        </div>
    </div>
  )
}

export default SideCard