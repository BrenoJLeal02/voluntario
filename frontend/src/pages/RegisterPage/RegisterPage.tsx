import {
  Box,
  Container,
  VStack,
  Heading,
  Button,
  Flex,
  Text,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel/CustomLabel";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormData } from "../../types/AuthInterface";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export function RegisterPage() {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<RegisterFormData>();

  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register } = useAuth(); 

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      setLoading(true);

      await register(data);

      toast({
        title: "Cadastro realizado com sucesso!",
        description: `Bem-vindo!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/homepage");
    } catch (error: any) {
      toast({
        title: "Erro ao cadastrar",
        description:
          error.response?.data?.message || "Erro ao criar o usuário",
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
                  {...formRegister("nome", {
                    required: "Nome é obrigatório",
                  })}
                />
                {isSubmitted && errors.nome && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.nome.message}
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
                <CustomLabel>Senha</CustomLabel>
                <CustomInput
                  type="password"
                  placeholder="Digite sua senha"
                  {...formRegister("senha", {
                    required: "Senha é obrigatória",
                  })}
                />
                {isSubmitted && errors.senha && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.senha.message}
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
                  {...formRegister("tipo", {
                    required: "Selecione uma role",
                  })}
                  defaultValue="user"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Select>

                {isSubmitted && errors.tipo && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.tipo.message}
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
