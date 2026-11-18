# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2462<sub>(+126) | 2805<sub>(+54) | 2925<sub>(+137) |  |
| 1.1 | 2026-04-18 | 2336 | 2751 | 2788 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2450<sub>(+183) | 2769<sub>(+114) | 2885<sub>(+204) |  |
| 1.1 | 2026-04-18 | 2267 | 2655 | 2681 |  |
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

Generated: 2026-11-18 05:38:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2336, 2462]
  line "E1: LTC (60.0+0.60s)" [2751, 2805]
  line "E1: VLTC (2m24s+1.12s)" [2788, 2925]
  line "P1: STC (8.0+0.08s)" [2267, 2450]
  line "P1: LTC (60.0+0.60s)" [2655, 2769]
  line "P1: VLTC (2m24s+1.12s)" [2681, 2885]
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
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2925 | 29 | 382 | 49% | 2927 | 38% |
|  |  | T1 | 2950 | 30 | 326 | 51% | 2942 | 48% |
|  |  | P1 | 2885 | 36 | 254 | 53% | 2836 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2805 | 28 | 418 | 50% | 2785 | 35% |
|  |  | T1 | 2839 | 31 | 330 | 49% | 2850 | 35% |
|  |  | P1 | 2769 | 34 | 280 | 49% | 2774 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2542 | 30 | 364 | 51% | 2537 | 29% |
|  |  | P1 | 2450 | 39 | 220 | 50% | 2434 | 35% |
|  |  | E1 | 2462 | 29 | 400 | 48% | 2464 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2785 | 28 | 392 | 49% | 2790 | 36% |
|  |  | P1 | 2681 | 69 | 68 | 48% | 2722 | 37% |
|  |  | E1 | 2788 | 55 | 108 | 50% | 2790 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2716 | 28 | 418 | 50% | 2711 | 34% |
|  |  | P1 | 2655 | 66 | 76 | 47% | 2689 | 36% |
|  |  | E1 | 2751 | 65 | 88 | 55% | 2657 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2404 | 29 | 408 | 50% | 2400 | 26% |
|  |  | P1 | 2267 | 76 | 74 | 37% | 2438 | 18% |
|  |  | E1 | 2336 | 60 | 104 | 43% | 2411 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2657 | 28 | 396 | 49% | 2661 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2538 | 31 | 328 | 52% | 2520 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2323 | 27 | 480 | 50% | 2321 | 25% |