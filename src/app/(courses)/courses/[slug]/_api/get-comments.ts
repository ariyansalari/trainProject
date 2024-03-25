import { readData } from "@/core/http-service/http-service";
import { CourseCommnetList } from "..";
import { useInfiniteQuery } from "@tanstack/react-query";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommnetList> => {
  const { page, slug } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};
export const useCourseComments = ({ params }: GetCommentsOptions) => {
  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["courseComments",params.slug],
    queryFn: ({ pageParam }) =>
      getComments({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastpage) => lastpage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 60 * 1000,
  });
  return {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  };
};
