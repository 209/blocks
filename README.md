Start command: npm start

Dev destination: localhost:3000

Realization on Konva.js without React is faster than other.

Optimizations: 
- React.memo
- using drop events for apply changes.
If need update block position in process of move than I will use debounce/throttling function with delay 1s.
And I will exclude the movable block from areEqual of React.memo. 
- using reselect (immutable state)

Troubleshooting d&d performance ((1,2 GHz Dual-Core Intel Core m5, 8 GB 1867 MHz LPDDR3))
- react-draggable has performance problems with 500 items and more
- react-konva has performance problems with 1000 items and more.

Targets of this task: using redux and users performance.
Other functionality may has flaws. 

Boilerplate: https://github.com/react-boilerplate/react-boilerplate
