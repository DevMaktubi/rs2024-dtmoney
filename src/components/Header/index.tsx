import {useRef, useState} from 'react';
import { AlertDialog, Button, Flex, Image } from "@chakra-ui/react";

import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const cancelRef = useRef(null);

  const onClose = () => setOpen(false);
  return (
    <Flex as="header" bgColor="base.2" p="2.5rem 0 7.5rem">
      <Flex w="full" maxW="1120px" mx='auto' py="1.5rem" justify="space-between" align="center">
        <Image src={logoImg} alt="" />
        <Button 
          h="50px" 
          border="0" 
          bgColor="primary" 
          color="white" 
          fontWeight="bold" 
          p="0 1.25rem" 
          borderRadius="6px" 
          cursor="pointer" 
          _hover={{bgColor: 'primary-dark'}}
          onClick={() => setOpen(true)}
        >
          Nova transação
        </Button>
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <NewTransactionModal />
        </AlertDialog>
      </Flex>
    </Flex>
  )
}