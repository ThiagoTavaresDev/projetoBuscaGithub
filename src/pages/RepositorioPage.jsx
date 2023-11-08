import React from 'react'
import { WrapperContainerResp } from '../Style'
import { Link } from 'react-router-dom';
import {FaCode} from "react-icons/fa6";
export const RepositorioPage = ({reposData}) => {
  return (
    <>
    <WrapperContainerResp>
    <h1>Repositorios</h1>

        <div className="repositories">
            <ul>
            {reposData.map((item, index) => <li key={index}><a href={item.html_url} rel='noreferrer' className='linkRep' target='_blank'>{item.name}</a>
            <span className='iconList'>{<FaCode/>}</span>
            </li>
            
            )}
            </ul>
    
        </div>
        <button className='buttonBack'><Link to='/'>Voltar</Link></button>
    
    
    </WrapperContainerResp>
    </>
  )
}

