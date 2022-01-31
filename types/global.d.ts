declare interface PrismicResponse {
  license: string;
  next_page: string | null;
  page: number;
  prev_page: string | null;
  results_per_page: number;
  results_size: number;
  total_pages: number;
  total_results_size: number;
  version: string;
  results: Array<any>;
}

declare type Tool = { tool: string };

declare interface PrismicItem {
  id: string;
  uid: string;
  url: null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: [];
  lang: string;
  alternate_languages: string[];
  data: {};
}

declare interface Work extends PrismicItem {
  data: {
    featured: boolean;
    title: [
      {
        type: string;
        text: string;
        spans: [];
      }
    ];
    subtitle: [
      {
        type: string;
        text: string;
        spans: [];
      }
    ];
    category: string;
    cover_image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    link: {
      link_type: string;
      url: string;
    };
    excerpt: string;
    content: [];
    tools: Tool[];
  };
}

declare interface Post extends PrismicItem {
  data: {
    title: [
      {
        type: string;
        text: string;
        spans: [];
      }
    ];
    subtitle: [
      {
        type: string;
        text: string;
        spans: [];
      }
    ];
    author: {
      id: string;
      type: string;
      tags: any[];
      lang: string;
      slug: string;
      first_publication_date: string;
      last_publication_date: string;
      link_type: string;
      isBroken: boolean;
    };
    cover_image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: any | null;
      copyright: any | null;
      url: string;
    };
    content: [
      {
        type: string;
        text: string;
        spans: any[];
      },
      {
        type: string;
        url: string;
        alt: string;
        copyright: string | null;
        dimensions: {
          width: number;
          height: number;
        };
      }
    ];
    tags: [
      {
        tag: {
          link_type: string;
        };
      }
    ];
  };
}

declare type WorkItems = Work[];

declare interface PostItems extends PrismicResponse {
  results: Post[];
}
