import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import {format} from 'date-fns'
import { SearchForm } from "./components/SearchForm";

export function Transactions() {

  const entries = [
    {
      id: 1,
      name: 'Desenvolvimento de site',
      price: 12000,
      type: 'in',
      label: 'Venda',
      date: new Date()
    },
    {
      id: 2,
      name: 'Lanche',
      price: 5.50,
      type: 'out',
      label: 'Alimentação',
      date: new Date()
    },
  ]
  return (
    <div>
      <Header />
      <Summary />
      <TableContainer as="main" w="full" maxW="1120px" m="4rem auto 0" p="0 1.5rem" mt="1.5rem">
        <SearchForm />
        <Table variant="unstyled" w="full" style={{borderCollapse: 'separate', borderSpacing: '0 0.5rem'}}>
          <Tbody>
            {entries.map((e) => (
              <Tr key={e.id}>
                <Td w="50%" p="1.25rem 2rem" bgColor="base.3" borderLeftRadius="6px">{e.name}</Td>
                <Td p="1.25rem 2rem" bgColor="base.3" color={e.type === 'in' ? 'primary-light' : 'secondary-light'}>{e.type === 'out' && '-'}{e.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Td>
                <Td p="1.25rem 2rem" bgColor="base.3">{e.label}</Td>
                <Td p="1.25rem 2rem" bgColor="base.3" borderRightRadius="6px">{format(e.date.toString(), `dd'/'LL'/'yyyy`)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}