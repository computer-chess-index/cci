# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1397<sub>(+524) | 1739<sub>(+651) | 1854<sub>(+654) |  |
| 1.1.5 | 2026-05-25 | 873 | 1088 | 1200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1384<sub>(+716) | 1723<sub>(+717) | 1844<sub>(+745) |  |
| 1.1.5 | 2026-05-25 | 668 | 1006 | 1099 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1430<sub>(+713) | 1817<sub>(+759) | 1883<sub>(+799) |  |
| 1.1.5 | 2026-05-25 | 717<sub>(+22) | 1058<sub>(+396) | 1084<sub>(+385) |  |
| 1.1.4 | 2026-05-21 | 695<sub>(+19) | 662<sub>(-334) | 699<sub>(-296) |  |
| 1.1.2 | 2026-05-19 | 676<sub>(-22) | 996<sub>(+4) | 995<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 698 | 992 | 1135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-24 05:37:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "E1: STC (8.0+0.08s)" [873, 1397]
  line "E1: LTC (60.0+0.60s)" [1088, 1739]
  line "E1: VLTC (2m24s+1.12s)" [1200, 1854]
  line "P1: STC (8.0+0.08s)" [668, 1384]
  line "P1: LTC (60.0+0.60s)" [1006, 1723]
  line "P1: VLTC (2m24s+1.12s)" [1099, 1844]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "T1: STC (8.0+0.08s)" [698, 676, 695, 717, 1430]
  line "T1: LTC (60.0+0.60s)" [992, 996, 662, 1058, 1817]
  line "T1: VLTC (2m24s+1.12s)" [1135, 995, 699, 1084, 1883]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1883 | 33 | 290 | 55% | 1823 | 40% |
|  |  | P1 | 1844 | 36 | 264 | 46% | 1916 | 36% |
|  |  | E1 | 1854 | 30 | 384 | 48% | 1918 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1723 | 37 | 256 | 47% | 1762 | 32% |
|  |  | E1 | 1739 | 29 | 372 | 50% | 1760 | 40% |
|  |  | T1 | 1817 | 31 | 338 | 54% | 1766 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1384 | 36 | 256 | 50% | 1409 | 29% |
|  |  | E1 | 1397 | 29 | 396 | 51% | 1413 | 35% |
|  |  | T1 | 1430 | 31 | 360 | 54% | 1382 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1200 | 56 | 148 | 41% | 1440 | 9% |
|  |  | T1 | 1084 | 60 | 102 | 49% | 1099 | 17% |
|  |  | P1 | 1099 | 67 | 112 | 31% | 1481 | 11% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1058 | 59 | 104 | 57% | 987 | 20% |
|  |  | P1 | 1006 | 58 | 124 | 36% | 1261 | 19% |
|  |  | E1 | 1088 | 50 | 168 | 39% | 1288 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 717 | 77 | 50 | 49% | 730 | 42% |
|  |  | P1 | 668 | 84 | 80 | 29% | 1211 | 15% |
|  |  | E1 | 873 | 69 | 94 | 40% | 1103 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 699 | 39 | 244 | 52% | 667 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 662 | 41 | 218 | 53% | 614 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 695 | 42 | 234 | 52% | 645 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 995 | 53 | 120 | 53% | 973 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 996 | 57 | 104 | 53% | 969 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 676 | 90 | 44 | 55% | 635 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1135 | 31 | 412 | 49% | 1127 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 992 | 36 | 328 | 48% | 996 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 698 | 42 | 248 | 45% | 736 | 23% |