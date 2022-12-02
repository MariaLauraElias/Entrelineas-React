import {React, useState, useEffect} from 'react';
import ChartRow from './ChartRow';

// let tableRowsData = [
//     {
//         Title: 'Billy Elliot ',
//         Length: '123',
//         Rating: '5',
//         Categories: ['Drama','Comedia'],
//         Awards: 2
//     },
//     {
//         Title: 'Alicia en el país de las maravillas',
//         Length: '142',
//         Rating: '4.8',
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 3
//     },
    
// ]


function Chart (){
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/api/products')
          .then(res => res.json())
            .then((data)=>{
               console.log(data.data);
               setBooks(data.data);
             
            })
      },[])

      return (
        
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Precio</th>
                                <th>Género Literario</th>
                                <th>Categorias</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Precio</th>
                                <th>Género Literario</th>
                                <th>Categorias</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            
                            {
                           books.length > 0 && books.map( ( book , i) => {
                                return <ChartRow {...book} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       )
       
}

export default Chart;