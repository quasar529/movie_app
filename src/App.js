import React from 'react';
import PropTypes from "prop-types"
// const foodILike=[
//   {
//     id:1,
//     name:'pepe',
//     image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vGxoyTuvBPe_iUK1M3l8xwHaEK%26pid%3DApi&f=1',
//     rating:5.0
//   },
//   {
//     id:2,
//     name:'steak',
//     image:'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
//     rating:4.8
//   },
//   {
//     id:3,
//     name:'coffee',
//     image:'https://i.pinimg.com/originals/4c/d0/0e/4cd00ea918c1791ab9e04f1ef660806f.jpg',
//     rating:4.5
//   }
// ]
// function Food({name, pic,rating}){
//   return (
//   <div>
//     <h2>I love {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={pic} alt={name}/>
//   </div>
//   );
// }
// Food.propTypes={
//   name:PropTypes.string.isRequired,
//   pic:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

class App extends React.Component{
  state={
    count:0
  };
  add=()=>{
    this.setState(current=>({count:current.count+1}));
  };
  minus=()=>{
    this.setState(current=>( {count:current.count-1}));
  };
  render(){
      return (
        <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        </div>
      )
  }
}

export default App;
