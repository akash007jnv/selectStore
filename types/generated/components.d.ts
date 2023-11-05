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

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-listing.product-listing': ProductListingProductListing;
      'tags.tags': TagsTags;
    }
  }
}
