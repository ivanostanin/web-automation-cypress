# Edge Cases

| Test ID | Test Case                            | Expected Result                             | Priority  | Notes                                                                                                 |
|---------|--------------------------------------|---------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------|
| TC001   | Initial counter should display 0     | Counter shows "0"                           | Critical  | Contradicts "positive only" requirement. Assuming that this requirement is changed to "non-negative". |
| TC002   | Should increment counter by 1 from 0 | Counter displays 1                          | Critical  |                                                                                                       |
| TC003   | Rapid increment clicking             | Counter increments correctly for each click | Medium    | Test for race conditions                                                                              |
| TC004   | Click decrement from 0               | Should stay at 0 or minimum positive        | Critical  | **BUG**: Counter shows -1 (violates requirement)                                                      |
| TC005   | Click decrement from 1               | Counter displays 0 OR maintains 1           | High      | Requirement unclear. Assuming should be 0.                                                            |
| TC006   | Click decrement from 2               | Counter displays 1                          | High      |                                                                                                       |
| TC007   | Rapid decrement clicking             | Counter decrements correctly for each click | Medium    |                                                                                                       |
| TC008   | Increment to maximum safe integer    | Counter handles large numbers               | Low       | JavaScript: 2^53 - 1                                                                                  |
| TC009   | Decrement then increment from 0      | Counter updates correctly                   | Medium    | Expecting 1, not 0                                                                                    |
| TC010   | Chrome compatibility                 | App functions correctly                     | High      |                                                                                                       |
| TC011   | Firefox compatibility                | App functions correctly                     | High      |                                                                                                       |
| TC012   | Safari compatibility                 | App functions correctly                     | Medium    |                                                                                                       |
| TC013   | Edge compatibility                   | App functions correctly                     | Medium    |                                                                                                       |
| TC014   | Disable JavaScript                   | App shows graceful degradation message      | Low       |                                                                                                       |
| TC015   | Modify DOM counter value manually    | App handles unexpected values               | Low       | Developer tools manipulation                                                                          |
| TC016   | Network interruption during use      | App continues to function                   | Low       |                                                                                                       |
