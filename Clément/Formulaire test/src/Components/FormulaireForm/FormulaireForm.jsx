import React, { useState } from 'react';
import './FormulaireForm.css';
import { FaBookReader } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";

const FormulaireForm = (e) => {
    const [livre, setLivre] = useState("");
    const [titre, setTitre] = useState("");
    const [auteur, setAuteur] = useState("");
    const [etat, setEtat] = useState("");
    const [pages, setPages] = useState("");
    const [catégorie, setCatégorie] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Livre : ${livre} Titre : ${titre} Auteur : ${auteur} Pages : ${pages} Etat : ${etat} Catégorie : ${catégorie} `)
    };
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Formulaire</h1>
                <div className='input-box'>
                    <input type="text" id='livre' placeholder='Livre' value={livre} onChange={(e) => setLivre(e.target.value)} required />
                    <FaBookReader className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" id='titre' placeholder='Titre' value={titre} onChange={(e) => setTitre(e.target.value)} required />
                    <MdOutlineSubtitles className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" id='auteur' placeholder='Auteur' value={auteur} onChange={(e) => setAuteur(e.target.value)} required />
                    <FaPerson className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" id='etat' placeholder='Etat' value={etat} onChange={(e) => setEtat(e.target.value)} required />
                    <FaCheck className='icon' />
                </div>
                <div className='input-box'>
                    <input type="number" id='pages' placeholder='Pages' value={pages} onChange={(e) => setPages(e.target.value)} required />
                    <AiOutlineFieldNumber className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" id='catégorie' placeholder='Catégorie' value={catégorie} onChange={(e) => setCatégorie(e.target.value)} required />
                    <BiSolidCategory className='icon' />
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
};

export default FormulaireForm