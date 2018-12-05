import React,{Component} from 'react';
import MoreList from './MoreList/index.jsx';
import styles from './index.less';
class Header extends Component{
    state={
        showMore:false
    }
    //render titleOptions

    renderTitle = () => {
        const {options} = this.props.titleOptions;
        if(typeof(options)==='string'){
            return (
                <div className={styles.titleStrTextWap}>
                    {options}
                </div>
            )
        }else{
            if(options.subTitle){
                return (
                <div className={styles.titleObjTextWap}>
                    <div className={styles.titleWap}>
                        {options.title}
                    </div>
                    <div className={styles.subTitleWap}>
                        {options.subTitle}
                    </div>
                </div>
                )
            }else{
                return (
                    <div className={styles.titleStrTextWap}>
                        <div className={styles.titleStrText}>
                            {options.title}
                        </div>
                    </div>
                )
            }
        }
    }
    // render left 
    renderLeft(){
        if(!this.props.leftOptions){
            return null;
        }
        const {options,callback} = this.props.leftOptions;
        if(!options){
            return null;
        }
        if(typeof(options)==='string'){
            console.log(options.length);
            return (
                <div className={styles.leftWap} onClick={callback}>
                    {options}
                </div>
            )
        }else{
            const icon = options.icon?(
                <div className={styles.leftIconWap} onClick={callback}>
                    <img src={options.icon} className={styles.leftIcon}/>
                </div>   
            ): null;
            let width = '0px';
            if(options.title){
                width = 30*options.title.length.toString()+'px';
            }
            const title = options.title?(
                <div className={styles.leftTitleWap} style={{width:width}}  onClick={callback}>
                    {options.title}
                </div>
            ): null;
           
            return(
                <div className={styles.leftWap} >
                    {icon}
                    {title}
                </div>
            )
        }
        
    }

    renderRightSingle = (options,index,callback) => {
        const {title,icon} =options;
        if(icon){
            return (
                <div className={styles.rightIconWap} onClick={()=>callback(index)} key={index}>
                    <img src={icon} className={styles.rightIcon}/>
                </div>
            )
        }else{
            let width = 0;
            return ( 
                <div className={styles.rightTitleWap}  onClick={()=>callback(index)} key={index}> 
                    <div className={styles.rightSingle} > 
                        {title}
                    </div>
                </div>
            )
        }
    }
    renderRightArr = (items,callback) => {
        const rightItems = items.map((item,index)=>{
            return this.renderRightSingle(item,index,callback)
        })
        return (
            <div className={styles.rightWap}>
                {rightItems}
            </div>
        )
    }
    renderMore = (items) =>{
        const newItems = [
            {
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAOVt656zIGaO1mnkAAAFGSURBVHja7dY9T8MwEIfxhresWZAYi2BgRIDECltHmGBk7FiBQF0LaXQfm5C0iVHvzlGhnp7f+rdzfkkcj0YAAAAAAAAAAAAAAABARHZ2VTjx6/XpbPveK28TEXk045s6XY7N+LiOy9tYjb2fGiJPRnzepJU1l/cmLseRIs/SttPnfNimcm+sVTtCWfo1PlZPkYUaT9exPtaTdfwyZCK1wpmIMYasiyt3R7pm6mAuurTUeh/1vb1dOeibfSrxpI8v3THInVMkaFa581SfMvWHuLklIjNnS9RNyYPYe7+CZsqCBIspX5ud98Pedo3cLzL3h/qriH30ZGGzB/sz0LcsXE0pti0SmcnAIkmWK8nGp3mFk3yMSY6VJAdkMOPdHfX9YHb500ry+01zkYhcifJ/uRINudz9oTcAAAAAAAAAAAAAAADQ+Ab58oMaxQJaTAAAAABJRU5ErkJggg==',
                iconType:'base64'
            },
            items[1]
        ]
        return this.renderRightArr(newItems,this.rightCallback);
    }
    rightCallback = (index) =>{
        const {callback} = this.props.rightOptions;
        if(index===1){
            return callback(index);
        }else{
            this.setState({
                showMore:!this.state.showMore
            })
        }
    }
    moreHandleClick = (index) => {
        const {callback} = this.props.rightOptions;
        callback(index);
        this.setState({
            showMore:false
        })
    }

    //render right
    renderRight = () =>{
        if(!this.props.rightOptions){
            return null;
        }
        const  {options,callback} = this.props.rightOptions;  
        if(!options){
            return null;
        }
        if(options.items){
            const length = options.items.length;
            if(length>2){
               return this.renderMore(options.items);
            }else{
               return  this.renderRightArr(options.items,callback)
            }
        }
        return this.renderRightSingle(options,0,callback);

    }
    componentDidMount(){
        const {callback} = this.props.titleOptions;
        if(callback){
            callback('WEB_SUCCESS');
        }
    }
    render(){
        const title = this.renderTitle();
        const left = this.renderLeft();
        const right = this.renderRight();
        const more = this.state.showMore&&(
            <MoreList 
                options={this.props.rightOptions}
                callback={this.moreHandleClick}  />
        );
        return (
            <div className={styles.placeholderWap}>
                <div className={styles.wap}>
                    <div className={styles.headerWap}>
                        <div className={styles.averageBox}>
                            {left}
                        </div>
                        <div className={styles.averageBox}>
                            {title}
                        </div>
                        <div className={styles.averageBox}>
                            {right}
                        </div>
                    </div>
                    {more}
                </div>
            </div>
        )
    }

}


export default Header;
