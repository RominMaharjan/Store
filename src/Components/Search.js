import React from 'react'
import { Link } from 'react-router-dom';

function Search({filteredSearch, searchData, addToCart, getProductDetails}) {
  console.log("search data from search: ",filteredSearch)
  return (
    <>
    <div className="products-breadcrumb">
      <div className="container">
        <ul>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            <Link to="/">Home</Link>
            <span>|</span>
          </li>
          <li>Products</li>
        </ul>
      </div>
    </div>
    <div className="banner">
      <div className="w3l_banner_nav_right">
      
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">Searched Products</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            
            {filteredSearch.length>0 && searchData.search !== ""  ? filteredSearch.map((dataProduct) => {
              return (
                <>
                  <div
                    className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
                    key={dataProduct.id}
                  >
                    <div className="hover14 column">
                      <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                        <div className="tag">
                          <img
                            src="../Assets/images/tag.png"
                            alt=" "
                            className="img-responsive"
                          />
                        </div>
                        <div className="agile_top_brand_left_grid1">
                          <figure>
                            <div className="snipcart-item block">
                              <div className="snipcart-thumb">
                                <button
                                  type="button"
                                  className="button text-center"
                                  onClick={() => {
                                      getProductDetails(dataProduct);
                                    }}
                                >  <img
                                    src={dataProduct.images[0].imageName}
                                    alt=" "
                                    className="img-responsive"
                                  />
                                  </button>
                                 
                                <p>{dataProduct.title}</p>
                                <h4>
                                  ${dataProduct.unitPrice[0].oldPrice}
                                  <span>
                                    {" "}
                                    $ {dataProduct.unitPrice[0].newPrice}
                                  </span>
                                </h4>
                              </div>
                              <div className="snipcart-details">
                                <input
                                  type="button"
                                  value="Add to cart"
                                  className="button text-center"
                                  onClick={() => {
                                      addToCart(dataProduct);
                                    }}
                                />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }):<div className="empty-category"> No Items Found </div>}
           

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </>
  )
}

export default Search