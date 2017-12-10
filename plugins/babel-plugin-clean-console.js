// export default function({ types: t }) {
//     return {
//         visitor: {
//             FunctionDeclaration(path, state) {
//                 console.log('path = ', path);
//                 console.log('state = ', state);
//                 // { option1: true, option2: false }
//             }
//         }
//     }
// }
/*

 module.exports = function ({ types: t }) {
 return {
 visitor: {
 Program(path, file) {
 path.unshiftContainer('body', t.expressionStatement(t.stringLiteral('use helloworld')));
 }
 }
 };
 };
 */

/*export default function ({ Plugin, types: t }) {
 return new Plugin("foo", {
 visitor: {
 ClassDeclaration(node, parent) {
 // Do something on a class declaration node.
 },
 FunctionDeclaration(node, parent) {
 // Do something on a function declaration node.
 }
 }
 });
 };*/

/*export default function () {
 return {
 visitor: {
 Identifier(path) {
 const name = path.node.name;
 // reverse the name: JavaScript -> tpircSavaJ
 path.node.name = name.split("").reverse().join("");
 }
 }
 };
 }*/

/*

 module.exports = function testPlugin(babel) {
 return {
 visitor: {
 Identifier(path) {
 if (path.node.name === 'foo') {
 path.node.name = 'bar';
 }
 }
 }
 };
 };*/
