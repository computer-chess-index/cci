# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2502<sub>(+14) | 2859<sub>(+519) | 2970<sub>(+707) |  |
| 1.1 | 2026-04-18 | 2488 | 2340 | 2263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2589<sub>(-262) | 2940<sub>(+new) | 3050<sub>(+207) |  |
| 1.1 | 2026-04-18 | 2851 |  | 2843 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2542<sub>(+138) | 2839<sub>(+123) | 2950<sub>(+165) |  |
| 1.1 | 2026-04-18 | 2404<sub>(+81) | 2716<sub>(+178) | 2785<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2323 | 2538 | 2657 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:38:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.2"]
  y-axis "Elo Rating" 2200 --> 3100
  line "E1: STC (8.0+0.08s)" [2488, 2502]
  line "E1: LTC (60.0+0.60s)" [2340, 2859]
  line "E1: VLTC (2m24s+1.12s)" [2263, 2970]
  line "P1: STC (8.0+0.08s)" [2589]
  line "P1: LTC (60.0+0.60s)" [2940]
  line "P1: VLTC (2m24s+1.12s)" [3050]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "T1: STC (8.0+0.08s)" [2323, 2404, 2542]
  line "T1: LTC (60.0+0.60s)" [2538, 2716, 2839]
  line "T1: VLTC (2m24s+1.12s)" [2657, 2785, 2950]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2950 | 30 | 326 | 51% | 2942 | 48% |
|  |  | P1 | 3050 | 37 | 238 | 52% | 3001 | 37% |
|  |  | E1 | 2970 | 30 | 354 | 50% | 2969 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 31 | 330 | 49% | 2850 | 35% |
|  |  | P1 | 2940 | 35 | 268 | 49% | 2946 | 37% |
|  |  | E1 | 2859 | 29 | 398 | 52% | 2832 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2542 | 30 | 364 | 51% | 2537 | 29% |
|  |  | P1 | 2589 | 40 | 200 | 50% | 2588 | 36% |
|  |  | E1 | 2502 | 30 | 368 | 47% | 2520 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2263 | 229 | 8 | 0% | 2678 | 0% |
|  |  | T1 | 2785 | 28 | 392 | 49% | 2790 | 36% |
|  |  | P1 | 2843 | 208 | 4 | 50% | 2835 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2340 | 221 | 12 | 67% | 2120 | 0% |
|  |  | T1 | 2716 | 28 | 418 | 50% | 2711 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2404 | 29 | 408 | 50% | 2400 | 26% |
|  |  | P1 | 2851 | 225 | 8 | 50% | 2812 | 0% |
|  |  | E1 | 2488 | 163 | 12 | 42% | 2565 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2657 | 28 | 396 | 49% | 2661 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2538 | 31 | 328 | 52% | 2520 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2323 | 27 | 480 | 50% | 2321 | 25% |