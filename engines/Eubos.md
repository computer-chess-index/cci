# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2415<sub>(-570) | 2624<sub>(+101) | 2741<sub>(+181) |  |
| 4.4 | 2026-05-06 | 2985 | 2523 | 2560 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2481<sub>(+447) | 2535<sub>(-197) | 2685<sub>(+74) |  |
| 4.4 | 2026-05-06 | 2034 | 2732 | 2611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2329<sub>(+135) | 2650<sub>(+138) | 2718<sub>(+110) |  |
| 4.4 | 2026-05-06 | 2194<sub>(+87) | 2512<sub>(+52) | 2608<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2107<sub>(-58) | 2460<sub>(+33) | 2576<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2165 | 2427 | 2553 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eubos+<version>&body=###%20Engine%20name%0AEubos%0A%0A###%20Version%0A4.5" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:38:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 3000
  line "E1: STC (8.0+0.08s)" [2985, 2415]
  line "E1: LTC (60.0+0.60s)" [2523, 2624]
  line "E1: VLTC (2m24s+1.12s)" [2560, 2741]
  line "P1: STC (8.0+0.08s)" [2034, 2481]
  line "P1: LTC (60.0+0.60s)" [2732, 2535]
  line "P1: VLTC (2m24s+1.12s)" [2611, 2685]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2100 --> 2800
  line "T1: STC (8.0+0.08s)" [2165, 2107, 2194, 2329]
  line "T1: LTC (60.0+0.60s)" [2427, 2460, 2512, 2650]
  line "T1: VLTC (2m24s+1.12s)" [2553, 2576, 2608, 2718]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2718 | 29 | 378 | 50% | 2719 | 35% |
|  |  | P1 | 2685 | 35 | 296 | 56% | 2595 | 33% |
|  |  | E1 | 2741 | 29 | 406 | 48% | 2763 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2650 | 29 | 408 | 50% | 2654 | 27% |
|  |  | P1 | 2535 | 36 | 264 | 50% | 2537 | 26% |
|  |  | E1 | 2624 | 32 | 332 | 47% | 2651 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2481 | 59 | 98 | 47% | 2510 | 22% |
|  |  | E1 | 2415 | 41 | 230 | 57% | 2233 | 21% |
|  |  | T1 | 2329 | 29 | 428 | 48% | 2360 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2560 | 81 | 54 | 46% | 2612 | 30% |
|  |  | T1 | 2608 | 32 | 320 | 48% | 2627 | 30% |
|  |  | P1 | 2611 | 109 | 36 | 43% | 2754 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2512 | 32 | 334 | 49% | 2515 | 27% |
|  |  | P1 | 2732 | 150 | 18 | 36% | 2861 | 17% |
|  |  | E1 | 2523 | 96 | 44 | 52% | 2499 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 32 | 344 | 50% | 2188 | 23% |
|  |  | P1 | 2034 | 339 | 6 | 100% | 1478 | 0% |
|  |  | E1 | 2985 | 362 | 2 | 0% | 3289 | 0% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2576 | 30 | 388 | 50% | 2565 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2460 | 31 | 368 | 49% | 2465 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2107 | 28 | 452 | 50% | 2093 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2553 | 36 | 266 | 52% | 2535 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2427 | 35 | 272 | 50% | 2423 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 34 | 310 | 52% | 2138 | 22% |