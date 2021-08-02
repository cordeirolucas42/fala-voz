import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Programacao from "./programacao"
import Chamada from "./chamada"
import Depoimentos from "./depoimentos"

const Body = () => {
    const o_que_e = (
        <section className="bodySection backgroundB">
            <h2>Fale com firmeza em público</h2>
            <p>Essa imersão é uma oportunidade para você começar a superar a vergonha de se colocar no centro das atenções, nesse lugar em que todos te olham. Nesse evento, vou te ajudar a ocupar esse espaço de destaque de forma determinada e potente. Te convidando a experienciar o modo coragem, se sentindo capaz de se arriscar no palco da vida, se expressando de forma autêntica e natural.</p>
            <p>Eu sei que o desafio é grande, mas eu preciso que você confie, seremos parceiros nessa jornada. Eu já vive essa dor e tenho uma vasta experiência pessoal e profissional para lidar com desafios de forma responsável e afetiva. A metodologia que vou utilizar vai te deixar super à vontade para ativar o seu modo coragem e se arriscar a cada exercício. A proposta nesse trabalho é elevar a sua autoestima, liberando a opressão e aflorando em você a autoaceitação.</p>
            <p>Que você possa se lançar em qualquer que seja o palco que você deseja se manifestar e da forma que você está. Você já está pronto, basta saber o que vai falar, não precisa mais esperar!</p>
            <a class="button-small-text btn btn-lg" href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" target="_blank" rel="noreferrer">QUERO ME INSCREVER</a>
        </section>
    )
    
    const para_quem = (
        <section className="bodySection backgroundA">
            <h2>Para quem é destinada essa imersão?</h2>
            <p>Qualquer pessoa que queira trabalhar esse sentimento de incapacidade, de insegurança, de desvalor que gera timidez, nervosismo e vergonha para expressar suas ideias, conhecimentos e sentimentos publicamente, e que esteja aberta para encarar o medo e desenvolver o músculo da coragem.</p>
        </section>
    )
    
    const por_que = (
        <div className="bodySection justify-content-center">
            <div className="porqueSection">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <StaticImage width={1272} height={1272} className="marciaOportunidade" src="../images/oportunidades.JPG" alt="Foto Márcia Cipriano"></StaticImage>
                </div>
                <section className="porqueBlock">
                    <h2>Chega de perder oportunidades!</h2>
                    <p>Já pensou o que poderia estar fazendo ou vivendo se tivesse uma fala mais envolvente, firme e com paixão? Sem medo de chamar atenção! Já imaginou o que poderia acontecer, se você DECIDIR se comunicar e expandir a sua voz?</p>
                    <p>São tantas as situações que deixamos de viver, quer seja na vida pessoal ou profissional, por não termos coragem de nos posicionarmos publicamente. Não importa a situação, profissão, ramo, negócio ou atividade. Essa imersão é para você que cansou de perder oportunidades na vida ao sentir MEDO de se manifestar publicamente.</p>
                    <p>O medo que sentimos cria um isolamento assustador, não é mesmo?</p>
                    <p>O que você faria se não se sentisse inseguro?  E a sua voz, o que ela diria se pudesse falar? Quando encaramos os medos, superamos os nossos limites e assim podemos nos dar conta da grandeza que somos. Não abafe aquilo que quer sair, assuma a sua existência. A sua palavra poderá criar ressonâncias em outros corações. Se ofereça sem moderação!</p>
                    <p>É preciso reconhecer que dentro de nós existe uma força poderosa e transformadora. Mesmo que a sua mente diga para você que você não vai conseguir superar essa dificuldade, não acredite nisso.</p>
                </section>
                <section className="porqueBlock">
                    <h2>O impossível pode acontecer!</h2>
                    <p>Se dê essa chance, e você verá que esse medo do julgamento não vai mais te paralisar. Aceite o desafio e você vai descobrir o passo a passo para se lançar no “centro da roda”.</p>
                    <p>Sim, você pode se comunicar livremente. Expressar para o mundo o que faz o seu olho brilhar. A fala é uma ferramenta poderosa para revelar o seu conhecimento, as suas ideias, e sentimentos. Dizer o seu SIM e o seu NÃO, com assertividade, persuasão, se mostrando ao mundo e gerando conexão.</p>
                    <p>Meu convite é para que você solte toda essa potência de vida que mora em você. É isso que eu estou chamando de voz, não é só um conhecimento que você pode transmitir, mas também a forma que sai da sua boca, é diferente, é singular, ela carrega um sentido único.</p>
                    <p>E esse é o caminho que vamos percorrer nessa imersão. A partir dessa conexão com você, é que será possível sentir FIRMEZA ao falar em público. Cada módulo do curso trará exercícios que funcionarão como ensaios para que você chame a sua voz, convide os seus gestos para expandir o seu estilo pessoal, se posicionando naquilo que faz sentido para você.</p>
                </section>
            </div>            
        </div>
    )
    
    const sobre_mim = (
        <section className="bodySection backgroundB">
            <a href="https://www.instagram.com/marciaciprianoh/">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <StaticImage className="marciaPerfil" src="../images/marcia-perfil.jpg" alt="Foto Márcia Cipriano"></StaticImage>
                <h2>Sobre mim</h2>
            </div>
            </a>            
            <p>Trabalho com educação há mais de 30 anos e caminhei por muitos lugares profissionalmente. Sou licenciada em Filosofia e mestre em Educação, com especialização em Psicopedagogia e em Orientação Profissional.</p>
            <p>São mais de 20 anos atuando como psicóloga. Sou facilitadora de Biodança há quase 10 anos.</p>
            <p>Seja no papel de psicoterapeuta, palestrante, supervisora, mentora, professora ou facilitadora, me encanta este lugar de favorecer ao outro uma vivência consciente e transformadora nos processos de mudança.</p>
            <p>Hoje, sou especialista em fortalecer o músculo da CORAGEM. Afinal, foi necessário que eu alimentasse muito este sentimento para percorrer a minha caminhada. Sempre senti o medo pulsando na estrutura mente-corpo, mas o compromisso com a vida gritou mais alto. Na verdade, era apenas a própria vida ganhando o seu espaço.</p>
        </section>
    )
    return (
        <>
        <Chamada></Chamada>
        {o_que_e}
        {para_quem}
        {por_que}
        <Programacao></Programacao>
        <Depoimentos></Depoimentos>
        {sobre_mim}
        </>
    )
}

export default Body