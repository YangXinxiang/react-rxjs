/**
 * 这是一个高阶组件，也就是一个产生组件的组件。
 * 该组件的数据通过 observableFactory 产生的 Observable 对象提供。
 */
import react,{ Component } from "react";
export default function observe(WrappedComponent, observableFactory, defaultState){
    return class NewComponent extends Component{
        constructor(){
            super(...arguments);
            console.log(`[ho observe NewComponent] constructor :: enter, this.props = ${JSON.stringify(this.props)}`);
            this.state = defaultState;
            // debugger;
            this.props$ = observableFactory(this.props, this.state);
        }

        render(){
            console.log(`[ho observe NewComponent] render :: enter, this.state = ${JSON.stringify(this.state)}`);
            // 书上有写要展开 {...this.props$}， 我认为这是没有必要的，因为this.props$ 这是一个Observable对象（准确的说是一个BehaviorSubject）
            // 没有必要传给傻瓜组件，只要把它的数据传给傻瓜组件就好。这里做备注，但是代码里也没也还是抄写上哈。
            // 哈哈哈，是我看走眼啦，this.props是要展开的，是父级传入进来的，注意不是this.props$哈，变量名字起的不好。。。
            return <WrappedComponent  {...this.state} {...this.props}>
            </WrappedComponent>
        }

        componentDidMount(){
            this.subscribtion = this.props$.subscribe(
                value => {
                    debugger;
                    console.log(`[ho observe NewComponent] componentDidMount :: in next, value = ${JSON.stringify(value)}`);
                    this.setState(
                        value
                    )
                }
            )
        }
        componentWillUnmount(){
            this.subscribtion.unsubscribe();
        }

    }
}