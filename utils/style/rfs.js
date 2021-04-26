export default function rfs(prvVal) {
    let factor = 10;
    let base_value = 1.25;
    let rem_value = 16;
    let breakpoint = 1200;

    let value = prvVal.toString().match(/[^a-z]+/g);
    let unit = prvVal.toString().match(/[a-z]+/g);
    
    value  =  value / 16;

    // Calculate the minimum value
    let value_min = base_value + (Math.abs(value) - base_value) / factor;

    // Calculate difference between value and the minimum value
    let value_diff = Math.abs(value) - value_min;

    // Base value formatting
    let mwCalc = unit === 'rem' ? `${value_min / rem_value}` : `${value_min}`;

    // Use negative value if needed
    let min_width = value < 0 ? `-${mwCalc}rem` : `${mwCalc}rem`;

    // Calculate the variable width between 0 and breakpoint
    let var_width = `${((value_diff * 1000) / breakpoint).toFixed(2)}vw`;

    // Return the calculated value
    let val = `calc(${min_width} ${(value < 0 ? '-' : '+')} ${var_width})`;

    return val;
}