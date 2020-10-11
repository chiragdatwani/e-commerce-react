import React, { Component } from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page ">
        {this.state.collection.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
