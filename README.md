Start command: npm start
Dev destination: http://localhost:3000/


Optimizations: 
- React.memo
- using drop events for apply changes (throttling resolved in d&d libs)
- using reselect (immutable state)


Troubleshooting d&d performance ((1,2 GHz Dual-Core Intel Core m5, 8 GB 1867 MHz LPDDR3))
- react-draggable has performance problems with 500 items and more
- react-konva has performance problems with 1000 items and more.

