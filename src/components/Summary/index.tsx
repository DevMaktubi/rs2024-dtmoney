import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";

export function Summary() {
  return (
    <SimpleGrid as="section" columns={3} gap="2rem" w="full" maxW="1120px" mx="auto" p="0 1.5rem" mt="-5rem">
      <Flex flexDir="column" bgColor="base.4" borderRadius="6px" p="2rem">
        <Flex as="header" align="center" justify="space-between" color="base.6">
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Flex>
        <Text as="strong" display="block" mt="1rem" fontSize="2rem">R$ 17.400,00</Text>
      </Flex>
      <Flex flexDir="column" bgColor="base.4" borderRadius="6px" p="2rem">
        <Flex as="header" align="center" justify="space-between" color="base.6">
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </Flex>
        <Text as="strong" display="block" mt="1rem" fontSize="2rem">R$ 17.400,00</Text>
      </Flex>
      <Flex flexDir="column" bgColor="primary-dark" borderRadius="6px" p="2rem">
        <Flex as="header" align="center" justify="space-between" color="base.6">
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </Flex>
        <Text as="strong" display="block" mt="1rem" fontSize="2rem">R$ 17.400,00</Text>
      </Flex>
    </SimpleGrid>
  )
}