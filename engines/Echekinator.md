# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2615<sub>(+378) | 2925<sub>(+400) | 2957<sub>(+366) |  |
| 1.2 | 2026-10-14 | 2237<sub>(+247) | 2525<sub>(+198) | 2591<sub>(+143) |  |
| 1.1 | 2026-09-30 | 1990<sub>(+243) | 2327<sub>(+307) | 2448<sub>(+399) |  |
| 1.0 | 2025-11-25 | 1747 | 2020 | 2049 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2626<sub>(+497) | 2884<sub>(+447) | 2959<sub>(+413) |  |
| 1.2 | 2026-10-14 | 2129<sub>(+375) | 2437<sub>(+528) | 2546<sub>(+512) |  |
| 1.0 | 2025-11-25 | 1754 | 1909 | 2034 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:37:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1747, 1990, 2237, 2615]
  line "E1: LTC (60.0+0.60s)" [2020, 2327, 2525, 2925]
  line "E1: VLTC (2m24s+1.12s)" [2049, 2448, 2591, 2957]
  line "P1: STC (8.0+0.08s)" [1754, 2129, 2626]
  line "P1: LTC (60.0+0.60s)" [1909, 2437, 2884]
  line "P1: VLTC (2m24s+1.12s)" [2034, 2546, 2959]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2959 | 37 | 210 | 49% | 2967 | 47% |
|  |  | E1 | 2957 | 31 | 312 | 52% | 2938 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2925 | 26 | 456 | 48% | 2940 | 42% |
|  |  | P1 | 2884 | 34 | 254 | 49% | 2877 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2615 | 30 | 372 | 53% | 2587 | 27% |
|  |  | P1 | 2626 | 43 | 192 | 55% | 2585 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2546 | 44 | 170 | 53% | 2516 | 35% |
|  |  | E1 | 2591 | 34 | 294 | 49% | 2597 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2437 | 42 | 204 | 52% | 2400 | 26% |
|  |  | E1 | 2525 | 33 | 326 | 51% | 2502 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2129 | 42 | 196 | 49% | 2137 | 22% |
|  |  | E1 | 2237 | 33 | 324 | 47% | 2275 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  |  | E1 | 2448 | 53 | 124 | 41% | 2542 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  |  | E1 | 2327 | 56 | 116 | 42% | 2411 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
|  |  | E1 | 1990 | 46 | 172 | 53% | 1967 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2034 | 51 | 156 | 54% | 1985 | 15% |
|  |  | E1 | 2049 | 42 | 208 | 45% | 2151 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1909 | 46 | 164 | 49% | 1931 | 25% |
|  |  | E1 | 2020 | 40 | 228 | 45% | 2098 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1754 | 40 | 216 | 50% | 1752 | 23% |
|  |  | E1 | 1747 | 42 | 204 | 50% | 1748 | 20% |