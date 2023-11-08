import styled from "styled-components";

export const WrapperContainer = styled.div`
    width: 800px;
    height: 600px;
    margin-top: 80px;
    background-color: #262060;  
    text-align: center;
    padding: 20px;
    border-radius: 8px;

    h1{
        color: white;
        font-size: 2.25rem;
        margin: 20px;
    }
    button{
        width: 120px;
        height: 55px;
        border-radius: 8px;
        border: 2.5px solid rgba(255,255,255, 0.2);
        font-size: 1.25rem;
        color: white;
        background-color: #24295f;
        cursor: pointer;
        margin-left: 10px;
 
    }
    button:hover {
        opacity: 0.6;

    }
    .repositories{
        margin: 50px auto;
    
        padding: 20px;
        border-radius: 8px;
        width: 50%;
        border: 2.5px solid rgba(255,255,255, 0.2);

    }
    li{
        list-style: none;
        display: flex;
        padding-top: 8px;
        color: white;
        
    }
    li .linkRep{
        text-decoration: none;
        color: white;
      
    }

    box-shadow: 5px 5px 10px rgba(0,0,0,0.5)
`
export const InputFinder = styled.input`
    margin-top: 30px;
    width: 60%;
    padding: 10px;
    font-size: 1.25rem;
    border: 2.5px solid rgba(255,255,255, 0.2);
    background-color: #24295f;
    border-radius: 8px;
    outline: none;
    color: white;
    &::placeholder{
        color: rgba(255,255,255, 0.3);
     
    }
`
export const AppearContent = styled.div`

    width: 80%;
    height: 305px;
    border-radius: 5px;

    margin-top: 40px;
    margin-left: 80px;

    img{
        max-width: 120px;
        border: 2px solid rgba(255,255,255, 0.2);
        border-radius: 8px;
        
    }
    p{
        margin-top: 20px;
        color: white;
        font-size: 1.15rem;
    }
    span{
        margin-left: 5px

    }
    .buttonRepo{
        margin-top: 20px;
        width: 160px;
        height: 55px;
        border-radius: 8px;
        border: 2.5px solid rgba(255,255,255, 0.2);
       
        background-color: #24295f;
    }
    .buttonRepo a{
        color: white;
        font-size: 1.25rem;
        text-decoration: none;
    }
    
    .buttonRepo:hover{
       opacity: 0.6;

    }


`
export const WrapperContainerResp = styled.div`
    h1{
        color: white;
    }
    width: 800px;
    height: 100%;
    margin-top: 20px;
    background-color: #262060;  
    text-align: center;
    padding: 20px;
    border-radius: 8px;

.repositories{
        margin: 50px auto;
    
        padding: 20px;
        border-radius: 8px;
        width: 50%;
        border: 2.5px solid rgba(255,255,255, 0.2);

    }
    li{
        list-style: none;
        display: flex;
        padding-top: 8px;
        color: white;
        justify-content: space-between;
    }
    li .linkRep{
        text-decoration: none;
        color: white;
      
    }
    li .linkRep:hover{
        color: rgba(255,255,255,0.5);
    }
    .buttonBack{

        width: 160px;
        height: 55px;
        border-radius: 8px;
        border: 2.5px solid rgba(255,255,255, 0.2);
        background-color: #24295f;
        cursor: pointer;
   
    }
    a{
        color: white;
        font-size: 1.25rem;
        text-decoration: none;
    }


`