5373. 和为 K 的最少斐波那契数字数目

[贪心+简单证明](https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solution/tan-xin-jian-dan-zheng-ming-by-wyjoutstanding/)

wyjoutstanding  
发布于 2 小时前

贪心策略：打表计算出<=K的所有斐波那契数，从大到小每次选取<=K的数，再用K减去被选的数，当K=0时停止循环。

贪心证明:  
判定性：保证K一定能由斐波那契数组成，数据归纳法可证明

最小性：什么样的组合能最短？

相邻合并：
- 2个相邻的数可合并为二者的和，长度-1，因为f(n)=f(n-1)+f(n-2)。满足该条件的组合必定是间隔出现，但是又可能重现重复的值，这对于编程很不利。
- 重值转换：两个相同的值一定可以转换为两个不同的值，因为f(n)+f(n)=f(n)+f(n-1)+f(n-2)=f(n+1)+f(n-2)，一个比f(n)大，一个更小，这是等价转换，不会减小组合长度，但是会带来一个很好的性质，即单调递增性质。
因此，重复使用以上两个操作后的组合数列，必定是一个无相邻值的递增数列，由于数列均为正数且和为K，因此值越大个数自然越小。

```java
class Solution {
public:
    int findMinFibonacciNumbers(int k) { // 贪心算法：打表计算<=K的所有斐波那契数,从大到小贪心选数
        vector<int> fi{1,1};
        int c;
        for (int i=2; ; ++ i) { // 打表计算斐波那契数
            c = fi[i-1] + fi[i-2];
            if (c > k) break;
            fi.push_back(c);
        }
        int cnt=0, i=fi.size()-1;
        while (k > 0) { // 从大到小贪心选取
            if (k >= fi[i]) k -= fi[i], ++ cnt;
            -- i;
        }
        return cnt;
    }
};
```