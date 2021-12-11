import CategoriesInDb from "./contentCard/typesInDb/typesInDb";
import ContentRowTop from "./contentRowTop/contentRowTop";
import MovieDetail from "./contentCard/lastProductDetail/lastProductDetail";
import ProductsTable from "./productsTable/productsTable";

if(sessionStorage.getItem("loged")){
  console.log(sessionStorage.getItem("loged"))
}


export default function ContentWrapper() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <ContentRowTop />

      <div className="row">
          <MovieDetail />

          <CategoriesInDb />
      </div>
      <ProductsTable />
    </div>
  );
}
