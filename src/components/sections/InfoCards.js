import React  from "react";
import CardElement from "../elements/CardElement";
import { useHistory } from 'react-router-dom';

const CardData = [
    {title:"KSD", description:"Learn the basics of Kanban, flow, and how to design a Kanban system."},
    {title:"KSI", description:"Learn to evolve, improve, and scale a Kanban system."},
    {title:"KMP", description:"Learn to design a Kanban system and evolve and scale it beyond the team."}
];
const InfoCards=({...props})=>{

  const history = useHistory();

  const routeToCalendar = () =>{ 
    history.push('/calendar');
    }

    const routeToKSI = () =>{ 
      history.push('/KSI');
    }

    const routeToKSD = () =>{ 
      history.push('/KSD');
    }

    const onClickFindKSI = () =>{
        history.push({
            pathname:'/calendar',
            state : 'KSI'
        })
      }

      const onClickFindKSD = () =>{
        history.push({
            pathname:'/calendar',
            state : 'KSD'
        })
      }

      const onClickFindKMP = () =>{
        history.push({
            pathname:'/calendar',
            state : 'ALL'
        })
      }
    

    return(
        <section
            {...props}
            className='container'
            style={{ paddingTop: 0, borderWidth: 1, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
        >

        <div class="row">
            <div className="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                <CardElement data={CardData[0]} exploreClickEvent={routeToKSD} findClickEvent={onClickFindKSD}/>
            </div>
            <div class="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                <CardElement data={CardData[1]} exploreClickEvent={routeToKSI} findClickEvent={onClickFindKSI}/>
            </div>
            <div class="col-md-4 col-sm-6" style={{paddingBottom:8}}>
                 <CardElement data={CardData[2]} exploreClickEvent={routeToKSD} findClickEvent={onClickFindKMP}/>
            </div>
        </div>
        </section>
    )
}

export default InfoCards;