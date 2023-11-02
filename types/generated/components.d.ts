import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductListingProductListing extends Schema.Component {
  collectionName: 'components_product_listing_product_listings';
  info: {
    displayName: 'ProductListing';
    icon: 'shirt';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media;
    Color: Attribute.String;
    Price: Attribute.Integer;
    Stock: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-listing.product-listing': ProductListingProductListing;
    }
  }
}
