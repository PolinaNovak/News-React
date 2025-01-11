import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} />;
    } else {
      return <Component {...restProps} />;
    }
  };
}
