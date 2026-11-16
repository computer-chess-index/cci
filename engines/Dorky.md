# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2250<sub>(+20) | 2703<sub>(+66) | 2839<sub>(+66) |  |
| 5.1 | 2026-08-21 | 2230 | 2637 | 2773 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2228<sub>(-2) | 2704<sub>(+111) | 2763<sub>(+113) |  |
| 5.1 | 2026-08-21 | 2230 | 2593 | 2650 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2314<sub>(+70) | 2651<sub>(+137) | 2747<sub>(+100) |  |
| 5.0 | 2026-08-08 | 2244 | 2514 | 2647 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:37:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2230, 2250]
  line "E1: LTC (60.0+0.60s)" [2637, 2703]
  line "E1: VLTC (2m24s+1.12s)" [2773, 2839]
  line "P1: STC (8.0+0.08s)" [2230, 2228]
  line "P1: LTC (60.0+0.60s)" [2593, 2704]
  line "P1: VLTC (2m24s+1.12s)" [2650, 2763]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "T1: STC (8.0+0.08s)" [2244, 2314]
  line "T1: LTC (60.0+0.60s)" [2514, 2651]
  line "T1: VLTC (2m24s+1.12s)" [2647, 2747]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2763 | 41 | 178 | 50% | 2765 | 40% |
|  |  | E1 | 2839 | 31 | 328 | 50% | 2816 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2704 | 38 | 220 | 49% | 2728 | 34% |
|  |  | E1 | 2703 | 31 | 340 | 48% | 2719 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2228 | 43 | 168 | 51% | 2223 | 37% |
|  |  | E1 | 2250 | 34 | 294 | 50% | 2245 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2773 | 29 | 396 | 48% | 2808 | 30% |
|  |  | T1 | 2747 | 31 | 322 | 51% | 2736 | 37% |
|  |  | P1 | 2650 | 35 | 270 | 48% | 2677 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2637 | 31 | 338 | 46% | 2672 | 33% |
|  |  | T1 | 2651 | 31 | 338 | 52% | 2631 | 30% |
|  |  | P1 | 2593 | 35 | 280 | 44% | 2650 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2314 | 37 | 236 | 50% | 2310 | 34% |
|  |  | P1 | 2230 | 39 | 230 | 48% | 2260 | 25% |
|  |  | E1 | 2230 | 35 | 284 | 48% | 2238 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2647 | 34 | 298 | 48% | 2668 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2514 | 37 | 246 | 50% | 2480 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2244 | 32 | 336 | 50% | 2229 | 28% |