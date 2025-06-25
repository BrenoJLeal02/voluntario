import { Input, InputProps } from "@chakra-ui/react";

export function CustomInput(props: InputProps) {
  return (
    <Input
      border="none"
      bg="#121214"
      p='1.5rem'
      color="#fff"
      _placeholder={{ color: "#72778a" }}
      _focus={{
        borderColor: "#00875f",
        boxShadow: "0 0 0 1px #00875f",
      }}
      {...props}
    />
  );
}
