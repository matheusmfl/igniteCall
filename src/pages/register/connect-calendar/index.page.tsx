import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../style'
import { ArrowRight } from 'phosphor-react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { api } from '@/lib/axios'
// import { AxiosError } from 'axios'
import { ConnectBox, ConnectItem } from './style'
import { signIn } from 'next-auth/react'

export default function Register() {
 
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
