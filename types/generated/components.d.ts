import type { Schema, Struct } from '@strapi/strapi';

export interface BusinessBlogMeta extends Struct.ComponentSchema {
  collectionName: 'components_business_blog_metas';
  info: {
    description: '';
    displayName: 'blogMeta';
  };
  attributes: {
    city: Schema.Attribute.String;
    niche: Schema.Attribute.Relation<'oneToOne', 'api::niche.niche'>;
    state: Schema.Attribute.String;
  };
}

export interface BusinessBusinessDetails extends Struct.ComponentSchema {
  collectionName: 'components_business_business_details';
  info: {
    displayName: 'businessDetails';
  };
  attributes: {
    address: Schema.Attribute.String;
    starRating: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'business.blog-meta': BusinessBlogMeta;
      'business.business-details': BusinessBusinessDetails;
    }
  }
}
