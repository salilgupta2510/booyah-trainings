import React  from "react";
import CardElement from "../elements/CardElement";

const CardData = [
    {title:"KSD", description:"This is KSD description"},
    {title:"KSI", description:"This is KSI description"},
    {title:"KMP", description:"This is KMP description"}
];
const InfoCards=({...props})=>{
    

    return(
        <section
            {...props}
            className='container'
            style={{ paddingTop: 0, borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >

        <div class="row">
            <div className="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                <CardElement data={CardData[0]}/>
            </div>
            <div class="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                <CardElement data={CardData[1]}/>
            </div>
            <div class="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                 <CardElement data={CardData[2]}/>
            </div>
        </div>
        </section>
    )
}

export default InfoCards;