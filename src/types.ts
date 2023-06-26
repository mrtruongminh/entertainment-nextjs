export type Icon = {
  className?: string;
};

export type Post = {
  id: string;
  title: string;
  year: number;
  category: {
    name: string;
  };
  ratings: {
    name: string;
  };
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnailRegular: {
    url: string;
  };
  thumbnailTrending?: {
    url: string;
  };
};

// export type GetPostsResponse = {

// }
