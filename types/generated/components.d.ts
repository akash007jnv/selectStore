import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductListingProductListing extends Schema.Component {
  collectionName: 'components_product_listing_product_listings';
  info: {
    displayName: 'ProductListing';
    icon: 'shirt';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media;
    Color: Attribute.String;
    Price: Attribute.Integer;
    Stock: Attribute.Integer;
    sizes: Attribute.Relation<
      'product-listing.product-listing',
      'oneToMany',
      'api::size.size'
    >;
  };
}

export interface SizesSizes extends Schema.Component {
  collectionName: 'components_sizes_sizes';
  info: {
    displayName: 'SIZES';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
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
      'sizes.sizes': SizesSizes;
      'tags.tags': TagsTags;
    }
  }
}
