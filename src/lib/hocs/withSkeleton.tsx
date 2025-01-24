import Skeleton from "../../components/Skeleton/Skeleton";
import { SkeletonType, DirectionType } from "../../interfaces";

interface Props {
  isLoading: boolean;
}
export default function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    } else {
      return <Component {...(restProps as P)} />;
    }
  };
}
