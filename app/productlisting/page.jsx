import Footer from "../components/Footer";
import LocationBreadcrum from "../components/LocationBreadcrum";
import Navbar from "../components/navbar";
import NewsLetter from "../components/NewsLetter";
import ProductList from "../components/ProductList";
function ProductListing() {
  return (
    <>
      <Navbar />
      <LocationBreadcrum />
      <ProductList />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ProductListing;
