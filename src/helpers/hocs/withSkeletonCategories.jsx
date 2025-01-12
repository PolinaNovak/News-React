import SkeletonCategories from "../../components/SkeletonCategories/SkeletonCategories";

export const withSkeletonCategories = (Component) => {
  return function withSkeletonCategories(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) return <SkeletonCategories />;
    else return <Component {...restProps} />;
  };
};
