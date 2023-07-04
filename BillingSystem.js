import React, { useState } from 'react'

function BillingSystem() {

    const [amount, setamount] = useState(0);
    const [tip, settip] = useState(0);
    const [persons, setpersons] = useState(0);

    const [tipamount, settipamount] = useState(0);
    const [totalamount, settoamount] = useState(0);

    const [showTextbox, setShowTextbox] = useState(false);
    const [erroramount, seterroramount] = useState(false);
    const [buttonvalue, setbuttonvalue] = useState('Custom');
    const [errorpeson, seterrorperson] = useState(false);

    //billamount button
    const billamount = (e) => {

        e.preventDefault();

        if (amount <= 0) {
            seterroramount("Amount value should be grather than 0");
        }
        else if (persons <= 0) {
            seterrorperson("Person value should be grather than 0")
        }
        else {
            settipamount(amount * tip / 100 / persons);
            settoamount((amount / persons) + amount * tip / 100 / persons);
            seterroramount(false);
            seterrorperson(false);
        }
    }

    //Custom button 
    const customtext = () => {
        if (!showTextbox) {
            setbuttonvalue("Hide");
            setShowTextbox(true);
        }
        else {
            setbuttonvalue("Custom");
            setShowTextbox(false)
        }
    }

    const clearamount = () => {
        settoamount(0);
        settipamount(0);
    }

    return (
        <div className='container mt-5'>
            <div className="card main-card bg-light shadow-lg p-4 mb-2 rounded" style={{ width: 600, height: 350 }}>
                <h5 className="card-title text-center">Biling System</h5>
                <form onSubmit={billamount}>
                    <div className="row">
                        <div className="col-md-7 mt-2 col-sm-6">
                            <input type="text" className="form-control mb-2 amounttext" onChange={(e) => setamount(e.target.value)} placeholder="Enter the Amount" required />
                            {erroramount ? <div style={{ color: 'red' }}>{erroramount}</div> : <></>}
                            <label>Select Tip</label>
                            <div className='tips mb-3 mt-1'>
                                <input type='radio' className='tipvalue' name='tip' value={5} onChange={(e) => settip(e.target.value)} />5%
                                <input type='radio' className='tipvalue' name='tip' value={10} onChange={(e) => settip(e.target.value)} />10%
                                <input type='radio' className='tipvalue' name='tip' value={15} onChange={(e) => settip(e.target.value)} />15%
                                <input type='radio' className='tipvalue' name='tip' value={20} onChange={(e) => settip(e.target.value)} />20%
                                {showTextbox ?
                                    <input type="text" placeholder="Enter Tip" onChange={(e) => settip(e.target.value)} style={{ width: 80 }} />
                                    : <></>}
                                <input type="button" name="custom" id="ctext" value={buttonvalue} onClick={customtext} />
                            </div>
                            <label className='text'>No of people</label>
                            <input type="number" className="form-control mt-2 " onChange={(e) => setpersons(e.target.value)} placeholder="Enter the Number Of People" required />
                            {errorpeson ? <div style={{ color: 'red' }}>{errorpeson}</div> : <></>}
                            <input type='submit' className='mt-2' id="ctext" value="Submit" />
                        </div>
                        <div className='card col-md-5 right mt-2 col-sm-6'>
                            <h5>Tip Amount ${tipamount.toFixed(2)}</h5>
                            <h5>Total Amount  ${totalamount.toFixed(2)}</h5>
                            <input type="reset" value='Reset' onClick={clearamount} className="btn-reset" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default BillingSystem

