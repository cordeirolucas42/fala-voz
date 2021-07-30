import * as React from "react"
import MarciaPerfil from "./marcia-perfil.jpg"
import Programacao from "../components/programacao"

const Body = () => {
    const o_que_e = (
        <section className="bodySection">
            <h2>Fale com firmeza em público</h2>
            <p>Essa imersão é uma oportunidade para você superar a vergonha de se colocar no centro das atenções, nesse lugar em que todos te olham.</p>
            <p>Nessa imersão vou te ajudar a ocupar esse espaço de destaque de forma determinada e potente. Vencendo as barreiras que te impedem de ter coragem e entusiasmo para se expressar de forma autêntica e natural.</p>
            <p>Eu sei que o desafio é grande, mas eu preciso que você confie, seremos parceiros nessa jornada, eu já vive essa dor e tenho uma vasta experiência pessoal e profissional para lidar com desafios de forma responsável e afetiva.</p>
            <p>A metodologia que eu vou utilizar vai te deixar super à vontade para ativar o seu modo coragem e se arriscar a cada exercício. A proposta nesse trabalho é elevar a sua autoestima, liberando a opressão e aflorando em você uma autoaceitação.</p>
            <p>Que você possa se lançar em qualquer que seja o palco que você deseja se manifestar e da forma que você estar. Você já está pronto, basta saber o que vai falar, não precisa mais esperar.</p>
            <p><a class="button-small-text" href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" target="_blank" rel="noreferrer"> <img src="https://www.sympla.com.br/images/btn-register-widget.png" alt="Botão para se inscrever no site da Sympla"></img></a></p>
        </section>
    )
    
    const para_quem = (
        <section className="bodySection">
            <h2>Para quem é destinada essa imersão?</h2>
            <p>Qualquer pessoa que queria trabalhar esse sentimento de incapacidade, de insegurança, de desvalor que gera timidez, nervosismo e vergonha para expressar suas ideias, conhecimentos e sentimentos publicamente, e que esteja aberta para encarar o medo e desenvolver o músculo da coragem.</p>
        </section>
    )
    
    const por_que = (
        <section className="bodySection">
            <h2>Chega de perder oportunidades!</h2>
            <p>Já pensou o que poderia estar fazendo ou vivendo se tivesse uma fala mais envolvente, firme e com paixão? Sem medo de chamar atenção! Já imaginou o que poderia acontecer, se você DECIDIR comunicar e expandir a sua voz?</p>
            <p>São tantas as situações que deixamos de viver, quer seja na vida pessoal ou profissional por não termos coragem de nos posicionarmos publicamente.</p>
            <p>Não importa a situação, ou profissão, ramo, negócio ou atividade. Essa imersão é para você que cansou de perder oportunidade na vida ao sentir MEDO de se manifestar publicamente.</p>
            <p>O medo que sentimos cria um isolamento assustador, não é mesmo?</p>
            <p>O que você faria se não se sentisse inseguro?  E a sua voz o que ela diria se pudesse falar? Quando encaramos os medos superamos os nossos limites e assim podemos nos dar conta da grandeza que somos.</p>
            <p>Não abafe aquilo que quer sair, assuma a sua existência. A sua palavra poderá criar ressonâncias em outros corações. Se ofereça sem moderação!</p>
            <p>É preciso reconhecer que dentro de nós existe uma força poderosa e transformadora. Mesmo que a sua mente diga para você que você não vai conseguir superar essa dificuldade, não acredite nisso.</p>
    
            <h2>O impossível pode acontecer!</h2>
            <p>Se dê essa chance, e você verá que esse medo do julgamento não vai mais te paralisar, aceite o desafio e você vai descobrir o passo a passo para se lançar no “centro da roda”.</p>
            <p>Sim, você pode se comunicar livremente. Expressar para o mundo o que faz teu olho brilhar.</p>
            <p>A fala é uma ferramenta poderosa para revelar o seu conhecimento, as suas ideias, e sentimentos. Dizer o seu SIM e o seu NÃO, com assertividade, persuasão, se mostrando ao mundo e gerando conexão.</p>
            <p>Meu convite é para que você solte toda essa potência de vida que mora em você.</p>
            <p>É isso que eu estou chamando de voz, não é só um conhecimento que você pode transmitir, mas, a forma que sai da sua boca, é diferente, é singular, ela carrega um sentido único.</p>
            <p>E esse é o caminho que vamos percorrer nessa imersão. A partir dessa conexão com você, é que será possível sentir FIRMEZA ao falar em público.</p>
            <p>Cada módulo do curso trará exercícios que funcionarão como ensaios para que você chame a sua voz, convide os seus gestos para expandir o seu estilo pessoal, se posicionando naquilo que faz sentido para você.</p>
        </section>
    )
    
    const sobre_mim = (
        <section className="bodySection">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img className="marciaPerfil" src={MarciaPerfil} alt="Foto Márcia Cipriano"></img>
                <h2>Sobre mim</h2>
            </div>
            <p>Trabalho com educação há mais de 30 anos e caminhei por muitos lugares profissionalmente. Sou licenciada em Filosofia e mestre em Educação, com especialização em Psicopedagogia e em Orientação Profissional.</p>
            <p>São mais de 20 anos atuando como psicóloga. Sou facilitadora de Biodança há quase 10 anos.</p>
            <p>Seja no papel de psicoterapeuta, palestrante, supervisora, mentora, professora ou facilitadora, me encanta este lugar de favorecer ao outro uma vivência consciente e transformadora nos processos de mudança.</p>
            <p>Hoje, sou especialista em fortalecer o músculo da CORAGEM. Afinal, foi necessário que eu alimentasse muito este sentimento para percorrer a minha caminhada. Sempre senti o medo pulsando na estrutura mente-corpo, mas o compromisso com a vida gritou mais alto. Na verdade, era apenas a própria vida ganhando o seu espaço.</p>
        </section>
    )
    return (
        <>
        {o_que_e}
        {para_quem}
        {por_que}
        <Programacao></Programacao>
        {sobre_mim}
        </>
    )
}

export default Body