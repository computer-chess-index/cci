# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1759<sub>(-23) | 2064<sub>(-2) | 2159<sub>(-87) |  |
| 0.0.76 | 2026-01-05 | 1782 | 2066 | 2246 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1802<sub>(+25) | 2072<sub>(+33) | 2134<sub>(-46) |  |
| 0.0.76 | 2026-01-05 | 1777 | 2039 | 2180 |  |
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

Generated: 2026-11-17 05:38:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1700 --> 2300
  line "E1: STC (8.0+0.08s)" [1782, 1759]
  line "E1: LTC (60.0+0.60s)" [2066, 2064]
  line "E1: VLTC (2m24s+1.12s)" [2246, 2159]
  line "P1: STC (8.0+0.08s)" [1777, 1802]
  line "P1: LTC (60.0+0.60s)" [2039, 2072]
  line "P1: VLTC (2m24s+1.12s)" [2180, 2134]
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
|  |  | P1 | 2134 | 40 | 222 | 49% | 2156 | 28% |
|  |  | E1 | 2159 | 30 | 382 | 51% | 2155 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2072 | 42 | 212 | 42% | 2178 | 25% |
|  |  | E1 | 2064 | 28 | 444 | 52% | 2061 | 28% |
|  |  | T1 | 2145 | 25 | 536 | 49% | 2153 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1802 | 40 | 216 | 51% | 1806 | 25% |
|  |  | E1 | 1759 | 30 | 380 | 47% | 1794 | 29% |
|  |  | T1 | 1866 | 22 | 740 | 50% | 1856 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2218 | 52 | 132 | 48% | 2245 | 22% |
|  |  | P1 | 2180 | 73 | 68 | 46% | 2237 | 21% |
|  |  | E1 | 2246 | 54 | 118 | 44% | 2348 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2142 | 45 | 172 | 49% | 2152 | 23% |
|  |  | P1 | 2039 | 78 | 66 | 43% | 2122 | 26% |
|  |  | E1 | 2066 | 55 | 124 | 51% | 2083 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1920 | 49 | 140 | 48% | 1939 | 27% |
|  |  | P1 | 1777 | 62 | 98 | 42% | 1893 | 23% |
|  |  | E1 | 1782 | 50 | 140 | 44% | 1848 | 26% |