import React from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Mensagem(){
    const [student, setStudent] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const[msg, setMsg] = React.useState(false);
    const [nome, setNome] = React.useState(""); 
    const [mensagem, setMensagens] = React.useState(""); 


    React.useEffect(async () => {
        const url = "http://localhost:3333/contato";
        const response = await fetch(url);
        setStudent(await response.json());
    }, [render])

    function handleSubmit(event) {
        event.preventDefault();
        // let formData = new FormData(event.target)
        const formData={
            nome: nome,
            msg: mensagem,
        }
        const url = "http://localhost:3333/contato";
        fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((dados)=> {
            setRender(!render);
            setMensagens(""); 
            setNome("");
            setMsg(dados);
            setTimeout(() => {
                setMsg(false);
            }, 2000)
        })
    }
        return (

            <main>
                <h2 className="m-3 text-center">Mande sua Mensagem </h2>
                <section className="container">

                </section>

                <form onSubmit={handleSubmit} className="container my-3 p-3 pg-light rounded shadow-lg" method="post">
                    <div className="form-group text-center">
                        <label><strong>NOME: </strong></label>
                        <input value={nome} onChange={(event) => setNome(event.target.value)}  class="form-control" type="text" name="nome" />
                        <label><strong>MENSAGEM: </strong></label>
                        <textarea value={mensagem} onChange={(event) => setMensagens(event.target.value)} class="form-control" name="msg"></textarea>
                        <input className="btn btn-warning m-3" type="submit" name="submit" value="Enviar Mensagem" />
                    </div>
                </form>
                {msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Mensagem Enviada!
                    </div>}

                <div className="container my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0 text-center">Todas as mensagens
                    </h6>
                        {student.map(
                           row => 
                        
                    <div className="media text-muted pt-3">
                        <FontAwesomeIcon className="m-2" icon={faUserCircle} size="2x" />
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">{row.nome}</strong>
                        <p>{row.data}</p>
                            </div>
                            <p className="d-block">{row.msg}</p>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        )
    

}

