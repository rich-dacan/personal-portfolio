// Styles
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

// Components
import { Project } from "@/components/Project";
import { Stack } from "@/components/Stack";

// Data
import { backData, frontData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import Typewriter from "typewriter-effect";
import {
  Header, HeaderButtonsArea, HeaderContent, ProjectAreaWrapperColumns, ProjectsArea, ProjectsAreaContent, ProjectsAreaSocialMediaMessage, StackCards, StackSection
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text type="heading3" color="grey5">
              Seja bem vindo, meu nome é
            </Text>
            <Text as="h1" type="heading1" color="grey5">
              Richard Cândido
            </Text>
            <Text type="heading4" color="grey6">
              e, profissionalmente, eu sou um
            </Text>
            <Text type="heading1" color="brand1">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter)=> {

                typewriter
                
                .typeString("Desenvolvedor web full-stack")
                  
                .pauseFor(3000)
                .start();
                }}
              />
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" type="primary">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="icon" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>

      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading2" color="grey1">
            Tecnologias e ferramentas que domino
          </Text>
          <Text as="h4" type="heading4" color="brand1">
            Front-end:
          </Text>
          <StackCards>
            {frontData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
          <Text as="h4" type="heading4" color="brand1">
            Back-end:
          </Text>
          <StackCards>
            {backData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
