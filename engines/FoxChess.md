# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2475<sub>(+148) | 2789<sub>(+109) | 2924<sub>(+166) |  |
| 1.1 | 2026-04-18 | 2327 | 2680 | 2758 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2468<sub>(+153) | 2801<sub>(+114) | 2920<sub>(+202) |  |
| 1.1 | 2026-04-18 | 2315 | 2687 | 2718 |  |
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

Generated: 2026-11-28 05:38:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2327, 2475]
  line "E1: LTC (60.0+0.60s)" [2680, 2789]
  line "E1: VLTC (2m24s+1.12s)" [2758, 2924]
  line "P1: STC (8.0+0.08s)" [2315, 2468]
  line "P1: LTC (60.0+0.60s)" [2687, 2801]
  line "P1: VLTC (2m24s+1.12s)" [2718, 2920]
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
|  |  | P1 | 2920 | 34 | 282 | 53% | 2874 | 37% |
|  |  | E1 | 2924 | 28 | 416 | 49% | 2925 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 31 | 330 | 49% | 2850 | 35% |
|  |  | P1 | 2801 | 33 | 304 | 50% | 2803 | 37% |
|  |  | E1 | 2789 | 26 | 498 | 49% | 2784 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2542 | 30 | 364 | 51% | 2537 | 29% |
|  |  | P1 | 2468 | 35 | 276 | 49% | 2460 | 34% |
|  |  | E1 | 2475 | 28 | 446 | 49% | 2468 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2785 | 28 | 392 | 49% | 2790 | 36% |
|  |  | P1 | 2718 | 63 | 80 | 48% | 2754 | 39% |
|  |  | E1 | 2758 | 47 | 148 | 48% | 2780 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2687 | 52 | 120 | 48% | 2704 | 35% |
|  |  | E1 | 2680 | 43 | 192 | 47% | 2688 | 28% |
|  |  | T1 | 2716 | 28 | 418 | 50% | 2711 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2315 | 58 | 118 | 44% | 2406 | 19% |
|  |  | E1 | 2327 | 50 | 140 | 44% | 2391 | 25% |
|  |  | T1 | 2404 | 29 | 408 | 50% | 2400 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2657 | 28 | 396 | 49% | 2661 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2538 | 31 | 328 | 52% | 2520 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2323 | 27 | 480 | 50% | 2321 | 25% |