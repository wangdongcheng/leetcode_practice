// 在html中应使用带有module类型的script。
// 示例:
//   <script type="module" src="./demo.js"></script>
//
// 在http服务器上访问，否则将会有一个CORS保护报错。
//
// script demo.js

import { cube, foo, graph } from 'my-module.js';
graph.options = {
    color:'blue',
    thickness:'3px'
}; 
graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888