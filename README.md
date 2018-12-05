# Header简介
Header导航栏组件位于界面顶部，提供了当前界面的标题、当前界面的行动点以及返回上一界面的按钮。
我们通过配置它的props，来控制它的功能复杂度。

## install
	……
	

## 引用
	……
  
  
   
### props
参数 | 类型 | 默认 | 描述
--- | --- | --- | --------
titleOptions | Object | - | Header导航栏的标题配置项,可配置options和callback两个属性；参考titleOptions
leftOptions | Object（可选） | - | Header导航栏左侧的返回按钮配置项，可配置options和callback两个属性，参考titleOptions；默认不配置
rightOptions | object （可选）| - | Header导航栏右侧的功能按钮配置项，可配置options和callback两个属性，参考titleOptions；默认不配置
isShow | Boolean（可选） | true | 控制导航栏配置后是否隐藏.注意：该属性的调用会在页面渲染完成之后才执行，所以会有先出现Header，然后消失。如果需要一开始就没有Header的，请在页面url后面增加参数 navigationBar=false


### titleOptions

#### titleOptions.options
类型可用String和Object；
1 options(String)  //只配置主标题

2 options(Object)：
title(string): 主标题
subTitle(string): 副标题

#### 配置示例
```
// option 为 String
const titleOption = {
    options:'主标题'，
    callback:(state)=>{
        alert(state)
    }
}
// options 为 Object
const titleOptions = {
    options:{
        title:'主标题'
    },
    callback:(state)=>{
        alert(state)
    }
}
```
#### titleOptions.callback
类型 Function
title render后的回调函数，形参为渲染状态返回，native端成功返回WX_SUCCESS，失败返回WX_FAILED；web端成功返回WEB_SUCCESS，失败返回WEB_FAILED；

### leftOptions

#### leftOptions.options
类型可用String和Object；
1 options(String) ：只配置文字
要设置的文字
2 options(Object)
title(string): 按钮的文字
icon(string): 按钮的图标，icon和title都设置时会同时存在
iconType(string): icon类型，包含“native”,“base64”,“http”，三种类型，分别代表app本地图片，base64字符串图片，网络图片

#### 配置示例
```
//string
const backOption = {
    options:'关闭',
    callback:()=>{
        alert('1')
    }
}

//Object
const leftOptions = {
    options:{
        title:'关闭'
    },
    callback:()=>{
        alert('1')
    }
}
```
#### leftOptions.callback
类型 Function
描述：点击 按钮/文字后的回调函数

### rightOptions

#### rightOptions.options
options(Object)
1 多按钮配置：
items(array): 按钮的列表数组
	.title(string): 按钮的文字
	.icon(string): 按钮的图标
	.iconType(string): icon类型，包含“native”,“base64”,“http”，三种类型，分别代表app本地图片，base64字符串图片，网络图片
2 单按钮配置
title(string): 按钮的文字
icon(string): 按钮的图标
iconType(string): icon类型，包含“native”,“base64”,“http”，三种类型，分别代表app本地图片，base64字符串图片，网络图片

#### 配置示例
```
//单个
const actionOption = {
    options:{
		title：'按钮1'
	},
    callback:(e)=>{alert(e.index)}
}

//多个
const rightOptions = {
    options:{
        items:[
            {  
                icon:'https://img.alicdn.com/tfs/TB10wK0iwHqK1RjSZFgXXa7JXXa-200-200.png',
                iconType:'http'
            },
           {  
                icon:'https://img.alicdn.com/tfs/TB10wK0iwHqK1RjSZFgXXa7JXXa-200-200.png',
                iconType:'http'
            },
        ],
    },
	callback:(index)=>{alert(index)}
}
```
#### rightOptions.callback
类型 Function
描述：点击按钮后的回调函数，形参为被点击的按钮的index
 如 ：
 ``` 
 (index) => {
  if (index) { 
    //按照按钮的顺序来判断点击了哪一个
  }
```




### 示例

```
//配置 titleOptions
const titleOptions = {
    options:{
        title:'主标题'
    },
    callback:(state)=>{
        alert(state)
    }
}
//配置 leftOptions
const leftOptions = {
    options:{
        title:'关闭'
    },
    callback:()=>{
        alert('1')
    }
}
//配置 rightOptions
const rightOptions = {
    options:{
        items:[
            {  
                icon:'https://img.alicdn.com/tfs/TB10wK0iwHqK1RjSZFgXXa7JXXa-200-200.png',
                iconType:'http'
            },
           {  
                icon:'https://img.alicdn.com/tfs/TB10wK0iwHqK1RjSZFgXXa7JXXa-200-200.png',
                iconType:'http'
            },
        ],
    },
    callback:(index)=>{alert(index)}
}
const isShow = true;


render(<Header 
    titleOptions={titleOptions}
    leftOptions={leftOptions} 
    rightOptions={rightOptions} 
    isShow={isShow}/>);

```
