class Solution {
public:

    int myAtoi(string s) {
        int ptr = 0 , op = 0;
        long long num = 0;
        while(s[ptr]==' ')ptr++;
        while(ptr < s.length()){
            if(s[ptr] == '+' && op == 0){
                op = 1;
            }else if(s[ptr] == '-' && op == 0){
                op = -1;
            }else if('0' <= s[ptr] && s[ptr] <= '9'){
                if(op == 0) //have number here
                    op = 1;
                if(num > (2l<<33)){ //overflow
                    num = (2l<<33);
                    break;
                }
                num = num*10 + s[ptr]-'0';
            }else{
                break;
            }
            ptr++;
        }

        num *= op;

        if(num > INT_MAX)
            return INT_MAX;
        else if(num < INT_MIN)
            return INT_MIN;

        return (int)num;
    }
};