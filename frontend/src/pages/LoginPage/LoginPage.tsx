import {
  Box,
  Container,
  VStack,
  Heading,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel/CustomLabel";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormData } from "../../types/AuthInterface";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; 

export function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      setLoading(true);

      await login(data); 

      toast({
        title: "Login realizado com sucesso",
        description: `Bem-vindo`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/homepage");

    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.response?.data?.message || "Erro ao autenticar o usuário",
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
            Login
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="stretch">
              <Box>
                <CustomLabel>Email</CustomLabel>
                <CustomInput
                  type="text"
                  placeholder="Digite seu email"
                  {...register("email", {
                    required: "Email é obrigatório",
                  })}
                />
                {errors.email && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.email.message}
                  </Text>
                )}
              </Box>

              <Box>
                <CustomLabel>Senha</CustomLabel>
                <CustomInput
                  type="password" // corrigido!
                  placeholder="Digite sua senha"
                  {...register("senha", { required: "Senha é obrigatória" })}
                />
                {errors.senha && (
                  <Text color="red.400" fontSize="sm" mt={1}>
                    {errors.senha.message}
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
                Entrar
              </Button>

              <Link to="/registro">
                <Text
                  color="teal.400"
                  mt={4}
                  textAlign="center"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Não tem uma conta? Crie uma agora.
                </Text>
              </Link>
            </VStack>
          </form>
        </Box>
      </Container>
    </Flex>
  );
}
