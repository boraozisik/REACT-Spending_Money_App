




function Header({total,money}){
    return(

        <>
            <div>
                {(total > 0 && money - total !== 0) && (

                    <div className='header'>
                        You have $ <span>{(money - total).toLocaleString()}</span> left to spend.
                    </div>

                )}
                {total === 0 && (

                    <div className='header'>
                        You have $ <span>{(money).toLocaleString()}</span> to spend.
                    </div>

                )}
                {money - total === 0 && (

                <div className='header'>
                   You are out of money!
                </div>

                )}  
                    
            </div>
            

        
        </>

    )
}

export default Header;