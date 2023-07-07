import React from "react";
const ModalErrorLogin=(props)=>{
    const bool=false;
    function close(boolean){
        props.onModal(boolean);
    }
    //console.log(props.Message);

    return (
        <div className="Modal">
            <div className="containerError" onClick={()=>close(bool)}>
                <p>Champs vide ou information incorrect</p>
                <button>Fermer</button>
            </div>
        </div>
    );
}
export default ModalErrorLogin;