import {
  Box,
  Container,
  VStack,
  Heading,
  Button,
  Flex,
  Text,
  Select,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel/CustomLabel";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormData } from "../../types/AuthInterface";
import { register } from "../../service/Auth";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export function RegisterPage() {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<RegisterFormData>();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      setLoading(true);
      const response = await register(data);
      toast({
        title: "Cadastro realizado",
        description: `Bem-vindo, ${response.data.username}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/"); 
    } catch (error: any) {
      toast({
        title: "Erro ao cadastrar",
        description: error.response?.data?.message || "Erro ao criar o usuário",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Container maxW="md" py={10}>
        <Box p={8} borderRadius="lg" boxShadow="md" bg="#323238">
          <Heading size="lg" mb={6} textAlign="center" color="#fff">
            Cadastro
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="stretch">
              <Box>
                <CustomLabel>Nome</CustomLabel>
                <CustomInput
                  type="text"
                  placeholder="Digite seu nome"
                  {...formRegister("name", {
                    required: "Nome é obrigatório",
                  })}
                />
                {isSubmitted && errors.name && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.name.message}
                  </Text>
                )}
              </Box>

              <Box>
                <CustomLabel>Email</CustomLabel>
                <CustomInput
                  type="email"
                  placeholder="Digite seu email"
                  {...formRegister("email", {
                    required: "Email é obrigatório",
                  })}
                />
                {isSubmitted && errors.email && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.email.message}
                  </Text>
                )}
              </Box>

              <Box>
                <CustomLabel>Nome de Usuário</CustomLabel>
                <CustomInput
                  type="text"
                  placeholder="Digite seu username"
                  {...formRegister("username", {
                    required: "Username é obrigatório",
                  })}
                />
                {isSubmitted && errors.username && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.username.message}
                  </Text>
                )}
              </Box>

              <Box>
                <CustomLabel>Senha</CustomLabel>
                <CustomInput
                  type="password"
                  placeholder="Digite sua senha"
                  {...formRegister("password", {
                    required: "Senha é obrigatória",
                  })}
                />
                {isSubmitted && errors.password && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.password.message}
                  </Text>
                )}
              </Box>

              <Box>
                <CustomLabel>Role</CustomLabel>
                <Select
                  color="#72778a"
                  border="none"
                  bg="#121214"
                  _focus={{
                    borderColor: "#00875f",
                    boxShadow: "0 0 0 1px #00875f",
                  }}
                  {...formRegister("role", {
                    required: "Selecione uma role",
                  })}
                  defaultValue="USER"
                >
                  <option value="ADMIN">Admin</option>
                  <option value="USER">User</option>
                </Select>
                {isSubmitted && errors.role && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.role.message}
                  </Text>
                )}
              </Box>

              <Button
                type="submit"
                isLoading={loading}
                bg="#00875F"
                color="#fff"
                mt={4}
                _hover={{ bg: "#015f43" }}
              >
                Criar Conta
              </Button>

              <Link to="/">
                <Text
                  color="teal.400"
                  mt={4}
                  textAlign="center"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Já tem uma conta? Faça login.
                </Text>
              </Link>
            </VStack>
          </form>
        </Box>
      </Container>
    </Flex>
  );
}
