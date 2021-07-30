import * as React from "react"
// import Accordion from "react-bootstrap/Accordion"
import { Container,Row,Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import ThemeIcon from "./voice.png"

const Programacao = () => {
    const prog = {
        sexta_noite: {
            titulo: "É impossível não comunicar",
            data: "03/09",
            dia: "Sexta-Feira às 18h30",
            icone: ThemeIcon,
            topicos: [
                "A voz é uma expressão da identidade",
                "O valor da escuta no processo de comunicação",
                "Comunicação e emoção – a voz do corpo",
                "Construindo a sua Linha Mestra para uma fala autêntica"
            ]
        },
        sabado_manha: {
            titulo: "Medo, que bicho é esse?",
            data: "04/09",
            dia: "Sábado às 9h",
            icone: ThemeIcon,
            topicos: [
                "Conhecendo e desafiando os medos existenciais",
                "Rompendo com a autodesqualificação",
                "Elevando a autoestima e a autoaceitação",
                "Encarando a vergonha e ativando o modo coragem",
                "Práticas para aprender a lidar com o medo"
            ]
        },
        sabado_tarde: {
            titulo: "Fale com firmeza",
            data: "04/09",
            dia: "Sábado às 14h",
            icone: ThemeIcon,
            topicos: [
                "Os três pilares da expressão verbal",
                "Como se preparar para uma apresentação",
                "SIM e NÃO - Conversação assertiva nas relações interpessoais",
                "Práticas para aperfeiçoar um fala que gere conexão e intimidade"
            ]
        },
        domingo_manha: {
            titulo: "Chame a sua voz",
            data: "05/09",
            dia: "Domingo às 9h",
            icone: ThemeIcon,
            topicos: [
                "Ancorando a mudança e assumindo um posicionamento",
                "Preparação para a apresentação em grupo com feedback",
                "EU no centro da roda - mensagem, voz e presença"
            ]
        }
    }

    return (
        <div className="bodySection">
            <h2>Programação:</h2>
            <Container>
                {Object.keys(prog).map((key, index) => (
                    <Row xs={1} className="periodBlock">
                        <Col md={3} className="dateBlock d-flex flex-column justify-content-center align-items-center">
                            <p className="dateBig">{prog[key].data}</p>
                            <p className="dateSmall">{prog[key].dia}</p>
                        </Col>
                        <Col md={3} className="iconBlock d-flex flex-column justify-content-center align-items-center">
                            <img className="themeIcon" src={prog[key].icone} alt="ícone pessoa falando"></img>
                            <p className="themeTitle">{prog[key].titulo}</p>
                        </Col>
                        <Col md={6} className="listBlock d-flex flex-column justify-content-center align-items-center">
                            <ul>
                                {prog[key].topicos.map((topico) => (
                                    <li>{topico}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Programacao