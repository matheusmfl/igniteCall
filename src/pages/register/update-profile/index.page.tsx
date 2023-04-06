import { Button, Heading, MultiStep, Text, TextArea } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../style'
import { FormAnnotation, ProfileBox } from './styles'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { useSession } from 'next-auth/react'

const UpdateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof UpdateProfileSchema>

export default function UpdateProfile() {
  const session = useSession()

  console.log(session)

  const {
    register,
    handleSubmit,

    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(UpdateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileData) {}
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>
      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>
        </label>

        <label>
          <Text size="sm">Sobre você</Text>
          <TextArea placeholder="seu-nome" {...register('bio')} />
          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
