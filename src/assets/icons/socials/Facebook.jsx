

const Facebook = (props) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.00034H17V2.00034H16C15.203 1.96638 14.4077 2.09833 13.6643 2.38785C12.921 2.67736 12.2459 3.11811 11.6818 3.68218C11.1178 4.24625 10.677 4.92134 10.3875 5.66466C10.098 6.40799 9.96604 7.20335 10 8.00034V9.00034H7V13.0003H10V22.0003H14V13.0003H16L17 9.00034H14V8.00034C14 7.00034 14.26 6.00034 16 6.00034Z" {...props} fill={props.fill || "white"}/>
        </svg>

    )
}
export default Facebook;