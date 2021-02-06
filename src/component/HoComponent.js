/**
 * 这是一个高阶组件，也就是一个产生组件的组件。
 * 该组件的数据通过 observableFactory 产生的 Observable 对象提供。
 */
import react,{ Component } from "react";
export default function observe(WrappedComponent, observableFactory, defaultState){
    return class NewComponent extends Component{
        constructor(){
            super(...arguments);
            console.log(`[ho observe NewComponent] constructor :: enter.`);
            this.state = defaultState;
            this.props$ = observableFactory(this.props, this.state);
        }

        render(){
            console.log(`[ho observe NewComponent] render :: enter, this.state = ${JSON.stringify(this.state)}`);
            // 书上有写要展开 {...this.props$}， 我认为这是没有必要的，因为this.props$ 这是一个Observable对象（准确的说是一个BehaviorSubject）
            // 没有必要传给傻瓜组件，只要把它的数据传给傻瓜组件就好。这里做备注，但是代码里也没也还是抄写上哈。
            return <WrappedComponent  {...this.state} {...this.props$}>
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