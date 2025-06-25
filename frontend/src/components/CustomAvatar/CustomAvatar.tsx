import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useAuthUser } from "../../hooks/useAuthUser";
import { FiDollarSign, FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function CustomAvatar() {
  const { username, logout } = useAuthUser(); 

  return (
    <>
      {username && (
        <Menu>
          <MenuButton>
            <Flex align="center" gap={2} cursor="pointer">
              <Avatar name={username} size="md" bg="green.500" />
            </Flex>
          </MenuButton>
          <MenuList bg={"#000"}>
            <Link to="/perfil">
              <MenuItem bg={"#000"}  icon={<FiUser />}>
                Perfil
              </MenuItem>
            </Link>
            <Link to="/transacao">
              <MenuItem bg={"#000"} icon={<FiDollarSign />}>
                Transações
              </MenuItem>
            </Link>
            <MenuItem bg={"#000"}  icon={<FiLogOut />} onClick={logout}>
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
}
