# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1705<sub>(-12) | 1931<sub>(-157) | 1987<sub>(-374) |  |
| 0.6.0 | 2025-11-11 | 1717 | 2088 | 2361 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1681<sub>(+new) | 1962<sub>(-662) | 2018<sub>(-469) |  |
| 0.6.0 | 2025-11-11 |  | 2624 | 2487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1702<sub>(+17) | 1931<sub>(+65) | 2028<sub>(+39) |  |
| 0.6.0 | 2025-11-11 | 1685<sub>(+99) | 1866<sub>(+68) | 1989<sub>(+94) |  |
| 0.5.0 | 2025-11-03 | 1586 | 1798 | 1895 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:36:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1600 --> 2400
  line "E1: STC (8.0+0.08s)" [1717, 1705]
  line "E1: LTC (60.0+0.60s)" [2088, 1931]
  line "E1: VLTC (2m24s+1.12s)" [2361, 1987]
  line "P1: STC (8.0+0.08s)" [1681]
  line "P1: LTC (60.0+0.60s)" [1962]
  line "P1: VLTC (2m24s+1.12s)" [2018]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "T1: STC (8.0+0.08s)" [1586, 1685, 1702]
  line "T1: LTC (60.0+0.60s)" [1798, 1866, 1931]
  line "T1: VLTC (2m24s+1.12s)" [1895, 1989, 2028]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2028 | 24 | 644 | 48% | 2041 | 21% |
|  |  | P1 | 2018 | 41 | 212 | 47% | 2101 | 23% |
|  |  | E1 | 1987 | 36 | 281 | 51% | 1998 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1931 | 23 | 650 | 49% | 1935 | 22% |
|  |  | P1 | 1962 | 43 | 202 | 47% | 2020 | 19% |
|  |  | E1 | 1931 | 33 | 334 | 51% | 1941 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 22 | 762 | 50% | 1697 | 18% |
|  |  | P1 | 1681 | 40 | 230 | 50% | 1704 | 18% |
|  |  | E1 | 1705 | 32 | 344 | 49% | 1739 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1989 | 44 | 184 | 49% | 1998 | 21% |
|  |  | P1 | 2487 | 209 | 8 | 6% | 2838 | 13% |
|  |  | E1 | 2361 | 282 | 4 | 0% | 2707 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2624 | 234 | 4 | 38% | 2704 | 25% |
|  |  | E1 | 2088 | 294 | 4 | 0% | 2454 | 0% |
|  |  | T1 | 1866 | 50 | 146 | 50% | 1868 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1717 | 151 | 24 | 83% | 1227 | 17% |
|  |  | T1 | 1685 | 54 | 124 | 50% | 1683 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1895 | 49 | 148 | 49% | 1905 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1798 | 46 | 176 | 47% | 1833 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1586 | 49 | 156 | 47% | 1616 | 16% |