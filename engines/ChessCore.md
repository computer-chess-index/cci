# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1416<sub>(+529) | 1748<sub>(+632) | 1859<sub>(+633) |  |
| 1.1.5 | 2026-05-25 | 887 | 1116 | 1226 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1391<sub>(+720) | 1715<sub>(+677) | 1840<sub>(+644) |  |
| 1.1.5 | 2026-05-25 | 671 | 1038 | 1196 |  |
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

Generated: 2026-11-15 05:37:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "E1: STC (8.0+0.08s)" [887, 1416]
  line "E1: LTC (60.0+0.60s)" [1116, 1748]
  line "E1: VLTC (2m24s+1.12s)" [1226, 1859]
  line "P1: STC (8.0+0.08s)" [671, 1391]
  line "P1: LTC (60.0+0.60s)" [1038, 1715]
  line "P1: VLTC (2m24s+1.12s)" [1196, 1840]
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
|  |  | P1 | 1840 | 37 | 240 | 47% | 1902 | 35% |
|  |  | E1 | 1859 | 30 | 372 | 48% | 1926 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1817 | 31 | 338 | 54% | 1766 | 36% |
|  |  | P1 | 1715 | 39 | 228 | 48% | 1750 | 31% |
|  |  | E1 | 1748 | 30 | 344 | 49% | 1774 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1430 | 31 | 360 | 54% | 1382 | 30% |
|  |  | P1 | 1391 | 38 | 236 | 50% | 1415 | 30% |
|  |  | E1 | 1416 | 29 | 388 | 51% | 1432 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1196 | 86 | 78 | 29% | 1627 | 5% |
|  |  | E1 | 1226 | 71 | 104 | 37% | 1558 | 7% |
|  |  | T1 | 1084 | 60 | 102 | 49% | 1099 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1116 | 54 | 148 | 39% | 1326 | 14% |
|  |  | T1 | 1058 | 59 | 104 | 57% | 987 | 20% |
|  |  | P1 | 1038 | 68 | 92 | 34% | 1335 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 887 | 69 | 94 | 40% | 1116 | 17% |
|  |  | T1 | 717 | 77 | 50 | 49% | 730 | 42% |
|  |  | P1 | 671 | 84 | 80 | 29% | 1202 | 15% |
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