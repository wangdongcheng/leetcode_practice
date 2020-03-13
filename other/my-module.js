// module "my-module.js"

// 需要在运行 node 时加 --experimentabl-modules 参数，并且扩展名是 mjs ，或者在 package.json 里相应设置，才可以在 node 里使用 ES module 。

// 本身 nodejs 连 esModule 都不支持 跟何况你用 * ;
// nodejs 本身是有自己的模块系统方式的
// require()
// module.exports
// 如果想要在nodejs中使用 esModule 建议参考 这个文档 nodejs es module(https://nodejs.org/dist/latest-v10.x/docs/api/esm.html)

function cube(x) {
    return x * x * x;
  }
  const foo = Math.PI + Math.SQRT2;
  var graph = {
      options: {
          color:'white',
          thickness:'2px'
      },
      draw: function() {
          console.log('From graph draw function');
      }
  }
  export { cube, foo, graph };