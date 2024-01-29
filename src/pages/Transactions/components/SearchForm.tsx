import { Button, Flex, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchForm() {
  return (
    <Flex as="form" gap="1rem" pt={0.5}>
      <Input focusBorderColor="primary" flex={1} borderRadius="6px" border="0" bgColor="base.1" color="base.7" _placeholder={{color: 'base.5'}} placeholder="Busque por transações" />
      <Button 
        type="submit"
        gap="0.75rem" 
        p="1rem" 
        bgColor="transparent" 
        color="primary"
        border="1px solid"
        borderColor="primary-light" 
        fontWeight="bold" 
        borderRadius="6px" 
        leftIcon={<MagnifyingGlass size={20} />}
        _hover={{bgColor: 'primary', borderColor:"primary", color:"white"}}
      >
        Buscar
      </Button>
  </Flex>
  )
}