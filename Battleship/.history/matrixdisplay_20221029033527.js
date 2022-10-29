const arrShips = [
    [  '0', '0', '0', '1',
        '1', '1', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ],
      [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0'
      ]
    ]
];

displayArray(arrShips);


function displayArray(arrToDisplay)
{

    console.log("    A    B    C    D    E");
    console.log("   ──────────────────────");
    for(let row=0;row<arrToDisplay.length;row++)   // walk through _every_ element of this array we are going to display....gives us TOTAL CONTROL
    {
        for(let col=0;col<arrToDisplay.length;col++)
        {
            if(col === 0)
            {
                const dispNum = arrToDisplay.length - row;
                process.stdout.write(dispNum.toString());
                process.stdout.write('│');
                process.stdout.write("  ");
            }
            else
            {
                process.stdout.write("    ");
            }
            process.stdout.write((arrToDisplay[row][col]).toString());
        }
        process.stdout.write('\n');

    }

}