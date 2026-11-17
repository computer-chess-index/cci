# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1677<sub>(+61) | 1889<sub>(+8) | 1955<sub>(+8) |  |
| 0.6.0 | 2025-11-11 | 1616 | 1881 | 1947 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1623<sub>(+27) | 1874<sub>(+127) | 1914<sub>(+10) |  |
| 0.6.0 | 2025-11-11 | 1596 | 1747 | 1904 |  |
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

Generated: 2026-11-17 05:37:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2000
  line "E1: STC (8.0+0.08s)" [1616, 1677]
  line "E1: LTC (60.0+0.60s)" [1881, 1889]
  line "E1: VLTC (2m24s+1.12s)" [1947, 1955]
  line "P1: STC (8.0+0.08s)" [1596, 1623]
  line "P1: LTC (60.0+0.60s)" [1747, 1874]
  line "P1: VLTC (2m24s+1.12s)" [1904, 1914]
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
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1955 | 34 | 311 | 51% | 1960 | 24% |
|  |  | T1 | 2028 | 24 | 644 | 48% | 2041 | 21% |
|  |  | P1 | 1914 | 40 | 232 | 47% | 1987 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1889 | 31 | 366 | 51% | 1901 | 23% |
|  |  | T1 | 1931 | 23 | 650 | 49% | 1935 | 22% |
|  |  | P1 | 1874 | 42 | 220 | 49% | 1901 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1677 | 32 | 358 | 50% | 1690 | 24% |
|  |  | T1 | 1702 | 22 | 762 | 50% | 1697 | 18% |
|  |  | P1 | 1623 | 38 | 252 | 50% | 1639 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1989 | 44 | 184 | 49% | 1998 | 21% |
|  |  | P1 | 1904 | 73 | 84 | 30% | 2199 | 19% |
|  |  | E1 | 1947 | 56 | 124 | 52% | 1909 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1866 | 50 | 146 | 50% | 1868 | 21% |
|  |  | P1 | 1747 | 66 | 84 | 40% | 1875 | 25% |
|  |  | E1 | 1881 | 56 | 122 | 44% | 1948 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1685 | 54 | 124 | 50% | 1683 | 18% |
|  |  | P1 | 1596 | 74 | 86 | 30% | 1887 | 12% |
|  |  | E1 | 1616 | 51 | 148 | 50% | 1596 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1895 | 49 | 148 | 49% | 1905 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1798 | 46 | 176 | 47% | 1833 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1586 | 49 | 156 | 47% | 1616 | 16% |