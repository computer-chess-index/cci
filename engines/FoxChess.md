# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2383 | 2758 | 2853 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2606 | 2982 | 3051 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-10 04:38:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2323, 2404, 2542]
  line "STC (8.0+0.08s)" [2323, 2404, 2542]
  line "LTC (60.0+0.60s)" [2538, 2716, 2839]
  line "" [2657, 2785, 2950]
  line "VLTC (2m24s+1.12s)" [2657, 2785, 2950]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2950 | 30 | 326 | 51% | 2942 | 48% |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3051 | 47 | 150 | 54% | 2975 | 38% |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 36 | 242 | 50% | 2850 | 36% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2839 | 31 | 330 | 49% | 2850 | 35% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 46 | 152 | 52% | 2958 | 39% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2758 | 40 | 214 | 54% | 2704 | 33% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2542 | 30 | 364 | 51% | 2537 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2606 | 47 | 148 | 47% | 2630 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2383 | 35 | 280 | 46% | 2421 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2785 | 28 | 392 | 49% | 2790 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2716 | 28 | 418 | 50% | 2711 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2404 | 29 | 408 | 50% | 2400 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2657 | 28 | 396 | 49% | 2661 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2538 | 31 | 328 | 52% | 2520 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2323 | 27 | 480 | 50% | 2321 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |