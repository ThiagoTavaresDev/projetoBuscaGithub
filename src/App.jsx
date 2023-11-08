import {useState} from 'react'
import { AppearContent, InputFinder, WrapperContainer } from './Style'
import {FaLocationDot} from "react-icons/fa6";
import { Route, Routes , Link} from 'react-router-dom';
import { RepositorioPage } from './pages/RepositorioPage';

function App() {
    const [userValue, setUserValue] = useState('')
    const [data, setData] = useState(null)
    const [reposData, setReposData] = useState(null)
    function handleChangeInput (e) {
        setUserValue(e.target.value)

    }


    async function fetching(){
    const response = await fetch(`https://api.github.com/users/${userValue}`)

         const dataValue = await response.json()
         setData(dataValue)
        
    const responseRepos = await fetch(`https://api.github.com/users/${userValue}/repos`)

    const dataRepos = await responseRepos.json()
        setReposData(dataRepos)
    
        
    }
    function handleClickButton() {
        fetching()

    }
    console.log(data)


  return (
    <>  
        <Routes>
            <Route path='/' element={<WrapperContainer>
            <h1>Faça uma busca</h1>
          
            <InputFinder onChange={handleChangeInput} placeholder='Ex : ThiagoTavaresDev'>
   
            </InputFinder>
                {userValue ? <button onClick={handleClickButton}>Search</button> : ''}
            {data ? <AppearContent>
                <
                img src={data.avatar_url} alt="Photo"
                />
                <div>
                    <p>{data.location ? data.location: 'Não localizado'} {data.location ? <FaLocationDot/> : ''}</p>
                    <p>{data.bio}</p>
                    <p>
                        Respositórios Públicos:
                        <span>{data.public_repos}</span>
                    </p>
                    <button className='buttonRepo'><Link to='/rep'>Repositórios</Link></button>
                </div>
                </AppearContent> : ''}                  
        </WrapperContainer>}>

        </Route>
            <Route path='/rep' element={<RepositorioPage reposData={reposData}/>}>

            </Route>
        </Routes>
      
    </>
  )
}

export default App
