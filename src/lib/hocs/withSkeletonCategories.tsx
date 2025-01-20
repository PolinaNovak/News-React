import React, { ForwardedRef } from "react";
import SkeletonCategories from "../../components/SkeletonCategories/SkeletonCategories";

interface Props {
  isLoading: boolean;
}
export const withSkeletonCategories = <P extends object, R = HTMLElement>(
  Component: React.ComponentType<P & React.RefAttributes<R>>
) => {
  return React.forwardRef<R, Props & P>((props, ref) => {
    const { isLoading, ...restProps } = props;
    if (isLoading) return <SkeletonCategories />;
    else return <Component {...(restProps as P)} ref={ref} />;
  });
};
