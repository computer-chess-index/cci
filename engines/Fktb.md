# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1746<sub>(-28) | 2056<sub>(-3) | 2152<sub>(-88) |  |
| 0.0.76 | 2026-01-05 | 1774 | 2059 | 2240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1813<sub>(+27) | 2078<sub>(+14) | 2145<sub>(-43) |  |
| 0.0.76 | 2026-01-05 | 1786 | 2064 | 2188 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1866<sub>(-54) | 2145<sub>(+3) | 2241<sub>(+23) |  |
| 0.0.76 | 2026-01-05 | 1920 | 2142 | 2218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:38:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1700 --> 2300
  line "E1: STC (8.0+0.08s)" [1774, 1746]
  line "E1: LTC (60.0+0.60s)" [2059, 2056]
  line "E1: VLTC (2m24s+1.12s)" [2240, 2152]
  line "P1: STC (8.0+0.08s)" [1786, 1813]
  line "P1: LTC (60.0+0.60s)" [2064, 2078]
  line "P1: VLTC (2m24s+1.12s)" [2188, 2145]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "T1: STC (8.0+0.08s)" [1920, 1866]
  line "T1: LTC (60.0+0.60s)" [2142, 2145]
  line "T1: VLTC (2m24s+1.12s)" [2218, 2241]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2241 | 24 | 580 | 52% | 2221 | 31% |
|  |  | P1 | 2145 | 39 | 226 | 49% | 2165 | 29% |
|  |  | E1 | 2152 | 30 | 398 | 51% | 2148 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2145 | 25 | 536 | 49% | 2153 | 29% |
|  |  | P1 | 2078 | 39 | 240 | 43% | 2175 | 27% |
|  |  | E1 | 2056 | 28 | 456 | 52% | 2055 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1813 | 40 | 216 | 51% | 1817 | 25% |
|  |  | E1 | 1746 | 29 | 392 | 46% | 1783 | 29% |
|  |  | T1 | 1866 | 22 | 740 | 50% | 1856 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2240 | 54 | 118 | 44% | 2342 | 29% |
|  |  | T1 | 2218 | 52 | 132 | 48% | 2245 | 22% |
|  |  | P1 | 2188 | 68 | 76 | 46% | 2237 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2142 | 45 | 172 | 49% | 2152 | 23% |
|  |  | P1 | 2064 | 63 | 92 | 46% | 2140 | 30% |
|  |  | E1 | 2059 | 55 | 124 | 51% | 2075 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1920 | 49 | 140 | 48% | 1939 | 27% |
|  |  | P1 | 1786 | 57 | 110 | 43% | 1891 | 26% |
|  |  | E1 | 1774 | 50 | 140 | 44% | 1840 | 26% |