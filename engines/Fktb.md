# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1797<sub>(-47) | 2102<sub>(+238) | 2187<sub>(-356) |  |
| 0.0.76 | 2026-01-05 | 1844 | 1864 | 2543 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1871<sub>(-536) | 2183<sub>(+new) | 2252<sub>(+4) |  |
| 0.0.76 | 2026-01-05 | 2407 |  | 2248 |  |
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

Generated: 2026-11-12 05:38:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1700 --> 2600
  line "E1: STC (8.0+0.08s)" [1844, 1797]
  line "E1: LTC (60.0+0.60s)" [1864, 2102]
  line "E1: VLTC (2m24s+1.12s)" [2543, 2187]
  line "P1: STC (8.0+0.08s)" [1871]
  line "P1: LTC (60.0+0.60s)" [2183]
  line "P1: VLTC (2m24s+1.12s)" [2252]
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
|  |  | P1 | 2252 | 43 | 188 | 48% | 2286 | 31% |
|  |  | E1 | 2187 | 31 | 358 | 51% | 2186 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2145 | 25 | 536 | 49% | 2153 | 29% |
|  |  | P1 | 2183 | 44 | 192 | 40% | 2334 | 27% |
|  |  | E1 | 2102 | 30 | 398 | 52% | 2099 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1866 | 22 | 740 | 50% | 1856 | 27% |
|  |  | P1 | 1871 | 43 | 188 | 51% | 1864 | 26% |
|  |  | E1 | 1797 | 30 | 368 | 46% | 1832 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2218 | 52 | 132 | 48% | 2245 | 22% |
|  |  | P1 | 2248 | 294 | 4 | 0% | 2614 | 0% |
|  |  | E1 | 2543 | 294 | 4 | 0% | 2911 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1864 | 174 | 16 | 9% | 2296 | 19% |
|  |  | T1 | 2142 | 45 | 172 | 49% | 2152 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2407 | 246 | 8 | 0% | 2851 | 0% |
|  |  | E1 | 1844 | 149 | 20 | 23% | 2121 | 15% |
|  |  | T1 | 1920 | 49 | 140 | 48% | 1939 | 27% |