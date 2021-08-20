import react from 'react'
import './listaCarros.css'



function ListaDeCarro(){

  return(
          
    <div className="lista-honda">

       <img className="honda" src='honda.jpg'/> 
       <h1 className='titulo-honda'> Honda Civic</h1>
    
      <nav ClassName="honda">
         <li>Chassis: 890</li>
         <li>Renavam:12345</li>
         <li>Placa:OAB-1902</li>
         <li>Modelo:Honda Civic 2018</li>
         <li>Marca:Hondan</li>
         <li>Ano:2018 </li>
      </nav>
         
     
  
    </div>





  );

} export default ListaDeCarro;