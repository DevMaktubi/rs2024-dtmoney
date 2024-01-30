/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, Button, VStack, Input, AlertDialogCloseButton, SimpleGrid, useToken } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { useState } from "react";

export function NewTransactionModal() {
  const [primaryLight, secondaryLight] = useToken('colors', ['primary-light','secondary-light'])

  const [selectedRadio, setSelectedRadio] = useState("0")
  return (
    <AlertDialogOverlay>
      <AlertDialogContent minW="32rem" borderRadius="32px" p="1.5rem 3rem" bgColor="base.2">
        <AlertDialogHeader px="0" py="0.7rem">
          Nova Transação
        </AlertDialogHeader>
        <AlertDialogCloseButton color="base.5" lineHeight={0} />

        <AlertDialogBody p="0">
          <VStack as="form" mt="1rem" spacing="1rem">
            <Input placeholder="Descrição" required type="text" height="58px" bgColor="base.1" border={0} borderRadius="6px" color="base.7" p="1rem" focusBorderColor="primary-dark" _placeholder={{color: "base.5"}} />
            <Input placeholder="Preço" required type="number" height="58px" bgColor="base.1" border={0} borderRadius="6px" color="base.7" p="1rem" focusBorderColor="primary-dark" _placeholder={{color: "base.5"}} />
            <Input placeholder="Categoria" required type="text" height="58px" bgColor="base.1" border={0} borderRadius="6px" color="base.7" p="1rem" focusBorderColor="primary-dark" _placeholder={{color: "base.5"}} />

            <SimpleGrid columns={2} gap="1rem" mt="1.5rem" w="full">
                <Button onClick={() => setSelectedRadio("1")} bgColor={selectedRadio === "1" ? "primary-dark" : "base.3"} color={selectedRadio === "1" ? "white" : "base.7"} p="1rem" py="2rem" alignItems="center" justifyContent="center" borderRadius="6px" border="0" gap="0.5rem" _hover={{bgColor:"primary-dark"}}>
                  <ArrowCircleUp size={24} color={selectedRadio === "1" ? "#FFF" : primaryLight} />
                  Entrada
                </Button>
                <Button onClick={() => setSelectedRadio("2")} bgColor={selectedRadio === "2" ? "secondary-dark" : "base.3"} color={selectedRadio === "2" ? "white" : "base.7"} p="1rem" py="2rem" alignItems="center" justifyContent="center" borderRadius="6px" border="0" gap="0.5rem" _hover={{bgColor:"secondary-dark"}}>
                  <ArrowCircleDown size={24} color={selectedRadio === "2" ? "#FFF" : secondaryLight} />
                  Saída
                </Button>
            </SimpleGrid>

            <Button w="full" type="submit" h="58px" border={0} bgColor="primary" color="white" fontWeight="bold" p="0 1.25rem" borderRadius="6px" mt="1.5rem" _hover={{bgColor:"primary-dark"}}>Cadastrar</Button>
          </VStack>
        </AlertDialogBody>

      </AlertDialogContent>
    </AlertDialogOverlay>
  )
}