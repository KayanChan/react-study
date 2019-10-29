## React
### 开发心得

#### ES6
经过这两周的学习，对`React`的感受就是`all in js`，语法更加接近原生js。
通过JSX语法在JavaScript中写HTML代码，而CSS则利用`CSS in JS`的形式。
在React开发过程中，大量运用到ES6的各种特性，例如`Class`、`import/export`、变量的解构、`Decorator`等等。

#### JSX
HTML通过`jsx -> js -> DOM`编译处理，其只有一个顶级元素。
`JSX`语法实际用`JavaScript`对象来描述每一个`DOM`元素的结构。
可结合`Virtual DOM`和`React Diff`来处理真是DOM的变化，可达到提高页面渲染效率的目的。

#### 组件化思想
React是基于组件化的思想进行开发的js框架。
每个组件的功能单一清晰，具备一定的复用性。
对比传统开发模式，组件化的模式降低了代码复杂度，提高了代码可读性和可维护性。

### 核心概念
#### 组件
  1. 函数组件(**尽量使用无状态组件**)
      * 接收唯一带有数据的`props`（代表属性）对象与并返回一个`React`元素
      * 本质上就是`JavaScript`函数
      * 无状态组件：不涉及到要`state`状态的操作
      * 否则，利用React16.8新增特性`React Hook`处理`state`和生命周期等其他特性
        ```javascript
          function Welcome(props) {
            // 使用ref来获取组件挂载到dom中后所指向的dom元素
            return <h1>Hello, <span ref={(node) => ref = node}>{props.name}</span></h1>;
          }
        ```

2. React.Component(**需要state、生命周期方法等推荐使用**)
    * 以ES6的形式来创建react的组件
    * 是React目前极为推荐的创建有状态组件的方式
    * 最终会取代`React.createClass`形式

    ```javascript
      class Contacts extends React.Component {
        static propTypes = {//类的静态属性
            name: React.PropTypes.string
        };

        static defaultProps = {//类的静态属性
            name: ''
        };

        constructor(props) {
          super(props);
          this.state = {};
        }
        handleClick() {
          console.log(this); // null
        }
        render() {
          return (
            <div onClick={this.handleClick}></div>
          );
      }
    ```

3. `React.createClass`(**不建议使用此方式,仅了解**)
  `ES5`的原生的JavaScript来实现的React组件

    ```javascript
      var InputControlES5 = React.createClass({
        propTypes: {//定义传入props中的属性各种类型
            initialValue: React.PropTypes.string
        },
        defaultProps: { //组件默认的props对象
            initialValue: ''
        },
        // 设置 initial state
        getInitialState: function() {//组件相关的状态对象
            return {
                text: this.props.initialValue || 'placeholder'
            };
        },
        handleChange: function(event) {
            consoel.log(this);//this represents react component instance
            this.setState({
                text: event.target.value
            });
        },
        render: function() {
            return (
                <div>
                    Type something:
                    <input onChange={this.handleChange} value={this.state.text} />
                </div>
            );
        }
      });
    ```

#### setState运行机制
  * `setState`是异步操作函数
  * `setState`是同步执行的，但是`state`并不一定会同步更新
  * 经过React处理的事件(生命周期钩子和类似通过onClick引发的合成事件)是不会同步更新`this.state`
  * 通过`addEventListener`、`setTimeout/setInterval`、`promise`等异步方式处理的则会同步更新`this.state`
  * 受控组件(表单元素（如`<input>、 <textarea> 和 <select>`）之类的)通常自己维护`state`，并根据用户输入进行更新
  * 保证setState的同步更新的两种方式:
    1. 传入状态计算函数(setState的第二个参数)
        ```javascript
        this.setState((prevState, props) => {
          return {count: prevState.count + 1}
        })
        ```
    2. ES7的`Async/Await`实现异步转同步

#### 生命周期管理
  * constructor: 组件自身的状态的初始化（state初始化）

  * componentWillMount（新版使用static getDerivedStateFromProps()处理）： 组件挂载开始之前，在组件调用`render`方法之前调用（Ajax 数据的拉取操作、一些定时器的启动）

  * render: `DOM`元素已经插入页面，视图渲染

  * componentDidMount: 组件挂载完成以后，也就是`DOM`元素已经插入页面后调用（依赖的DOM，如动画的启动, 自动focus）

  * componentWillUnmount: 组件对应的`DOM`元素从页面中删除之前调用（定时器的清除）

  * componentDidUpdate: 组件的`props`或`state`发生变化时会触发更新
