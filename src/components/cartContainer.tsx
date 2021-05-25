import React, {useState, useEffect, useRef} from 'react';
import './cartContainer.css';
import {ReactComponent as Close} from '../icons/close-outline.svg';
import {ReactComponent as Add} from '../icons/add-outline.svg';


  
interface pro {
    onSum: any
}

const CartContainer: React.FC<pro> = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const textInput = useRef<HTMLLinkElement>();
    const [idCount, setIdCount] = useState(0);
    const [items, setItems] = useState([{id: 0, title: "", price: "", num:1}]);
    const [price, setPrice] = useState<any | null>(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    });

    useEffect(() => {
        let sum = 0;
        items.forEach(value => {
            if(value.price.length>0)
            sum += parseFloat(value.price)*value.num ;
        });
        if(typeof sum !== 'undefined') {
            setPrice(sum);
        }
        props.onSum(sum);


    }, [items]);


    useEffect(() => {
        setIdCount(idCount + 1)

    }, [items.length]);

    const onUpdate = (id: number, title: any, price: any | null, num: any) => {
        
        //const updatedItem = items.filter(item => item.id !== id);
        //setItems([...updatedItem, {id, title, price, num}]);

        const updatedItems: any | null= items.map((item) => {
            if(item.id === id) {
                return({id, title, price, num});
            } else return item;
        });
        
        setItems(updatedItems);
        
    }

    const onDelete = (id: number) => {
        
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        
    }

    
    const onAdd = () => {
        setItems([...items, {id: idCount, title:"", price: "", num: 1} ])
    }

    
    const largeScreen = <colgroup>
        <col style={{width:"60%"}}/>
        <col style={{width:"20%"}}/>
        <col style={{width:"10%"}}/>
        <col style={{width:"10%"}}/>
    </colgroup> 

    const smallScreen = <colgroup>
        <col style={{width:"45%"}}/>
        <col style={{width:"25%"}}/>
        <col style={{width:"20%"}}/>
        <col style={{width:"10%"}}/>
    </colgroup> 


  return (
      <section>

          

        
                
                <div className="tbl-header">
                    <table>
                        {screenWidth > 720? largeScreen : smallScreen}
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th></th>
                        </tr>
                    </thead>
                    </table>
                </div>
                <div className="inputField" > 
            {items.map(i => (
                // <div style={{display: "block"}}>
                //     <div style={{display: "inline-block", margin: 20}}><input className="inputPrompt" type="text" name="item" onChange={e => onUpdate(i.id, e.target.value, i.price, i.num)} value={i.title} /></div>
                //     <div style={{display: "inline-block", margin: 20, width: "10%", alignItems: 'right'}}><input className="inputPrompt" type="number"  name="price"  onChange={e => onUpdate(i.id, i.title, e.target.value, i.num)} value={i.price}/> </div>
                //     <div style={{display: "inline-block", marginLeft: 10}}><button onClick={e => onDelete(i.id)}><Close className="close-svg"></Close></button></div>
                    
                // </div>
                <div className="tbl-content">
                    <table >
                    {screenWidth > 720? largeScreen : smallScreen}
                        <tbody>
                            <tr>
                            <td><div className="inputContainer"><input className="inputPrompt" type="text" name="item" onChange={e => onUpdate(i.id, e.target.value, i.price, i.num)} value={i.title} /></div></td>
                            <td><div className="inputContainer"><input className="inputPrompt" type="number"  name="price"  onChange={e => onUpdate(i.id, i.title, e.target.value, i.num)} value={i.price.toLocaleString()}/></div></td>
                            <td><div className="inputContainer"><input style={{textAlign: "center"}} className="inputPrompt numbers" type="number"  name="count"  onChange={e => onUpdate(i.id, i.title, i.price, e.target.value)} value={i.num}/></div></td>
                            <td><div className="inputContainer"><button onClick={e => onDelete(i.id)}><Close className="close-svg"></Close></button></div></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            ))}
        </div>

        <div>
            <button onClick={onAdd}><Add className="add-svg"></Add></button>
        </div>

      </section>
    
  );
}

export default CartContainer;