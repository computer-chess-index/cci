# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2249<sub>(+19) | 2707<sub>(+73) | 2827<sub>(+59) |  |
| 5.1 | 2026-08-21 | 2230 | 2634 | 2768 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2249<sub>(-3) | 2720<sub>(+105) | 2789<sub>(+120) |  |
| 5.1 | 2026-08-21 | 2252 | 2615 | 2669 |  |
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

Generated: 2026-11-22 05:37:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2230, 2249]
  line "E1: LTC (60.0+0.60s)" [2634, 2707]
  line "E1: VLTC (2m24s+1.12s)" [2768, 2827]
  line "P1: STC (8.0+0.08s)" [2252, 2249]
  line "P1: LTC (60.0+0.60s)" [2615, 2720]
  line "P1: VLTC (2m24s+1.12s)" [2669, 2789]
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
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2789 | 40 | 190 | 51% | 2789 | 39% |
|  |  | E1 | 2827 | 30 | 364 | 49% | 2815 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2720 | 38 | 228 | 48% | 2747 | 33% |
|  |  | E1 | 2707 | 30 | 360 | 49% | 2716 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2249 | 41 | 188 | 51% | 2236 | 34% |
|  |  | E1 | 2249 | 33 | 310 | 50% | 2242 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2669 | 35 | 278 | 48% | 2697 | 32% |
|  |  | E1 | 2768 | 29 | 404 | 47% | 2805 | 29% |
|  |  | T1 | 2747 | 31 | 322 | 51% | 2736 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2615 | 35 | 280 | 44% | 2672 | 27% |
|  |  | E1 | 2634 | 31 | 342 | 46% | 2672 | 33% |
|  |  | T1 | 2651 | 31 | 338 | 52% | 2631 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2252 | 37 | 250 | 48% | 2277 | 25% |
|  |  | E1 | 2230 | 34 | 292 | 48% | 2236 | 27% |
|  |  | T1 | 2314 | 37 | 236 | 50% | 2310 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2647 | 34 | 298 | 48% | 2668 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2514 | 37 | 246 | 50% | 2480 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2244 | 32 | 336 | 50% | 2229 | 28% |