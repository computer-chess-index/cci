# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2468<sub>(+128) | 2808<sub>(+54) | 2927<sub>(+135) |  |
| 1.1 | 2026-04-18 | 2340 | 2754 | 2792 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2452<sub>(+164) | 2774<sub>(+108) | 2888<sub>(+203) |  |
| 1.1 | 2026-04-18 | 2288 | 2666 | 2685 |  |
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

Generated: 2026-11-20 05:38:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2340, 2468]
  line "E1: LTC (60.0+0.60s)" [2754, 2808]
  line "E1: VLTC (2m24s+1.12s)" [2792, 2927]
  line "P1: STC (8.0+0.08s)" [2288, 2452]
  line "P1: LTC (60.0+0.60s)" [2666, 2774]
  line "P1: VLTC (2m24s+1.12s)" [2685, 2888]
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
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2888 | 35 | 266 | 52% | 2844 | 35% |
|  |  | E1 | 2927 | 28 | 390 | 49% | 2931 | 38% |
|  |  | T1 | 2950 | 30 | 326 | 51% | 2942 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2774 | 34 | 280 | 49% | 2780 | 37% |
|  |  | E1 | 2808 | 28 | 422 | 50% | 2789 | 35% |
|  |  | T1 | 2839 | 31 | 330 | 49% | 2850 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2468 | 29 | 412 | 48% | 2468 | 28% |
|  |  | T1 | 2542 | 30 | 364 | 51% | 2537 | 29% |
|  |  | P1 | 2452 | 38 | 236 | 49% | 2441 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2785 | 28 | 392 | 49% | 2790 | 36% |
|  |  | P1 | 2685 | 64 | 76 | 47% | 2726 | 39% |
|  |  | E1 | 2792 | 55 | 108 | 50% | 2795 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2716 | 28 | 418 | 50% | 2711 | 34% |
|  |  | P1 | 2666 | 64 | 80 | 47% | 2699 | 36% |
|  |  | E1 | 2754 | 65 | 88 | 55% | 2661 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2404 | 29 | 408 | 50% | 2400 | 26% |
|  |  | P1 | 2288 | 70 | 82 | 40% | 2429 | 21% |
|  |  | E1 | 2340 | 60 | 104 | 43% | 2415 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2657 | 28 | 396 | 49% | 2661 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2538 | 31 | 328 | 52% | 2520 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2323 | 27 | 480 | 50% | 2321 | 25% |