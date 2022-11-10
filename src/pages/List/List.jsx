import "./list.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Datatable from "../../components/DataTable/Datatable"
// import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        List
        <Datatable />
        {/* <Datatable/> */ }
      </div>
    </div>
  )
}

export default List