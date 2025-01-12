import React from "react";
import SkeletonCategories from "../../components/SkeletonCategories/SkeletonCategories";

export const withSkeletonCategories = (Component) => {
  return React.forwardRef((props, ref) => {
    const { isLoading, ...restProps } = props;
    if (isLoading) return <SkeletonCategories />;
    else return <Component {...restProps} ref={ref} />;
  });
};
