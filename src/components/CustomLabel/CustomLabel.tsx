import { Text, TextProps } from "@chakra-ui/react";

const CustomLabel = ({ children, ...props }: TextProps) => (
  <Text color="#72778a" mb={1} fontSize="sm" {...props}>
    {children}
  </Text>
);

export default CustomLabel;
