/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            st.push(s[i]); 
        } else {
            
            if (st.length > 0 &&
                ((st[st.length - 1] === '(' && s[i] === ')') ||
                 (st[st.length - 1] === '{' && s[i] === '}') ||
                 (st[st.length - 1] === '[' && s[i] === ']'))) {
                st.pop(); 
            } else {
                return false; 
            }
        }
    }
    
   
    return st.length === 0;
}

    


module.exports = { isValid };


