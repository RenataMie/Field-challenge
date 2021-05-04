import React from "react";

import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';

import ResultOutput from "./ResultOutput";

function ResultView({getResults, search, newSearch, page, selectPage, apiData}) {
    return (
    <div >
    <h1>Search</h1>
 
    <form action="" onSubmit={getResults}>
    <TextField id="outlined-basic"  variant="outlined" value={search} onChange={newSearch}/>
    </form>
    <Pagination count={100} variant="outlined" shape="rounded" page={page} onChange={selectPage} />
 
   {!search ? <p>Por favor, insira uma busca</p> : 
    <ResultOutput
             apiData={apiData}
             
           />
   
   }
   </div>
    )
};

export default ResultView;