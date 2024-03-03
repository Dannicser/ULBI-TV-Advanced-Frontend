import { Flex, IFlexProps } from "../Flex/Flex";

//всегда гор строка

type HStackProps = Omit<IFlexProps, "direction">;

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};
