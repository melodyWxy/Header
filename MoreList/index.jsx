import React,{Component} from 'react';
import styles from './index.less';


class MoreList extends Component{
    constructor(props){
        super(props)

    } 

    renderMoreList = (items) => {
        let topIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAHlBMVEVHcEwyMjIuLi4zMzMzMzMyMjIyMjIyMjIyMjIzMzOib7lxAAAACXRSTlMAgBzY8D5hoL+aQBqvAAABiklEQVRo3u2Yr2+DUBRGW1gB2YmJOpbN1NXOLXVzncQ1czhsXTM3Cayw+9/uB+l4DbzHfd/N1O7x96RfCidNZzNFURRFUZT/xu2L7H5OdBQJcqJWch88EdFOIEi+7ulRtoCoFAi+FxCl8H38c08bWJB1AnzDQyd4T/GnqAN9ltZnQQMK3s4CcENEvxSQ4L4XnCDBoRfUyP2CDJaAIDQFFSBYmYIPIAV0wV62gGiLpaCnhWJmskNiZrKRLfDeMFjguyEe3HtuyIaCEomZiVcU5jTCEYmZSYPEDNwQ0SgFEjOTExIzkxqKGRK20CaokJgBYQvIyl62gBu2lV3Qginwi0LiuGf9Ystdgla4gLMhdt4zwpa5BSUSswtSJGY+YVtPCRokZh5hi2iSAokZP2yHaUENxYwbtiuOoMJSwNrAWuAKW8gTbGULHHGeSMH0hoR5bw1bzhW0wgW2sMXse0vYMr6ghGI2FbbA4370i1z4CJZ/8Qk4MXG/kHd8wev4k/R8zeRG/19TFEUZ5xObLCFBcr89fwAAAABJRU5ErkJggg=='
        const moreList=items.map((item,index)=>{
            if(index===1){
                return null;
            }
            return (
                <div className={styles.itemWap} onClick={()=>this.props.callback(index)} key={index}>
                    <div className={styles.iconWap}>
                        <img src={item.icon} className={styles.icon}>
                        </img>
                    </div>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                </div>
            )
        })
        return (
            <div className={styles.moreWap}>
                <div className={styles.top}>
                    <img className={styles.topIcon} src={topIcon}/>
                </div>
                <div className={styles.list}>
                    {moreList}
                </div>
            </div>
        )
        
    }

    render(){
        const moreList = this.renderMoreList(this.props.options.options.items)
        return moreList
    }
}

export default MoreList